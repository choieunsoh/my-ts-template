import { mock } from 'jest-mock-extended';

type User = {
  id: string;
  name: string;
  profile: {
    age: number;
    phone: string;
    address: string;
    zip: string;
    state: string;
  };
};

function helloUser(user: User) {
  return `hello ${user.name}`;
}

describe('user Tests', () => {
  it('should hello name', () => {
    const user = mock<User>({
      name: 'John Doe',
    });

    const res = helloUser(user);

    expect(res).toBe('hello John Doe');
  });
});

type PartyProvider = {
  getPartyType: () => string;
  getSongs: (type: string) => string[];
  start: (type: string) => void;
};

describe('party Tests', () => {
  it('mock out an interface', () => {
    const mockPartyProvider = mock<PartyProvider>();
    mockPartyProvider.start('disco party');

    expect(mockPartyProvider.start).toHaveBeenCalledWith('disco party');
  });

  it('mock out a return type', () => {
    const mockPartyProvider = mock<PartyProvider>();
    mockPartyProvider.getPartyType.mockReturnValue('west coast party');

    expect(mockPartyProvider.getPartyType()).toBe('west coast party');
  });

  it('throwing an error if we forget to specify the return value', () => {
    const mockPartyProvider = mock<PartyProvider>(
      {},
      {
        fallbackMockImplementation: () => {
          throw new Error('not mocked');
        },
      },
    );

    expect(() => mockPartyProvider.getPartyType()).toThrowError('not mocked');
  });
});

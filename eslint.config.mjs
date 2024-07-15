import antfu from '@antfu/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import securityPlugin from 'eslint-plugin-security';

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
});

const configs = antfu(
  {
    name: 'antfu/eslint/ignores',
    regexp: false,

    ignores: [
      'node_modules',
      '**/node_modules/**',
      'build',
      '**/build/**',
      'dist',
      '**/dist/**',
      '.git',
      '**/.git/**',
      'public',
      '**/public/**',
      'out',
      '**/out/**',
      'yarn.lock',
      '**/yarn.lock/**',
      'package-lock.json',
      '**/package-lock.json/**',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml/**',
    ],

    // Legacy config
    ...compat.config({
      extends: ['plugin:security/recommended-legacy', 'plugin:prettier/recommended'],
      plugins: ['prettier'],
      env: {
        node: true,
      },
    }),
  },
  {
    ...securityPlugin.configs.recommended,
    rules: {
      'security/detect-object-injection': 'off',
    },
  },
  {
    // Other flat config
    name: 'kiattipong/eslint-config',
    rules: {
      'no-console': 'warn',

      'style/semi': 'off',
      'style/brace-style': ['error', '1tbs'],
      'style/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
          multilineDetection: 'brackets',
        },
      ],

      'ts/array-type': ['error', { default: 'array', readonly: 'array' }],
      'ts/consistent-type-definitions': ['error', 'type'],
    },
  },
  {
    name: 'kiattipong/json',
    files: ['**/*.json'],
    rules: {
      'style/eol-last': 'off',
    },
  },
);

export default configs;

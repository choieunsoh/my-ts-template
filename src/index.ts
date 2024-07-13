import app from './app';
import config from './config';

const consoleLog = console;

const PORT = config.PORT;

try {
  app.listen(PORT, () => {
    consoleLog.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error('Failed to start server', error);
}

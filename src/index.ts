import app from './app';
import config from './config';

const PORT = config.PORT;

try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error('Failed to start server', error);
}

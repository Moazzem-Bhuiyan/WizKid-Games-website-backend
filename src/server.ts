import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { defaultTask } from './app/utils/defaultTask';
import colors from 'colors';

let server: Server;
let currentPort: number = Number(config.port) | 5000;

async function main() {
  try {
    console.log('🚀 ~ main ~ database_url:', config.database_url);
    await mongoose.connect(config.database_url as string);
    defaultTask();
    server = app.listen(Number(currentPort), () => {
      console.log(
        colors.italic.green.bold(
          `💫 Simple Server Listening on  http://localhost:${currentPort} `,
        ),
      );
    });
  } catch (err) {
    console.error(err);
  }
}
main();

process.on('unhandledRejection', err => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});

import express, { json } from 'express';
import controller from './controller';

class MyApp {
  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
  }

  configureMiddleware() {
    this.app.use(json());
  }

  configureRoutes() {
    this.app.use('/api', controller);
  }

  startServer() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Running on ${process.env.PORT}`);
    });
  }
}

const myApp = new MyApp();
myApp.startServer();

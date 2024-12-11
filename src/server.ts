import express from "express";
import bodyParser from "body-parser";
import nunjucks from 'nunjucks';

import { njkConfig } from "./config/njk";
import { noteRoutes } from "./interface/routes/noteRoutes";

class Server {
  app = express();
  port = process.env.PORT || 3000;

  applyMiddleware() {
    njkConfig(this.app)
    this.app.set("view engine", "njk");
    this.app.use(bodyParser.json())
    this.app.use('/api', noteRoutes)

    this.app.use('/', (req, res) => {
      res.send(nunjucks.render('index.njk'));
    });
    this.app.use('/dashboard', (req, res) => {
      res.send(nunjucks.render('dashboard.njk'));
    });
  }

  start() {
    this.applyMiddleware()

    this.app.listen(this.port, async () => {
      console.log(`server started: http://localhost:${this.port}`);
    })
  }
}

export const server = new Server()

import { Request, Response } from 'express';
import express from 'express';
import nunjucks from 'nunjucks';

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.render("index", { authError: null });
});

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});



import { createServer } from "http";
import * as mongodb from "mongo-mock";
import * as next from "next";
import { unmock } from "unmock";
import { parse } from "url";
import { postEmailToSendgrid } from "./util";

const MongoClient = mongodb.MongoClient;

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(async () => await unmock({ ignore: "story", token: process.env.UNMOCK_TOKEN }))
.then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/porterduff") {
      const url = "mongodb://localhost:27017/myproject";
      const db = await MongoClient.connect(url);
      const collection = db.collection("users");
      const { email } = query;
      const findResult = await collection.find({ email });
      const findArray = await findResult.toArray();
      if (findArray.length === 0) {
        collection.insert({ email });
        await postEmailToSendgrid(email);
      }
      app.render(req, res, "/porterduff");
    } else {
      handle(req, res, parsedUrl);
    }
  })
  .listen(port, (err) => {
    if (err) { throw err; }
  });
});

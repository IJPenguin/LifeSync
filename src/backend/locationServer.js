const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json

app.post("/location", (req, res) => {
  console.log(req.body);
  res.send("Location received!");
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});

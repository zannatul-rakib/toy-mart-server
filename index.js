const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// middleWare

app.get("/", (req, res) => {
  res.send("toy mart is running");
});

app.listen(port, () => {
  console.log(`toy mart is running on port ${port}`);
});

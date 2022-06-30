const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./router/api");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api", routes);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

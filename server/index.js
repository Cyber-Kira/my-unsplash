const express = require("express");
const cors = require("cors");
const app = express();

// default options
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is listening on port ${port}.`));

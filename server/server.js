const express = require ('express');
const app = express();
const cors = require ('cors');

//..dotenv
require ('dotenv').config();
const port = process.env.PORT || 2021;

//....allow cors
app.use(cors());

app.listen(port, () => console.log(`listening on port ${port}`));
const express = require ('express');
const app = express();
const cors = require ('cors');
const noteRoutes = require('./routes/noteRoutes');

//..dotenv
require ('dotenv').config();
const port = process.env.PORT || 8080;

//....allow cors
app.use(cors());

app.use('/notes', noteRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));
/* import packages */
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const router = require('./router');

/* Database */
require('./database/index');

/* App Config */

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/v1', router);

app.listen(port, () => {
  console.log(`[🚀 Server] App listening on port ${port}!`);
});

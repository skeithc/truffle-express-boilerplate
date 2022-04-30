const express = require('express');
const cors = require('cors');
const config = require('./config');
const logger = require('./helpers/logger');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(config.APP.PORT, () => {
  logger.info(`Server is running on ${config.APP.PORT}`);
});

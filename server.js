const express = require('express');
const cors = require('cors');
const config = require('./config');
const logger = require('./helpers/logger');
const { version } = require('./package.json');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', version });
});

app.listen(config.APP.PORT, () => {
  logger.info(`Server is running on ${config.APP.PORT}`);
});

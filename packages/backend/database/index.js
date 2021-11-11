const mongoose = require('mongoose');

const connectionUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xootc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

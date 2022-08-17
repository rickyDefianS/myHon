const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://dummyRDS:${process.env.MONGO_PASS}@cluster0.bcjre.mongodb.net/myHon`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

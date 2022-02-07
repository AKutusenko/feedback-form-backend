const express = require("express");
const feedbackRouter = require("./routes/feedbackRouter");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api", feedbackRouter);

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});

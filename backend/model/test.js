import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  question: {
    type: String,
  },
  drop: {
    type: String,
  },
  check: {
    type: String,
  },
});

// eslint-disable-next-line no-undef
const test = mongoose.model("Test", testSchema);

export default test;

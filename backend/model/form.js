import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
  },
  fields: {
    type: Array,
  },
  submissions: {
    type: Array,
  },
});
// eslint-disable-next-line no-undef
module.exports = mongoose.model("Form", formSchema);

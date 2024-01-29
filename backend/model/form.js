import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  fields: {
    type: Array,
  },
});
// eslint-disable-next-line no-undef
const form = mongoose.model("Form", formSchema);

export default form;

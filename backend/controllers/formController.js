import formModel from "../model/form.js";
import Test from "../model/test.js";

const forms = [
  { name: "Vishnu", age: 27 },
  { name: "Athira", age: 27 },
];
const formController = {
  getForm: (req, res) => {
    res.send("form Backend");
    console.log(formModel);
  },
  getForms: (req, res) => {
    res.status(200).json(forms);
  },
  saveForm: async (req, res) => {
    try {
      console.log(req.body);
      const body = req.body;
      const name = body.name;
      const form = new Test({
        title: name,
      });
      const formData = await form.save();
      return res.status(200).json({ message: "form saved", body: formData });
    } catch (err) {
      return res.status(404).json({ message: err });
    }
  },
};
export default formController;

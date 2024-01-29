import formModel from "../model/form.js";
import Test from "../model/test.js";

const forms = [
  { name: "Vishnu", age: 27 },
  { name: "Athira", age: 27 },
];
const formController = {
  getForm: (req, res) => {
    res.send("form Backend");
  },
  getForms: (req, res) => {
    res.status(200).json(forms);
  },

  getTitle: async (req, res) => {
    let existingForm = await Test.findOne({});
    const data = existingForm
    res.status(200).json(data);
  },
  saveForm: async (req, res) => {
    try {
      const body = req.body;

      // console.log(body);
      const name = body.data.TitleNew;
      const description = body.data.description;
      let existingForm = await Test.findOne({});
      // console.log(description);
      if (existingForm) {
        existingForm.title = name;
        existingForm.description = description;
        await existingForm.save();
      } else {
        const form = new Test({
          title: name,
        });
        existingForm = await form.save();
      }

      return res
        .status(200)
        .json({ message: "form saved", body: existingForm });
    } catch (err) {
      return res.status(404).json({ message: err });
    }
  },
};

export default formController;

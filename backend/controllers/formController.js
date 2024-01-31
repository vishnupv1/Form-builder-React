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
    const data = existingForm;
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
  saveFormData: async (req, res) => {
    try {
      console.log(req.body);

      const existingData = await Test.findOne({});
      const { question, checkOption, dropOption } = req.body;

      console.log(existingData);
      if (existingData) {
        const updatedData = await Test.updateOne(
          {},
          {
            $set: {
              question: req.body.data.question,
              check: req.body.data.checkOption,
            },
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  },
  getquestion: async (req, res) => {
    let existingForm = await Test.findOne({});
    const data = existingForm;
    res.status(200).json(data);
  },





  saveOptions: async (req, res) => {
    try {
      const formData = req.body;
      let existingForm = await Test.findOne({});

      if (existingForm) {
        if (formData.checkOption) {
          const updateQuery = {
            $push: {
              "dropBox.0.options": formData.checkOption,
            },
            $set: {
              "dropBox.0.head": formData.question,
            },
          };
          const updatedData = await Test.updateOne({}, { updateQuery });
        } else {
          const updateQuery = {
            $push: {
              "dropBox.0.options": formData.dropOption,
            },
            $set: {
              "dropBox.0.head": formData.question,
            },
          };
          const updatedData = await Test.updateOne({}, { updateQuery });
        }
      }
      return res.status(200).json({ message: "Form updated" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },



  
};

export default formController;

import formModel from "../model/form.js";

const forms = [{name:"Vishnu",age:27},{name:"Athira",age:27}]
const formController = {
  getForm: (req, res) => {
    res.send("form Backend");
    console.log(formModel);
  },
  getForms: (req, res) => {
    res.status(200).json(forms);
  },
};
export default formController;

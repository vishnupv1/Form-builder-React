import formModel from "../model/form.js";

const formController = {
  getForm: (req, res) => {
    res.send("form Backend");
    console.log(formModel);
  },
};
export default formController;

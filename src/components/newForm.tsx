import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
// import { formApi } from "../axiosApi/axiosApi.js";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import TextFieldsIcon from "@mui/icons-material/TextFields";

import { useAutosave } from "react-autosave";
import axios from "axios";

const width = "w-full";

const autosaveForm = (data) =>
  axios.post(`http://localhost:5000/saveFormData`, {
    data: data,
  });

interface NewFormProps {
  datas: any; // Adjust the type as needed
}
const NewForm: React.FC<NewFormProps> = ({ datas }) => {
  const [field, setField] = useState<JSX.Element[]>([]);
  // const checkOption = "Option 1"; //here i want to add the useState to change the option name dynamically
  // const dropOption = "Option 1"; //here i want to add the useState to change the option name dynamically
  const [dropOption, setDropOption] = useState();
  const [checkOption, setCheckOption] = useState();
  const [textOption, setTextOption] = useState();
  const [question, setQuestion] = useState("Question");
  const [item, setItem] = useState("");
  console.log(datas);

  const newFormDetails = { question, dropOption, checkOption, textOption };
  useAutosave({ data: newFormDetails, onSave: autosaveForm });

  const addDropdownField = () => {
    setField([
      <div className="flex">
        <ArrowDropDownCircleOutlinedIcon />
        <TextField
          id={`text-field-0`}
          value={dropOption}
          placeholder="Your Option"
          variant="standard"
          className={width}
          key={"dropBox"}
          onChange={(e) => setDropOption(e.target.value)}
        />
      </div>,
    ]);
  };
  const addCheckField = () => {
    setField([
      <div className="flex">
        <CheckBoxOutlineBlankIcon />
        <TextField
          id={`text-field-0`}
          // placeholder={checkOption}
          variant="standard"
          value={checkOption}
          placeholder="Your Option"
          className={width}
          key={"checkBox"}
          onChange={(e) => setCheckOption(e.target.value)}
        />
      </div>,
    ]);
  };
  const addTextield = () => {
    setField([
      <div className="flex">
        <TextField
          id={`text-field-0`}
          // placeholder={checkOption}
          variant="standard"
          value={textOption}
          placeholder="Your Option"
          className={width}
          key={"textBox"}
          onChange={(e) => setTextOption(e.target.value)}
        />
      </div>,
    ]);
  };

  <TextField id="standard-basic" label="Standard" variant="standard" />;

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
    setField([]);
    // setShowField(true);

    // Check if the selected option is "DropDown" and add a new TextField
    if (String(event.target.value) === "10") {
      addDropdownField();
    }
    if (String(event.target.value) === "30") {
      addCheckField();
    }
    if (String(event.target.value) === "40") {
      addTextield();
    }
  };

  return (
    <>
      <div className=" bg-red-500 border-l-4 border-t-8 border-purple-800 border-l-blue-500 bg-white rounded-lg p-2">
        <div className="m-2 mb-4">
          <div className="w-full flex">
            <TextField
              id="filled-basic"
              label="Question"
              value={question}
              variant="filled"
              className="w-2/3 m-1"
              onChange={(e) => setQuestion(e.target.value)}
            />

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={item}
              label="Age"
              onChange={handleChange}
              className="w-1/3 ml-1"
            >
              <MenuItem value={10}>
                <ArrowDropDownCircleIcon />
                DropDown
              </MenuItem>
              <MenuItem value={30}>
                {/* {" "} */}
                <CheckBoxIcon />
                Checkbox
              </MenuItem>
              <MenuItem value={40}>
                {/* {" "} */}
                <TextFieldsIcon />
                Textbox
              </MenuItem>
            </Select>
          </div>
        </div>

        {/* Render the dynamically added TextField components */}
        {field.map((textField, index) => (
          <div key={index}>{textField}</div>
        ))}
      </div>
    </>
  );
};

export default NewForm;

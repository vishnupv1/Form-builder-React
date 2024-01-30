import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { useState } from "react";

const width = "w-full";

function NewForm() {


  const [field, setField] = useState<JSX.Element[]>([]);
  const checkOption = "Option 1"; //here i want to add the useState to change the option name dynamically
  const dropOption = "Option 1"; //here i want to add the useState to change the option name dynamically

  const addDropdownField = () => {
    setField([
      <div className="flex">
        <ArrowDropDownCircleOutlinedIcon/>
        <TextField
          id={`text-field-0`}
          placeholder={dropOption}
          variant="standard"
          className={width}
          key={0}
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
          placeholder={checkOption}
          variant="standard"
          className={width}
          key={0}
        />
      </div>,
    ]);
  };

  <TextField id="standard-basic" label="Standard" variant="standard" />;

  const [item, setItem] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
    setField([]);

    // Check if the selected option is "DropDown" and add a new TextField
    if (String(event.target.value) === "10") {
      addDropdownField();
    }
    if (String(event.target.value) === "30") {
      addCheckField();
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
              variant="filled"
              className="w-2/3 m-1"
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
                {" "}
                <CheckBoxIcon />
                Checkbox
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
}

export default NewForm;

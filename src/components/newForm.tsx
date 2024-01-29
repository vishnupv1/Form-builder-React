import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { formApi } from "../axiosApi/axiosApi.js";

const width = "w-full";

function NewForm() {
  const [forms, setForms] = useState([]);
  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await formApi.get(`/getforms`);
        setForms(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    };
    fetchForm();
  }, []);

  const [field, setField] = useState<JSX.Element[]>([]);

  const addDropdownField = () => {
    setField([
      <TextField
        id={`text-field-0`}
        label="option"
        variant="standard"
        className={width}
        key={0}
      />,
    ]);
  };
  const addCheckField = () => {
    setField([
      <TextField
        id={`text-field-0`}
        label="check"
        variant="standard"
        className={width}
        key={0}
      />,
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
      <div className=" bg-red-500 border-l-4 border-t-8 border-purple-800 border-l-blue-500 bg-white mt-2 rounded-lg">
        <div className="m-2 mb-4">
          <div className="w-full flex">
            <TextField id="filled-basic" label="Question" variant="filled" />

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={item}
              label="Age"
              onChange={handleChange}
              className="w-48"
            >
              <MenuItem value={10}>DropDown</MenuItem>
              <MenuItem value={20}>TextArea</MenuItem>
              <MenuItem value={30}>Checkbox</MenuItem>
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

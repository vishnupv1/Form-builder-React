import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Autosave, useAutosave } from "react-autosave";
import axios from "axios";
import { formApi } from "../axiosApi/axiosApi.js";

const autosaveForm = (data) =>
  axios.post(`http://localhost:5000/saveForm`, {
    data: data,
  });

const width = "w-full";

function Title() {
  const title: string = "";
  const desc: string = "";
  const [TitleNew, SetTitleNew] = useState(title);
  const [description, SetDescription] = useState(desc);

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const res = await formApi.get(`/getTitle`);
        SetTitleNew(res.data.title);
        SetDescription(res.data.description);
        console.log(res.data);
        
      } catch (error) {
        console.error("Error fetching Title:", error);
      }
    };
    fetchTitle();
  }, []);

  const newFormDetails = { TitleNew, description };
  useAutosave({ data: newFormDetails, onSave: autosaveForm });

  return (
    <div className=" bg-red-500 border-l-4 border-t-8 border-purple-800 border-l-blue-500 bg-white mt-2 rounded-lg">
      <div className="m-2 mb-4">
        <div className="w-full">
          <TextField
            id="filled-basic"
            // label={TitleNew}
            variant="filled"
            className={width}
            label="Form Title"
            value={TitleNew}
            onChange={(e) => SetTitleNew(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <TextField
            id="standard-basic"
            label="Form description"
            variant="standard"
            value={description}
            onChange={(e) => SetDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Title;

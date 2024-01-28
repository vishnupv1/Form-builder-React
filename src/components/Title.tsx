import TextField from "@mui/material/TextField";
// import { useState } from "react";

const width = "w-full";
function Title() {
  // const [TitleName, setTitleName] = useState("Title is here");
  return (
    <div className=" bg-red-500 border-l-4 border-t-8 border-purple-800 border-l-blue-500 bg-white mt-2 rounded-lg">
      <div className="m-2 mb-4">
        <div className="w-full">
          <TextField
            id="filled-basic"
            label="Title"
            variant="filled"
            className={width}
            // value={TitleName}
            // onChange={(e) => setTitleName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <TextField
            id="standard-basic"
            label="Form description"
            variant="standard"
          />
        </div>
      </div>
    </div>
  );
}

export default Title;

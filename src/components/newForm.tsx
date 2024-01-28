import { TextField } from "@mui/material";
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

  return (
    <>
      <div className=" bg-red-500 border-l-4 border-t-8 border-purple-800 border-l-blue-500 bg-white mt-2 rounded-lg">
        <div className="m-2 mb-4">
          <div className="w-full">
            <TextField
              id="filled-basic"
              label="Title"
              variant="filled"
              // value={TitleName}
              // onChange={(e) => setTitleName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <TextField
              id="standard-basic"
              label="Form description"
              variant="standard"
              className={width}
            />
          </div>
        </div>
      </div>
      {/* <tbody>
        {forms.length > 0 ? (
          forms.map((form, index) => (
            <tr
              key={index}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{form.name}</td>
            </tr>
          ))
        ) : (
          <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td colSpan={5} className="whitespace-nowrap px-6 py-4 font-medium">
              No Bookings
            </td>
          </tr>
        )}
      </tbody> */}
    </>
  );
}

export default NewForm;

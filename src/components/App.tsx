import Title from "./Title";
import UtilityBar from "./UtilityBar";
import Header from "./header";
import NewForm from "./newForm";
import { useEffect, useState } from "react";
import { formApi } from "../axiosApi/axiosApi.js";

const App = () => {
  const [components, setComponents] = useState<JSX.Element[]>([]);
  const [showField, setShowField] = useState('true');
  const [fetchQuestion, setFetchQuestion] = useState();

  // const fetchData = async () => {
  //   try {
  //     const res = await formApi.get(`/getquestion`);
  //     setFetchQuestion(res.data);
      
  //   } catch (error) {
  //     console.error("Error fetching Title:", error);
  //   }
  // };
  
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   addComponent();
  // }, []);

  const addComponent = () => {
    setComponents((prevComponents) => [
      ...prevComponents,
      <NewForm key={prevComponents.length} datas={fetchQuestion} />,
    ]);
  };

  return (
    <>
      <div className="flex w-full justify-center p-10">
        <Header />
      </div>

      <div className="flex w-full justify-center p-10">
        <div className="w-1/2 ">
          <Title />
        </div>
        <div className="p-2">
          <UtilityBar onButtonClick={addComponent} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2">{components}</div>
      </div>
    </>
  );
};

export default App;

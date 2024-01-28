import Title from "./Title";
import UtilityBar from "./UtilityBar";
import Header from "./header";
import NewForm from "./newForm";
import { useState } from "react";



const App = () => {
  const [components, setComponents] = useState<JSX.Element[]>([]);

  const addComponent = () => {
    setComponents((prevComponents) => [
      ...prevComponents,
      <NewForm key={prevComponents.length} />,
    ]);
  };

  

  return (
    <>
      <Header />
     
      <div className="flex w-full justify-center p-10">
        <div className="w-1/2 ">
          <Title />
        </div>
        <div className="p-2">
          <UtilityBar onButtonClick={addComponent} />
        </div>
      </div>
      <div className="w-1/2 fixed">{components}</div>
    </>
  );
};

export default App;

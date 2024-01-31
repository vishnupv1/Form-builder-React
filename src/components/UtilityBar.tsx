import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SlideshowIcon from "@mui/icons-material/Slideshow";

interface UtiliytyProps {
  onButtonClick: () => void;
}

const UtilityBar: React.FC<UtiliytyProps> = ({ onButtonClick }) => {
  return (
    <div className="h-full w-10 flex flex-col p-2 items-center justify-center bg-grey-400 rounded-lg shadow">
      <AddCircleOutlineIcon className="" onClick={onButtonClick} />
      <ExitToAppIcon />
      {/* <RadioButtonCheckedIcon /> */}
      <TextFieldsIcon />
      <CropOriginalIcon />
      <SlideshowIcon />
    </div>
  );
};

export default UtilityBar;

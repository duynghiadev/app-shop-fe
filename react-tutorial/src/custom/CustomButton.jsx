import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const ButtonRed = styled(Button)({
  backgroundColor: "red",
  color: "white",
  fontSize: "20px",
  "&.change-background": {
    backgroundColor: "green",
  },
});

const ButtonYellow = styled(Button)({
  backgroundColor: "yellow",
  color: "black",
  fontSize: "20px",
});

const CustomButton = () => {
  return (
    <>
      <Button variant="text">Text</Button>
      <ButtonRed className="change-background" variant="contained">
        Contained
      </ButtonRed>
      <ButtonYellow variant="outlined">Outlined</ButtonYellow>
    </>
  );
};

export default CustomButton;

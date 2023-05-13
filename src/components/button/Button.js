import { useState, useEffect } from "react";
import { ButtonStyling } from "./ButtonSC";
import { blueButton, grayButton, defaultButton } from "./ButtonTheme";
const Button = (props) => {
  const [theme, setTheme] = useState();
  const { description, styling } = props;

  useEffect(() => {
    if (styling === "blue") {
      setTheme(blueButton);
    } else if (styling === "gray") {
      setTheme(grayButton);
    } else {
      setTheme(defaultButton);
    }
  }, [styling]);
  return <ButtonStyling theme={theme}>{description}</ButtonStyling>;
};

export default Button;

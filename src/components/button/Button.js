import style from "./Button.module.css";

const Button = (props) => {
  const { description } = props;

  return <button className={style.button}>{description}</button>;
};

export default Button;

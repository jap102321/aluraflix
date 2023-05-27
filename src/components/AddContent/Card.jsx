import { useLocation } from "react-router-dom";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Card = () => {
  const url = useLocation().pathname;
  let catTest = <p>Page undefined</p>;

  if (url === "/new/video") {
    catTest = (
      <div className={styles.card}>
        <div className={styles.cardButtons}>
          <div className={styles.functionButtons}>
            <Button styling="blue" description="Guardar" type="submit" />
            <Button styling="gray" description={"Limpiar"} />
          </div>
          <Link to="/new/category">
            <Button styling="blue" description="Nueva Categoria" />
          </Link>
        </div>
      </div>
    );
    //Inputs category
  } else if (url === "/new/category") {
    catTest = (
      <div className={styles.card}>
        <div className={styles.cardButtons}>
          <div className={styles.functionButtons}>
            <Button styling="blue" description="Guardar" type="submit" />
            <Button styling="gray" description={"Limpiar"} />
          </div>
        </div>
      </div>
    );
  } else {
    catTest = (
      <div className={styles.card}>
        <div className={styles.cardButtons}>
          <div className={styles.functionButtons}>
            <Link to="/new/category">
              <Button styling="blue" description="Guardar" type="submit" />
            </Link>
            <Button styling="gray" description={"Limpiar"} />
          </div>
        </div>
      </div>
    );
  }
  return <>{catTest}</>;
};

export default Card;

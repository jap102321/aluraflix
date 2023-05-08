import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardButtons}>
        <div className={styles.functionButtons}>
          <Link to="/aluraflix">
            <Button styling="blue" description="Guardar" />
          </Link>
          <Button styling="gray" description={"Limpiar"} />
        </div>
        <Link to="/new/category">
          <Button styling="blue" description="Nueva Categoria" />
        </Link>
      </div>
    </div>
  );
};

export default Card;

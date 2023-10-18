/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Product.module.css";
export default function Product({ photo, name, price, description }) {
  const navigate = useNavigate()
  return (
    <div className={styles.product}>
      <div className={styles.photo}>
        <img src={photo} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.desc}>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <div className={styles.price}>R$ {price}</div>
      </div>
    </div>
  );
}

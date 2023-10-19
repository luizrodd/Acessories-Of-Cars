/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import styles from "./Product.module.css";
export default function Product({ photo, name, price, description }) {
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

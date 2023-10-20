/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
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
          <span>{description}</span>
        </div>
        <div className={styles.price}>R$ {price}</div>
        <div className={styles.buy_info}>
          <div className={styles.buy}>
            <button>Buy</button>
          </div>
          <div className={styles.cart}>
            <AiOutlineShoppingCart size={25} color="white" />
          </div>
          <div className={styles.favorite}>
            <AiOutlineHeart size={25} color="white"/>
          </div>
        </div>
      </div>
    </div>
  );
}

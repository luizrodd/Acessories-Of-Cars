/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import styles from "./Product.module.css";
import { changeFavorite } from "../../store/reducers/products";
import { useDispatch } from "react-redux";
import { insertCart } from "../../store/reducers/cart";
export default function Product(props) {
  const { photo, name, price, description, favorite, id } = props;
  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(changeFavorite(id));
  }
  function handleCart() {
    dispatch(insertCart(props));
  }
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
            <AiOutlineShoppingCart
              size={25}
              color="white"
              onClick={handleCart}
            />
          </div>
          <div className={styles.favorite}>
            {favorite ? (
              <AiFillHeart size={25} color="red" onClick={handleFavorite} />
            ) : (
              <AiOutlineHeart
                size={25}
                color="white"
                onClick={handleFavorite}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

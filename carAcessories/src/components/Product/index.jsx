/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import {
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import styles from "./Product.module.css";
import { changeFavorite } from "../../store/reducers/products";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, insertCart, removeFromCart } from "../../store/reducers/cart";
import { useLocation } from "react-router-dom";
export default function Product(props) {
  const location = useLocation()
  const { photo, name, price, description, favorite, id, quantity } = props;
  const itsInCart = useSelector((state) =>
    state.cart.some((item) => item.id === id)
  );
  const isCartPage = location.pathname === "/cart";

  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(changeFavorite(id));
  }
  function handleInsertCart() {
    dispatch(insertCart(props));
  }
  function handleRemoveCart(){
    dispatch(removeFromCart(id)); // onde id é o ID do item a ser removido
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
            {itsInCart ? (
              <AiOutlineShoppingCart
                size={25}
                color="#68d6ff"
                onClick={handleRemoveCart}
              />
            ) : (
              <AiOutlineShoppingCart
                size={25}
                color="white"
                onClick={handleInsertCart}
              />
            )}
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
          {itsInCart && isCartPage ? (
            <div className={styles.quantity}>
              <div>
                <AiFillMinusCircle size={25} color="white" cursor="pointer" onClick={() => {if(quantity > 1) dispatch(changeQuantity({id, quantity: -1}))}}/>
              </div>
              <div>
                <span>{quantity}</span>
              </div>
              <div>
                <AiFillPlusCircle size={25} color="white" cursor="pointer" onClick={() => dispatch(changeQuantity({id, quantity: +1}))} />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

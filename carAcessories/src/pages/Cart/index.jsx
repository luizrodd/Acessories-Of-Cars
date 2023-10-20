import { useSelector, useDispatch } from "react-redux";
import Product from "../../components/Product";
import styles from "./Cart.module.css";
import { changeQuantity } from "../../store/reducers/cart"; // Importe a ação mudarQuantidade
import { useNavigate } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total, cart } = useSelector((state) => {
    const total = state.cart.reduce((acc, productInCart) => {
      return acc + productInCart.price * productInCart.quantity; // Leve em consideração a quantidade
    }, 0);

    return { total, cart: state.cart };
  });

  const handleQuantityChange = (productId, newQuantity) => {
    // Despache a ação mudarQuantidade para atualizar a quantidade do item no carrinho
    dispatch(changeQuantity({ id: productId, quantity: newQuantity }));
  };
  function goBackToPreviousPage() {
    navigate(-1); // Use -1 para voltar para a página anterior
  }
  return (
    <div className={styles.cart}>
      <div className={styles.backPage}>
        <button onClick={goBackToPreviousPage}>
          <FaArrowLeft /> Back
        </button>
      </div>
      <div className={styles.payment}>
        <div>Total: R$ {total} </div>
        <div className={styles.buy}>
          <p>Buy</p>
        </div>
      </div>
      <div className={styles.products}>
        {cart.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            photo={item.photo}
            favorite={item.favorite}
            id={item.id}
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange} // Passe a função de alteração de quantidade
          />
        ))}
      </div>
    </div>
  );
}

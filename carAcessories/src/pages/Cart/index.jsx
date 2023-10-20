import { useSelector } from "react-redux";
import Product from "../../components/Product";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      {cart.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          photo={item.photo}
          favorite={item.favorite}
          id={item.id}
        />
      ))}
    </div>
  );
}

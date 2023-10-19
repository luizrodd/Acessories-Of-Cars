import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/reducers/products";
import { useEffect } from "react";
import { loadCategoriesById } from "../../store/reducers/categories";

export default function Products() {
  const dispatch = useDispatch();
  const { title, id } = useParams();
  // Utilize useSelector para acessar os estados corretamente
  const products = useSelector((state) =>
    state.products.filter((product) => product.category === title)
  );
  const categories = useSelector((state) =>
    state.categories.find((category) => category.id == id)
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(loadCategoriesById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.products}>
      <div>
        {categories && (
          <Navbar
            key={categories.id}
            title={categories.title}
            photo={categories.photo}
          />
        )}
      </div>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            photo={product.photo}
          />
        ))}
      </div>
    </div>
  );
}

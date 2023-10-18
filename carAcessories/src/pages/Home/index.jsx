import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/reducers/categories";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  console.log(categories)

  return (
    <div className={styles.home}>
      <div>
        <Navbar
          description="The best products for the best price"
          photo="https://www.chicagomotorcars.com/imagetag/9866/17/l/Used-2018-Porsche-911-GT2-RS-Weissach-Package-Magnesium-Wheels-Font-Lift-Loaded.jpg"
          title="Home"
        />
      </div>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.categories_card}
            onClick={() =>
              navigate(`/products/${category.title}/${category.id}`)
            }
          >
            <div className={styles.photo}>
              <img src={category.photo} alt={category.title} />
            </div>
            <div className={styles.name}>
              <p>{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

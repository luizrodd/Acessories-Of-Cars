/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.css";
export default function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.home}>
      <div>
        <Navbar
          description="The best products for best price"
          photo="https://www.chicagomotorcars.com/imagetag/9866/17/l/Used-2018-Porsche-911-GT2-RS-Weissach-Package-Magnesium-Wheels-Font-Lift-Loaded.jpg"
          title="Home"
        />
      </div>
      <div className={styles.categorys} onClick={() => navigate('/products')}>
          <div className={styles.photo}>
            <img src="https://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2021/09/21235442/ultrace-bbs-wheels-2021-by-wheelsbywovka-21-1200x800.jpg" alt="" />
          </div>
          <div className={styles.name}>
            <p>Wheels</p>
          </div>
      </div>
    </div>
  );
}

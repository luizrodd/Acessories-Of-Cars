import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <p>AutoAcessoriesCars</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.mid_navigation}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_cart}>
            <Link to="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </div>
          <div className={styles.right_login}>
            <p>
              <AiOutlineUser />
            </p>
            <p>Login</p>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

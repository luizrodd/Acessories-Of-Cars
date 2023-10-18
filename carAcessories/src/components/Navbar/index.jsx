/* eslint-disable react/prop-types */
import styles from './Navbar.module.css'
export default function Navbar({title, photo}) {
  return (
    <nav className={styles.nav}>
        <div className={styles.desc}>
            <h1>{title}</h1>
        </div>
        <div className={styles.photo}>
            <img src={photo} alt="" />
        </div>
    </nav>
  )
}

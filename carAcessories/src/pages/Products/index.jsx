import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import styles from './Products.module.css'
export default function Products() {
  return (
    <div className={styles.products}>
      <div>
        <Navbar
          description="wheels"
          title="Wheels"
          photo="https://cdn.awsli.com.br/2500x2500/974/974153/produto/43499093/bbs_cir_platinumsilver-ylrydx.jpg"
        />
      </div>
      <div>
        <Product name='BBS'description='BBS CI-R Platinum Silver 5x112 19x9 ET42' price='3000' photo='	https://cdn.awsli.com.br/600x450/974/974153/produto/43499093/3dc46aefc8.jpg'/>
      </div>
    </div>
  );
}

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  const state = useSelector((store) => store.cart);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shopping Page</Link>
        <Link to="/checkOut">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemCounter && <span>{state.itemCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <Link
          to="https://github.com/jamalshamsi1988/shopping-card-vite/tree/main/vite-project"
          target="blank"
        >
          <p>Developed By Jamal Shamsi</p>
        </Link>
      </footer>
    </>
  );
};

export default Layout;

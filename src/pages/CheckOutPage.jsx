import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import styles from "./CheckOutPage.module.css";

const CheckOutPage = () => {
  const state = useSelector((store) => store.cart);

  if (!state.itemCounter) {
    return (
      <div className={styles.container}>
        <h2>Empty</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default CheckOutPage;

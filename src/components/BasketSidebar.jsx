import { useDispatch } from "react-redux";
import { GoChecklist } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./BasketSidebard.module.css";
import { checkOut } from "../features/cart/cartSlice";

const BasketSidebar = ({ state }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.siderbar}>
      <div>
        <GoChecklist />
        <p>Total:</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.status && "Pending..."}</span>
      </div>
      <button onClick={() => dispatch(checkOut(state))}>Checkout</button>
    </div>
  );
};

export default BasketSidebar;

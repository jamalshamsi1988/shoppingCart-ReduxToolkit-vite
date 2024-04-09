import { useDispatch } from "react-redux";

import { MdDeleteOutline } from "react-icons/md";
import { shorten } from "../helper/helper";

import styles from "./BasketCard.module.css";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

const BasketCard = ({ data }) => {
  const { title, image, quantity } = data;
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shorten(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
};

export default BasketCard;
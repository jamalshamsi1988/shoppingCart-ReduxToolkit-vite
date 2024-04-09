import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helper/helper";
import styles from "./SideBard.module.css";
import { categories } from "../constants/categoriesList";

const SideBard = ({ query, setQuery }) => {

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((i) => (
          <li
            key={i.id}
            className={
              i.type.toLowerCase() === query.category ? styles.selected : null
            }
          >
            {i.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBard;

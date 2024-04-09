import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { fetchProducts } from "../features/product/productSlice";
import styles from "./ProductsPage.module.css";
import {
  filterProducts,
  searchProducts,
  getInitialQuery,
} from "../helper/helper";
import SearchBox from "../components/SearchBox";
import SideBard from "../components/SideBard";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);
  console.log(products);

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

      <div className={styles.container}>
        {loading && <Loader />}
        <div className={styles.products}>
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>

        <SideBard query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;

import { useCallback, useEffect } from "react";
import ListCard from "../components/ListCard";

const ShopAll = ({ products, setProducts, getProductList }) => {
  const sortProducts = useCallback(
    (type) => {
      let sortList = [...products];
      if (type === "lowPrice") {
        sortList.sort((a, b) => a.price - b.price);
      } else if (type === "highPrice") {
        sortList.sort((a, b) => b.price - a.price);
      } else if (type === "highDiscount") {
        sortList.sort((a, b) => b.discount - a.discount);
      }
      setProducts(sortList);
    },
    [products, setProducts]
  );

  useEffect(() => {
    getProductList("");
  }, [getProductList]);

  return (
    <main className="mw shopall">
      <h2>ShopAll</h2>
      <nav>
        <button
          onClick={() => {
            getProductList("");
          }}
        >
          모든상품
        </button>
        <button
          onClick={() => {
            getProductList("new");
          }}
        >
          신상품
        </button>
        <button
          onClick={() => {
            getProductList("top");
          }}
        >
          인기상품
        </button>
        <hr />
        <button
          onClick={() => {
            sortProducts("lowPrice");
          }}
        >
          낮은가격순
        </button>
        <button
          onClick={() => {
            sortProducts("highPrice");
          }}
        >
          높은가격순
        </button>
        <button
          onClick={() => {
            sortProducts("highDiscount");
          }}
        >
          높은할인률
        </button>
      </nav>
      <ul className="listCon">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ListCard product={product} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ShopAll;

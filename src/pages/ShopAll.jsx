import { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';
import { useSelector, useDispatch } from 'react-redux';
import { getProductList } from '../store/productStore';

const ShopAll = () => {
  let productsState = useSelector((state) => state.products);
  let products = productsState.products;

  let [list, setList] = useState(products);

  const dispatch = useDispatch();

  const sortProducts = (type) => {
    let sortList = [...list];
    if (type === 'lowPrice') {
      sortList.sort((a, b) => a.price - b.price);
    } else if (type === 'highPrice') {
      sortList.sort((a, b) => b.price - a.price);
    } else if (type === 'highDiscount') {
      sortList.sort((a, b) => b.discount - a.discount);
    }
    setList(sortList);
  };

  useEffect(() => {
    dispatch(getProductList(''));
  }, [dispatch]);

  useEffect(() => {
    setList(products);
  }, [products]);

  return (
    <main className="mw shopall">
      <h2>ShopAll</h2>
      <nav>
        <button
          onClick={() => {
            dispatch(getProductList(''));
          }}
        >
          모든상품
        </button>
        <button
          onClick={() => {
            dispatch(getProductList('new'));
          }}
        >
          신상품
        </button>
        <button
          onClick={() => {
            dispatch(getProductList('top'));
          }}
        >
          인기상품
        </button>
        <hr />
        <button
          onClick={() => {
            sortProducts('lowPrice');
          }}
        >
          낮은가격순
        </button>
        <button
          onClick={() => {
            sortProducts('highPrice');
          }}
        >
          높은가격순
        </button>
        <button
          onClick={() => {
            sortProducts('highDiscount');
          }}
        >
          높은할인률
        </button>
      </nav>
      <ul className="listCon">
        {list.map((product) => {
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

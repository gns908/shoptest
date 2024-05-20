import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MainList from '../components/MainList';
import { useEffect } from 'react';
import { getProductList } from '../store/productStore';

const Main = () => {
  let productsState = useSelector((state) => state.products);
  let products = productsState.products;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList('new'));
  }, [dispatch]);

  if (productsState.status !== 'scucceeded') {
    return <div className="mw">로딩중...</div>;
  }

  return (
    <main className="mw">
      <Banner />
      <MainList products={products} />
    </main>
  );
};

export default Main;

import { Link } from "react-router-dom";
import ListCard from "./ListCard";

const MainList = ({ products }) => {
  return (
    <section className="mainlist">
      <h2>신상품 리스트가 들어가는 곳</h2>
      <Link tt="/shopall">View All</Link>
      <ul className="listCon">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ListCard product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MainList;

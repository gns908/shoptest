import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeAge, changeName } from "../store/userStore";
import { addCount, minusCount, delItem } from "../store/cartStore";

const Cart = () => {
  let user = useSelector((state) => state.user); // userStore.js에서 user를 가져온다.
  let cart = useSelector((state) => state.cart); // cartStore.js에서 cart를 가져온다.

  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <main className="mw">
      <h2>
        {user.username}님의 장바구니{" "}
        <button
          onClick={() => {
            dispatch(changeName("길동이"));
          }}
        >
          이름 변경
        </button>
      </h2>
      <p>3개의 아이테이 담겨있어요 </p>
      <p>
        나이 {user.age}{" "}
        <button
          onClick={() => {
            dispatch(changeAge(10));
          }}
        >
          나이변경
        </button>
      </p>
      <Table striped bordered hover className="cart">
        <colgroup>
          <col width={"50px"} />
          <col width={"*"} />
          <col width={"150px"} />
          <col width={"100px"} />
          <col width={"100px"} />
          <col width={"100px"} />
          <col width={"80px"} />
        </colgroup>
        <thead>
          <tr>
            <th>id</th>
            <th>상품명</th>
            <th>상품가격</th>
            <th>할인률</th>
            <th>상품수량</th>
            <th>결제금액</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td className="center">{item.id}</td>
                <td
                  onClick={() => {
                    navigate(`/products/${item.id}`);
                  }}
                >
                  <div className="img">
                    <div>
                      <img src={`/img/${item.img}`} alt={item.title} />
                    </div>
                    <p>{item.title}</p>
                  </div>
                </td>
                <td className="right">
                  {Number(item.price).toLocaleString()}원
                </td>
                <td className="center">{item.discount}%</td>
                <td className="center">
                  {item.count === 1 ? (
                    <button disabled>-</button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(minusCount(item.id));
                      }}
                    >
                      -
                    </button>
                  )}

                  <span>{item.count}</span>
                  <button
                    onClick={() => {
                      dispatch(addCount(item.id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td className="right">
                  {Number(
                    item.price * (1 - item.discount / 100) * item.count
                  ).toLocaleString()}{" "}
                  원
                </td>
                <td
                  className="center"
                  onClick={() => {
                    dispatch(delItem(item.id));
                  }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7} className="right">
              {cart
                .reduce((a, b) => {
                  return a + b.price * (1 - b.discount / 100) * b.count;
                }, 0)
                .toLocaleString()}
              원
            </td>
          </tr>
        </tfoot>
      </Table>
    </main>
  );
};

export default Cart;

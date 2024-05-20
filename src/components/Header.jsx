import { useEffect, useState } from "react";
import style from "../css/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOn, setIsNavOn] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isNavOn ? "hidden" : "auto";
  }, [isNavOn]);

  const toggleNav = () => {
    setIsNavOn(!isNavOn);
  };
  const closeNav = () => {
    setIsNavOn(false);
  };
  return (
    <header className={`${style.hd} mw `}>
      <h1>
        <Link onClick={closeNav} to="/">
          <img src="/img/logo.svg" alt="" />
        </Link>
      </h1>
      <nav className={isNavOn ? `${style.on}` : ""}>
        <div className={style.gnb}>
          <Link onClick={closeNav} to="/shopall">
            Shop
          </Link>
          <Link onClick={closeNav} to="#">
            Blog
          </Link>
          <Link onClick={closeNav} to="/company/ceo">
            Our Story
          </Link>
        </div>
        <div className={style.person}>
          <Link onClick={closeNav} to="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link onClick={closeNav} to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link onClick={closeNav} to="#">
            <i className="fa-regular fa-user"></i>
          </Link>
        </div>
      </nav>
      <button className={style.ham} onClick={toggleNav}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;

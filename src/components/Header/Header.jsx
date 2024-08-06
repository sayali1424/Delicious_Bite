import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/loogo.webp";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
    icon: "fas fa-home",
  },
  {
    display: "Menu",
    path: "/foods",
    icon: "fas fa-utensils",
  },
  {
    display: "Search",
    path: "/search",
    icon: "fas fa-search",
  },

  {
    display: "Cart",
    path: "/cart",
    icon: "fas fa-shopping-cart",
  },
  {
    display: "Contact",
    path: "/contact",
    icon: "fas fa-envelope",
  },
  {
    display: "About Us",
    path: "/about",
    icon: "fas fa-info-circle",
  },
  
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  <div className="menu-item">
                    <i className={item.icon}></i> {item.display}
                    <div className="underline"></div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="fas fa-shopping-cart"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <Link to="/login">
              <button type="button" className="login-button">
                <i className="fas fa-user"></i> Login
              </button>
            </Link>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

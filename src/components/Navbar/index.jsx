import { React, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./logo-navbar.svg";
import { Link } from "react-router-dom";
import navbarIcon from "./navbar-icon.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className={styles.container}>
      <Link
        to="/"
        onClick={() => {
          setToggle(false);
        }}
      >
        <img src={logo} alt="Logo do CodeChella" />
      </Link>
      <div>
        <img
          src={navbarIcon}
          alt=""
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        {toggle && (
          <nav className={styles.navbar}>
            <Link
              to="/experience"
              onClick={() => {
                setToggle(false);
              }}
            >
              A experiência
            </Link>
            <Link
              to="/layout"
              onClick={() => {
                setToggle(false);
              }}
            >
              Mapa de Setores
            </Link>
            <Link
              to="/faq"
              onClick={() => {
                setToggle(false);
              }}
            >
              Informações
            </Link>
            <Link
              to="/form"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Ingresso
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

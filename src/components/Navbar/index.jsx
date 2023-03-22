import { React, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./logo-navbar.svg";
import { Link } from "react-router-dom";
import navbarIcon from "./navbar-icon.svg";

export default function Navbar() {
  const [show, setShow] = useState('false')

  return (
    <header className={styles.container}>
      <Link
        to="/"
        onClick={()=>setShow('false')}
      >
        <img src={logo} alt="Logo do CodeChella" />
      </Link>
      <div>
        <img
          className={styles.container__navbar_icon}
          src={navbarIcon}
          alt=""
          onClick={()=>setShow(!show)}
                  />
        <nav id="navbar" className={[styles.container__navbar, (!show?styles.container__show:'')].join(' ')}>
          <Link
            to="/experience"
            onClick={()=>setShow(!show)}
          >
            A experiência
          </Link>
          <Link
            to="/layout"
            onClick={()=>setShow(!show)}
          >
            Mapa de Setores
          </Link>
          <Link
            to="/faq"
            onClick={()=>setShow(!show)}
          >
            Informações
          </Link>
          <Link
            to="/form"
            onClick={()=>setShow(!show)}
          >
            Ingresso
          </Link>
        </nav>
      </div>
    </header>
  );
}

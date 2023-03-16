import Container from "components/Container";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <main>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

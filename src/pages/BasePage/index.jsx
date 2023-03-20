import Container from "components/Container";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import TicketProvider from "contexts/Ticket";
import React from "react";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <main>
      <Navbar />
      <TicketProvider>
        <Container>
          <Outlet />
        </Container>
      </TicketProvider>
      <Footer />
    </main>
  );
}

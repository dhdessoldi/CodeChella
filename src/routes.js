import ScrollToTop from "components/ScrollToTop";
import BasePage from "pages/BasePage";
import Experience from "pages/Experience";
import Faq from "pages/Faq";
import Form from "pages/Form";
import Home from "pages/Home";
import Layout from "pages/Layout";
import NotFound from "pages/NotFound";
import Ticket from "pages/Ticket";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="layout" element={<Layout />} />
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<Form />} />
          <Route path="ticket" element={<Ticket />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

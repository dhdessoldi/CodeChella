import BasePage from "pages/BasePage";
import Experience from "pages/Experience";
import Faq from "pages/Faq";
import Form from "pages/Form";
import Home from "pages/Home";
import Layout from "pages/Layout";
import Ticket from "pages/Ticket";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />}/>
          <Route path="experience" element={<Experience />}/>
          <Route path="layout" element={<Layout />}/>
          <Route path="faq" element={<Faq />}/>
          <Route path="form" element={<Form />}/>
          <Route path="ticket" element={<Ticket />}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default AppRoutes;

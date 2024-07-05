import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { NotFound } from "./pages/404";
import { Link } from "react-router-dom";

export const Routing = () => {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <h1>Routing demo..</h1>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

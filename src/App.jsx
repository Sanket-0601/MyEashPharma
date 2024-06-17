import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import SignUp from "./pages/SignUp";
import FAQsClosed from "./pages/FAQsClosed";
import TopNavigation from "./components/TopNavigation";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/blogs":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/faqs":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/faqsclosed":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UserDashboard />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/faqsclosed" element={<FAQsClosed />} />
    </Routes>
  );
}
export default App;


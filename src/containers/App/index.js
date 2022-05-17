import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../constants/theme";
import Login from "../Login/index";
import Register from "../register";
import BookDetail from "../bookdetail";
import Books from "../books";
import Home from "../Home";
import HeaderMenu from "../../components/HeaderMenu";
import PageFooter from "../../components/PageFooter";
import Checkout from "../Checkout";
import Cart from "../Cart";
import Admin from "../admin";
import Contact from "../contact";
import Profile from "../profile";

function App() {
  let url = window.location.href;
  if (url.includes("access_token")) {
    let str = window.location.href.split("/")
    const strUrl = str[3].split("access_token=");
    const [access_token, user_id] = strUrl[1].split("user_id");
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("logined", true);
    window.location.href = "/";
  } 

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <HeaderMenu />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book/:bookId" element={<BookDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element={<Books />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
        <PageFooter />
      </ThemeProvider>
    </div>
  );
}

export default App;

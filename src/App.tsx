import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./components/BookLayout";

function App() {
  return (
    <>
      {" "}
      <nav>
        {" "}
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "blue",
                };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "blue",
                };
              }}
              to="/books"
            >
              Books
            </NavLink>
          </li>
        </ul>
        <br />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}

        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

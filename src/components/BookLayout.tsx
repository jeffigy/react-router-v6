import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
    return (
        <div>
            {" "}
            <Link to={"/books/1"}>Book 1</Link>
            <br />
            <Link to={"/books/2"}>Book 2</Link>
            <br />
            <Link to={"/books/new"}>New Book</Link>
            {/* Outlet behaves like a placeholder for the child routes */}
            <Outlet context={{ outletValue: "This string was passed using Outlet" }} />
        </div>
    );
};
export default BookLayout;

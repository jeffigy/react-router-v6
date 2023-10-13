
import { useOutletContext } from "react-router-dom";

// type HomeProps = {};

const BookList = () => {
  const obj: any = useOutletContext()
  return <>
    <div>book list page</div>
    <div>{obj.outletValue}</div>
    {/* <Link to={'/books/1'}>Book 1</Link>
    <Link to={'/books/2'}>Book 2</Link>
    <br />
    <Link to={'/books/new'}>New Book</Link> */}
  </>
};
export default BookList;

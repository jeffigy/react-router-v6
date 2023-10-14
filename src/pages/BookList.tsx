
import { Link, useOutletContext, useSearchParams } from "react-router-dom";

// type HomeProps = {};

const BookList = () => {
  const [searhParam, setSearchParams] = useSearchParams(
    new URLSearchParams()
  );
  const number = searhParam.get("n") || 3

  // const [number, setNumber] = useState(3)
  const obj: any = useOutletContext()
  return <>
    <div>book list page</div>
    <div>{obj.outletValue}</div>
    <input type="number" value={number} onChange={(e: any) => setSearchParams({ n: e.target.value })} />
    <br />
    <br />
    <br />
    <Link to={`/books/${number}`}>Book {number}</Link>
  </>
};
export default BookList;

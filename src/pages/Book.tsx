import { useParams } from "react-router-dom";

// type HomeProps = {};

const Book = () => {
  const { id } = useParams();
  return <div>book {id} page</div>;
};
export default Book;

// type HomeProps = {};

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // navigate("/"); // go to the home page
      navigate('/', { state: 'accessed an unknown page' }); // go back to the previous page
    }, 3000);
  }, []);

  return <div>error 404 page</div>;
};
export default NotFound;

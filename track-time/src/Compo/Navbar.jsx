import { Link } from "react-router-dom";

export default function Navbar ( ){
    return (
      <>
        <div>
          <Link to={"/"}>
            <h1>Home</h1>
          </Link>
          <Link to={"/login"}>
            <h1>login</h1>
            <Link to={"/"}>
              <h1>Home</h1>
            </Link>
          </Link>
        </div>
      </>
    );
}
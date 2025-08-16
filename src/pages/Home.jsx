import { Link } from "react-router";


export default function Home() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
}


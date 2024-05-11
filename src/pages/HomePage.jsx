import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
function HomePage() {
  return (
    <div>
      <PageNav></PageNav>
      <h1>Worldwise</h1>
      <Link to="/app">
        <button>Go to APP </button>
      </Link>
    </div>
  );
}

export default HomePage;

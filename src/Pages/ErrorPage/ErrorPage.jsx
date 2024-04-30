import { Link } from "react-router-dom";
import emoji from "../../assets/sad-face-emoji.png"

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="flex flex-col items-center">
            <img src={emoji} alt="emoji" className="w-40 mb-6" />
          <h1 className="text-5xl font-bold mb-2">404</h1>
          <h1 className="text-4xl font-bold mb-4">Page not found.</h1>
          <Link to="/">
            <button className="btn bg-[#D24545] text-white">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

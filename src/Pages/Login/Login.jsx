import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import googleLogo from "../../assets/google-logo-image.png";
import fbLogo from "../../assets/Facebook-logo.png";

import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser, googleLogin, facebookLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <h3 className="text-center">
                Do not have an account ?{" "}
                <Link to={"/register"} className="underline">
                  Register
                </Link>
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full px-4 py-2 border flex justify-center gap-2 rounded-lg"
                >
                  <img className="w-6 h-6" src={googleLogo} alt="google logo" />
                  <span>Login with Google</span>
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className="w-full px-4 py-2 border flex justify-center gap-2 rounded-lg"
                >
                  <img className="w-6 h-6" src={fbLogo} alt="facebook logo" />
                  <span>Login with Facebook</span>
                </button>
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-[#D24545] text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

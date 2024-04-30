import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast("Password length must be at least 6 character.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast("Must have an Uppercase letter in the password.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast("Must have a Lowercase letter in the password.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateUser({ displayName: name, photoURL });
        e.target.reset();
        navigate("/login");
        toast("Registration successful.");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen mt-8">
        <div className="hero-content flex-col lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold lg:mb-4">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
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
                Already have an account ?{" "}
                <Link to={"/login"} className="underline">
                  Login
                </Link>
              </h3>
              <div className="form-control mt-6">
                <button className="btn bg-[#D24545] text-white">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;

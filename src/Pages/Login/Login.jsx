// import { useContext } from "react";
// import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Login = () => {

    // const {  } = useContext(AuthContext);

    // const handleLogin = (e)=>{
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;


    // }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body">
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <div className="flex flex-col lg:flex-row gap-3 text-lg font-medium ">
      <NavLink to={"/"}>Home</NavLink>
      <span className="hidden lg:inline-block">|</span>
      <NavLink to={"/allArtCraftItems"}>All Art & craft Items</NavLink>
      <span className="hidden lg:inline-block">|</span>
      <NavLink to={"/addCraft"}>Add Craft Item</NavLink>
      <span className="hidden lg:inline-block">|</span>
      <NavLink to={"/myArtAndCraft"}>My Art&Craft List</NavLink>
    </div>
  );
  return (
    <div className="bg-[#E6BAA3]">
      <div className="navbar container mx-auto lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn pr-0 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        <a className="p-1 btn-ghost text-xl lg:text-3xl font-medium flex flex-col">
          <span className="text-[#D24545]">Canvas</span>
          <span>Creations</span> 
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <Link to={'/login'}>
            <button className="btn h-8 min-h-0 lg:h-12  bg-[#D24545] text-white border-0">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn h-8 min-h-0 lg:h-12 bg-[#D24545] text-white border-0">Register</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;

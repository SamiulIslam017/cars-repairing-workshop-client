import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(()=>{
           
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="navbar bg-base-100 md:max-w-7xl lg:max-w-7xl mx-auto py-8 justify-between">
      <div className="navbar-start w-full lg:w-6/12 justify-between lg:justify-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
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
          </label>
          <ul className="tabIndex={0} menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            {
                user ? <li><NavLink to='/bookings'>My Bookings</NavLink></li> : ""
            }
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <button className="text-[#FF3811] hover:bg-[#FF3811] hover:text-white transition-all font-medium text-md px-4 py-2 border-2 border-[#FF3811] rounded-lg">
                Appointment
              </button>
            </li>
            <li>
            {
                user ? <button onClick={handleLogout} className="btn btn-error">LogoUt</button> : <Link to="/login"><button className="btn btn-active btn-primary">Login</button></Link>
            }
            </li>
          </ul>
            
        </div>
        <Link to="/">
          <img src={logo} alt="" className="w-16 md:w-full" />
        </Link>
        <div>
          <FaShoppingCart className="text-2xl lg:hidden"></FaShoppingCart>
          
        </div>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          {
                user ? <li><NavLink to='/bookings'>My Bookings</NavLink></li> : ""
            }
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5 hidden  lg:flex">
        <FaShoppingCart></FaShoppingCart>
        <FaSearch></FaSearch>
        <button className="text-[#FF3811] hover:bg-[#FF3811] hover:text-white transition-all font-medium text-lg px-6 py-4 border-2 border-[#FF3811] rounded-lg">
          Appointment
        </button>
        {
                user ? <button onClick={handleLogout} className="btn btn-error">LogoUt</button> : <Link to="/login"><button className="btn btn-active btn-primary">Login</button></Link>
            }
      </div>
    </div>
  );
};

export default Navbar;

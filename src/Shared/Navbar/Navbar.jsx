import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out Successfuly')
            })
            .catch(error => {
                console.error(error);

            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {/* <li><NavLink to='/contact'>Contact US</NavLink></li> */}
        {
            user && isAdmin && <li><Link to='/dashboard/adminHome'>DashBoard</Link></li>
        }
       { user && !isAdmin && <li><Link to="/dashboard/cart">
            <button className="btn">
                cart
                <div className="badge badge-outline">+{cart.length}</div>
            </button>
        </Link></li>
        }
      

    </>
    return (
        <div className="navbar text-white  md:max-w-6xl bg-opacity-40 bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-600
                         rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Asrar Fashion</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        // <span className="mr-3">{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-sm">Sign Out</button>
                        :
                        <Link className="btn btn-outline text-white" to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
import { FaEnvelope, FaHamburger, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    // TODO : get admin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    <FaHamburger></FaHamburger>
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-6">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li className="mb-1"><NavLink to='/dashboard/adminHome'>
                                <FaUser></FaUser>
                                Admin Home</NavLink>
                            </li>
                            <li className="mb-1"><NavLink to='/dashboard/addItems'>
                                <FaShoppingBag></FaShoppingBag>
                                Add Items</NavLink>
                            </li>
                            <li className="mb-1"><NavLink to='/dashboard/manageItems'>
                                <FaList></FaList>
                                Manage Items</NavLink>
                            </li>
                            <li className="mb-1"><NavLink to='/dashboard/allUsers'>
                                <FaUsers></FaUsers>
                                All users</NavLink>
                            </li>

                        </> :
                            <>
                                <li className="mb-1"><NavLink to='/dashboard/userHome'>
                                    <FaUser></FaUser>
                                    User Home</NavLink>
                                </li>
                                <li className="mb-1"><NavLink to='/dashboard/cart'>
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart ({cart.length})</NavLink>
                                </li>
                                <li className="mb-1"><NavLink to='/dashboard/paymentHistory'>
                                    <FaShoppingCart></FaShoppingCart>
                                    Payment History</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>

                    {/* Shared items */}
                    <li className="mb-1"><NavLink to='/'>
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li className="mb-1"><NavLink to='/dashboard/contact'>
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
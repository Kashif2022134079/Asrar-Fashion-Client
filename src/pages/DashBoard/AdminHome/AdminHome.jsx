import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
    console.log(stats.payments)
    return (
        <div className="ml-4">
            <h3 className="text-3xl my-2">
                <span>Hi, Welcome Back </span>
                {
                    user?.displayName ? user.displayName : 'back'
                }
            </h3>
            <div className="stats shadow">
                <div className="stat place-items-center">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{stats.revenue}$</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">{stats.users}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                </div>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-200">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.payments?.map((stat,index) =><tr key={stat._id}>
                            <th>{index+1}</th>
                            <td>
                                {stat.name}
                            </td>
                            <td>{stat.email}</td>
                            <td>
                                {stat.phoneNumber}
                            </td>
                            <td>
                                {
                                    stat.address
                                }
                            </td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminHome;
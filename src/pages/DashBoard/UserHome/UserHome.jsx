import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h3 className="text-3xl">
                <span>Hi, Welcome Back </span>
                {
                    user?.displayName ? user.displayName : 'back'
                }
                </h3>
        </div>
    );
};

export default UserHome;
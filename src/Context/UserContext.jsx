import { createContext } from "react"; // Removed 'React' import
import PropTypes from "prop-types";
import useUserInfo from "../hooks/UserInfo";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const REACT_APP_NAME = process.env.REACT_APP_NAME; // This is your variable
    const { userInfo, loading, error } = useUserInfo();

    return (
        <UserContext.Provider value={{ userInfo, loading, error, REACT_APP_NAME }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate children prop
};

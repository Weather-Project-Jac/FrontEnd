import React, { useEffect } from 'react';
import { UserStore } from '../store/store.ts';
import { useNavigate } from 'react-router-dom';

const LogoutPage: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // Simulate logout action
        logout();

        // Redirect to login page after logout
        navigate("/");
    }, []);

    const exit = UserStore((state) => state.reset);

    const logout = () => {
        exit();
    };

    return (
        <div>
        </div>
    );
};

export default LogoutPage;

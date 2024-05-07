import React, { useEffect } from 'react';
import { UserStore } from '../store/store.ts';

const LogoutPage: React.FC = () => {
    useEffect(() => {
        // Simulate logout action
        logout();

        // Redirect to login page after logout
        window.location.href = '/auth';
    }, []);

    const exit = UserStore((state) => state.reset);

    const logout = () => {
        exit();
    };

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default LogoutPage;

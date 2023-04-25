import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import CreateAccount from '../pages/Accounts/Professional/CreateAccount';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/*">
                <Route path="login" element={<Login />} />
                <Route path="create-account/*" element={<CreateAccount />} />
            </Route>
        </Routes>
    );
};

export default PublicRoutes;

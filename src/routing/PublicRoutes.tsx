import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/*">
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    );
};

export default PublicRoutes;

import { StateMachineProvider, createStore } from 'little-state-machine';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreateAccountType } from '../../utils/hooks/api/account/types';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import NewPassword from './NewPassword';

createStore({
    data: {
        accountType: CreateAccountType.NotSelected,
        firstName: '',
        lastName: '',
        emailAddress: '',
        companyName: '',
        step: 1,
        password: '',
        verifyEmail: false,
        resetPassword: ''
    }
});

function ForgotPasswordPage() {
    return (
        <>
            <StateMachineProvider>
                <Routes>
                    <Route path="/" element={<ForgotPassword />} />
                    <Route path="/reset" element={<ResetPassword />} />
                    <Route path="/new" element={<NewPassword />} />
                </Routes>
            </StateMachineProvider>
        </>
    );
}

export default ForgotPasswordPage;

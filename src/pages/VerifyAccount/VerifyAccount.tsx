import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyAccount = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        navigate(
            `/create-account/confirmEmail/${queryParams.get(
                'email'
            )}?hash=${queryParams.get('hash')}`
        );
    }, []);

    return <div></div>;
};

export default VerifyAccount;

import { ArrowUpward } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = React.useState(false);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    return (
        <>
            {showTopBtn &&
                <Avatar
                    onClick={goToTop}
                    sx={{
                        position: 'fixed',
                        bottom: '50px',
                        right: '50px',
                        cursor: 'pointer'
                    }}
                >
                    <ArrowUpward sx={{ color: "#000000", fontSize: '14px' }} />
                </Avatar>
            }
        </>
    )
}

export default ScrollToTop
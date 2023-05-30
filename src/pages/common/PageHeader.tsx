import { Grid, IconButton, Typography, Button } from '@mui/material';
import React from 'react';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom';

interface HeaderActionProps {
    children?: React.ReactNode;
}

interface PageHeaderProps {
    pageTitle: string;
    actions?: React.ReactNode;
    onBackNavigate?: string;
    hideAction?: boolean;
    handleBack?: () => void;
}

const HeaderActions = ({ children }: HeaderActionProps) => {
    return <>{children}</>;
};

const PageHeader = ({
    actions,
    handleBack,
    pageTitle,
    onBackNavigate,
    hideAction = false
}: PageHeaderProps) => {
    const navigate = useNavigate();

    return (
        <>
            <Grid
                container
                sx={{
                    backgroundColor: '#FFFFFF',
                    alignItems: 'center',
                    padding: '32px 40px',
                    marginBottom: '20px',
                    borderBottom: '1px solid #D9D9D9'
                }}
            >
                <Grid
                    item
                    xs={7}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '25px'
                    }}
                >
                    <IconButton
                        onClick={() => {
                            handleBack
                                ? handleBack()
                                : navigate(onBackNavigate || '/');
                        }}
                    >
                        <WestIcon />
                    </IconButton>
                    <Typography
                        component={'h1'}
                        sx={{
                            fontSize: '28px',
                            fontWeight: '600',
                            fontFamily: 'Open Sans',
                            color: '#23282B'
                        }}
                    >
                        {pageTitle}
                    </Typography>
                </Grid>
                {!hideAction ? (
                    <Grid
                        item
                        xs={5}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: '12px'
                        }}
                    >
                        <HeaderActions>
                            {actions !== undefined ? (
                                actions
                            ) : (
                                <>
                                    <Button variant="outlined">
                                        Replace All
                                    </Button>
                                    <Button variant="contained">
                                        Request Review
                                    </Button>
                                </>
                            )}
                        </HeaderActions>
                    </Grid>
                ) : null}
            </Grid>
        </>
    );
};

export default PageHeader;

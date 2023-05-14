import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { item } from '../Navigation/SideNav';
import { useEffect, useState } from 'react';

interface PropTypes {
    setHideMenu: (value: boolean) => void;
    hideMenu: boolean;
    options: item[];
    menuProfile: string;
}

const Submenu = (props: PropTypes) => {
    const navigate = useNavigate();
    const location = useLocation();

    const updateData = () => {
        props.options?.forEach((item, index: number) => {
            if (item?.menuProfile === undefined) {
                item['menuProfile'] = 'both';
            }
            if (item?.enable === undefined) {
                item['enable'] = true;
            }
            if (item?.visible === undefined) {
                item['visible'] = true;
            }
        });
    };

    useEffect(() => {
        updateData();
    });

    return (
        <Box
            sx={{
                background: '#FCFBF8',
                width: '100%',
                borderRadius: '4px',
                display: props.hideMenu ? 'block' : 'none'
            }}
        >
            {props?.menuProfile != null &&
                props?.menuProfile !== undefined &&
                props?.menuProfile !== '' && (
                    <>
                        {props?.options
                            ?.filter(
                                (x) =>
                                    x?.menuProfile === 'both' ||
                                    props?.menuProfile.toLowerCase() ===
                                        'both' ||
                                    x?.menuProfile?.toLocaleLowerCase() ===
                                        props?.menuProfile.toLocaleLowerCase()
                            )
                            ?.map((item: item) => (
                                <>
                                    {item?.visible && (
                                        <>
                                            {item.label && item.route === '' ? (
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        backgroundColor:
                                                            'transparent',
                                                        boxShadow: 'none',
                                                        color: '#494949',
                                                        fontFamily: 'Open Sans',
                                                        fontWeight: '700',
                                                        fontSize: '14px',
                                                        width: '100%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'space-between',
                                                        padding: '12px',
                                                        textTransform:
                                                            'uppercase',
                                                        '&:hover': {
                                                            backgroundColor:
                                                                '#FFFAF1',
                                                            boxShadow: 'none',
                                                            color: item?.enable
                                                                ? '#494949'
                                                                : '#a39f9f'
                                                        }
                                                    }}
                                                    disabled={
                                                        item?.enable
                                                            ? false
                                                            : true
                                                    }
                                                    onClick={() =>
                                                        props.setHideMenu(false)
                                                    }
                                                >
                                                    {item.label}
                                                    <ArrowLeftRoundedIcon
                                                        sx={{
                                                            color: '#808080',
                                                            fontSize: '20px'
                                                        }}
                                                    />
                                                </Button>
                                            ) : (
                                                <Box
                                                    sx={{
                                                        p: '10px 16px',
                                                        fontFamily: 'Open Sans',
                                                        '&:hover, &:focus': {
                                                            backgroundColor:
                                                                item?.enable ===
                                                                true
                                                                    ? location.pathname ===
                                                                      item.route
                                                                        ? '#05668D'
                                                                        : '#FFFAF1'
                                                                    : '#FCFBF8',
                                                            cursor: item?.enable
                                                                ? 'pointer'
                                                                : 'default',
                                                            fontWeight:
                                                                item?.enable ===
                                                                true
                                                                    ? 700
                                                                    : 400,
                                                            color:
                                                                item?.enable ===
                                                                true
                                                                    ? location.pathname ===
                                                                      item.route
                                                                        ? '#FFFFFF'
                                                                        : '#05668D'
                                                                    : '#a39f9f'
                                                        },
                                                        backgroundColor:
                                                            item?.enable ===
                                                                true &&
                                                            location.pathname ===
                                                                item.route
                                                                ? '#05668D'
                                                                : 'transparent',

                                                        fontWeight:
                                                            location.pathname ===
                                                            item.route
                                                                ? '700'
                                                                : '400',
                                                        fontSize: '14px',
                                                        color:
                                                            item?.enable ===
                                                            true
                                                                ? location.pathname ===
                                                                  item.route
                                                                    ? '#FFFFFF'
                                                                    : '#808080'
                                                                : '#a39f9f'
                                                    }}
                                                    onClick={() => {
                                                        item?.enable &&
                                                            navigate(
                                                                item.route
                                                            );
                                                    }}
                                                >
                                                    {item.label}
                                                </Box>
                                            )}
                                        </>
                                    )}
                                </>
                            ))}
                    </>
                )}
        </Box>
    );
};

export default Submenu;

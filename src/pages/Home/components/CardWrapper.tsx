import { InfoOutlined } from '@mui/icons-material';
import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';

type Props = {
    children?: React.ReactNode;
    title?: string;
    tooltipText?: string;
};

const CardWrapper = ({ children, title, tooltipText }: Props) => {
    return (
        <Box
            component="div"
            sx={{
                backgroundColor: '#FFFFFF',
                width: '100%',
                padding: '32px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '32px',
                marginLeft: '15px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <Typography
                    sx={{
                        color: '#23282B',
                        fontSize: '20px',
                        fontFamily: 'Open Sans',
                        fontWeight: '700'
                    }}
                >
                    {title}
                </Typography>
                {tooltipText && (
                    <Tooltip
                        title={tooltipText}
                        placement="top"
                        componentsProps={{
                            tooltip: {
                                sx: {
                                    padding: '16px 32px',
                                    background: '#FCFBF8',
                                    boxShadow:
                                        '-8px 4px 20px rgba(0, 0, 0, 0.07), 8px 8px 20px rgba(0, 0, 0, 0.07)',
                                    borderRadius: '8px',
                                    color: '#23282B',
                                    lineHeight: '24px',
                                    fontSize: '16px',
                                    fontFamily: 'Open Sans'
                                }
                            }
                        }}
                    >
                        <InfoOutlined sx={{ color: '#808080' }} />
                    </Tooltip>
                )}
            </Box>
            {children}
        </Box>
    );
};

export default CardWrapper;

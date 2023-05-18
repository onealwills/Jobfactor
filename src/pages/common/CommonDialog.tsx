import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import CloseIcon from '../../assets/icons/CloseIcon';

export interface DialogProps {
    open: boolean;
    title?: React.ReactNode;
    actions?: React.ReactNode;
    onClose?: () => void;
    children?: React.ReactNode;
    size?: 'default';
    contentPaddingX?: boolean;
}

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function CustomDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle
            sx={{
                m: 0,
                px: 4,
                pt: 3.75,
                pb: 2.25,
                display: 'flex',
                alignItems: 'center'
            }}
            {...other}
        >
            <Box flexGrow={1}>
                <Typography
                    component="h6"
                    fontSize={20}
                    fontWeight="600"
                    fontFamily="open sans"
                >
                    {children}
                </Typography>
            </Box>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    size="small"
                    onClick={onClose}
                    sx={{
                        bgcolor: '#808080',
                        color: '#FFFFFF',
                        p: 0.625
                    }}
                >
                    <CloseIcon sx={{ fontSize: '12.75px' }} />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export default function CommonDialog({
    actions,
    open,
    title,
    onClose,
    contentPaddingX,
    children
}: DialogProps) {
    function handleClose() {
        if (onClose) onClose();
    }

    return (
        <Dialog
            maxWidth="md"
            fullWidth
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={!!open}
            sx={{
                '& .MuiDialogContent-root': {
                    paddingX: (contentPaddingX === undefined || contentPaddingX) ? 4 : 0,
                    paddingBottom: actions ? 3 : 4,
                    paddingTop: 0
                },
                '& .MuiDialogActions-root': {
                    paddingX: 4,
                    paddingY: 2.5
                }
            }}
        >
            <CustomDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
            >
                {title}
            </CustomDialogTitle>
            <Divider
                sx={{
                    mx: 4,
                    mb: 0.125,
                    borderBottomWidth: 2
                }}
            />
            <DialogContent>{children}</DialogContent>
            {actions && (
                <Box bgcolor="#FFFAF1">
                    <DialogActions>{actions}</DialogActions>
                </Box>
            )}
        </Dialog>
    );
}

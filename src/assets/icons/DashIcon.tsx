import * as React from 'react';
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
    name: 'DashIcon',
    shouldForwardProp: (prop) => prop !== 'fill'
})<SvgIconProps>(() => ({
    fill: 'currentColor'
}));

SvgIcon.defaultProps = {
    viewBox: '0 0 16 16',
    focusable: 'false',
    'aria-hidden': 'true'
};

const Dash: React.FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="m 5,7 h 6 c 0.554,0 1,0.446 1,1 0,0.554 -0.446,1 -1,1 H 5 C 4.446,9 4,8.554 4,8 4,7.446 4.446,7 5,7 Z" />
        </SvgIcon>
    );
};

export default Dash;

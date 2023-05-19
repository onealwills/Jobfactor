import * as React from 'react';
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
    name: 'CloseIcon',
    shouldForwardProp: (prop) => prop !== 'fill'
})<SvgIconProps>(() => ({
    fill: 'currentColor'
}));

SvgIcon.defaultProps = {
    viewBox: '0 0 24 24',
    focusable: 'false',
    'aria-hidden': 'true'
};

const Close: React.FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M 5.6694067,4 C 5.2389314,4 4.8106449,4.162338 4.4863928,4.486436 c -0.6485235,0.6481746 -0.6485235,1.7203933 0,2.368568 l 5.1438646,5.141253 -5.1438646,5.141254 c -0.6485235,0.64831 -0.6485235,1.720452 0,2.368568 C 4.8218293,19.841346 5.2445141,20 5.6694067,20 c 0.4248927,0 0.8513214,-0.158648 1.186758,-0.493921 l 5.1438643,-5.13751 5.143864,5.13751 C 17.479329,19.841346 17.901957,20 18.326907,20 c 0.42476,0 0.851322,-0.158648 1.186759,-0.493921 0.648445,-0.648116 0.648445,-1.720258 0,-2.368568 l -5.143865,-5.141254 5.143865,-5.141253 c 0.648445,-0.6481747 0.648445,-1.7203934 0,-2.368568 -0.648447,-0.6481942 -1.721134,-0.6481942 -2.369773,0 L 12.000029,9.6276894 6.8561647,4.486436 C 6.5319121,4.1623388 6.0998821,4 5.6694067,4 Z" />
        </SvgIcon>
    );
};

export default Close;

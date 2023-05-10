import * as React from 'react';
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
  name: 'JobfactorIcon',
  shouldForwardProp: (prop) => prop !== 'fill',
})<SvgIconProps>(() => ({
  fill: 'currentColor',
}));

SvgIcon.defaultProps = {
 viewBox: '0 0 24 24',
 focusable: 'false',
 'aria-hidden': 'true',
 };

const Jobfactor: React.FunctionComponent<SvgIconProps> = (props) => {
 return (
  <SvgIcon {...props}>
    <path d="M17.913 0C16.0764 0 14.5877 1.28631 14.5877 2.87275V6.81596H7.65652C6.74107 6.81596 6 7.45931 6 8.25234V21.1193C6 22.7061 7.48215 23.9928 9.31303 23.9928V18.5902H16.2403C17.1558 18.5902 17.9008 17.9468 17.9008 17.153V0.00538687M14.5938 15.8267H9.31913V9.78568H14.5938V15.8267Z" />
    <path d="M18 0C16.15 0 14.6505 1.28633 14.6505 2.87327V6.8181H7.66862C6.74649 6.8181 6 7.46165 6 8.25455V21.1256C6 22.7133 7.49297 24 9.33724 24V18.596H16.3151C17.2373 18.596 17.9877 17.9521 17.9877 17.158V0.00538856M14.6566 15.8317H9.34338V9.78876H14.6566V15.8317Z" />
  </SvgIcon>
 );
};

export default Jobfactor;
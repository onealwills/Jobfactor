import * as React from 'react';
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
    name: 'BriefcaseIcon',
    shouldForwardProp: (prop) => prop !== 'fill'
})<SvgIconProps>(() => ({
    fill: 'currentColor'
}));

SvgIcon.defaultProps = {
    viewBox: '0 0 20 20',
    focusable: 'false',
    'aria-hidden': 'true'
};

const Briefcase: React.FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M18.0739 5.81823C17.3656 5.0349 16.1822 4.64323 14.4656 4.64323H14.2656V4.6099C14.2656 3.2099 14.2656 1.47656 11.1322 1.47656H9.86556C6.73222 1.47656 6.73222 3.21823 6.73222 4.6099V4.65156H6.53222C4.80722 4.65156 3.63223 5.04323 2.92389 5.82656C2.09889 6.74323 2.12389 7.97656 2.20723 8.81823L2.21556 8.87656L2.27635 9.51484C2.29061 9.66462 2.37136 9.8 2.49736 9.88222C2.69941 10.0141 3.00915 10.2128 3.19889 10.3182C3.31556 10.3932 3.44056 10.4599 3.56556 10.5266C4.99056 11.3099 6.55723 11.8349 8.14889 12.0932C8.22389 12.8766 8.56556 13.7932 10.3906 13.7932C12.2156 13.7932 12.5739 12.8849 12.6322 12.0766C14.3322 11.8016 15.9739 11.2099 17.4572 10.3432C17.5072 10.3182 17.5406 10.2932 17.5822 10.2682C17.9024 10.0872 18.2343 9.86556 18.5389 9.64689C18.6521 9.56561 18.7243 9.43948 18.7397 9.30097L18.7489 9.21823L18.7906 8.82656C18.7989 8.77656 18.7989 8.7349 18.8072 8.67656C18.8739 7.8349 18.8572 6.6849 18.0739 5.81823ZM11.4072 11.5266C11.4072 12.4099 11.4072 12.5432 10.3822 12.5432C9.35722 12.5432 9.35722 12.3849 9.35722 11.5349V10.4849H11.4072V11.5266ZM7.92389 4.64323V4.6099C7.92389 3.19323 7.92389 2.66823 9.86556 2.66823H11.1322C13.0739 2.66823 13.0739 3.20156 13.0739 4.6099V4.65156H7.92389V4.64323Z" />
            <path d="M17.7589 11.5071C18.113 11.3397 18.5202 11.6203 18.4848 12.0103L18.1992 15.1563C18.0242 16.823 17.3409 18.523 13.6742 18.523H7.32422C3.65755 18.523 2.97422 16.823 2.79922 15.1646L2.52851 12.1868C2.49347 11.8014 2.89179 11.5213 3.24482 11.68C4.20402 12.1111 5.81603 12.8044 6.85201 13.0834C7.01602 13.1276 7.14917 13.2456 7.22357 13.3983C7.73777 14.4536 8.82696 15.0146 10.3909 15.0146C11.9394 15.0146 13.0419 14.432 13.558 13.3735C13.6326 13.2207 13.7656 13.1028 13.9297 13.0583C15.0315 12.7598 16.7528 11.9826 17.7589 11.5071Z" />
        </SvgIcon>
    );
};

export default Briefcase;
import React from 'react';

function SupportIcon(props: { isHover: boolean }) {
    const { isHover } = props;

    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={isHover ? '#05668D' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 15.7174H14.3667C13.7 15.7174 13.0667 15.9758 12.6 16.4424L11.175 17.8508C10.525 18.4925 9.46667 18.4925 8.81667 17.8508L7.39166 16.4424C6.925 15.9758 6.28333 15.7174 5.625 15.7174H5C3.61667 15.7174 2.5 14.6091 2.5 13.2425V4.15076C2.5 2.78409 3.61667 1.67578 5 1.67578H15C16.3833 1.67578 17.5 2.78409 17.5 4.15076V13.2425C17.5 14.6008 16.3833 15.7174 15 15.7174Z"
                stroke={isHover ? '#FFFAF1' : '#808080'}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5.83203 7.633C5.83203 6.858 6.46537 6.22461 7.24037 6.22461C8.01537 6.22461 8.6487 6.858 8.6487 7.633C8.6487 9.19966 6.42369 9.36633 5.93203 10.858C5.83203 11.1663 6.09036 11.4747 6.41536 11.4747H8.6487"
                stroke={isHover ? '#FFFAF1' : '#808080'}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M13.3635 11.4661V6.70777C13.3635 6.4911 13.2219 6.29939 13.0135 6.24105C12.8052 6.18272 12.5802 6.26605 12.4635 6.44939C11.8635 7.41605 11.2135 8.51606 10.6469 9.48273C10.5552 9.64106 10.5552 9.8494 10.6469 10.0077C10.7385 10.1661 10.9135 10.266 11.1052 10.266H14.1635"
                stroke={isHover ? '#FFFAF1' : '#808080'}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

export default SupportIcon;

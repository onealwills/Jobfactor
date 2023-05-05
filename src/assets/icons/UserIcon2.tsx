import React from 'react';

function UserIcon2(props: { isHover: boolean; isSelected: boolean }) {
    const { isHover, isSelected } = props;
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={isHover || isSelected ? '#05668D' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.63411 9.05768C7.55078 9.04935 7.45078 9.04935 7.35911 9.05768C5.37578 8.99102 3.80078 7.36602 3.80078 5.36602C3.80078 3.32435 5.45078 1.66602 7.50078 1.66602C9.54245 1.66602 11.2008 3.32435 11.2008 5.36602C11.1924 7.36602 9.61745 8.99102 7.63411 9.05768Z"
                stroke={isHover || isSelected ? '#05668D' : '#808080'}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M13.6747 3.33398C15.2914 3.33398 16.5914 4.64232 16.5914 6.25065C16.5914 7.82565 15.3414 9.10899 13.7831 9.16732C13.7164 9.15899 13.6414 9.15899 13.5664 9.16732"
                stroke={isHover || isSelected ? '#05668D' : '#808080'}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M3.46563 12.134C1.44896 13.484 1.44896 15.684 3.46563 17.0257C5.75729 18.559 9.51563 18.559 11.8073 17.0257C13.824 15.6757 13.824 13.4757 11.8073 12.134C9.52396 10.609 5.76562 10.609 3.46563 12.134Z"
                stroke={isHover || isSelected ? '#05668D' : '#808080'}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M15.2852 16.666C15.8852 16.541 16.4518 16.2993 16.9185 15.941C18.2185 14.966 18.2185 13.3577 16.9185 12.3827C16.4602 12.0327 15.9018 11.7993 15.3102 11.666"
                stroke={isHover || isSelected ? '#05668D' : '#808080'}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

export default UserIcon2;



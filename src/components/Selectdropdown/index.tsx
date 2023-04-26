import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const SelectDropdown = (props: PropTypes) => {
    const [value, setValue] = React.useState('');
    React.useEffect(() => {
        if (props.defaultValue) {
            setValue(props.defaultValue);
        } else {
            setValue('');
        }
    }, [props.defaultValue])
    return (
        <>
            <FormControl fullWidth>
                <InputLabel
                    disabled
                    variant={props.variant ?? 'filled'}
                    id="demo-simple-select-label"
                >
                    {props?.label}
                </InputLabel>
                <Select
                    disabled={props.disabled ?? false}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        props?.handleChange?.(e);
                    }}
                    variant={props?.variant ?? 'filled'}
                    sx={[
                        {
                            background: '#FAFAFA',
                            borderBottom: '1px solid #808080',
                            '& .MuiSelect-icon': {
                                width: '20px'
                            }
                        },
                        props.style
                    ]}
                >
                    {props?.options?.map((x: any) => (
                        <MenuItem key={x} value={x}>
                            {x}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};
interface PropTypes {
    handleChange?: (e: Object) => void;
    variant?: 'filled' | 'outlined' | 'standard';
    style: React.CSSProperties;
    options: string[];
    label?: string;
    defaultValue?: string;
    disabled?: boolean
}
export default SelectDropdown;

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectDropdown = (props) => {
    return (
        <>
            <FormControl sx={{ float: 'right' }}>
                <InputLabel disabled variant={props?.variant ?? 'filled'} id="demo-simple-select-label">{props?.label}</InputLabel>
                <Select
                    value={props.value}
                    onChange={props.handleChange}
                    variant={props?.variant ?? 'filled'}
                    sx={[{
                        background: "#FAFAFA",
                        borderBottom: "1px solid #808080",
                        '& .MuiSelect-icon':{
                            width:'20px'
                        }
                    }, props.style]}
                >
                    {props?.options?.map(x => <MenuItem value={x}>{x}</MenuItem>)}
                </Select>
            </FormControl>
        </>
    )
}

export default SelectDropdown
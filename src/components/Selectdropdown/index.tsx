import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectDropdown = (props: any) => {
    const [value, setValue] = React.useState('')
    return (
        <>
            <FormControl sx={{  }}>
                <InputLabel disabled variant={props?.variant ?? 'filled'} id="demo-simple-select-label">{props?.label}</InputLabel>
                <Select
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        props.handleChange(e)
                    }}
                    variant={props?.variant ?? 'filled'}
                    sx={[{
                        background: "#FAFAFA",
                        borderBottom: "1px solid #808080",
                        '& .MuiSelect-icon': {
                            width: '20px'
                        }
                    }, props.style]}
                >
                    {props?.options?.map((x: any) => <MenuItem key={x} value={x}>{x}</MenuItem>)}
                </Select>
            </FormControl>
        </>
    )
}

export default SelectDropdown
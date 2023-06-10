import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import CalendarFormIcon from '../../../assets/icons/CalendarFormIcon';

const Calendar = ({
    label = '',
    required = true,
    handleChange = (date: Dayjs | null) => {},
    disabled = false
}) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                component={'span'}
                sx={{
                    position: 'relative',
                    '.MuiInputBase-root': {
                        flexDirection: 'row-reverse'
                    }
                }}
            >
                <InputLabel
                    sx={{
                        color: '#747474',
                        fontSize: '14px',
                        position: 'absolute',
                        top: '5px',
                        left: '76px',
                        zIndex: 1,
                        fontFamily: 'Open Sans'
                    }}
                    required
                >
                    {label}
                </InputLabel>
                <DatePicker
                    disabled={disabled}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        handleChange(newValue);
                    }}
                    components={{
                        OpenPickerIcon: CalendarFormIcon
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            variant="filled"
                            sx={{
                                '& 	.MuiInputBase-input': {
                                    ml: '10px',
                                    position: 'relative'
                                },
                                '& .MuiInputBase-root::before': {
                                    borderBottom: 0
                                },
                                '& .MuiInputBase-root::after': {
                                    borderBottom: 0
                                },
                                '& .MuiInputBase-root': {
                                    backgroundColor: '#FCFBF8',
                                    width: '100%',
                                    height: '70px',
                                    fontFamily: 'open sans',
                                    color: '#23282B',
                                    borderBottom: '1px solid #D9D9D9'
                                }
                            }}
                        />
                    )}
                />
            </Box>
        </LocalizationProvider>
    );
};

export default Calendar;

import { Box, InputLabel, InputBase, Typography } from '@mui/material';
import Header from '../JobPreference/Header';
import { Controller, useForm } from 'react-hook-form';
import Person2Icon from '@mui/icons-material/Person2';



const JobPreference = () => {

    interface ILoginForm {
        username?: string;
    }
    const {
        control,
    } = useForm<ILoginForm>();

    const JobTitle = () => {
        return (
            <Box sx={{ position: 'relative', backgroundColor: '#FFFAF1' }}>
                <InputLabel
                    sx={{
                        color: '#808080',
                        fontSize: '14px',
                        position: 'absolute',
                        top: '8px',
                        left: '80px',
                        zIndex: 1,
                        fontFamily: 'Open Sans'
                    }}
                    htmlFor="text"
                >
                    Job Title
                </InputLabel>
                <Controller
                    name="username"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                        formState
                    }) => (
                        <InputBase
                            required
                            onChange={onChange}
                            inputProps={{
                                autoComplete: '',
                                form: {
                                    autoComplete: 'off'
                                },
                                inputMode: 'text'
                            }}
                            id="username"
                            placeholder="Enter your email address"
                            startAdornment={
                                <>
                                    <Person2Icon />
                                    <Typography sx={{margin:'0 10px' , color:'#D9D9D9'}}>|</Typography>
                                </>
                            }
                            endAdornment={
                                <Person2Icon />
                            }
                            rows={1}
                            sx={{
                                width: '100%',
                                height: '70px',
                                padding: '0px 16px',
                                fontFamily: 'open sans',
                                color: '#23282B',
                                borderBottom:
                                    '1px solid #D9D9D9',
                                '& 	.MuiInputBase-input': {
                                    ml: '10px',
                                    position: 'relative',
                                    top: '8px'
                                }
                            }}
                        />
                    )}
                />
            </Box>
        )
    }

    return (
        <Box
            sx={{
                marginLeft: '15px'
            }}
        >
            <Header />
            <Box sx={{ padding: '20px', backgroundColor: '#fff', marginTop: '20px' }}>
                <JobTitle />
            </Box>
        </Box>
    );
}

export default JobPreference;

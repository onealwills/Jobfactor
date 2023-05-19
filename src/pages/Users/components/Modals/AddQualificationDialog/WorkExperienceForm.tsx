import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import { Controller, useForm } from 'react-hook-form';
import CalendarFormIcon from '../../../../../assets/icons/CalendarFormIcon';
import AddIcon from '@mui/icons-material/Add';
import CommonRadioDropdown from '../../../../common/CommonRadioDropdown';
import { Employment } from '../../../types/Employment';

const WorkExperienceForm = () => {
    const {
        control,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm();

    return (
        <>
            <Box sx={{ position: 'relative' }} >
                <InputLabel
                    sx={{
                        color: '#808080',
                        fontSize: '14px',
                        position: 'absolute',
                        top: '8px',
                        left: '16px',
                        zIndex: 1,
                        fontFamily: 'Open Sans'
                    }}
                    htmlFor="phone"
                >
                    Job title
                    <Typography
                        ml={.25}
                        component="span"
                        color="#363636"
                        fontSize={14}
                        fontWeight={600}
                    >
                        *
                    </Typography>
                </InputLabel>
                {/* Email Address Input */}
                <Controller
                    name="emailAddress"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                        formState
                    }) => (
                        <InputBase
                            required
                            onChange={onChange}
                            error={!!errors?.emailAddress}
                            inputProps={{
                                autoComplete: '',
                                form: {
                                    autoComplete: 'off'
                                },
                                inputMode: 'email'
                            }}
                            id="email"
                            rows={1}
                            sx={{
                                backgroundColor: '#FCFBF8',
                                width: '100%',
                                height: '70px',
                                padding: '0px 16px',
                                fontFamily: 'open sans',
                                color: '#23282B',
                                borderBottom: '1px solid #D9D9D9',
                                mb: '20px',
                                '& 	.MuiInputBase-input': {
                                    position: 'relative',
                                    top: '8px'
                                }
                            }}
                        />
                    )}
                />
            </Box>

            <CommonRadioDropdown
                options={[
                    {label: 'Full Time', value: Employment.FullTime},
                    {label: 'Part Time', value: Employment.PartTime},
                    {label: 'Contract', value: Employment.Contract},
                    {label: 'Freelance', value: Employment.Freelance},
                    {label: 'Internship', value: Employment.Internship},
                ]}
                label={
                    <>
                        Job title
                            <Typography
                                ml={.25}
                                component="span"
                                color="#363636"
                                fontSize={14}
                                fontWeight={600}
                            >
                                *
                            </Typography>
                    </>
                }
                placeholder="Please select"

            />

            <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                    mb: 2.5,
                    width: 'auto',
                    backgroundColor: '#F2F2F2',
                    color: '#05668D',
                }}
            >
                <Typography
                    fontSize={14}
                    fontWeight={600}
                >
                    Add Media
                </Typography>
            </Button>

            <Typography
                fontSize={14}
            >
                Add or link to external documents, photos, sites, videos, and presentations.
            </Typography>
        </>
    );
};

export default WorkExperienceForm;
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
import { Grid } from '@mui/material';
import { EMPLOYMENT_TYPE_OPTIONS } from '../../../constants';

const WorkExperienceForm = () => {
    const {
        control,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm();

    return (
        <>
            <Box sx={{ position: 'relative' }}>
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
                        ml={0.25}
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
                options={EMPLOYMENT_TYPE_OPTIONS}
                label={
                    <>
                        Employment type
                        <Typography
                            ml={0.25}
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

            <Box sx={{ position: 'relative' }}>
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
                    Company name
                    <Typography
                        ml={0.25}
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

            <Box sx={{ position: 'relative' }}>
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
                    Company email
                    <Typography
                        ml={0.25}
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

            <Grid container gap={4}>
                <Grid item flexGrow={1}>
                    <CommonRadioDropdown
                        options={EMPLOYMENT_TYPE_OPTIONS}
                        label={
                            <>
                                Location
                                <Typography
                                    ml={0.25}
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
                </Grid>
                <Grid item flexGrow={1}>
                    <CommonRadioDropdown
                        options={EMPLOYMENT_TYPE_OPTIONS}
                        label={
                            <>
                                Location type
                                <Typography
                                    ml={0.25}
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
                </Grid>
            </Grid>

            <Grid container gap={0.5} alignItems="center">
                <Box sx={{ position: 'relative' }} flexGrow={1}>
                    <InputLabel
                        sx={{
                            color: '#808080',
                            fontSize: '14px',
                            position: 'absolute',
                            top: '8px',
                            left: '72px',
                            zIndex: 1,
                            fontFamily: 'Open Sans'
                        }}
                        htmlFor="phone"
                    >
                        Description
                        <Typography
                            ml={0.25}
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
                                startAdornment={<CalendarFormIcon />}
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
                                        ml: '20px',
                                        position: 'relative',
                                        top: '8px'
                                    }
                                }}
                            />
                        )}
                    />
                </Box>

                <Box
                    width={24}
                    height={0}
                    mb={1.5}
                    borderBottom="1px solid #D9D9D9"
                />

                <Box sx={{ position: 'relative' }} flexGrow={1}>
                    <InputLabel
                        sx={{
                            color: '#808080',
                            fontSize: '14px',
                            position: 'absolute',
                            top: '8px',
                            left: '72px',
                            zIndex: 1,
                            fontFamily: 'Open Sans'
                        }}
                        htmlFor="phone"
                    >
                        Field of study
                        <Typography
                            ml={0.25}
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
                                startAdornment={<CalendarFormIcon />}
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
                                        ml: '20px',
                                        position: 'relative',
                                        top: '8px'
                                    }
                                }}
                            />
                        )}
                    />
                </Box>
            </Grid>

            <Box sx={{ position: 'relative' }}>
                <InputLabel
                    sx={{
                        color: '#808080',
                        fontSize: '14px',
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        zIndex: 1,
                        fontFamily: 'Open Sans'
                    }}
                    htmlFor="phone"
                >
                    Field of study
                    <Typography
                        ml={0.25}
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
                            multiline
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
                            rows={5}
                            sx={{
                                backgroundColor: '#FCFBF8',
                                width: '100%',
                                p: '16px',
                                pt: '40px',
                                fontFamily: 'open sans',
                                color: '#23282B',
                                borderBottom: '1px solid #D9D9D9',
                                mb: '20px'
                            }}
                        />
                    )}
                />
            </Box>

            <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                    mb: 2.5,
                    width: 'auto',
                    backgroundColor: '#F2F2F2',
                    color: '#05668D'
                }}
            >
                <Typography fontSize={14} fontWeight={600}>
                    Add Media
                </Typography>
            </Button>

            <Typography fontSize={14}>
                Add or link to external documents, photos, sites, videos, and
                presentations.
            </Typography>
        </>
    );
};

export default WorkExperienceForm;

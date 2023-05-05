import { Box, InputLabel, InputBase, Typography, duration } from '@mui/material';
import Header from '../JobPreference/Header';
import { Controller, useForm } from 'react-hook-form';
import UserIcon3 from '../../../assets/icons/UserIcon3';
import BriefCaseIcon from '../../../assets/icons/BriefCaseIcon';
import MoneyIcon from '../../../assets/icons/MoneyIcon';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const JobPreference = () => {
    interface FormFieldsProps {
        jobtittle?: string;
        jobtype?: string;
        salary?: string;
        duration?: string;
    }

    const [selectedtypes, setSelectedTypes] = useState<string[]>([])
    const [selectedduration, setSelectedDuration] = useState<string>('')
    const [showtypes, setShowTypes] = useState<boolean>(false)
    const [showduration, setShowDuration] = useState<boolean>(false)
    const [tittle, setTittle] = useState<string>('')
    const [salary, setSalary] = useState<string>('')

    const JobTypes = [
        { 'name': 'Full-time' },
        { 'name': 'Part-time' },
        { 'name': 'Temporary' },
        { 'name': 'Contract' },
        { 'name': 'Internship' },
        { 'name': 'New graduate ' },
    ]

    const DurationList = [
        { 'name': 'Per hour' },
        { 'name': 'Per day' },
        { 'name': 'Per week' },
        { 'name': 'Per month' },
        { 'name': 'Per year' },
    ]

    const {
        control,
    } = useForm<FormFieldsProps>();

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let check = event.target.checked
        if (check === true) {
            setSelectedTypes([...selectedtypes, event.target.name])
        }
        else {
            let filter = selectedtypes?.filter(x => x != event.target.name)
            if (filter != null && filter != undefined) {
                setSelectedTypes(filter)
            }
        }
    };

    const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDuration(event.target.value)
        setShowDuration(false)
    };

    const Jobtittle = () => {
        return (
            <>
                <Box sx={{ position: 'relative', backgroundColor: '#FFFAF1', width: '100%' }}>
                    <InputLabel
                        sx={{
                            color: '#808080',
                            fontSize: '14px',
                            position: 'absolute',
                            top: '8px',
                            left: '75px',
                            zIndex: 1,
                            fontFamily: 'Open Sans'
                        }}
                        htmlFor="text"
                    >
                        Job tittle
                    </InputLabel>
                    <Controller
                        name="jobtittle"
                        control={control}
                        render={({
                            field: { onChange, value }
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
                                id="jobtittle"
                                defaultValue={tittle}
                                placeholder="Value"
                                startAdornment={
                                    <>
                                        <UserIcon3 />
                                        <Typography sx={{ margin: '0 10px', color: '#D9D9D9' }}>|</Typography>
                                    </>
                                }
                                endAdornment={
                                    <Box onClick={() => { setTittle('') }}>
                                        <CloseIcon style={{ color: '#494949', cursor: 'pointer' }} />
                                    </Box>
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
                <Typography sx={{ fontSize: '12px', color: '#433C37', marginBottom: '20px', marginTop: '5px' }}>This is a hint message</Typography>
            </>
        )
    }

    const JobType = () => {
        return (
            <>
                <Box sx={{ position: 'relative', backgroundColor: '#FFFAF1', width: '100%' }}>
                    <InputLabel
                        sx={{
                            color: '#808080',
                            fontSize: '14px',
                            position: 'absolute',
                            top: '8px',
                            left: '75px',
                            zIndex: 1,
                            fontFamily: 'Open Sans'
                        }}
                        htmlFor="text"
                    >
                        Job Type
                    </InputLabel>
                    <Controller
                        name="jobtype"
                        control={control}
                        render={({
                            field: { onChange, value }
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
                                id="jobtype"
                                onFocus={() => { setShowTypes(true) }}
                                onBlur={() => { setShowTypes(false) }}
                                onClick={() => { !showtypes ? setShowTypes(true) : setShowTypes(false) }}
                                placeholder="Value"
                                disabled={true}
                                startAdornment={
                                    <>
                                        <BriefCaseIcon isHover={false} isSelected={false} />
                                        <Typography sx={{ margin: '0 10px', color: '#D9D9D9' }}>|</Typography>
                                    </>
                                }
                                endAdornment={
                                    <CloseIcon style={{ color: '#494949', cursor: 'pointer' }} />
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
                {!showtypes &&
                    <Typography sx={{ fontSize: '12px', color: '#433C37', marginBottom: '20px', marginTop: '5px' }}>This is a hint message</Typography>
                }
                {(selectedtypes?.length > 0 && !showtypes) &&
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <FormControlLabel
                            control={<Checkbox checked={true} onChange={(e) => { }} />}
                            label={''}
                            sx={{
                                margin: '0px',
                            }}
                        />
                        <Typography sx={{ marginLeft: '5px', fontSize: '16px', color: '#D9D9D9', marginRight: '20px' }} >|</Typography>
                        {selectedtypes?.map((item: string) => {
                            return (
                                <Typography sx={{ fontSize: '15px', width: 'fit-content', padding: '5px', minWidth: '120px', border: '1px solid #CCC', borderRadius: '5px', textAlign: 'center', marginRight: '20px' }}>{item}</Typography>
                            )
                        })}
                    </Box>
                }
                {showtypes &&
                    <Box sx={{ backgroundColor: '#FCFBF8', padding: '20px', margin: '10px 0' }} >
                        {JobTypes?.map((item: any, index: number) => {
                            return (
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', borderBottom: '1px solid #D9D9D9', padding: '5px 0', paddingTop: '5px', color: '#808080' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={selectedtypes.includes(item?.name) ? true : false} onChange={(e) => { handleTypeChange(e) }} name={item?.name} />}
                                        label={''}
                                        sx={{
                                            margin: '0px',
                                        }}
                                    />
                                    <Typography sx={{ marginLeft: '5px', fontSize: '16px', color: '#D9D9D9' }} >|</Typography>
                                    <Typography sx={{ marginLeft: '15px', fontSize: '16px', color: '#808080' }} >{item?.name}</Typography>
                                </Box>
                            )
                        })}
                    </Box>
                }
            </>
        )
    }

    const Salary = () => {
        return (
            <>
                <Box sx={{ position: 'relative', backgroundColor: '#FFFAF1', width: '100%' }}>
                    <InputLabel
                        sx={{
                            color: '#808080',
                            fontSize: '14px',
                            position: 'absolute',
                            top: '8px',
                            left: '75px',
                            zIndex: 1,
                            fontFamily: 'Open Sans'
                        }}
                        htmlFor="text"
                    >
                        Minimum Salary/Wages
                    </InputLabel>
                    <Controller
                        name="salary"
                        control={control}
                        render={({
                            field: { onChange, value }
                        }) => (
                            <InputBase
                                required
                                onChange={onChange}
                                inputProps={{
                                    autoComplete: '',
                                    form: {
                                        autoComplete: 'off'
                                    },
                                    inputMode: 'numeric'
                                }}
                                defaultValue={salary}
                                id="salary"
                                placeholder="Value"
                                startAdornment={
                                    <>
                                        <MoneyIcon />
                                        <Typography sx={{ margin: '0 10px', color: '#D9D9D9' }}>|</Typography>
                                    </>
                                }
                                endAdornment={
                                    <Box onClick={() => { setSalary('') }}>
                                        <CloseIcon style={{ color: '#494949', cursor: 'pointer' }} />
                                    </Box>
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
                <Typography sx={{ fontSize: '12px', color: '#433C37', marginBottom: '20px', marginTop: '5px' }}>This is a hint message</Typography>
            </>
        )
    }

    const Duration = () => {
        return (
            <>
                <Box sx={{ position: 'relative', backgroundColor: '#FFFAF1', width: '100%' }}>
                    <InputLabel
                        sx={{
                            color: '#808080',
                            fontSize: '14px',
                            position: 'absolute',
                            top: '8px',
                            left: '75px',
                            zIndex: 1,
                            fontFamily: 'Open Sans'
                        }}
                        htmlFor="text"
                    >
                        Pay Duration
                    </InputLabel>
                    <Controller
                        name="duration"
                        control={control}
                        render={({
                            field: { onChange, value }
                        }) => (
                            <InputBase
                                required
                                defaultValue={selectedduration}
                                onChange={onChange}
                                inputProps={{
                                    autoComplete: '',
                                    form: {
                                        autoComplete: 'off'
                                    },
                                    inputMode: 'numeric'
                                }}
                                id="duration"
                                onFocus={() => { setShowDuration(true) }}
                                onBlur={() => { setShowDuration(false) }}
                                disabled={true}
                                onClick={() => { !showduration ? setShowDuration(true) : setShowDuration(false) }}
                                placeholder="Value"
                                startAdornment={
                                    <>
                                        <BriefCaseIcon isHover={false} isSelected={false} />
                                        <Typography sx={{ margin: '0 10px', color: '#D9D9D9' }}>|</Typography>
                                    </>
                                }
                                endAdornment={
                                    <CloseIcon style={{ color: '#494949' }} />
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
                {!showduration &&
                    <Typography sx={{ fontSize: '12px', color: '#433C37', marginBottom: '20px', marginTop: '5px' }}>This is a hint message</Typography>
                }
                {showduration &&
                    <Box sx={{ backgroundColor: '#FCFBF8', padding: '20px', margin: '10px 0' }} >
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={selectedduration}
                            onChange={(e) => { handleDurationChange(e) }}
                            name="radio-buttons-group"
                        >
                            {DurationList?.map((item: any, index: number) => {
                                return (
                                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', borderBottom: '1px solid #D9D9D9', padding: '5px 0', paddingTop: '5px', color: '#808080' }}>
                                        <FormControlLabel
                                            control={<Radio value={item?.name} name={item?.name} />}
                                            label={''}
                                            sx={{
                                                margin: '0px',
                                            }}
                                        />
                                        <Typography sx={{ marginLeft: '5px', fontSize: '16px', color: '#D9D9D9' }} >|</Typography>
                                        <Typography sx={{ marginLeft: '15px', fontSize: '16px', color: '#808080' }} >{item?.name}</Typography>
                                    </Box>
                                )
                            })}
                        </RadioGroup>
                    </Box>
                }
            </>
        )
    }

    return (
        <Box
            sx={{
                marginLeft: '15px',
                width:'80%'
            }}
        >
            <Header />
            <Box sx={{ padding: '20px', backgroundColor: '#fff', marginTop: '20px' }}>
                <Jobtittle />
                <JobType />
                <Salary />
                <Duration />
            </Box>
        </Box>
    );
}

export default JobPreference;

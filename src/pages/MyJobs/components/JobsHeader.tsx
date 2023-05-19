import React, { ChangeEvent, useState, Dispatch, SetStateAction } from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    IconButton,
    Menu,
    Radio,
    Typography
} from '@mui/material';
import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';
import { JobsFilterIcon } from '../../../assets/icons/JobsFilterIcon';
import FormControl from '@mui/material/FormControl';
import ArrowDown from '../../../assets/icons/ArrowDown';
import CancelIcon from '@mui/icons-material/Cancel';
import Checked from '../../../assets/icons/Checked';
import UnChecked from '../../../assets/icons/UnChecked';
import '../style.css';

const JobsHeader = (props: { title: string }) => {
    const { title } = props;
    const [locationType, setLocationType] = useState<Array<string>>([
        'on-site'
    ]);
    const [sortBy, setSortBy] = useState<string>('most recent');
    const [jobType, setJobType] = useState<Array<string>>(['full-time']);
    const [datePosted, setDatePosted] = useState<string>('any time');
    const [showMenu, setShowMenu] = useState<null | HTMLElement>(null);

    const radioItems = [
        {
            title: 'Sort by',
            options: ['Most recent', 'Most relevant'],
            state: sortBy,
            setState: setSortBy
        },
        {
            title: 'Date Posted',
            options: ['Past 24 hours', 'Past week', 'Past month', 'Any time'],
            state: datePosted,
            setState: setDatePosted
        }
    ];
    const checkboxItems = [
        {
            title: 'Job type',
            options: [
                'Full-time',
                'Temporary',
                'Permanent',
                'New grad',
                'Part-time',
                'Contract',
                'Internship'
            ],
            state: jobType,
            setState: setJobType
        },
        {
            title: 'Location type',
            options: ['On-site', 'Remote', 'Hybrid'],
            state: locationType,
            setState: setLocationType
        }
    ];
    const handleClose = () => {
        setShowMenu(null);
    };

    const handleAllFilters = (
        e: ChangeEvent<HTMLInputElement> | null,
        setState: Dispatch<SetStateAction<string>>,
        value: string
    ) => {
        if (e?.target.checked) {
            setState(value);
        } else {
            setState('');
        }
    };
    const handleCheckBoxSelect = (
        e: ChangeEvent<HTMLInputElement> | null,
        state: string[],
        setState: Dispatch<SetStateAction<Array<string>>>,
        value: string
    ) => {
        if (value === '') {
            setState([]);
            return;
        }
        if (e?.target.checked) {
            setState([...state, value]);
        } else {
            setState(state.filter((x) => x !== value));
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    gap: 4
                }}
            >
                <ArrowLeftIcon />
                <Typography variant="headlineMediumSemiBold" color="#23282B">
                    {title}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    '& .MuiFormControl-root': {
                        minWidth: 'auto'
                    },
                    '& svg': { width: '37px' }
                }}
            >
                <SelectDropdown
                    label="Date Posted"
                    defaultValue="any time"
                    options={[
                        'Past 24 hours',
                        'Past week',
                        'Past month',
                        'Any time'
                    ]}
                    style={{ width: '141px', height: '50px' }}
                    handleChange={(
                        e: ChangeEvent<HTMLInputElement> | null,
                        value: string
                    ) => handleAllFilters(e, setDatePosted, value)}
                />
                <SelectDropdown
                    label="Location Type"
                    defaultValue="on-site"
                    options={['On-site', 'Remote', 'Hybrid']}
                    style={{ width: '149px', height: '50px' }}
                    handleChange={(
                        e: ChangeEvent<HTMLInputElement> | null,
                        value: string
                    ) =>
                        handleCheckBoxSelect(
                            e,
                            locationType,
                            setLocationType,
                            value
                        )
                    }
                    multiple={true}
                />
                <SelectDropdown
                    label="Job Type"
                    defaultValue={'full-time'}
                    options={[
                        'Full-time',
                        'Temporary',
                        'Permanent',
                        'New grad',
                        'Part-time',
                        'Contract',
                        'Internship'
                    ]}
                    style={{ width: '111px', height: '50px' }}
                    multiple={true}
                    handleChange={(
                        e: ChangeEvent<HTMLInputElement> | null,
                        value: string
                    ) => handleCheckBoxSelect(e, jobType, setJobType, value)}
                />
                <IconButton
                    onClick={({ currentTarget }) => setShowMenu(currentTarget)}
                    sx={{ p: 0, m: 0 }}
                >
                    <JobsFilterIcon />
                </IconButton>
            </Box>
            <Menu
                open={Boolean(showMenu)}
                anchorEl={showMenu}
                onClose={handleClose}
                className="allFilters_menu"
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '14px 20px',
                        gap: '8px',
                        background: '#FFFFFF',
                        borderBottom: '2px solid #D9D9D9',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Open Sans',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '28px',
                            color: '#23282B'
                        }}
                    >
                        All Filters
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CancelIcon />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        maxHeight: '560px',
                        overflow: 'auto'
                    }}
                >
                    {radioItems.map((item) => (
                        <Box
                            sx={{
                                padding: '24px 20px 16px',
                                border: '1px solid #D9D9D9'
                            }}
                        >
                            <FormControl sx={{ width: '100%' }}>
                                <FormLabel
                                    sx={{
                                        fontFamily: 'Open Sans',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        letterSpacing: '0.0015em',
                                        color: '#23282B',
                                        mb: '14px'
                                    }}
                                >
                                    {item.title}
                                </FormLabel>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    {item.options.map((x) => (
                                        <Box
                                            sx={{
                                                width: '50%',
                                                minWidth: '50%'
                                            }}
                                        >
                                            <FormControlLabel
                                                control={
                                                    <Radio
                                                        sx={{
                                                            color:
                                                                item.state ===
                                                                x.toLowerCase()
                                                                    ? '#05668D !important'
                                                                    : '#808080 !important'
                                                        }}
                                                        onChange={(e) =>
                                                            handleAllFilters(
                                                                e,
                                                                item?.setState,
                                                                x.toLowerCase()
                                                            )
                                                        }
                                                        checked={
                                                            item.state ===
                                                            x.toLowerCase()
                                                        }
                                                    />
                                                }
                                                label={x}
                                                sx={{
                                                    letterSpacing: '0.0015em',
                                                    fontWeight:
                                                        item.state ===
                                                        x.toLowerCase()
                                                            ? '600 !important'
                                                            : '400',
                                                    color:
                                                        item.state ===
                                                        x.toLowerCase()
                                                            ? '#494949'
                                                            : '#808080'
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </FormControl>
                        </Box>
                    ))}
                    {checkboxItems.map((item) => (
                        <Box
                            sx={{
                                padding: '24px 20px 16px',
                                border: '1px solid #D9D9D9'
                            }}
                        >
                            <FormControl sx={{ width: '100%' }}>
                                <FormLabel
                                    sx={{
                                        fontFamily: 'Open Sans',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        letterSpacing: '0.0015em',
                                        color: '#23282B',
                                        mb: '14px'
                                    }}
                                >
                                    {item.title}
                                </FormLabel>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    {item.options.map((x) => (
                                        <Box
                                            sx={{
                                                width: '50%',
                                                minWidth: '50%'
                                            }}
                                        >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checkedIcon={
                                                            <Checked />
                                                        }
                                                        icon={<UnChecked />}
                                                        sx={{
                                                            color: item.state.includes(
                                                                x.toLowerCase()
                                                            )
                                                                ? '#05668D !important'
                                                                : '#808080 !important'
                                                        }}
                                                        onChange={(e) =>
                                                            handleCheckBoxSelect(
                                                                e,
                                                                item.state,
                                                                item?.setState,
                                                                x.toLowerCase()
                                                            )
                                                        }
                                                        checked={item.state.includes(
                                                            x.toLowerCase()
                                                        )}
                                                    />
                                                }
                                                label={x}
                                                sx={{
                                                    letterSpacing: '0.0015em',
                                                    fontWeight:
                                                        item.state.includes(
                                                            x.toLowerCase()
                                                        )
                                                            ? '600 !important'
                                                            : '400',
                                                    color: item.state.includes(
                                                        x.toLowerCase()
                                                    )
                                                        ? '#494949'
                                                        : '#808080'
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </FormControl>
                        </Box>
                    ))}
                </Box>
                <Box
                    sx={{
                        pt: '16px',
                        background: '#FFFAF1',
                        borderTop: '0.5px solid #808080',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px',
                        gap: '16px'
                    }}
                >
                    <Button
                        sx={{
                            background: '#FAFAFA',
                            border: '1px solid #05668D',
                            borderRadius: '8px',
                            padding: '14px 16px',
                            fontFamily: 'Open Sans',
                            fontWeight: '600',
                            fontSize: '12px',
                            lineHeight: '16px',
                            textTransform: 'capitalize',
                            letterSpacing: '0.005em',
                            color: '#05668D'
                        }}
                        onClick={() => {
                            setSortBy('most recent');
                            setDatePosted('any time');
                            setLocationType(['on-site']);
                            setJobType(['full-time']);
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        sx={{
                            background: '#05668D',
                            borderRadius: '8px',
                            padding: '14px 16px',
                            fontFamily: 'Open Sans',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            letterSpacing: '0.001em',
                            color: '#FFFF',
                            flex: 1,
                            textTransform: 'capitalize',
                            '&:hover': {
                                background: '#05668D'
                            }
                        }}
                        onClick={() => setShowMenu(null)}
                    >
                        Show results
                    </Button>
                </Box>
            </Menu>
        </Box>
    );
};

interface PropTypes {
    handleChange: (
        e: ChangeEvent<HTMLInputElement> | null,
        value: string
    ) => void;
    variant?: 'filled' | 'outlined' | 'standard';
    style: React.CSSProperties;
    options: string[];
    label?: string;
    multiple?: boolean;
    defaultValue?: string;
}
const SelectDropdown = (props: PropTypes) => {
    const [value, setValue] = React.useState<string | null>(null);
    const [values, setValues] = React.useState<Array<string>>([]);
    const [showMenu, setShowMenu] = React.useState<null | HTMLElement>(null);

    const handleClose = () => {
        setShowMenu(null);
    };
    React.useEffect(() => {
        if (props?.defaultValue) {
            setValue(props?.defaultValue);
        }
    }, [props?.defaultValue]);

    return (
        <>
            <Box
                sx={[
                    {
                        background: '#FAFAFA',
                        borderBottom: '1px solid #808080',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        padding: '8px 12px'
                    },
                    props.style
                ]}
                onClick={({ currentTarget }) => setShowMenu(currentTarget)}
            >
                <Typography
                    sx={{
                        fontFamily: 'Open Sans',
                        fontSize: '14px',
                        letterSpacing: '0.005em',
                        color: '#23282B',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {props?.label}
                </Typography>
                <ArrowDown />
            </Box>
            <Menu
                open={Boolean(showMenu)}
                anchorEl={showMenu}
                onClose={handleClose}
            >
                <Box
                    sx={{
                        padding: '24px 20px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '15px'
                    }}
                >
                    {props.options.map((x) => (
                        <FormControlLabel
                            control={
                                props?.multiple ? (
                                    <Checkbox
                                        sx={{
                                            color: values.includes(
                                                x.toLowerCase()
                                            )
                                                ? '#05668D !important'
                                                : '#808080 !important'
                                        }}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setValues([
                                                    ...values,
                                                    x.toLowerCase()
                                                ]);
                                            } else {
                                                setValues(
                                                    values.filter(
                                                        (y) => y !== x
                                                    )
                                                );
                                            }
                                            props.handleChange(e, x);
                                        }}
                                        checked={values.includes(
                                            x.toLowerCase()
                                        )}
                                        checkedIcon={<Checked />}
                                        icon={<UnChecked />}
                                    />
                                ) : (
                                    <Radio
                                        sx={{
                                            color:
                                                value === x.toLowerCase()
                                                    ? '#05668D !important'
                                                    : '#808080 !important'
                                        }}
                                        onChange={(e) => {
                                            setValue(x.toLowerCase());
                                            props.handleChange(e, x);
                                        }}
                                        checked={value === x.toLowerCase()}
                                    />
                                )
                            }
                            label={x}
                            sx={{
                                letterSpacing: '0.0015em',
                                fontWeight:
                                    value === x.toLowerCase()
                                        ? '600 !important'
                                        : '400',
                                color:
                                    value === x.toLowerCase()
                                        ? '#494949'
                                        : '#808080'
                            }}
                        />
                    ))}
                </Box>
                <Box
                    sx={{
                        pt: '16px',
                        background: '#FFFAF1',
                        borderTop: '0.5px solid #808080',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px',
                        gap: '16px'
                    }}
                >
                    <Button
                        sx={{
                            background: '#FAFAFA',
                            border: '1px solid #05668D',
                            borderRadius: '8px',
                            padding: '14px 16px',
                            fontFamily: 'Open Sans',
                            fontWeight: '600',
                            fontSize: '12px',
                            lineHeight: '16px',
                            textTransform: 'capitalize',
                            letterSpacing: '0.005em',
                            color: '#05668D'
                        }}
                        onClick={() => {
                            setValue(props.defaultValue ?? '');
                            setValues([]);
                            props.handleChange(null, props.defaultValue ?? '');
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        sx={{
                            background: '#05668D',
                            borderRadius: '8px',
                            padding: '14px 16px',
                            fontFamily: 'Open Sans',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            letterSpacing: '0.001em',
                            color: '#FFFF',
                            flex: 1,
                            textTransform: 'capitalize',
                            '&:hover': {
                                background: '#05668D'
                            }
                        }}
                        onClick={() => setShowMenu(null)}
                    >
                        Show results
                    </Button>
                </Box>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: '24px',
                        right: '18px'
                    }}
                >
                    <CancelIcon />
                </IconButton>
            </Menu>
        </>
    );
};

export default JobsHeader;

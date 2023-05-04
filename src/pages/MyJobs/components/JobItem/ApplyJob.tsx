import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, IconButton, InputBase } from '@mui/material';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import profile from '../../../../assets/images/profile.png';
import Edit from '../../../../assets/icons/Edit';
import Cancel from '../../../../assets/icons/Cancel';
import LogoIcon from '../../../../assets/icons/LogoIcon';
import Mail from '../../../../assets/icons/Mail';
import Phone from '../../../../assets/icons/Phone';
import Birthday from '../../../../assets/icons/Birthday';
import Location from '../../../../assets/icons/Location';
import Delete from '../../../../assets/icons/Delete';
import AddIcon from '@mui/icons-material/Add';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';


const modalstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    border: 0,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    maxHeight: 800,
    overflowY: 'auto',

};

interface ApplyJobProps {
    showmoadl: boolean,
    Hidemodal: (e?: any) => void
}

const ApplyJob = ({ showmoadl, Hidemodal }: ApplyJobProps) => {

    const [progress, setProgress] = useState<number>(25);
    const [showall, setShowAll] = useState<boolean>(false);

    useEffect(() => {
        setProgress(25)
        setShowAll(false)
    }, [showmoadl])

    const ProgressBar = () => {

        const ProgressBarLiner = styled(LinearProgress)(({ theme }) => ({
            height: 10,
            borderRadius: 5,
            [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: '#FFF7E8'
            },
            [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: '#FFC24C',
            },
        }
        ));

        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ width: '95%' }}>
                    <ProgressBarLiner variant="determinate" value={progress} />
                </Box>
                <Box sx={{ minWidth: 30, textAlign: 'right' }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
                </Box>
            </Box>
        )
    }

    const ContactInfo = () => {
        return (
            <>
                <Box sx={{ display: 'flex', width: '100%', marginTop: '20px' }}>
                    <Box>
                        <img height={80} width={80} src={profile} alt="icon" style={{ borderRadius: 100 }} />
                    </Box>
                    <Box sx={{ marginLeft: '15px' }} >
                        <p style={{ marginBottom: '4px', marginTop: 0, fontSize: '16px', fontWeight: '700' }}>{'Ronald Richards'}</p>
                        <p style={{ marginBottom: '4px', marginTop: 0, fontSize: '16px', fontWeight: '400' }}>{'Product Designer'}</p>
                        <p style={{ marginBottom: '4px', marginTop: 0, fontSize: '14px', fontWeight: '400', color: '#808080' }}>{'Austin , USA'}</p>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '24px', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <Box>
                        <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#23282B' }}>{'Contact Info'}</p>
                    </Box>
                    {!showall ?
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                gap: '4px',
                                fontSize: '14px',
                                color: '#05668D',
                                fontWeight: '700',
                                backgroundColor: '#FCFBF8',
                                borderRadius: "8px",
                                padding: '0 12px'
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="photo"
                                disabled={true}
                            >
                                <Edit />
                            </IconButton>
                            Edit
                        </Box>
                        :
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                gap: '12px',
                                fontSize: '14px',
                                color: '#05668D',
                                fontWeight: '700',
                                backgroundColor: '#FCFBF8',
                                borderRadius: "8px",
                                padding: '0 12px'
                            }}
                        >
                            Edit
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="photo"
                                disabled={true}
                            >
                                <Edit />
                            </IconButton>
                        </Box>
                    }
                </Box>
                <Box sx={{ width: '100%', marginTop: '12px' }}>
                    <Box sx={{ marginBottom: '15px', display: 'flex', width: '100%' }}>
                        <Box sx={{ width: '40px' }}>
                            <LogoIcon />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p style={{ margin: 0, marginBottom: '8px', fontSize: '16px', fontWeight: '600', color: '#23282B' }}>{'Yoour Profile'}</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#055C7F' }}>{'https://RonaldRichards.info'}</p>
                        </Box>
                    </Box>
                    <Box></Box>
                    <Box sx={{ marginBottom: '15px', display: 'flex', width: '100%' }}>
                        <Box sx={{ width: '40px' }}>
                            <Phone />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p style={{ margin: 0, marginBottom: '8px', fontSize: '16px', fontWeight: '600', color: '#23282B' }}>{'Phone'}</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#23282B' }}>{'+234704 5550114'} <span style={{ color: '#808080' }}>{'(office)'}</span></p>
                        </Box>
                    </Box>
                    <Box sx={{ marginBottom: '15px', display: 'flex', width: '100%' }}>
                        <Box sx={{ width: '40px' }}>
                            <Location />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p style={{ margin: 0, marginBottom: '8px', fontSize: '16px', fontWeight: '600', color: '#23282B' }}>{'Address'}</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#055C7F' }}>{'3891 Ranchview Dr. Richardson, California 62639'}</p>
                        </Box>
                    </Box>
                    <Box sx={{ marginBottom: '15px', display: 'flex', width: '100%' }}>
                        <Box sx={{ width: '40px' }}>
                            <Mail />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p style={{ margin: 0, marginBottom: '8px', fontSize: '16px', fontWeight: '600', color: '#23282B' }}>{'Email'}</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#055C7F' }}>{'Ronaldrichie@outlook.com'}</p>
                        </Box>
                    </Box>
                    <Box sx={{ marginBottom: '15px', display: 'flex', width: '100%' }}>
                        <Box sx={{ width: '40px' }}>
                            <Birthday />
                        </Box>
                        <Box sx={{ width: '95%' }}>
                            <p style={{ margin: 0, marginBottom: '8px', fontSize: '16px', fontWeight: '600', color: '#23282B' }}>{'Birthday'}</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#055C7F' }}>{'May 29'}</p>
                        </Box>
                    </Box>
                </Box>
                {!showall &&
                    <Box sx={{ width: '100%', marginTop: '30px' }}>
                        <Button variant="contained" sx={{ py: 1 }} onClick={() => { setProgress(progress + 25) }}>
                            Next
                        </Button>
                    </Box>
                }
            </>
        )
    }

    const EducationInfo = () => {
        return (
            <>
                <Box sx={{ marginTop: '20px' }}>
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#23282B' }}>{'Education'}</p>
                </Box>
                <Box sx={{ marginTop: '24px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#494949' }}>{'1 of 2'}</p>
                    </Box>
                    <Box sx={{ gap: '10px', display: 'flex' }}>
                        {!showall &&
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    gap: '12px',
                                    fontSize: '14px',
                                    color: '#05668D',
                                    fontWeight: '700',
                                    backgroundColor: '#FCFBF8',
                                    borderRadius: "8px",
                                    padding: '0 12px'
                                }}
                            >
                                Remove
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="photo"
                                    disabled={true}
                                >
                                    <Delete />
                                </IconButton>
                            </Box>
                        }
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                gap: '12px',
                                fontSize: '14px',
                                color: '#05668D',
                                fontWeight: '700',
                                backgroundColor: '#FCFBF8',
                                borderRadius: "8px",
                                padding: '0 12px'
                            }}
                        >
                            Edit
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="photo"
                                disabled={true}
                            >
                                <Edit />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '15px', padding: '15px', backgroundColor: '#FFFAF1', borderRadius: '5px' }}>
                    <Box sx={{ width: '100%', display: 'flex', marginBottom: '10px' }}>
                        <Typography sx={{ color: '#808080', fontSize: '14px', fontWeight: '400', paddingRight: '15px' }}>
                            Degree:
                        </Typography>
                        <Typography sx={{ color: '#23282B', fontSize: '14px', fontWeight: '400' }}>
                            Bachelor of Engineering - BENG
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', marginBottom: '10px' }}>
                        <Typography sx={{ color: '#808080', fontSize: '14px', fontWeight: '400', paddingRight: '15px' }}>
                            School:
                        </Typography>
                        <Typography sx={{ color: '#23282B', fontSize: '14px', fontWeight: '400' }}>
                            University of Nigeria Nsukka
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', marginBottom: '10px' }}>
                        <Typography sx={{ color: '#808080', fontSize: '14px', fontWeight: '400', paddingRight: '15px' }}>
                            Major / Field of study :
                        </Typography>
                        <Typography sx={{ color: '#23282B', fontSize: '14px', fontWeight: '400' }}>
                            Electrical Engineering
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex' }}>
                        <Typography sx={{ color: '#808080', fontSize: '14px', fontWeight: '400', paddingRight: '15px' }}>
                            Dates of employment:
                        </Typography>
                        <Typography sx={{ color: '#23282B', fontSize: '14px', fontWeight: '400' }}>
                            May 2017 - September 2022
                        </Typography>
                    </Box>
                </Box>
                {!showall &&
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px', marginBottom: '80px' }}>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    gap: '3px',
                                    fontSize: '14px',
                                    color: '#05668D',
                                    fontWeight: '700',
                                    backgroundColor: '#FCFBF8',
                                    borderRadius: "8px",
                                    padding: '0 12px'
                                }}
                            >
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="photo"
                                    disabled={true}
                                >
                                    <AddIcon style={{ color: '#05668D' }} />
                                </IconButton>
                                Add more
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '35%' }}>
                                <Button style={{ backgroundColor: '#fff', color: '#05668D', borderWidth: 1, borderColor: '#05668D', borderStyle: 'solid' }} variant="contained" sx={{ py: 1 }} onClick={() => { setProgress(progress - 25) }}>
                                    Back
                                </Button>
                            </Box>
                            <Box sx={{ width: '64%' }}>
                                <Button variant="contained" sx={{ py: 1, display: 'flex', gap: '10px' }} onClick={() => { setProgress(progress + 25) }}>
                                    Next  <EastIcon />
                                </Button>
                            </Box>
                        </Box>
                    </>
                }

            </>
        )
    }

    const WorkExperience = () => {
        return (
            <>
                <Box sx={{ marginTop: '20px' }}>
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#23282B' }}>{'Work Experience'}</p>
                </Box>
                <Box sx={{ marginTop: '24px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#494949' }}>{'1 of 2'}</p>
                    </Box>
                    <Box sx={{ gap: '10px', display: 'flex' }}>
                        {!showall &&
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    gap: '12px',
                                    fontSize: '14px',
                                    color: '#05668D',
                                    fontWeight: '700',
                                    backgroundColor: '#FCFBF8',
                                    borderRadius: "8px",
                                    padding: '0 12px'
                                }}
                            >
                                Remove
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="photo"
                                    disabled={true}
                                >
                                    <Delete />
                                </IconButton>
                            </Box>
                        }
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                gap: '12px',
                                fontSize: '14px',
                                color: '#05668D',
                                fontWeight: '700',
                                backgroundColor: '#FCFBF8',
                                borderRadius: "8px",
                                padding: '0 12px'
                            }}
                        >
                            Edit
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="photo"
                                disabled={true}
                            >
                                <Edit />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '15px', padding: '15px', backgroundColor: '#FFFAF1', borderRadius: '5px' }}>
                    <Box sx={{ width: '100%', display: 'flex', marginBottom: '10px' }}>
                        <Typography sx={{ color: '#808080', fontSize: '14px', fontWeight: '400', paddingRight: '15px' }}>
                            Your title:
                        </Typography>
                        <Typography sx={{ color: '#23282B', fontSize: '14px', fontWeight: '400' }}>
                            Product designer
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', marginBottom: '10px' }}>
                        <Typography sx={{ color: '#808080', fontSize: '14px', fontWeight: '400', paddingRight: '15px' }}>
                            Company:
                        </Typography>
                        <Typography sx={{ color: '#23282B', fontSize: '14px', fontWeight: '400' }}>
                            Xtera Solutions
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', marginBottom: '10px' }}>
                        <Typography sx={{ color: '#808080', fontSize: '14px', fontWeight: '400', paddingRight: '15px' }}>
                            Dates of employment:
                        </Typography>
                        <Typography sx={{ color: '#23282B', fontSize: '14px', fontWeight: '400' }}>
                            May 2017 - September 2022
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', marginBottom: '10px' }}>
                        <Typography sx={{ color: '#808080', fontSize: '14px', fontWeight: '400', paddingRight: '15px' }}>
                            Industry:
                        </Typography>
                        <Typography sx={{ color: '#23282B', fontSize: '14px', fontWeight: '400' }}>
                            Fintech
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex' }}>
                        <Typography sx={{ color: '#808080', fontSize: '14px', fontWeight: '400', paddingRight: '15px' }}>
                            Description::
                        </Typography>
                        <Typography sx={{ color: '#23282B', fontSize: '14px', fontWeight: '400' }}>
                            Mi orci hendrerit eget nunc adipiscing elit augue. Leo tristique auctor commodo id nullam nam. Sed quam quis odio volutpat lobortis urna ac gravida.
                        </Typography>
                    </Box>
                </Box>
                {!showall &&
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px', marginBottom: '80px' }}>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    gap: '3px',
                                    fontSize: '14px',
                                    color: '#05668D',
                                    fontWeight: '700',
                                    backgroundColor: '#FCFBF8',
                                    borderRadius: "8px",
                                    padding: '0 12px'
                                }}
                            >
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="photo"
                                    disabled={true}
                                >
                                    <AddIcon style={{ color: '#05668D' }} />
                                </IconButton>
                                Add more
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '35%' }}>
                                <Button style={{ backgroundColor: '#fff', color: '#05668D', borderWidth: 1, borderColor: '#05668D', borderStyle: 'solid' }} variant="contained" sx={{ py: 1 }} onClick={() => { setProgress(progress - 25) }}>
                                    Back
                                </Button>
                            </Box>
                            <Box sx={{ width: '64%' }}>
                                <Button variant="contained" sx={{ py: 1, display: 'flex', gap: '10px' }} onClick={() => { setProgress(progress + 25) }}>
                                    Next  <EastIcon />
                                </Button>
                            </Box>
                        </Box>
                    </>
                }
            </>
        )
    }

    const CoverLetter = () => {
        return (
            <>
                <Box sx={{ marginTop: '20px' }}>
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#23282B' }}>{'Cover Letter'}</p>
                </Box>
                <Box sx={{ marginTop: '15px', padding: '15px', backgroundColor: '#FFFAF1', borderRadius: '5px' }}>
                    <Box sx={{ width: '100%', display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
                        <Box>
                            <MailOutlineIcon style={{ fontSize: '18px', color: '#808080', fontWeight: '400' }} />
                        </Box>
                        <Typography sx={{ marginBottom: '5px', padding: '0 12px', color: '#808080' }}>|</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#808080' }}>Cover letter</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <InputBase
                            rows={!showall ? 10 : 0}
                            placeholder="Write something"
                            defaultValue={'Lorem ipsum dolor sit amet consectetur. Nec natoque ornare eleifend nascetur. Cras a lectus pretium gravida porttitor amet nisl volutpat turpis. Semper auctor quam scelerisque eget nulla rhoncus lorem purus eu. Vel sit cursus vehicula accumsan commodo odio urna.'}
                            sx={{
                                backgroundColor: '#FCFBF8',
                                width: '100%',
                                overflowY: 'auto',
                                padding: 0,
                                paddingTop: '10px',
                                fontFamily: 'open sans',
                                color: '#23282B'
                            }}
                            multiline
                        />
                    </Box>
                </Box>
                {!showall ?
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                        <Box sx={{ width: '35%' }}>
                            <Button style={{ backgroundColor: '#fff', color: '#05668D', borderWidth: 1, borderColor: '#05668D', borderStyle: 'solid' }} variant="contained" sx={{ py: 1 }} onClick={() => { setProgress(progress - 25) }}>
                                Back
                            </Button>
                        </Box>
                        <Box sx={{ width: '64%' }}>
                            <Button variant="contained" sx={{ py: 1, display: 'flex', gap: '10px' }} onClick={() => { setShowAll(true) }}>
                                Next  <EastIcon />
                            </Button>
                        </Box>
                    </Box>
                    :
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '40px' }}>
                        <Box sx={{ width: '35%' }}>
                            <Button style={{ backgroundColor: '#fff', color: '#05668D', borderWidth: 1, borderColor: '#05668D', borderStyle: 'solid' }} variant="contained" sx={{ py: 1 }} onClick={() => { setShowAll(false) }}>
                                Back
                            </Button>
                        </Box>
                        <Box sx={{ width: '64%' }}>
                            <Button variant="contained" sx={{ py: 1, display: 'flex', gap: '10px' }} onClick={() => { Hidemodal('submit') }}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                }
            </>
        )
    }

    return (

        <Modal
            open={showmoadl}
            onClose={Hidemodal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalstyle}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 0, borderBottomWidth: 1, borderBottomColor: '#CCC', borderStyle: 'solid', marginBottom: '15px', paddingBottom: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        {progress > 25 &&
                            <Box sx={{ cursor: 'pointer' }} onClick={() => { !showall ? setProgress(progress - 25) : setShowAll(false) }}>
                                <KeyboardBackspaceIcon style={{ color: '#808080', fontWeight: '400' }} />
                            </Box>
                        }
                        <Box>
                            <h4 style={{ marginTop: 0, marginBottom: 0 }}>Apply to Xteria Solutions</h4>
                        </Box>
                    </Box>
                    <Box>
                        <div style={{ cursor: 'pointer' }} onClick={() => { Hidemodal() }}>
                            <Cancel />
                        </div>
                    </Box>
                </Box>
                <ProgressBar />
                {(progress === 25 || showall) &&
                    <ContactInfo />
                }
                {(progress === 50 || showall) &&
                    <EducationInfo />
                }
                {(progress === 75 || showall) &&
                    <WorkExperience />
                }
                {(progress === 100 || showall) &&
                    <CoverLetter />
                }
            </Box>
        </Modal>
    );
}

export default ApplyJob
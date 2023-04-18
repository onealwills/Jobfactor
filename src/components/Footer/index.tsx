import { Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Facebook from '../../assets/icons/Facebook'
import Instagram from '../../assets/icons/Instagram'
import JobFactorIcon from '../../assets/icons/JobFactorIcon'
import Linkedin from '../../assets/icons/Linkedin'
import Tiktok from '../../assets/icons/Tiktok'
import Twitter from '../../assets/icons/Twitter'
import Youtube from '../../assets/icons/Youtube'

const Footer = () => {

    const linksHeadings = {
        letterSpacing: "0.00938em",
        color: "#23282B",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "28px",
        paddingBottom: "18px",
        fontFamily: "Open Sans"
    }
    const Links = {
        color: "#808080",
        fontSize: "16px",
        lineHeight: "24px",
        cursor: "pointer",
        paddingBottom: "8px",
        fontFamily: "Open Sans"
    }
    return (
        <>
            <Grid container spacing={5} mt={10}>
                <Grid item xs={2.5}>
                    <JobFactorIcon />
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        component={'p'}
                        sx={linksHeadings}
                    >How Jobfactor Works</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography
                        component={'p'}
                        sx={linksHeadings}
                    >jobfactor</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        component={'p'}
                        sx={linksHeadings}
                    >Professionals</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        component={'p'}
                        sx={linksHeadings}
                    >Company</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        component={'p'}
                        sx={linksHeadings}
                    >Community</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5} >
                <Grid item xs={2.5}>
                </Grid>
                <Grid item xs={2}>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Jobfactor score</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Company ratings</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Reviews and feedbacks</Link>
                </Grid>
                <Grid item xs={1.5}>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >About us</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Blog</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Analytics</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >News and update</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >My Jobfactor score</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Browse jobs</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >My factor</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Business factor</Link>
                </Grid>
                <Grid item xs={2} >
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Contact sales team</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Build your brand</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Post a job</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Business factor</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Enterprise subscription</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Dynamic Recruiting</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Frequently Asked Questions</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Help and Support</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Privacy and Cookies</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Business factor</Link>
                    <Link
                        underline='hover'
                        component={'p'}
                        sx={Links}
                    >Terms of Service</Link>
                </Grid>
            </Grid>
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '40px',
                    marginTop: '20px'
                }}
            >
                <Linkedin />
                <Twitter />
                <Facebook />
                <Instagram />
                <Youtube />
                <Tiktok />
            </Box>
            <Typography
                sx={{
                    color: '#808080',
                    fontSize: '16px',
                    letterSpacing: '0.0015em',
                    textAlign: 'center',
                    marginTop: '30px',
                    fontFamily: "Open Sans"
                }}
            >	&#169; 2023, Jobfactor Inc. All rights reserved.</Typography>
        </>
    )
}

export default Footer
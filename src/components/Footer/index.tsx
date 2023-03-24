import { Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Facebook from '../../assets/icons/Facebook'
import Instagram from '../../assets/icons/Instagram'
import JobFactorIcon from '../../assets/icons/JobFactorIcon'
import Linkedin from '../../assets/icons/Linkedin'
import Tiktok from '../../assets/icons/Tiktok'
import Twitter from '../../assets/icons/Twitter'
import Youtube from '../../assets/icons/Youtube'

const Footer = () => {
    return (
        <>
            <Grid container spacing={10}>
                <Grid item xs={2}>
                    <JobFactorIcon />
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        component={'p'}
                        className='links-headings'
                    >How Jobfactor Works</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        component={'p'}
                        className='links-headings'
                    >jobfactor</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        component={'p'}
                        className='links-headings'
                    >Professionals</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        component={'p'}
                        className='links-headings'
                    >Company</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        component={'p'}
                        className='links-headings'
                    >Community</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={10}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Jobfactor score</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Company ratings</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Reviews and feedbacks</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >About us</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Blog</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Analytics</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >News and update</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >My Jobfactor score</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Browse jobs</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >My factor</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Business factor</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Contact sales team</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Build your brand</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Post a job</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Business factor</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Enterprise subscription</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Dynamic Recruiting</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Frequently Asked Questions</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Help and Support</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Privacy and Cookies</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
                    >Business factor</Link>
                    <Link
                        underline='none'
                        component={'p'}
                        className='footer-link'
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
                    marginTop: '30px'
                }}
            >	&#169; 2023, Jobfactor Inc. All rights reserved.</Typography>
        </>
    )
}

export default Footer
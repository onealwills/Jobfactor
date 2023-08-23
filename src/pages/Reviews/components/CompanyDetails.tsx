// import React from 'react'
import {Avatar, Box, Typography}  from "@mui/material";
import { IRoleType } from '../types';
import ExperienceLevel from './ExperienceLevel';






const CompanyDetails = (props: ICompanyType ) => {


    const {company, showActive = false} = props;

  return (
    <>
        <Box sx={{position:"relative", maxWidth: "200px" , display:"flex", alignItems:"center"}}>
                <Avatar
                    alt="Remy Sharp"
                    src={company?.image}
                    sx={{ width: 70, height: 70 }}
                />
                {showActive ? (
                    <Box
                        sx={{
                            width: '16px',
                            height: '16px',
                            background: '#08BD04',
                            borderRadius: '100px',
                            position: 'absolute',
                            right: 0,
                            bottom: '10px',
                        }}
                    />
                ) : null}
        </Box>

        <Box sx={{ display: "flex", alignItems:"flex-start", gap:"12px", flex:"1 1 0", flexDirection: "column", width:"600px", height:"70px"}}>
            <Box>
                <Typography
                component={'h5'}
                variant="titleLargeSemiBold"
                sx={{
                    color: '#494949'
                }}
                >
                    {company.title}
                </Typography>
            </Box>
            
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}
            >
                <Typography
                    sx={{
                        color: '#808080',
                        letterSpacing: '0.0015em'
                    }}
                >
                    {company.type ?? 'COMPANY'}
                </Typography>
                <Typography
                    component={'div'}
                    sx={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '100px',
                        background: '#494949',
                    }}
                />
                {company.point ? (
                    <Typography
                        variant="titleLargeSemiBold"
                        sx={{
                            color: '#FFFFFF',
                            background: '#49B6FF',
                            borderRadius: '12px',
                            padding: '2px 12px'
                        }}
                    >
                        {company.point}
                    </Typography>
                ) : null}
            </Box>

            <Box>
                {company?.role.length > 0 ?(
                    <Box
                    sx={{
                        display: 'flex',

                        alignItems:
                            'center',
                        gap: '8px',
                        mt: '12px',
                        height: "80px",
                    }}
                >
                    {company?.role?.map(
                        (
                            item: IRoleType,
                            index: number
                        ) => (
                            <ExperienceLevel
                                background={
                                    item.background
                                }
                                shortForm={
                                    item.shortForm
                                }
                                title={
                                    item.title
                                }
                                key={`role_${index}`}
                            />
                        )
                    )}
                    <Typography
                        component={
                            'div'
                        }
                        sx={{
                            ml: '4px',
                            minWidth: '7px',
                            height: '7px',
                            borderRadius:
                                '100px',
                            background:
                                '#494949',
                            
                        }}
                    />{' '}
                    <Typography
                        component={
                            'div'
                        }
                        sx={{
                            ml: '4px',
                            width: '7px',
                            height: '7px',
                            borderRadius:
                                '100px',
                            background:
                                '#494949',
                            
                        }}
                    />
                    </Box>
                ): null}
            </Box>
        </Box>
    </>
  );
};

interface ICompanyType{
    company: Company;
    showActive?: boolean;
}

type Company = {
    image: string;
    title: string;
    type: string;
    point: string;
    role: IRoleType[];
}

export default CompanyDetails
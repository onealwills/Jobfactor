import React from "react";
import SectionHeader from '../../common/SectionHeader';
import PageHeader from '../../common/PageHeader';
import TableWrapper from '../components/TableWrapper';
import {myCompany} from "../constants";
import {
    Box,
    Button,
    Paper,
    TableCell,
    TableRow,
} from '@mui/material';
import { ICompanyType} from "../types";
import CompanyDetails from '../components/CompanyDetails';
import UserActions from "../components/UserActions";




const CompanyRatings = () => {

    const [company, setComapny] = React.useState<ICompanyType[]>(myCompany);
    const [page, setPage]  = React.useState(0);

    const rowsPerPage = 7;
    console.log("company =>", company);

    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };

    const fontsize = 16;
   
    return (
        <>
            <PageHeader
                pageTitle={'Reviews'}
                hideAction = {true}
            />
            <Paper sx={{mt:"36px"}}>
                <Box>
                    <SectionHeader header={'Company Ratings'} 
                    subHeader={
                        'You can only rate your previous or current comapny'
                    } />  

                    <Box
                        sx={{
                            // border: "2px solid blue"
                        }}
                    >
                        <TableWrapper
                            handleChangePage={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            data={company}
                        
                        >
                            {company
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            ).map((company: any, index: number)=>(
                                <TableRow key={`company_${index}`}>
                                  <TableCell
                                        sx={{
                                            height: "200px"
                                            // padding: '20px 16px',
                                            // paddingBottom: '25px'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                // alignItems: 'inset',
                                                // flexDirection:"column",
                                                gap: '10px',
                                                width: "916px",
                                                // border: "2px solid black",
                                                height: "100%"
                                            }}
                                        >
                                            <CompanyDetails
                                                company={company}
                                            />
                                            <UserActions>
                                                <Box sx={{
                                                    width:"127px",
                                                    height: "24px",
                                                    fontFamily:" Open Sans",
                                                    fontSize:" 12px",
                                                    fontStyle: "normal",
                                                    fontWeight: "600",
                                                    lineHeight: "24px", /* 150% */
                                                    letterSpacing: "0.08px",
                                                    // border: "2px solid black"
                                                }}
                                                >
                                                    previous company
                                                </Box>
                                                <Button
                                                    sx={{
                                                        borderRadius:
                                                            '8px',
                                                        padding:
                                                            '12px 16px',
                                                        border: '1px solid #F2F2F2',
                                                        background:
                                                            '#05668D',
                                                        fontSize:
                                                            '14px',
                                                        fontWeight:
                                                            '600',
                                                        textTransform:
                                                            'capitalize',
                                                        boxShadow:
                                                            'none',
                                                        width: 'auto',
                                                        whiteSpace:
                                                            'nowrap',
                                                        color: '#FFFFFF',
                                                        textDecoration:
                                                            'none',
                                                        ':hover': {
                                                            color: '#05668D',
                                                            textDecoration:
                                                                'none',
                                                            background:
                                                                '#F2F2F2'
                                                        }
                                                    }}
                                                >
                                                    Rate
                                                </Button>
                                            </UserActions>
                                            
                                        </Box>
                                   </TableCell>
                                </TableRow>
                            ))
                            }
                        </TableWrapper>
                    </Box>     
                </Box>
            </Paper>
        </>
        
    
    );
};

export default CompanyRatings;

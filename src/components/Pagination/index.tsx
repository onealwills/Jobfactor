import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import usePagination from '@mui/material/usePagination';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});

const Pagination = (props: any) => {
    const { items, } = usePagination({
        count: props?.count ?? 10,
        onChange(event, page) {
            props.handleChangePage(page)
        },
    });
    let children: any = [];
    let next: any = null;
    let previos: any = null;

    return (
        <nav
            style={{ width: '100%' }}
        >
            <List
                sx={{ justifyContent: 'space-between', padding: '0px 40px' }}
            >
                {items.map(({ page, type, selected, ...item }, index) => {
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children.push(<li key={index}>...</li>)
                    } else if (type === 'page') {
                        children.push(<li key={index}>
                            <Button
                                variant='contained'
                                sx={{
                                    fontWeight: selected ? 'bold' : undefined,
                                    background: selected ? '#05668D' : 'white',
                                    minWidth: '30px',
                                    padding: '1px 0px',
                                    borderRadius: '100px',
                                    color: selected ? '#EDEDED' : '#808080',
                                    boxShadow: 'none',
                                    ':hover': {
                                        color: 'white',
                                        background: '#05668D',
                                    }
                                }}
                                {...item}
                            >
                                {page}
                            </Button>
                        </li>)
                    } else {
                        if (type === 'next') {
                            next = <li key={index}>
                                <Button {...item}
                                    variant='contained'
                                    sx={{
                                        background: '#FCFBF8',
                                        color: '#05668D',
                                        boxShadow: 'none',
                                        ':hover': {
                                            color: 'white',
                                            background: '#05668D',
                                        }
                                    }}
                                    endIcon={<ArrowForwardIcon />}
                                >
                                    {type}
                                </Button>
                            </li>
                        } else {
                            previos = <li key={index}>
                                <Button {...item}
                                    variant='contained'
                                    sx={{
                                        background: '#FCFBF8',
                                        color: '#05668D',
                                        boxShadow: 'none',
                                        ':hover': {
                                            color: 'white',
                                            background: '#05668D',
                                        }
                                    }}
                                    startIcon={<ArrowBackIcon />}
                                >
                                    {type}
                                </Button>
                            </li>
                        }

                    }
                })}
                {previos}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px'
                    }}
                >
                    {children}
                </Box>
                {next}
            </List>
        </nav>
    );
}

export default Pagination;
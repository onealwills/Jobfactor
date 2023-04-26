import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import usePagination from '@mui/material/usePagination';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex'
});

const Pagination = (props: any) => {
    const { items } = usePagination({
        count: props?.count ?? 10,
        onChange(event, page) {
            props.handleChangePage(page);
        }
    });

    return (
        <nav style={{ width: '100%' }}>
            <List sx={{ justifyContent: 'space-between', padding: '0px 40px' }}>
                {items
                    .filter(({ type }) => type === 'previous')
                    .map(({ type, ...item }, index) => (
                        <li key={index}>
                            <Button
                                {...item}
                                variant="contained"
                                sx={{
                                    background: '#FCFBF8',
                                    textTransform:'capitalize',
                                    color: '#05668D',
                                    boxShadow: 'none',
                                    ':hover': {
                                        color: 'white',
                                        background: '#05668D'
                                    }
                                }}
                                startIcon={<ArrowBackIcon />}
                            >
                                {type}
                            </Button>
                        </li>
                    ))}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px'
                    }}
                >
                    {items
                        .filter(
                            ({ type }) =>
                                type === 'start-ellipsis' ||
                                type === 'end-ellipsis'
                        )
                        .map((_, index) => (
                            <li key={index}>...</li>
                        ))}
                    {items
                        .filter(({ type }) => type === 'page')
                        .map(({ page, type, selected, ...item }, index) => (
                            <li key={index}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        fontWeight: selected
                                            ? 'bold'
                                            : undefined,
                                        background: selected
                                            ? '#05668D'
                                            : 'white',
                                        minWidth: '30px',
                                        padding: '1px 0px',
                                        borderRadius: '100px',
                                        color: selected ? '#EDEDED' : '#808080',
                                        boxShadow: 'none',
                                        ':hover': {
                                            color: 'white',
                                            background: '#05668D'
                                        }
                                    }}
                                    {...item}
                                >
                                    {page}
                                </Button>
                            </li>
                        ))}
                </Box>
                {items
                    .filter(({ type }) => type === 'next')
                    .map(({ type, ...item }, index) => (
                        <li key={index}>
                            <Button
                                {...item}
                                variant="contained"
                                sx={{
                                    background: '#FCFBF8',
                                    textTransform:'capitalize',
                                    color: '#05668D',
                                    boxShadow: 'none',
                                    ':hover': {
                                        color: 'white',
                                        background: '#05668D'
                                    }
                                }}
                                endIcon={<ArrowForwardIcon />}
                            >
                                {type}
                            </Button>
                        </li>
                    ))}
            </List>
        </nav>
    );
};

export default Pagination;

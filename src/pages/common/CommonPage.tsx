import Typography from '@mui/material/Typography';
import HoverText from './HoverText';

interface CommonPageProps {
    selectedOption: string;
}

const CommonPage: React.FC<CommonPageProps> = ({ selectedOption }) => {
    return (
        <>
            <Typography
                sx={{
                    mt: 13.7,
                    ml: 40,
                    backgroundColor: 'white',
                    maxWidth: 800,
                    p: 2,
                    pb: 10,
                    textAlign: 'center',
                    fontFamily: 'open sans'
                }}
                variant="h4"
                component="div"
            >
                {`Selected option: ${selectedOption}`}

                <HoverText />
            </Typography>
        </>
    );
};

export default CommonPage;

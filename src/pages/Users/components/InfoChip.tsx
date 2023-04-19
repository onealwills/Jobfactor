import { Chip } from "@mui/material"
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from "@mui/system";

interface Props {
    type: 'location' | 'phone' | 'email'
    label: string
}

const InfoChip = ({ type, label }: Props) => {

    const iconStyle = { color: "#055C7F", marginLeft: '16px' };

    let icon;

    if (type === 'location') {
        icon = <PlaceIcon style={iconStyle} />
    } else if (type === 'phone') {
        icon = <LocalPhoneIcon style={iconStyle} />
    } else if (type === 'email') {
        icon = <EmailIcon style={iconStyle} />
    }

    return (<Chip
        icon={icon}
        label={<Box pr={1}>{ label }</Box>}
        sx={{
            backgroundColor: "#FAFAFA",
            fontFamily: "open sans",
            fontWeight: 500,
            fontSize: "14px",
            borderRadius: "4px",
            letterSpacing: "0.001em",
        }}
    />)
}

export default InfoChip
import { Button } from '@mui/material'

const CustomButton = (props) => {
    return (
        <>
            <Button
                variant={props?.variant ?? "contained"}
                onClick={props?.onClick}
                sx={[{
                    borderRadius: '8px',
                    padding: "10px 36px",
                    fontSize:'14px',
                    fontWeight:'700',
                    textTransform:'capitalize',
                    border: '1px solid #05668D',
                }, props.style]}
            >
                {props?.title}
            </Button>
        </>
    )
}

export default CustomButton
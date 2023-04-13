import { Button } from '@mui/material'

const CustomButton = (props: any) => {
    return (
        <>
            <Button
                variant={props?.variant ?? "contained"}
                onClick={props?.onClick}
                sx={[{
                    borderRadius: '8px',
                    padding: "10px 36px",
                    fontSize: '14px',
                    fontWeight: '700',
                    textTransform: 'capitalize',
                    boxShadow:'none',
                    ':hover': {
                        background: !props?.variant || props?.variant === 'contained' ? '#05668D' : undefined,
                    }
                }, props.style]}
            >
                {props?.title}
            </Button>
        </>
    )
}

export default CustomButton
import MuiTextField, {TextFieldProps} from '@mui/material/TextField';

const Input = (props: TextFieldProps) => (
    <MuiTextField
        InputLabelProps={{
            shrink: false,
            style: {
                fontSize: '14px',
                marginTop: '-8px',
                marginLeft: props.InputProps?.startAdornment ? '62px' : '0px',
                ...props.InputLabelProps?.style
            },
            ...props.InputLabelProps
        }}
        inputProps={{
            style: {
                fontSize: '14px',
            }
        }}
        label="Test"
        sx={{
            height: "70px",
            "& fieldset": { border: 'none' },
            "& .MuiInputBase-root": {
                height: "100%",
                backgroundColor: "#FCFBF8",
            },
            "& .MuiOutlinedInput-root": {
                borderRadius: 0,
                outline: "none",
                borderBottom: "1px #D9D9D9 solid"
            },
            "& .MuiInputBase-adornedStart": {
                paddingLeft: '16px',
            },
            "& .MuiInputBase-inputAdornedStart": {
                height: '20px',
                padding: '0px 0px 0px 16px',
                margin: '30px 16px 16px 0px',
            },
            "& .MuiSvgIcon-root": {
                marginRight: '20px',
            }
        }}
        {...props}
    >
        
    </MuiTextField>
)

export default Input;
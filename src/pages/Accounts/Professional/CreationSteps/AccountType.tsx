import {
    Box,
    FormControl,
    FormLabel,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import OnboardingSteps from '../../OnboardingSteps/OnboardingSteps1';
import { useStateMachine } from 'little-state-machine';
import updateAction from "./updateAction";

interface IAccountType {
    accountType: string;
}

function AccountType( props:any) {
    const { control, register, handleSubmit, formState } = useForm<IAccountType>();
    const { isDirty, isValid } = formState;
    const { actions } = useStateMachine({ updateAction });
    let navigate = useNavigate();
    const onSubmit: SubmitHandler<IAccountType> = async (data) => {
        console.log(data);
        actions.updateAction(data);
        navigate("./userData")
    };
    return (
        <>
            <Box
                sx={{
                    height: '495px',
                    width: '599px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <OnboardingSteps />
                <Box
                    sx={{
                        height: '364px',
                        width: '458px',
                        mt: '71px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <FormControl>
                        <FormLabel id="account-type">
                            <Typography
                                fontSize={'32px'}
                                fontWeight={600}
                                textAlign={'center'}
                                sx={{ color: '#23282B' }}
                            >
                                What best describes you?
                            </Typography>
                            {/* checkboxes */}
                        </FormLabel>
                        <Controller
                            rules={{ required: true }}
                            control={control}
                            name='accountType'
                            render={({
                                field: { onChange },
                            }) => (
                                <RadioGroup
                                    onChange={onChange}
                                    aria-labelledby="account-type"
                                    name="accountType"
                                    sx={{ mt: '32px' }}
                                >
                                    <FormControlLabel
                                        value="professional"
                                        control={
                                            <Radio
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: '#05668D',
                                                    },
                                                }}
                                            />
                                        }
                                        label="I am a Professional"
                                        sx={{
                                            mb: '20px',
                                            borderBottom: '1px solid #EDEDED',
                                            height: '56px',
                                            width: '458px',
                                            padding: '16px',
                                            gap: '16px',
                                            alignItems: 'center',
                                            backgroundColor: '#FFFFFF',
                                            color: '#808080',
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            boxSizing: 'border-box',
                                            mx: '0',
                                        }}
                                    />
                                    <FormControlLabel
                                        value="company"
                                        control={
                                            <Radio
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: '#05668D',
                                                    },
                                                }}
                                            />
                                        }
                                        label="I am a Company"
                                        sx={{
                                            mb: '48px',
                                            borderBottom: '1px solid #EDEDED',
                                            height: '56px',
                                            width: '458px',
                                            padding: '16px',
                                            gap: '16px',
                                            alignItems: 'center',
                                            backgroundColor: '#FFFFFF',
                                            color: '#808080',
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            boxSizing: 'border-box',
                                            mx: '0',
                                        }}
                                    />
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                    <Button
                        variant={'contained'}
                        sx={{
                            width: '458px',
                            backgroundColor: '#05668D',
                            height: '52px',
                            borderRadius: '8px',
                            mb: '24px',
                            textTransform: 'capitalize',
                            fontSize: '16px',
                            fontWeight: '700',
                            lineHeight: '24px',
                            padding: '16px 36px',
                            gap: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onClick={handleSubmit(onSubmit)}
                        disabled={!isDirty || !isValid}
                    >
                        Create Account
                    </Button>
                    <Box
                        sx={{
                            mt: '24px',
                            display: 'flex',
                            height: '36px',
                            width: '272px',
                            alignItems: 'center',
                            flex: 'none',
                            order: '1',
                            flexGrow: '0',
                        }}
                    >
                        <Typography
                            fontSize={'16px'}
                            fontWeight={400}
                            color={'#808080'}
                            sx={{
                                mr: '20px',
                                lineHeight: '24px',
                            }}
                        >
                            Already have an account?
                        </Typography>
                        <Link
                            to={'/login'}
                            style={{
                                padding: '0px, 8px, 0px, 8px',
                                color: '#05668D',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: ' 20px',
                                width: '46px',
                                height: '20px',
                            }}
                        >
                            Sign in
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default AccountType;

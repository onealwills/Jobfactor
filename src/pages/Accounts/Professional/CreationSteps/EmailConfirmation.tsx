import { Box, Typography } from '@mui/material'
import React from 'react';
import EmailConfirmationIcon from '../../../../assets/icons/EmailConfirmationIcon'
import OnboardingSteps from '../../OnboardingSteps/OnboardingSteps'
import { updateStep } from './updateAction';
import { GlobalState, useStateMachine } from 'little-state-machine';
import { updateAction } from "./updateAction";
import axios from 'axios';
import { useCreateNewAccount } from '../../../../utils/context/AccountContext';
import useCreateProAccount from '../../../../utils/hooks/api/account/useCreateProAccount';
import { CreateProAccountRequest } from '../../../../utils/hooks/api/account/types';

function EmailConfirmation() {
  const { actions } = useStateMachine({ updateStep });
  const { state } = useStateMachine({updateAction});
  const { createAccount } = useCreateNewAccount();
  // const createAccountMutation = useCreateProAccount();

  // const onSubmit = async (data: GlobalState) => {
  //   const request: CreateProAccountRequest = {
  //     emailAddress: data.data.emailAddress,
  //     firstName: data.data.firstName,
  //     lastName: data.data.lastName,
  //     password: data.data.password

  //   }
  //   createAccountMutation.mutate(request, {
  //     onSuccess: async (data) => {
  //         console.log(data);
  //     },
  //     onError: (error) => {
  //       console.error(error);
  //     }
  // })
  // }

  React.useEffect(() => {
    
    actions.updateStep(3);
    // onSubmit(state);

  }, [actions, state])

  

  return (
    <>
      <OnboardingSteps />
      <Box
        sx={{
          mt: '72px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ width: '518px' }}>
          <Typography
            sx={{
              fontFamily: 'Open Sans',
              fontWeiht: 600,
              color: "#23282B",
              fontSize: '32px',
            }}
          >
            Verify email
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Open Sans',
              color: "#808080",
              fontSize: '20px',
              lineHeight: '28px',
              mt: '20px',
              mb: '40px'
            }}
          >
            An verification email has been sent to your email address, Please proceed to verify your email address, to continue your signup process
          </Typography>
          <EmailConfirmationIcon />
        </Box>
      </Box>
    </>
  )
}

export default EmailConfirmation
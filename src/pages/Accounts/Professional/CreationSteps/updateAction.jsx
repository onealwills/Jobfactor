import { CreateAccountType } from '../../../../utils/hooks/api/account/types';

function updateAction (state, payload) {
  console.log("state:", state);
  console.log("payload:", payload);
  return {
    ...state,
    data: {
      ...state.data,
      ...payload
    }
  };
}

function updateStep(state, payload) {
    return {
        ...state,
        data: {
            ...state.data,
            step: payload
        }
    };
}

function clearAction(state, payload) {
  return {
    data: {
        accountType: CreateAccountType.NotSelected,
        firstName: '',
        lastName: '',
        emailAddress: '',
        companyName: '',
        step: 1,
        password: '',
        verifyEmail: false
    }
  };
}
export { updateStep, updateAction, clearAction };

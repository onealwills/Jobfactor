function updateAction(state, payload) {
    console.log('state:', state);
    console.log('payload:', payload);
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
export { updateStep, updateAction };

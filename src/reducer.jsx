export const initialState = {
    user: null,
}

// we start with the user not being logged in

// when we sign in , put the user into the data layer
export const actionTypes = {
    SET_USER: "SET_USER",
}

const reducer = (state, action) => {
    console.log(action)
    // listen to an action , then dispatch
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }

            // we go back to default state
        default:
            return state;
    }
}


export default reducer
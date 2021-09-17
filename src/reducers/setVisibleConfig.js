const setVisibleConfig = (state = false, action) => {
    switch (action.type) {
        case "SET_TRUE":
            return true;
        case "SET_FALSE":
            return false;
        default:
            return state
    }
}
export default setVisibleConfig;
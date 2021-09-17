const setVisibleTQT = (state = false, action) => {
    switch (action.type) {
        case "SET_TRUE_TQT":
            return true;
        case "SET_FALSE_TQT":
            return false;
        default:
            return state
    }
}
export default setVisibleTQT;
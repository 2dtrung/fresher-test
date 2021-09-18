const hanoiConnect = {
    hanoi: true,
    danang: false,
    hcm: false,
}
const setConnect = (state = hanoiConnect, action) => {
    switch (action.type) {
        case "SET_HN_CONNECT":
            return true;
        case "SET_DN_CONNECT":
            return false;
        case "SET_HCM_CONNECT":
            return false;
        default:
            return state
    }
}
export default setConnect;
const hanoiCapital = {
    id: "HN_Air_KHI",
    name: "Ha Noi Capital",
    address: "556 Nguyen Van Cu, Gia Thuy Ward, Long Bien District, Ha Noi Capital",
    date: "20/5/2020",
    connect: true,
};
const danangCity = {
    id: "DN_Air_KHI",
    name: "Da Nang City",
    address: "Thach Quang Ward, Hai Chau District, Da Nang City",
    date: "20/5/2020",
    connect: false,
};
const hcmCity = {
    id: "HCM_Air_KHI",
    name: "Ho Chi Minh City",
    address: "Ben Nghe Ward, District 1, Ho Chi Minh City",
    date: "20/5/2020",
    connect: false,
};
const getData = (state = hanoiCapital, action) => {
    switch (action.type) {
        case "GET_DN":
            return danangCity;
        case "GET_HCM":
            return hcmCity;
        default:
            return state
    }
}
export default getData;
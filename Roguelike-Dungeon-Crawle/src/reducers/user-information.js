export default function userInformation(state = {
    userLocation: { xAxis: 6, yAxis: 3 },
    currentLifeRemaining: 100,
    currentGamePoints: 0,
    level: 0
}, action) {
    var newState = state;
    switch (action.type) {
        case "CHANGE_REMAINING_LIFE":
            newState = { ...state, currentLifeRemaining: action.newValue }
            break;
        case "CHANGE_USER_POINTS":
            newState = { ...state, currentGamePoints: action.newValue }
            break;
        case "CHANGE_CURRENT_WEAPON":
            newState = { ...state, currentWeapon: action.newValue }
            break;
        case "CHANGE_LEVEL":
            newState = { ...state, level: action.newValue }
            break;
        default:
            newState = { ...state }
            break;
    }
    return newState;
}


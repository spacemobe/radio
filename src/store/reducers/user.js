export default function user(state = false, action) {
    switch (action.type) {
        case "SET_USER":
            return action.data
        default:
            return state
    }
}
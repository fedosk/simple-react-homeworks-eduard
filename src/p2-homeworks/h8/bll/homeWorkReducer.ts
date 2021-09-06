import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: {type: string, payload: string | number}): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                let copyState = [...state]
                return copyState.sort((a, b) => a.age - b.age)
            }
            if (action.payload === 'down') {
                let copyState = [...state]
                return copyState.sort((a, b) => b.age - a.age)
            }
            return state
        }
        case 'check': {
            let copyState = [...state]
            return copyState.filter(c => c.age >= action.payload)
        }
        default:
            return state
    }
}

//export const
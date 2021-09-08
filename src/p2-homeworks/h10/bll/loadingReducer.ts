const initState = {
    loadingStatus: false
}

export type initStateType = typeof initState


export const loadingReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING-STATUS': {
            return {...state, loadingStatus: action.loadingStatus}
        }
        default:
            return state
    }
}

export type ActionType = ReturnType<typeof loadingAC>
export const loadingAC = (loadingStatus: boolean): any => ({type: 'SET-LOADING-STATUS', loadingStatus} as const) // fix any

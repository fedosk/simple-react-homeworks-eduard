const CHANGE_THEME = 'CHANGE_THEME'

type StateType = {
    theme: string
}

const initState = {
    theme: 'dark'
};

export const themeReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export type ActionType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string): {type: 'CHANGE_THEME', theme: string} => ({type: CHANGE_THEME, theme} as const); // fix any
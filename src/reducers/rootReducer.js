const initState = {
    afr: false,
    navClass: 'normal'
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'CHANGE_LANG'){
        let afr = state.afr ? false : true
        return{
            ...state,
            afr: afr
        }
    }
    
    if(action.type === 'CHANGE_NAV'){
        if (state.navClass == 'normal'){
            return {
                ...state,
                navClass: 'blackshadow'
            }
        }else{
            return{
                ...state,
                navClass: 'normal'
            }
        }
    }
    return state
}

export default rootReducer
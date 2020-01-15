
export const fetchCatStart = (state, action) => {

    return {...state,
            isFetching: true
    }
}


export const fetchCatSuccess = (state, action) => {


    return {
        ...state,

        error: '',
        isFetching: false,
        cat: action.payload
    }
}
export const fetchCatFailure = (state, action) => {
    return {
        ...state,
        error: action.payload,
        cat: null,
        isFetching: false

    }
}

export const FakeAppCrash = (state, action) => {

    return state
}




// start state
const initialState = {

    error: '',
    cat: null,
    tree: {
        // -> FETCH_CAT_SUCCESS or FETCH_CAT_FAILURE
        // this node structure was taken from another one of my projects
        'FETCH_CAT_START' :
				{'next': {'0': {'FETCH_CAT_SUCCESS':'0', 'FETCH_CAT_FAILURE':'0'}},
				'functions':{'0':fetchCatStart}
            },

        'FETCH_CAT_SUCCESS' :
				{'next': {'0': {'validate':'0', 'invalid':'0'}},
				'functions':{'0':fetchCatSuccess}
            },

        'FETCH_CAT_FAILURE' :
				{'next': {'0': {}},
				'children': {'0': {'char':'0'}},
				'functions':{'0':fetchCatFailure}
            },

        'fakeCrash' :
				{'next': {'0': {}},
				'functions':{'0':FakeAppCrash}
            }
            
                
        

    }
}


const catReducer = (state = initialState, action) => {

    // console.log(action)
    if(typeof(action.type) === 'string') {
        return state
    }
    let [stateFirstName, context] = action.type

    if(!Object.keys(state.tree).includes(stateFirstName)) {
        return state
    }

    
    return state.tree[stateFirstName]['functions'][context](state, action)

}

export default catReducer;
export const startCrash = (state, action) => {
    return {...state,
            breakAppTree : {...state.breakAppTree,
                            isCrashing: true
                            }
            }
}


// reducer is only good for user click events and showing the last refresh
// not good for showing intermediate refreshes
// refer to an action function in here
export const BreakApp = {
    messages: ['this is a message that doesn\'t end',
    'it goes on and on my friends'],
    isCrashing: false,
    tree: {
        'fakeCrash' :
				{'next': {'0': {}},
				'functions':{'0':startCrash}
            }
            // need to reset the crash
    }
}
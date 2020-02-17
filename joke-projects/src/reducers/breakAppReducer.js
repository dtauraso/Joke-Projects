export const startCrash = (state, action) => {
    return {...state,
            breakAppTree : {...state.breakAppTree,
                            isCrashing: true
                            }
            }
}

export const resetCrash = (state, action) => {
    return {...state,
            breakAppTree: {...state.breakAppTree,
                            isCrashing: false
                        }
            }
}


// reducer is only good for user click events and showing the last refresh
// not good for showing intermediate refreshes
// refer to an action function in here
export const BreakApp = {
    messages: [
        'This is a message that doesn\'t end.',
        'It goes on and on my friends.',
        'Some people start sending it not knowing what it was,',
        'But they\'ll continue sending it just, because',
        'This is a message that may never end.',
        'It sadly, goes on and on my friends.',
        'Some crazy people start sending it not really caring what it was,',
        'And they\'ll continue sending it just, because.........',
        'Texting this may go on forever.',
        'While people keep sending this infinitely long message,',
        'Some dude just started texting and couldn\'t stop,',
        'And I guess they\'ll keep texting untill....... Who knows?'
    ],
    isCrashing: false,
    tree: {
        'fakeCrash' :{
                'next': {'0': {}},
				'functions':{'0':startCrash}
            },
        'reset' : {
            'next': {'0': {}},
            'functions':{'0':resetCrash}
        }

            // need to reset the crash
    }
}
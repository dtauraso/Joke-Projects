
// import {
//     FETCH_CAT_START,
//     FETCH_CAT_SUCCESS,
//     FETCH_CAT_FAILURE
// } from '../actions/catActions';
import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner';

const CatText = styled.p`

    font-family: fantasy
`

const CatDiv = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 900px;
    // border: 1px solid #BADA55;
    margin: 0 auto;
`

const CatImage = styled.img`

    // needs to match the width constraint of the div it's contained within
    max-width: 100%;
`
// const startState = (state, action) => {
//     return {
//         ...state,
//         prompt: <p>Go ahead! Fetch a Cat</p>
//     }
// }
const fetchCatStart = (state, action) => {

    return {
        ...state,
        htmlMessage: <div>

            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            </div>
    }
}

// component
    // actions(programming 'buttons')
        // visitor(start, end) traversal
// component state reducer functions
const fetchCatSuccess = (state, action) => {
    
    return {
        ...state,

        error: '',

        htmlMessage: <div>
            <CatDiv>
                <CatImage src={action.payload}/>
            </CatDiv>
            <p>Ta Da !!</p>

        </div>
    }
}
const fetchCatFailure = (state, action) => {
    return {
        ...state,
        error: action.payload,
        htmlMessage: 
        <div>
            <CatText>Try again! Fetch a Cat</CatText>

        </div>
    }
}

// start state
const initialState = {
    // cat: null,
    error: '',
    htmlMessage:
        <div>
            <CatText>Go ahead! Fetch a Cat</CatText>
        </div>
    ,
    tree: {
        // -> FETCH_CAT_SUCCESS or FETCH_CAT_FAILURE

        'FETCH_CAT_START' :
				{'next': {'0': {'validate':'0', 'invalid':'0'}},
				'children': {'0': {'char':'0'}},
				'functions':{'0':fetchCatStart},
				'parents' :{'0':{'root':'0'}}},

        'FETCH_CAT_SUCCESS' :
				{'next': {'0': {'validate':'0', 'invalid':'0'}},
				'children': {'0': {'char':'0'}},
				'functions':{'0':fetchCatSuccess},
                'parents' :{'0':{'root':'0'}}},

        'FETCH_CAT_FAILURE' :
				{'next': {'0': {'validate':'0', 'invalid':'0'}},
				'children': {'0': {'char':'0'}},
				'functions':{'0':fetchCatFailure},
                'parents' :{'0':{'root':'0'}}}
        // '@@INIT' :
		// 		{'next': {'0': {'validate':'0', 'invalid':'0'}},
		// 		'children': {'0': {'char':'0'}},
		// 		'functions':{'0':startState},
        //         'parents' :{'0':{'root':'0'}}},
            
                
        

    }
}

const doesNextStatesExist = (next_states) => {

	return next_states.length > 0 && next_states[0].length > 0
}

const isParent = (children) => {


	return   !((Object.keys(children).length === 0 && children.constructor === Object))

}

const hasParent = (state, state_, case_) => {
	//console.log(Object.keys(graph['node_graph2'][state]['parents'][case_]))
	return Object.keys(state.tree[state_]['parents'][case_]).length > 0//Object.keys(graph['parents'][state][case_]).length > 0
}
function ChildParent (child, parent) {

	this.child = child
	this.parent = parent
}
const getIndents = (count) => {

	var indent = ''

	while (count > 0)
	{
		indent += '    '
		count -= 1
	}
	return indent
}

const printStack = (bottom) => {

	var tracker = bottom[0]
	var stack = []
	while (tracker !== null)
	{
		stack.unshift(tracker.child)
		tracker = tracker.parent
	}
	for(var i in stack)
	{
		console.log(stack[i])
	}
}

const isBottomAtTheParentOfCurrentState = (parent_cases, bottom_state, bottom_case) => {

	for(var p in parent_cases)
	{
		let parent = parent_cases[p][0]

		let parent_case = parent_cases[p][1]
		//console.log(bottom_state, parent, bottom_case, parent_case)
		//console.log(bottom_state == parent, bottom_case == parent_case)
		//console.log(bottom_state === parent, bottom_case === parent_case)
		//console.log(typeof(bottom_state), typeof(parent), typeof(bottom_case), typeof(parent_case))

		if(bottom_state === parent && bottom_case === parent_case)
		{
			return true
		}
	}
	return false
}
const getNextStates = (tracker, continuing_next_states, indents, state) => {

	var state1 = tracker.child[0]
	var case1 = tracker.child[1]
	//console.log("tracker")
	//console.log(tracker)
	// todo: need to delete the bottom of the list as we ascend it, not ignore it
	// continues untill there are no next states to obtain
	while (tracker !== null && continuing_next_states.length === 0)
	{
		indents -= 1
		tracker = tracker.parent
		state1 = tracker.child[0]
		case1 = tracker.child[1]
		//console.log(tracker)
		//console.log(state1, case1)			

		// need to exit the main loop
		if (state1 === 'root')
		{
			//console.log("here")

			continuing_next_states = []
			return [tracker, continuing_next_states, indents]
		}

		continuing_next_states = Object.entries(state.tree[state1]['next'][case1])//Object.entries(graph['node_graph2'][state1]['next'][case1])
		//console.log(continuing_next_states)
		//console.log(tracker)

	}
	return [tracker, continuing_next_states, indents]

}
const makeNextStates = (next_states) => {
	var new_nex_states = []



	for(var n in next_states)
	{
		if (typeof(next_states[n][1]) === 'object')
		{
			let next_state = next_states[n][0]
			for(var o in next_states[n][1])
			{
				new_nex_states.push([next_state, next_states[n][1][o]])

			}

		}
		else
		{
			new_nex_states.push([next_states[n][0], next_states[n][1]])
		}

	}

	return new_nex_states
}
const printLevel = (graph, state, case_, indents, m, chosen_level) => {

	if (indents === chosen_level)
	{
		console.log(getIndents(indents), '|'+ state + '|', case_, 'passed', 'i', '|' + graph['input'][m] + '|', m)

	}

}

const printLevels = (graph, state, case_, indents, m, chosen_level) => {

	if (indents >= chosen_level)
	{
		console.log(getIndents(indents), '|'+ state + '|', case_, 'passed', 'i', '|' + graph['input'][m] + '|', m)

	}

}

const printLevelsBounds = (graph, state, case_, indents, m, input_length, chosen_start_level, chosen_end_level) => {

	if (indents >= chosen_start_level && indents <= chosen_end_level)
	{
		console.log(getIndents(indents), '('+''+ state + ''+ ',' , '' + case_ + ''+ ')', 'passed', '|' + graph['input'][m] + '|'/*,'i ='*/, m/*, input_length*/)
		//console.log()

	}
	else if (indents >= chosen_start_level && chosen_end_level === -1)
	{
		console.log(getIndents(indents), '('+ state + ',' , case_ + ',', 'f=' + graph['node_graph2'][state]['functions'][case_].name + ',', indents + ')')//, '|' + graph['input'][m] + '|'/*,'i ='*/, m/*, input_length*/)
		//console.log()

	}

}

const printVarStore = (graph) => {

	let m = graph['input']
	return '|' + graph['input'][m] + '|'

}
const visitRedux = (node, endState, state, action, indents) => {
    // console.log(node, endState, graph, indents)
    // return
	// does depth first tranversal for each subgraph(each subgraph is a state name that has children)
	// does breath first traversal for within each subgraph
	let x = node[0]
	let y = node[1]
    var next_states = [node]
    // var action = {}
	var bottom = []
	// assumes [state, case_] actually runs
	let parent = new ChildParent(['root', '0'], null)
	bottom.push(parent)
	var ii = 0
	// to target a start point and end point
	// start from the state state
	// assume the end state is actually and end state
	//console.log(getIndents(indents), 'start state', node)
    while(next_states.length != 0)
    {

    	//console.log(ii)
		//printStack(bottom)
        if(ii == 200)
        {
            return
        }

		//console.log(getIndents(indents), 'next_states', next_states)

		var state_ = ''
		var case_ = 0
		var state_changed = false

        // if start state === end state
            // run start state then return
        // console.log(next_states.length)
        if(next_states.length === 1) {
            // console.log(next_states[0], endState)
            if(next_states[0][0] === endState[0] &&
                next_states[0][1] === endState[1]) {
                    // console.log('1 state to run')
                    const [firstName, secondName] = next_states[0]

                    state = state.tree[firstName]['functions'][secondName](state, action)
                    console.log('state, case')
                    console.log(firstName, secondName)
        
                    return state
                }
        }
        // untested
		// machine will stop running if all have failed(there must be more than 0 states for this to be possible) or error state runs
		// loop ends after the first state passes
        for(var j = 0, len = next_states.length ; j < len; j++)
        {
			state_ = next_states[j][0]
			case_ = next_states[j][1]
			/*
			if(state === 'root' && case_ === '0')
			{

			}
			*/
            //action = {type: state, case_: case_}
            //store.dispatch(action)
            console.log('state, case')
            console.log(state_, case_)
            // should be children, then check if they have a parent?
            // will only work for nodes that have children
			let maybe_parent = state.tree[ state_ ]['children'][ case_ ]
			// let recursive_option = state['recursive_option']

			// seems to work on functions of the form f(x)
			// https://stackoverflow.com/questions/11107823/what-happens-if-i-dont-pass-a-parameter-in-a-javascript-function
			let did_function_pass = state.tree[state_]['functions'][case_](state_, state, [state_, case_])
			if (did_function_pass)
			{
				if (state_ == 'error')
	            {
	            	console.log('you have invalid input')
	            	process.exit()
	            }
				// needs to always check before the isParent
				if (hasParent(state, state_, case_))
				{
					// push the state to the bottom if bottom happens to be one of state's parents
					// only checks the state and not the case
					let bottom_state = bottom[0].child[0]
					let bottom_case = bottom[0].child[1]
					// change
					let parent_cases = Object.entries(state.tree[state_]['parents'][case_])//Object.entries(graph['parents'][state][case_])
					//console.log(parent_cases)
					parent_cases = makeNextStates(parent_cases)
					if (isBottomAtTheParentOfCurrentState(parent_cases, bottom_state, bottom_case))
					{
						let new_parent = new ChildParent([state_, case_], bottom[0])
						// link passing state to its parent on bottom of stack, extending the stack by 1, vertically
						bottom[0] = new_parent
						indents += 1
					}


				}

				// for when passing the current state(it is in the current next states) has a child(called next states)
				if (isParent(maybe_parent))
				{
					// add passing state horizontally
					bottom[0].child = [state_, case_]

					// getting the children
					let children = Object.entries(state.tree[state_]['children'][case_])
					children = makeNextStates(children)
					next_states = []
					for(var i in children)
					{
						next_states.push(children[i])
					}

					// let m = state.tree['i']
					// printLevelsBounds(state, state_, case_, indents, m, state['input'].length, 0, -1)



				}
				// for when passing the current state(it is in the current next states) does not have a child but has neighbor states(called next states)
				else
				{
					next_states = Object.entries(state.tree[state_]['next'][case_])
					let m = state['i']
					next_states = makeNextStates(next_states)

				    // printLevelsBounds(state, state_, case_, indents, m, state['input'].length, 0, -1)
					// add passing state horizontally
					bottom[0].child = [state_, case_]

				}

				state_changed = true

				break
			}



        }

		//printStack(bottom)
		if (next_states.length === 0)
		{
			// have linked list representing the stack
			// first item is in bottom[0]

			// travel up stack untill either hits root or hits neighbors of a prev visited level
			let tracker_continuing_next_states_indents = getNextStates(bottom[0], next_states, indents, state)

			let tracker = tracker_continuing_next_states_indents[0]
			let continuing_next_states = tracker_continuing_next_states_indents[1]
			indents = tracker_continuing_next_states_indents[2]


			bottom[0] = tracker
			next_states = continuing_next_states

			state_changed = true
			// might not actually be true ever
			/*
			if (tracker == null)
			{
				console.log('done runing machine')
			}*/
			//console.log(next_states)
			//printStack(bottom)

		}


        // if all fail then all will be rerun unless this condition is here
        if(!state_changed && next_states.length > 0)
        {


            console.log(next_states, 'have failed so your state machine is incomplete')
            return
        }
        ii += 1
    }

    //console.log(getIndents(indents), '1state machine is finished', '|'+ state + '|', case_)
	//console.log(getIndents(indents), 'exit visit', node)
	//console.log(graph)

}

const catReducer = (state = initialState, action) => {

    console.log(action)
    if(typeof(action.type) === 'string') {
        return state
    }
    let [stateFirstName, context] = action.type
    let [endStateFirstName, endStateContext] = action.endState

    if(!Object.keys(state.tree).includes(stateFirstName)) {
        return state
    }
        // console.log(state.tree[stateFirstName]['functions'][context])

        return visitRedux(  [stateFirstName, context],
                            [endStateFirstName, endStateContext],
                            state,
                            action,
                            0)

    // return state.tree[stateFirstName]['functions'][context](state, action)
    // switch(action.type) {
    //     case 1:
    //         return state.tree[action.type](state,action)
    //     case FETCH_CAT_START:
    //         // -> FETCH_CAT_SUCCESS or FETCH_CAT_FAILURE

    //         return state.tree.FETCH_CAT_START(state, action)
    //     case FETCH_CAT_SUCCESS:

    //         return state.tree.FETCH_CAT_SUCCESS(state, action)

    //     case FETCH_CAT_FAILURE:

    //     return state.tree.FETCH_CAT_FAILURE(state, action)

    //     default:
    //         return state;
    // }
}

export default catReducer;
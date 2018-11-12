import { combineReducers } from 'redux';


const visibilityReducer = (state = 'all', action) => {
    switch (action.type){
    	case 'SET_VISIBILITY_FILTER':
    		return action.filter
        default:
            return state;
    }
};

const initialTask = [
	{
		value: 'Pay electricity bill',
		id: 0,
		completed: false,
	},
	{
		value: 'Respond to emails',
		id: 1,
		completed: false,
	},
	{
		value: 'Walk the dog',
		id: 2,
		completed: false,
	},
]


const todo = (state = {}, action) => {
	switch(action.type){
		case 'ADD':
			return {value: action.value, id: action.id, completed: false};
		case 'TOOGLE_TODO':
			if (state.id === action.id){
				return Object.assign({}, state, {completed: !state.completed})
			}
			return state;
		case 'CHECK_UNCHECK_ALL':
			if (action.mode === 'check'){
				return Object.assign({}, state, {completed: true})	
			}
			else{
				return Object.assign({}, state, {completed: false})	
			}
		default:
			return state;
	}
}


const allTodos = (state = initialTask, action) => {
	switch(action.type){
		case 'ADD':
			return [...state, todo(undefined, action)];
		case 'TOOGLE_TODO':
			return state.map( e => todo(e, action));
		case 'CHECK_UNCHECK_ALL':
			return state.map( e => todo(e, action));
		default: 
			return state;
	}	
}

const searchReducer = (state = '', action) => {
	switch(action.type){ 
		case 'SEARCH_INPUT':
			return action.input;
		default: 
			return state;
	}
}

const allReducers = combineReducers({
    visibilityReducer,
    allTodos,
    searchReducer
})

export default allReducers;
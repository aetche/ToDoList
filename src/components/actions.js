
let toDoId = 3;
export const add_element = (value, id) => {
    return {
        type: 'ADD',
        value, 
        id: toDoId++
    };
}

export const toogle_todo = (id) => {
    return {
        type: 'TOOGLE_TODO',
        id
    };
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const check_uncheck_all = (mode) => {
    return{
        type: 'CHECK_UNCHECK_ALL',
        mode
    }
}

export const searchInput = (input) => {
    return{
        type: 'SEARCH_INPUT',
        input
    }
}
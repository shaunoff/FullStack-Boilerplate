export function todosApiReducers(state=[], action){
  switch(action.type){
    case "GET_TODOS":
    return [...action.payload.data.todos]
    break;
    case "DELETE_TODO":
    return [...action.payload.data.todos]
    break;
    case "ADD_TODO":
    return [...action.payload.data.todos]
    break;
  }
  return state
}

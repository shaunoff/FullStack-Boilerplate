export function booksReducers(state=[], action){
  switch(action.type){
    case "POST_BOOK":
    return [...state, action.payload]
    break;
  }
  return state
}


export function addBook(){
  const date = Date.now()
  return {
    type: "ADD_BOOK",
    payload: {title: date}
  }
};
export function removeBook(){
  return {
    type: "REMOVE_BOOK"
  }
};

export function activateBook(title){
  return {
    type: "ACTIVATE_BOOK",
    payload: title
  }
};

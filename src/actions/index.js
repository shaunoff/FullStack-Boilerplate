import axios from 'axios'

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
export function addFormData(data){
  return {
    type: "ADD_FORM_DATA",
    payload: data
  }
};

export function getTodos(data){
  const request = axios.get('http://localhost:3009/todos')


  return {
    type: "GET_TODOS",
    payload: request
  }
};
export function deleteTodo(id){
  const request = axios.delete(`http://localhost:3009/todos/${id}`)
    .then(()=>{
      return axios.get('http://localhost:3009/todos')
    })
  return {
    type: "DELETE_TODO",
    payload: request
  }
};
export function addTodo(text){
  const request = axios.post('http://localhost:3009/todos', text)
    .then(()=>{
      return axios.get('http://localhost:3009/todos')
    })
  return {
    type: "DELETE_TODO",
    payload: request
  }
};

import {Todo} from "../models/todo";

export const SET_TODO = 'SET_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS';
export const UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS';
export const EDIT_TODO = 'EDIT_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';


export interface SetTodoAction {
  type: typeof SET_TODO,
  payload: Array<Todo>
}

export function setTodos(todos: Array<Todo>): SetTodoAction {
  return {
    type: SET_TODO,
    payload: todos
  }
}

///////////
export interface CreateTodoAction {
  type: typeof CREATE_TODO,
  payload: {
    data:Todo,
    callback:()=> void
  }
}

export function createTodo(data:Todo,
  callback:()=> void): CreateTodoAction {
  return {
    type: CREATE_TODO,
    payload: {data:data,callback}
  }
}

//////////////
export interface UpdateTodoStatusAction {
  type: typeof UPDATE_TODO_STATUS,
  payload: {
    todoId: string,
    checked: boolean,
    callback:()=>void
  }
}

export function updateTodoStatus(todoId: string, checked: boolean,callback:()=> void): UpdateTodoStatusAction {
  return {
    type: UPDATE_TODO_STATUS,
    payload: {
      todoId,
      checked,
      callback
    }
  }
}

//////////////
export interface DeleteTodoAction {
  type: typeof DELETE_TODO,
  payload: string,
}

export function deleteTodo(todoId: string): DeleteTodoAction {
  return {
    type: DELETE_TODO,
    payload: todoId
  }
}

//////////////
export interface DeleteAllTodosAction {
  type: typeof DELETE_ALL_TODOS,
}

export function deleteAllTodos(): DeleteAllTodosAction {
  return {
    type: DELETE_ALL_TODOS,
  }
}

///////////
export interface ToggleAllTodosAction {
  type: typeof TOGGLE_ALL_TODOS,
  payload: {checked:boolean,callback:()=> void},
}

export function toggleAllTodos(checked: boolean,callback:()=> void): ToggleAllTodosAction {
  return {
    type: TOGGLE_ALL_TODOS,
    payload: {checked,callback}
  }
}

////////////
export interface EditTodoAction {
  type: typeof EDIT_TODO,
  payload: {
    content:string;
    todoId:string;
  }
}

export function editTodo(todoId: string,content:string): EditTodoAction {
  return {
    type: EDIT_TODO,
    payload: {
      content,todoId
    }
  }
}
////////////
export interface FilterTodoAction {
  type: typeof FILTER_TODOS,
  payload: {
    filterName:string
  }
}

export function filterTodo(filterName:string): FilterTodoAction {
    return {
      type: FILTER_TODOS,
      payload: {
        filterName
      }
    }
}

export type AppActions =
  SetTodoAction |
  CreateTodoAction |
  UpdateTodoStatusAction |
  DeleteTodoAction |
  DeleteAllTodosAction |
  ToggleAllTodosAction | 
  EditTodoAction | 
  FilterTodoAction;
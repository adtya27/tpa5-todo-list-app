import axios from 'axios';

const initialState = {
  todos: [],
  isloading: false,
};

function todoReducers(state = initialState, action) {
  switch (action.type) {
    case 'START_FETCHING':
      return {
        ...state,
        isloading: true,
      };
    case 'SUCCESS_GET_TODO':
      return {
        ...state,
        isloading: false,
        todos: action.payload,
      };
    default:
      return state;
  }
}

function startFetching() {
  return {
    type: 'START_FETCHING',
  };
}
function successGetTodo(data) {
  return {
    type: 'SUCCESS_GET_TODO',
    payload: data,
  };
}

export function getTodo() {
  return async function (dispatch) {
    dispatch(startFetching());
    const { data } = await axios('https://652c0692d0d1df5273ef0d3c.mockapi.io/v1/todo');
    dispatch(successGetTodo(data));
  };
}

export const addTodo = (newTodo) => async (dispatch) => {
  dispatch(startFetching());

  await axios.post('https://652c0692d0d1df5273ef0d3c.mockapi.io/v1/todo', newTodo);

  dispatch(getTodo());
};

export const editTodo = (id, text) => async (dispatch) => {
  dispatch(startFetching());

  await axios.put('https://652c0692d0d1df5273ef0d3c.mockapi.io/v1/todo/' + id, text);

  dispatch(getTodo());
};

export const delTodo = (id) => async (dispatch) => {
  dispatch(startFetching());

  await axios.delete('https://652c0692d0d1df5273ef0d3c.mockapi.io/v1/todo/' + id);
  dispatch(getTodo());
};

export default todoReducers;

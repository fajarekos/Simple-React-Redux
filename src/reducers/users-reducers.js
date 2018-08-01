import { UPDATE_USER } from '../actions/users-actions';

export default function userReducers(state = '', action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload.user
    default:
      return state;
  }
} 
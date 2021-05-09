import { SET_USER } from "./Constants"

const initialState = {
  email: null,
  password: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_USER:
      return {
        ...state,
        email: payload.email,
        password: payload.password
      }

    default:
      return state
  }
}

export const setUser = (payload) => {
  debugger
  return ({
    type: SET_USER,
    payload
  })
}

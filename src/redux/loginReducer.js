import { SET_AUTH } from "./Constants"

const initialState = {
  isAuth: false,
  email: null,
  password: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_AUTH:
      return {
        ...state,
        isAuth: true,
        email: payload.email,
        password: payload.password
      }

    default:
      return state
  }
}

export const setAuth = (payload) => ({
  type: SET_AUTH,
  payload
})


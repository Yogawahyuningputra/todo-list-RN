import { createContext, useReducer } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const UserContext = createContext()
const initialState = {
  isLogin: false,
  data: {},
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "USER_SUCCESS":
    case "LOGIN_SUCCESS":
      AsyncStorage.setItem("token", payload?.token)
      return {
        isLogin: true,
        data: payload,
      }
    case "AUTH_ERROR":
    case "LOGOUT":
      AsyncStorage.removeItem("token")
      return {
        isLogin: false,
        data: {},
      }
    default:
      throw new Error()
  }
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}
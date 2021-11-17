import React, { createContext, useReducer } from "react"

export const MessageContext = createContext()

function reducer (state, action){
    switch (action.type){
        case "set_message":
            return {...state, message: action.payload, count: state.count + 1}
        default:
            return state
    }

}

export const MessageProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {message: "No new message", count: 0})
    return (
        <MessageContext.Provider value={[state, dispatch]}>
            {children}
        </MessageContext.Provider>
    )
}
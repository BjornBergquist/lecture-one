import React, { createContext, useState } from "react"

export const MessageContext = createContext()

export const MessageProvider = ({children}) => {
    const [message, setMessage] = useState("Default Message")
    return (
        <MessageContext.Provider value={[message, setMessage]}>
            {children}
        </MessageContext.Provider>
    )
}
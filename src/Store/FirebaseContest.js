import {createContext, useState}from 'react'

export const firebaseContest=createContext(null)

export const AuthContest=createContext(null)

function Context({children}){
const [user,setUser]=useState(null)

return(

<AuthContest.Provider value={{user,setUser}}>
    {children}
</AuthContest.Provider>
)


}
 export default Context

import { useEffect, useState } from "react"

//this hook will return bool for user is offline or not
const useIsOffline=()=>{
const [isOffline,setIsOffline]=useState(false)

useEffect(()=>{
    //call back to handle online
    const handleOnline=()=>{
        setIsOffline(false)
    }
    //call back to handle offline
    const handleOffline=()=>{
        setIsOffline(true)
    }
    //adding event listeners provided by JS
    window.addEventListener("online",handleOnline)
    window.addEventListener("offline",handleOffline)
    //cleanup code
    return ()=>{
        //remove the event listeners
        window.removeEventListener("online",handleOnline)
        window.removeEventListener("offline",handleOffline)
    }
},[])
return isOffline
}

export default useIsOffline
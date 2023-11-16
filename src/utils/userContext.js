import { createContext } from "react";

const UserContext=createContext({
    user:{
        name:"aman gaur",
        gender:"male"
    }
})

export default UserContext;
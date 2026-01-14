import { ReactNode,useMemo,useState } from "react";
import {swit ,type Sidebar} from "./context"

const Switch =( {children}: {children: ReactNode})=>{

    const [open,setopen]=useState(false);
    const toggle=()=>{
        setopen((prev)=>!prev)
    };

    const value:Sidebar = useMemo(()=>{
         ({open,toggle})
    },[open]);

    return(
        <swit.Provider value={value}>
            {Children}
        </swit.Provider>
    )
}
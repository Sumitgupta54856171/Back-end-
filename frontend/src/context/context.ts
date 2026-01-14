import { createContext } from "react";

export type Sidebar ={
    open:boolean;
    tagglesidebar:()=>void;
}

export const swit = createContext<Sidebar | null>(null);
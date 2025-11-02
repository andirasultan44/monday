import React, {createContext, useState, ReactNode} from "react";
import { CategorieProps, CategorieContextType } from "./categoriesType";

interface ChildrenProps {
    children: React.ReactNode;
  };

export const CategoriesContext = createContext<CategorieContextType|null>(null);

export const CategoriesContextProvider:React.FC<ChildrenProps> = ({children})=>{

    const [categList, setCategList] = useState<CategorieProps[]>([
        {
            id:0,
            name: "None",
            color: "#afafaf"
        },
        {
            id:1,
            name: "Tugas",
            color: "#FF9C9C"
        },
        {   id:2,
            name:"Sekolah",
            color: "#FFD79C"
        },
        {
            id:3,
            name:"Daftar Belanja",
            color: "#9CD0FF"
        },
    ])

    return(
        <CategoriesContext.Provider value={{categList}}>
            {children}
        </CategoriesContext.Provider>
    )
};


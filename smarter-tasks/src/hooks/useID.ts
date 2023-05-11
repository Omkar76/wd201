import { useEffect, useState } from "react";

  export const useID = (key: string, defaultID: number): 
  [number, () => void]  => {
    const [ID, setID] = useState<number>(() => {
      const storedID = localStorage.getItem(key);
      const parsedID = storedID == null ? defaultID : parseInt(storedID);

      // localStorage.setItem(key, JSON.stringify(parsedID+ 1));
      return parsedID;
    });
  
    const incremetID = ()=>{
        const newID = ID + 1;
        setID(newID);
        localStorage.setItem(key, JSON.stringify(newID));
    }

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(ID));
    }, [key, ID]);
  
    return [ID, incremetID];
  };
  
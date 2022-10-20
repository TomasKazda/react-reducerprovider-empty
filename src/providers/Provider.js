import {createContext, useReducer, useEffect} from "react";

const LOCAL_STORAGE_ID = "mystorageidsCnt2E0A";

export const CLEAR = "CLEAR";
export const RESET = "RESET";
export const SETDATA1 = "SD1";

const copyMultidimensionalArray = arr => JSON.parse(JSON.stringify(arr));

const initialState = {data1: "string", data2: [1,4,2,3]};

let storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));

const dataReducer = (state, action) => {
    switch (action.type) {
        case CLEAR: {
            let newTables = copyMultidimensionalArray(state.data2)
            return {...state, data2: newTables.fill(0)};
        }
        case RESET: {
            return  initialState;
        }
        case SETDATA1: {
            return {...state, data1: action.payload}
        }
        default: {
            return state;
        }
    }
}

export const Context = createContext();

export const Provider = ({children, ...rest}) => {
    const [store, dispatch] = useReducer(dataReducer, storedData || initialState);
    useEffect(()=> {
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(store));
    },[store])
    return (
        <Context.Provider value={[store, dispatch]}>
            {children}
        </Context.Provider>
    );
}
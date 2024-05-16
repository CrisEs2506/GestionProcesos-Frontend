import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const Context = createContext();

//Hook para devolver el objeto que usa el Context (es decir, el que trae todos los datos globales)
export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

//Inicializar el state
const initialState = {
    programas: []
}

export const GlobalProvider = ({ children }) => {
    //useReducer que tiene el State(todos los datos) y su respectivo setter llamado dispatch(setState), además toma el AppReducer para saber  que acción debe realizar
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addProcessForm = (processForm) => {
        //Settear el state
        dispatch({
            type: "ADD_PROCESS_FORM",
            payload: processForm
        })
    }

    return (
        <Context.Provider
            value={{
                programas: state.programas,
                addProcessForm
            }}
        >
            {children}
        </Context.Provider>
    )
}
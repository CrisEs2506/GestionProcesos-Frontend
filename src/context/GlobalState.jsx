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
    //programas: []
    programas: [
        {
            pid: "A",
            llegada: 0,
            duracion: 8,
            bloqueos: [
              {
                llegada: 3,
                duracion: 4,
              },
              {
                llegada: 7,
                duracion: 2,
              },
            ],
            estadisticas: {
              ejecucion: 0,
              espera: 0,
              bloqueo: 0,
              instante_fin: 0,
              retorno: 0,
              tiempo_perdido: 0,
              penalidad: 0,
              tiempo_respuesta: 0,
            },
          },
          {
            pid: "B",
            llegada: 1,
            duracion: 3,
            bloqueos: [
              {
                llegada: 2,
                duracion: 5,
              },
            ],
            estadisticas: {
              ejecucion: 0,
              espera: 0,
              bloqueo: 0,
              instante_fin: 0,
              retorno: 0,
              tiempo_perdido: 0,
              penalidad: 0,
              tiempo_respuesta: 0,
            },
          },
          {
            pid: "C",
            llegada: 3,
            duracion: 12,
            bloqueos: [
              {
                llegada: 1,
                duracion: 3,
              },
              {
                llegada: 8,
                duracion: 1,
              },
            ],
            estadisticas: {
              ejecucion: 0,
              espera: 0,
              bloqueo: 0,
              instante_fin: 0,
              retorno: 0,
              tiempo_perdido: 0,
              penalidad: 0,
              tiempo_respuesta: 0,
            },
          },
          {
            pid: "D",
            llegada: 5,
            duracion: 10,
            bloqueos: [
              {
                llegada: 1,
                duracion: 4,
              },
              {
                llegada: 2,
                duracion: 12,
              },
            ],
            estadisticas: {
              ejecucion: 0,
              espera: 0,
              bloqueo: 0,
              instante_fin: 0,
              retorno: 0,
              tiempo_perdido: 0,
              penalidad: 0,
              tiempo_respuesta: 0,
            },
          },
          {
            pid: "E",
            llegada: 9,
            duracion: 11,
            bloqueos: [
              {
                llegada: 4,
                duracion: 11,
              },
            ],
            estadisticas: {
              ejecucion: 0,
              espera: 0,
              bloqueo: 0,
              instante_fin: 0,
              retorno: 0,
              tiempo_perdido: 0,
              penalidad: 0,
              tiempo_respuesta: 0,
            },
          },
          {
            pid: "F",
            llegada: 12,
            duracion: 9,
            bloqueos: [
              {
                llegada: 5,
                duracion: 3,
              },
              {
                llegada: 7,
                duracion: 4,
              },
            ],
            estadisticas: {
              ejecucion: 0,
              espera: 0,
              bloqueo: 0,
              instante_fin: 0,
              retorno: 0,
              tiempo_perdido: 0,
              penalidad: 0,
              tiempo_respuesta: 0,
            },
          },
          {
            pid: "G",
            llegada: 14,
            duracion: 10,
            bloqueos: [],
            estadisticas: {
              ejecucion: 0,
              espera: 0,
              bloqueo: 0,
              instante_fin: 0,
              retorno: 0,
              tiempo_perdido: 0,
              penalidad: 0,
              tiempo_respuesta: 0,
            },
          },
    ]
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
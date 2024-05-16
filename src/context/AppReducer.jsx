//State trae todos los datos que se tengan hasta el momento y Action es la acción que queremos realizar
export default (state, action) => {
    //Dentro de action hay una propiedad type para saber la acción que desea realizar
    switch (action.type) {
        case "ADD_PROCESS_FORM":
            //Copiar lo que ya se encuentra en el estado actualmente y añadir el objeto que se esta enviando
            return {
                ...state,
                programas: [...state.programas, action.payload]
            }
            
        default:
            return state
    }
}
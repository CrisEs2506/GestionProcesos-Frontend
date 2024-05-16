import { useState } from 'react'
import { useGlobalState } from '../context/GlobalState'

function AsignationForm() {
    //Traer los datos globales del GlobalState o el Context
    const data = useGlobalState();

    //Acceder a la función addProcess del Context
    const { addProcessForm } = useGlobalState()

    const [pid, setPid] = useState()
    const [llegada, setLlegada] = useState(0)
    const [duracion, setDuracion] = useState(0)
    const [llegadaBloqueo, setLlegadaBloqueo] = useState(0)
    const [duracionBloqueo, setDuracionBloqueo] = useState(0)
    const [bloqueos, setBloqueos] = useState([])

    const onSubmitProcess = (e) => {
        //No reiniciar el navegador
        e.preventDefault()

        addProcessForm({
            pid,
            llegada: parseInt(llegada),
            duracion: parseInt(duracion),
            bloqueos,
            estadisticas: {
                ejecucion: 0,
                espera: 0,
                bloqueo: 0,
                instante_fin: 0,
                retorno: 0,
                tiempo_perdido: 0,
                penalidad: 0,
                tiempo_respuesta: 0
            } 
        })

        setBloqueos([])
        console.log(pid, llegada, duracion)
    }
    
    const agregarBloqueo = (e) => {
        //No reiniciar el navegador
        e.preventDefault()
        
        setBloqueos([
            ...bloqueos,
            {
                llegada: parseInt(llegadaBloqueo),
                duracion: parseInt(duracionBloqueo)
            }
        ]);
        // Limpiar los campos después de agregar el bloqueo
        setLlegadaBloqueo('');
        setDuracionBloqueo('');
    }

    return (
        <div>
            <form onSubmit={onSubmitProcess}>
                {/* Proceso */}
                <input type='text' placeholder='Ingresar PID' 
                    onChange={ (e) => setPid(e.target.value) }
                />
                
                <input type='number' placeholder='Ingresar Llegada' 
                    onChange={ (e) => setLlegada(e.target.value) }
                />
                <input type='number' placeholder='Ingresar Duracion' 
                    onChange={ (e) => setDuracion(e.target.value) }
                />

                <button>
                    Agregar Proceso
                </button>
            </form>

            <form onSubmit={agregarBloqueo}>
                {/* Bloqueos */}
                <input type='number' placeholder='Ingresar Llegada Bloqueo' 
                    onChange={ (e) => setLlegadaBloqueo(e.target.value) }
                />
                <input type='number' placeholder='Ingresar Duracion Bloqueo' 
                    onChange={ (e) => setDuracionBloqueo(e.target.value) }
                />

                <button>
                    Agregar Bloqueo
                </button>
            </form>

            <div>
                {JSON.stringify(data)}
            </div>
        </div>


        /*
        <div className="flex flex-col py-4 justify-center w-full">
            <h1 className="px-6 py-2 text-xl font-bold w-fit">Asignación de Procesos</h1>

            <form
                className="flex flex-col justify-center gap-4 items-center"
                onSubmit={onSubmit}
            >
                <div className="flex flex-col px-6 align-middle justify-start">
                    <label className="font-normal max-w-full w-full">Name: </label>
                    <input
                        type="text"
                        onChange={(e) => setProgramName(e.target.value)}
                        value={ProgramName}
                        className="bg-white text-black max-w-full w-full rounded px-4 py-1"
                    />
                </div>

                <div className="flex flex-col px-6 align-middle justify-start">
                    <label className="font-normal max-w-full w-full">
                        Text Size (Bytes):{" "}
                    </label>
                    <input
                        className="bg-white text-black max-w-full w-full rounded px-4 py-1"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                </div>

                <div className="flex flex-col px-6 align-middle justify-start">
                    <label className="font-normal max-w-full w-full">
                        Data Size (Bytes):{" "}
                    </label>
                    <input
                        className="bg-white text-black max-w-full w-full rounded px-4 py-1"
                        onChange={(e) => setData(e.target.value)}
                        value={data}
                    />
                </div>

                <div className="flex flex-col px-6 align-middle justify-start">
                    <label className="font-normal max-w-full w-full">
                        Bss Size (Bytes):{" "}
                    </label>
                    <input
                        className="bg-white text-black max-w-full w-full rounded px-4 py-1"
                        onChange={(e) => setBss(e.target.value)}
                        value={bss}
                    />
                </div>

                <div className="flex justify-center">
                    <button className="p-2 text-white bg-teal-600 w-20 rounded">
                        Assign
                    </button>
                </div>
            </form>
        </div>
        */
    )
}

export default AsignationForm
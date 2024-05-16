import React from 'react'

import TimelineChart from './TimelineChart';
import { useGlobalState } from '../context/GlobalState';
import { useState } from 'react';

import FCFS from '../logic/FCFS';
import SRTF from '../logic/SRTF';
import SJF from '../logic/SJF';
import RR from '../logic/RR';

function Prepared({ algoritmo, quantum } ) {
    const programas = useGlobalState();
    const programasJSON = JSON.stringify(programas);
    console.log(programasJSON);
    const programasObject = JSON.parse(programasJSON);
    console.log(programasObject.programas);
    console.log(algoritmo);
    console.log(quantum);

    const procesos = programasObject.programas.map((programa) => {
        return {
            programa,
            espera_reciente: 0,
            counterEjecucion: 0,
            counterEspera: 0,
            contadoresBloqueos: Array(programa.bloqueos.length).fill(0),
            counterNumBloqueo: 0,
            arrayEstados: [],
            terminado: false,
        };
    });

    let result;

    switch (algoritmo) {
        case '1':
            result = FCFS(procesos);
            break;
        case '2':
            result = SRTF(procesos);
            break;
        case '3':
            result = SJF(procesos);
            break;
        case '4':
            result = RR(quantum, procesos);
            break;
        default:
            result = FCFS(procesos); // Valor por defecto
    }

    //Aquí necesito un if dependiendo del numero de algoritmo
    //const result = FCFS(procesos)
    //const result = STRF(procesos)
    //const result = SJF(procesos)
    //result = RR(quantum, procesos)

    const [ejecution_data, setEjecution_data] = useState(result.ejecution_data)
    const [ocupado_data, setOcupado_data] = useState(result.ocupado_data)
    const [en_espera_data, setEn_espera_data] = useState(result.en_espera_data)
    const [labels, setLabels] = useState(result.labels)
    const ticks = result.tick

    return (
        <>
            <h1>Timeline</h1>
            <div>
                <TimelineChart ejecution_data={ejecution_data} ocupado_data={ocupado_data} en_espera_data={en_espera_data} labels_array={labels} ticks={ticks} />
            </div>
    </>
    )
}

export default Prepared
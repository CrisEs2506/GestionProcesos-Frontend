import { useState } from 'react';

function Selector() {
    const [algoritmo, setAlgoritmo] = useState('');
    const [quantum, setQuantum] = useState('');

    const handleChange = (e) => {
        setAlgoritmo(e.target.value);
        if (e.target.value !== '4') {
            setQuantum('');
        }
    };

    const handleInputQuantum = (e) => {
        setQuantum(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Ejecutar el algoritmo
    };

    return (
        <div className="w-full max-w-sm mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="algoritmo">
                        Seleccione el algoritmo a ejecutar:
                    </label>
                    <select
                        className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        id="opcion"
                        value={algoritmo}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="1">Algoritmo FCFS</option>
                        <option value="2">Algoritmo SRTF</option>
                        <option value="3">Algoritmo SJF</option>
                        <option value="4">Algoritmo RR</option>
                    </select>
                </div>
                {algoritmo === '4' && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantum">
                            Quantum:
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="quantum"
                            type="number"
                            placeholder="Número de Quantum"
                            value={quantum}
                            onChange={handleInputQuantum}
                        />
                    </div>
                )}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Ejecutar
                    </button>
                </div>
            </form>

            {algoritmo && (
                <Prepared algoritmo={algoritmo} quantum={quantum} />
            )}

        </div>
    );
}

export default Selector;
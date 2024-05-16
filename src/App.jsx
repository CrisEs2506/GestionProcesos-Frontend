import { GlobalProvider } from "./context/GlobalState"

import AsignationForm from "./components/AsignationForm"
import Selector from "./components/Selector"

function App() {
  return (
    <GlobalProvider>
      <div className="flex p-6 bg-zinc-800 h-screen w-screen justify-center items-center">
        <main className="h-full w-full flex flex-col gap-4">
          <h1 className="text-center font-bold text-2xl text-white">
            Gestión de Procesos
          </h1>
          <div className="outline outline-white h-full max-h-full outline-4 flex flex-col md:flex-row rounded-md bg-zinc-800 text-slate-100 overflow-auto">
            <AsignationForm />
            <Selector />
          </div>
        </main>
      </div>
    </GlobalProvider>
  )
}

export default App

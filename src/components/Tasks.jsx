import AddIcon from "../assets/icons/add.svg?react"
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import Button from "./Button"

const Tasks = () => {
  return (
    <div className="w-full px-16 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="py-16 text-xl">Minhas tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button varient="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button>
            Adicionar Tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      {/*Tasks  */}
      <div className="rounded-xl bg-white p-4">
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1">
            <SunIcon />
            <p className="text-[#9A9C9F]">Manhã</p>
          </div>
        </div>
        <div className="my-6 space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1">
            <CloudSunIcon />
            <p className="text-[#9A9C9F]">Tarde</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1">
            <MoonIcon />
            <p className="text-[#9A9C9F]">Noite</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks

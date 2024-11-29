import { useState } from "react"

import AddIcon from "../assets/icons/add.svg?react"
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import TASKS from "../contants/tasks"
import Button from "./Button"
import TaskItem from "./TaskItem"
import TaskSeparator from "./TaskSeparator"

const Tasks = () => {
  const [tasks] = useState(TASKS)

  const mornigTasks = tasks.filter((task) => task.time === "morning")
  const afternoonTasks = tasks.filter((task) => task.time === "affternoon")
  const eveningTasks = tasks.filter((task) => task.time === "evening")

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
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
          {mornigTasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TaskSeparator title="Manhã" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks

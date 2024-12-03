import { useState } from "react"
import { toast } from "sonner"

import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/icons"
import TASKS from "../contants/tasks"
import AddTaskDialog from "./AddTaskDialog"
import Button from "./Button"
import TaskItem from "./TaskItem"
import TaskSeparator from "./TaskSeparator"

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)

  const mornigTasks = tasks.filter((task) => task.time === "morning")
  const afternoonTasks = tasks.filter((task) => task.time === "affternoon")
  const eveningTasks = tasks.filter((task) => task.time === "evening")

  const handleCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) return task

      if (task.status === "not_started") {
        toast.success("Tarefa iniciada com sucesso!")
        return { ...task, status: "in_progress" }
      }

      if (task.status === "in_progress") {
        toast.success("Tarefa concluída com sucesso!")
        return { ...task, status: "done" }
      }
      if (task.status === "done") {
        toast.success("Tarefa reiniciada com sucesso!")
        return { ...task, status: "not_started" }
      }

      return task
    })

    setTasks(newTasks)
  }

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks)
    toast.success("Tarefa deletada com sucesso!")
  }

  return (
    <div className="w-full space-y-6 px-16 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="py-4 text-xl">Minhas tarefas</h2>
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
          <AddTaskDialog isOpen={true} />
        </div>
      </div>

      {/*Tasks  */}
      <div className="rounded-xl bg-white p-4">
        <div className="space-y-3">
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
          {mornigTasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              handleCheckboxClick={handleCheckboxClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TaskSeparator title="Manhã" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              handleCheckboxClick={handleCheckboxClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              handleCheckboxClick={handleCheckboxClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks

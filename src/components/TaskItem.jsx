import {
  CheckIcon,
  DetailsIcon,
  LoaderCicleIcon,
  TrashIcon,
} from "../assets/icons"
import Button from "./Button"

const TaskItem = ({ task, handleCheckboxClick, handleDeleteClick }) => {
  const getStatusClasses = () => {
    if (task.status === "done") return "bg-[#00ADB5] text-[#00ADB5]"
    if (task.status === "in_progress") return "bg-[#FFAA04] text-[#ffaa04]"
    if (task.status === "not_started")
      return "bg-rand-dark-blue bg-opacity-10 text-rand-dark-blue"
  }

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 text-sm transition ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckboxClick(task.id)}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderCicleIcon className="animate-spin" />
          )}
        </label>

        {task.title}
      </div>
      <div className="flex items-center gap-2">
        <Button varient="ghost" onClick={() => handleDeleteClick(task.id)}>
          <TrashIcon className="text-[#eceff1]" />
        </Button>
        <a href="#" className="transition hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  )
}

export default TaskItem

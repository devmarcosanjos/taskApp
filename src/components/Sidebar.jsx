import { HomeIcon, TaskIcon } from "../assets/icons"
import SidebarButton from "./SidebarButton"

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white">
      <div className="px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p>
          Um simples{" "}
          <span className="space-y-4 text-[#00ADB5]">
            {" "}
            organizador de tarefas
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton varient="default">
          <HomeIcon />
          Ínicio
        </SidebarButton>
        <SidebarButton varient="selected">
          <TaskIcon />
          Minhas tarefas
        </SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar

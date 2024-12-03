import { createPortal } from "react-dom"

import Button from "./Button"
import Input from "./Input"

const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null
  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h1 className="text-xl font-semibold text-[#35383e]">Nova tarefa</h1>
        <p className="mb-4 mt-1 text-sm text-[#97a99f]">
          Insira as informações abaixo
        </p>

        <div className="flex w-[336px] flex-col space-y-4">
          <Input
            placeholder="Insira titulo da tarefa"
            label="teste"
            id="tittle"
          />
          <Input placeholder="Horario" label="Horario" id="time" />
          <Input
            placeholder="Descreva a tarefa"
            label="Descrição"
            id="description"
          />
          <div className="flex gap-3">
            <Button
              varient="secundary"
              size="large"
              className="w-full"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button size="large" className="w-full">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default AddTaskDialog

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { v4 } from "uuid"

import Button from "./Button"
import Input from "./Input"
import SelectTime from "./SelectTime"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (!isOpen) {
      setTitle("")
      setTime("morning")
      setDescription("")
    }
  }, [isOpen])

  const handleSaveClick = () => {
    if (!title.trim() || !description.trim()) {
      alert("Preencha todos os campos")
      return
    }
    handleSubmit({
      id: v4(),
      title,
      time,
      description,
    })
    handleClose()
  }

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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <SelectTime onChange={(e) => setTime(e.target.value)} value={time} />

          <Input
            placeholder="Descreva a tarefa"
            label="Descrição"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            <Button size="large" className="w-full" onClick={handleSaveClick}>
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

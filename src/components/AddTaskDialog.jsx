import { useRef } from "react"
import { createPortal } from "react-dom"
import { v4 } from "uuid"

import Button from "./Button"
import Input from "./Input"
import SelectTime from "./SelectTime"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const title = useRef()
  const description = useRef()
  const timeRef = useRef()

  const handleSaveClick = () => {
    if (!isOpen) return null
    const newError = []

    const titleValue = title.current.value
    const descriptionValue = description.current.value
    const time = timeRef.current.value

    if (titleValue.length < 0) {
      newError.push({
        inputNane: "title",
        message: "O campo título é obrigatório",
      })
    }

    if (descriptionValue.length < 0) {
      newError.push({
        inputNane: "description",
        message: "O campo descrição é obrigatório",
      })
    }

    if (time === "Selecione um horário") {
      newError.push({
        inputNane: "time",
        message: "O campo horário é obrigatório",
      })
    }

    handleSubmit({
      id: v4(),
      title: title.current.value,
      time: timeRef.current.value,
      description: description.current.value,
      status: "not_started",
    })
    handleClose()
  }

  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h1 className="text-xl font-semibold text-brand-dark-blue">
          Nova tarefa
        </h1>
        <p className="mb-4 mt-1 text-sm text-[#97a99f]">
          Insira as informações abaixo
        </p>

        <div className="flex w-[336px] flex-col space-y-4">
          <Input
            placeholder="Insira titulo da tarefa"
            label="teste"
            id="tittle"
            ref={title}
          />

          <SelectTime ref={timeRef} />

          <Input
            placeholder="Descreva a tarefa"
            label="Descrição"
            id="description"
            ref={description}
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

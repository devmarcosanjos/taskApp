const AddTaskDialog = (isOpen) => {
  if (!isOpen) return null
  return (
    <div className="fixed bottom-0 top-0 flex h-screen w-screen items-center justify-center">
      <h2 className="text-4xl text-white">Add task</h2>
    </div>
  )
}

export default AddTaskDialog

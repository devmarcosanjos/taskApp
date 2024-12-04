import InputLabel from "./InputLabel"

const SelectTime = (props) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horario</InputLabel>
      <select
        id="time"
        className="rounded-lg border-solid border-[#ececec] px-4 py-3 outline-[#00adb5] placeholder:text-sm placeholder:text-[#9a9c9f]"
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="affternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  )
}

export default SelectTime

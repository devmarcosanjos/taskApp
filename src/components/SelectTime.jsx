import InputLabel from "./InputLabel"

const SelectTime = () => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horario</InputLabel>
      <select
        id="time"
        className="rounded-lg border-solid border-[#ececec] px-4 py-3 outline-[#00adb5] placeholder:text-sm placeholder:text-[#9a9c9f]"
      >
        <option value="mornig">Manhã</option>
        <option value="aftrnoon">Tarde</option>
        <option value="night">Noite</option>
      </select>
    </div>
  )
}

export default SelectTime

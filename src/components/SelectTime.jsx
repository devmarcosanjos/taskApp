import PropTypes from "prop-types"
import { forwardRef } from "react"

import InputLabel from "./InputLabel"

const SelectTime = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horario</InputLabel>
      <select
        id="time"
        className="rounded-lg border-solid border-brand-light-gray px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        ref={ref}
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="affternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  )
})

SelectTime.displayName = "SelectTime"

SelectTime.propTypes = {
  label: PropTypes.string.isRequired,
}

export default SelectTime

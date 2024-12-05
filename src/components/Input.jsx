import PropTypes from "prop-types"
import { forwardRef } from "react"

import InputLabel from "./InputLabel"

const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>

      <input
        className="rounded-lg border-solid border-brand-light-gray px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        ref={ref}
        {...rest}
      />
    </div>
  )
})

Input.displayName = "Input"

Input.prototype = {
  label: PropTypes.string.isRequired,
}
export default Input

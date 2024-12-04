import { forwardRef } from "react"

import InputLabel from "./InputLabel"

const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>

      <input
        className="rounded-lg border-solid border-[#ececec] px-4 py-3 outline-[#00adb5] placeholder:text-sm placeholder:text-[#9a9c9f]"
        ref={ref}
        {...rest}
      />
    </div>
  )
})

Input.displayName = "Input"
export default Input

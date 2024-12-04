const Button = ({
  children,
  varient = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVarientClasses = () => {
    if (varient === "primary") {
      return "text-white bg-[#00abb5]"
    }
    if (varient === "ghost") {
      return "text-[#818181] bg-trasparent"
    }

    if (varient === "secundary") {
      return "text-rand-dark-blue bg-[#EEE]"
    }
  }

  const getSizeClasses = () => {
    if (size === "small") return "py-1 text-xs"

    if (size === "large") return "py-2 text-sm"
  }
  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-md px-3 font-semibold transition hover:opacity-80 ${getVarientClasses()} ${getSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button

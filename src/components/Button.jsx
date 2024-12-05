const Button = ({
  children,
  varient = "brand-primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVarientClasses = () => {
    if (varient === "brand-primary") {
      return "text-white bg-[#00abb5]"
    }
    if (varient === "ghost") {
      return "text-brand-dark-gray bg-trasparent"
    }

    if (varient === "secundary") {
      return "text-brand-dark-blue bg-brand-light-gray"
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

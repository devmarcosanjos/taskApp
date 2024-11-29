const Button = ({ children, varient = "primary" }) => {
  const getVarientClasses = () => {
    if (varient === "primary") {
      return "text-white bg-[#00abb5]"
    }
    if (varient === "ghost") {
      return "text-[#818181] bg-trasparent"
    }
  }
  return (
    <button
      className={`flex items-center gap-1 rounded-md px-3 py-2 text-xs font-semibold transition hover:opacity-80 ${getVarientClasses()}`}
    >
      {children}
    </button>
  )
}

export default Button

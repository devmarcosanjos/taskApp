const SidebarButton = ({ children, varient }) => {
  const getVatientedClasses = () => {
    if (varient === "default") {
      return "text-[#35383E]"
    }

    if (varient === "selected") {
      return "text-[#00ADB5] bg-[#E6F7F8]"
    }
  }
  return (
    <a
      href="#"
      className={`flex items-center gap-2 px-6 py-2 ${getVatientedClasses()}`}
    >
      {children}
    </a>
  )
}

export default SidebarButton

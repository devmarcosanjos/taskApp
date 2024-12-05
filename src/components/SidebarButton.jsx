const SidebarButton = ({ children, varient }) => {
  const getVatientedClasses = () => {
    if (varient === "default") {
      return "text-brand-dark-blue"
    }

    if (varient === "selected") {
      return "text-brand-primary bg-brand-light-gray rounded-lg"
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

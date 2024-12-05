import { tv } from "tailwind-variants"

const SidebarButton = ({ children, varient }) => {
  const sidebar = tv({
    base: "flex items-center gap-2 px-6 py-2",
    color: {
      unselected: "text-brand-dark-blue",
      selected: "rounded-lg bg-brand-light-gray text-brand-primary",
    },
    defaultVariants: {
      color: "unselected",
    },
  })

  return (
    <a href="#" className={sidebar({ varient })}>
      {children}
    </a>
  )
}

export default SidebarButton

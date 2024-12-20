import PropTypes from "prop-types"
import { tv } from "tailwind-variants"

const Button = ({
  children,
  color = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const button = tv({
    base: "flex items-center justify-center gap-1 rounded-md px-3 font-semibold transition hover:opacity-80",
    variants: {
      color: {
        primary: "bg-brand-primary text-white",
        ghost: "bg-trasparent text-brand-dark-gray",
        sesecundary: "bg-brand-light-gray text-brand-dark-blue",
      },
      size: {
        small: "py-1 text-xs",
        large: "py-2 text-sm",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  })

  return (
    <button className={button({ color, size, className })} {...rest}>
      {children}
    </button>
  )
}

Button.prototype = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "ghost", "secundary"]),
  size: PropTypes.oneOf(["small", "large"]),
  className: PropTypes.string,
}

export default Button

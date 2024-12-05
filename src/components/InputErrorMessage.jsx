import PropTypes from "prop-types"

const InputErrorMessage = ({ children }) => {
  return <p className="text-left text-xs text-brand-danger">{children}</p>
}

InputErrorMessage.prototype = {
  children: PropTypes.node.isRequired,
}

export default InputErrorMessage

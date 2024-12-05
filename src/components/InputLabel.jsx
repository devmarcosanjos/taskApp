import PropTypes from "prop-types"

const InputLabel = (props) => {
  return (
    <labe className="text-sm font-semibold text-brand-dark-blue" {...props}>
      {props.children}
    </labe>
  )
}

InputLabel.prototype = {
  children: PropTypes.node.isRequired,
}

export default InputLabel

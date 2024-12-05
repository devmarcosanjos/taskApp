const InputLabel = (props) => {
  return (
    <labe className="text-sm font-semibold text-brand-dark-blue" {...props}>
      {props.children}
    </labe>
  )
}

export default InputLabel

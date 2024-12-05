import PropTypes from "prop-types"

const TaskSeparator = ({ title, icon }) => {
  return (
    <div className="flex gap-2 border-b border-solid border-brand-light-gray pb-1">
      {icon}
      <p className="text-brand-text-gray">{title}</p>
    </div>
  )
}

TaskSeparator.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}

export default TaskSeparator

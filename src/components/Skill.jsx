import PropTypes from "prop-types"
const Skill = ({title,text, icon:Icon}) => {
  return (
    <div className="flex items-center gap-6 bg-white/15 text-white px-7 py-10
        max-w-[300px] max-h-[200px] rounded-lg hover:shadow-lg
     hover:bg-primary/80 hover:scale-110 duration-200">
      <Icon className="text-5xl flex-shrink-0 " />
      <div className="space-y-3 overflow-hidden">
        <p className="text-3xl overflow-hidden text-ellipsis">{title}</p>
        <p>{text}
        </p>
      </div>
    </div>
  )
}
Skill.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired
}

export default Skill
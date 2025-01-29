import PropTypes from "prop-types"
const Skill = ({title,text, icon:Icon}) => {
  return (
    <div className="flex items-center gap-6 bg-white/15 text-white px-7 py-10
        max-w-[300px] rounded-lg hover:shadow-lg
     hover:bg-primary/80 hover:scale-110 duration-200">
      <Icon className="text-5xl " />
      <div className="space-y-3">
        <p className="text-3xl">{title}</p>
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
import PropTypes from "prop-types"
const Skill = ({title,text, icon:Icon}) => {
  const textItems = text.split('\n').filter(item => item.trim() !== '');
  return (
    <div className="flex items-center gap-6 bg-white/15 text-white px-7 py-10
        w-[300px] h-[200px] sm:w-[350px] lg:w-[400px] rounded-lg hover:shadow-lg
     hover:bg-primary/80 hover:scale-110 duration-200">
      <Icon className="text-3xl sm:text-5xl flex-shrink-0 hover:text-darkGray" />
      <div className="space-y-3 overflow-hidden">
        <p className="text-2xl lg:text-3xl overflow-hidden text-ellipsis hover:text-darkGray">{title}</p>
        <ul className="text-left list-disc list-inside space-y-2 hover:text-darkGray">
        {textItems.map((item, index) => (
          <li key={index} className="text-sm leading-relaxed">{item.trim()}</li>
        ))}
      </ul>
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
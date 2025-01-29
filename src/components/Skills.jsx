import { CiPen } from "react-icons/ci"
import { FaBoxOpen } from "react-icons/fa"
import { MdComputer } from "react-icons/md"
import Skill from "./Skill"
const Skills = () => {
    return (
        // each skills will be a component
        <div className="bg-darkGray text-white">
            <div className="container mx-auto px-4 py-20 ">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <Skill title="Frontend" icon={CiPen} text="Lorem ipsum falan filan aga
                    Lorem ipsum falan filan aga
                    Lorem ipsum falan filan aga
             " />
                    <Skill title="Backend" icon={FaBoxOpen} text="Lorem ipsum falan filan aga" />
                    <Skill title="Design" icon={MdComputer} text="Lorem ipsum falan filan aga" />
                </div>
            </div>
        </div>
    )
}

export default Skills
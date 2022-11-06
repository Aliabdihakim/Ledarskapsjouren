import {
    FaLeaf, 
    FaPeopleArrows, 
    FaUsers, 
    FaHammer,
    FaUserPlus,
    FaPenNib
} from "react-icons/fa";
import "./Home.css"


const helpData = [
    {
      title:"Arbetsmiljö",
      icon: <FaLeaf className="icon-style"/>
    },
    {
      title:"Personal",
      icon: <FaPeopleArrows className="icon-style" />
    },
    {
      title:"Självledarskap",
      icon: <FaUsers className="icon-style" />
    },
    {
      title:"Konflikthantering",
      icon: <FaHammer className="icon-style" />
    },
    {
      title:"Mångfald",
      icon: <FaUserPlus className="icon-style" />
    },
    {
      title:"Arbetssätt",
      icon: <FaPenNib className="icon-style" />
    },
]

export default helpData
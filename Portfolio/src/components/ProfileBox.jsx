import React from "react";
import { AiFillGithub} from "react-icons/ai";

function ProfileBox({icon=<AiFillGithub size='40'/>, link,title="Social",desc="Take a Look"}){
    return(
        <a href={link} target="blank" className="profile">
            {icon}
            <span>
                <p>{title}</p>
                <p>{desc}</p>
            </span>
        </a>
    )
}

export default ProfileBox
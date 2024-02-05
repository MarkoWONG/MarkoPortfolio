import React from "react";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";

const ProjectBox = ({title,img,des, tech1, tech2, demo, code, flip}) => {
 return <div className="proBackground">
    <div className="pro1">
        {flip === false &&
            <div className="proImg">
                <img src={img} alt="project"/>
            </div>
        }
        <div className="proText">
            <h3>{title}</h3>
            <p>{des}</p>
            <p2>{tech1} <span class="tab"></span>  {tech2}</p2>
            <div>
            <a
                aria-label="demo"
                target="_blank"
                rel="noreferrer"
                href={demo}
            >   
                <div className="proLinks"> <IconExternalLink color="black" width={30} height={30} />  <p3>Demo</p3> </div>
            </a>
            {code !== undefined && <span class="tab"></span>}
            {code !== undefined && 
            <a
                aria-label="Code"
                target="_blank"
                rel="noreferrer"
                href={code}
            >   
                <div className="proLinks"> <IconBrandGithub color="black" width={30} height={30} /> <p3>Code</p3> </div>
            </a>}
            </div>
        </div>
        {flip === true &&
            <div className="proImg">
                <img src={img} alt="project"/>
            </div>
        }
    </div>
 </div>
};

export default ProjectBox;
import React from 'react'
import "./styles/skills.css";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";

const skills = () => {
  return (
    <div className='skills'>
      <h2>Skills</h2>
     
			<Card
				icon={faBriefcase}
				title="Skills"
        />



    </div>
  )
}

export default skills

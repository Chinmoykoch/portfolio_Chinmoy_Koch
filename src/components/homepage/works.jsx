import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<h2>Experience</h2>
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./xopuntech-logo.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Xopuntech</div>
							<div className="work-subtitle">
								React Intern
							</div>
							<div className="work-duration">Jan'24 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

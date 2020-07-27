import React from "react"
import "./RecentWork.scss"

import ProjectCard from "./ProjectCard"

const projects = require("./projects.json")

class RecentWork extends React.Component {
	render() {
		const projectList = projects.projects.map((project) => {
			return <ProjectCard {...project} />
		})
		return (
			<section className="recent-work-section">
				<h2 className="recent-work-section__title"> My Recent Work</h2>
				<div class="recent-work-section__container">{projectList}</div>
			</section>
		)
	}
}

export default RecentWork

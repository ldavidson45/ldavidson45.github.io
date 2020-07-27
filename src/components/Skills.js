import React from "react"
import "./Skills.scss"

class Skills extends React.Component {
	componentDidMount() {}
	render() {
		return (
			<section className="skills-section">
				<div className="skills-section__container">
					<h3 className="skills-section__title">
						Languages & Frameworks
					</h3>
					<ul className="skills-section__list">
						<li>Vue</li>
						<li>React</li>
						<li>Javascript</li>
						<li>Python</li>
						<li>Node</li>
						<li>MongoDB</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>SCSS</li>
					</ul>
				</div>
			</section>
		)
	}
}

export default Skills

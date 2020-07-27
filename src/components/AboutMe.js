import React from "react"
import "./AboutMe.scss"

class AboutMe extends React.Component {
	componentDidMount() {}
	render() {
		return (
			<section className="about-section">
				<h2 className="about-section__title">About Me</h2>
				<p>
					I am a Washington, DC-based frontend web developer currently
					working at <span className="caps">Politico.</span> I work
					primarily with Vue, but am proficient in React as well.
				</p>
				<p>
					I am interested in digital media and interactive news. I
					believe that the future of information sharing and news
					consumption will involve a blend of traditional reporting
					and captivating data visualizations and interactive
					graphics.
				</p>
				<p>
					Prior to my job at <span className="caps">Politico</span>, I
					worked as a rapid response media analyst for four years,
					where I thrived in the fast-paced environment. I decided to
					pursue a career in web development after gaining experience
					streamlining our team processes by creating an application
					with a visual programming service.
				</p>
			</section>
		)
	}
}

export default AboutMe

import React from "react"
import "./AboutMe.scss"

class AboutMe extends React.Component {
	componentDidMount() {}
	render() {
		return (
			<section className="about-section">
				<div className="about-section__container">
					<h2 className="about-section__title">About Me</h2>
					<p>
						I am a Washington, DC-based frontend web developer
						currently working at {""}
						<span className="caps">Politico. </span>I work primarily
						with Vue, but am proficient in React as well.
					</p>
					<p>
						I am interested in digital media and interactive news. I
						believe that the future of information sharing and news
						consumption will involve a blend of traditional
						reporting and captivating data visualizations and
						interactive graphics.
					</p>
					<p>
						Accessibility is an important part of my work. I strive
						to build features and experiences that are intuitive and
						considerate of people who use assistive technology. I am
						experienced in using NVDA screenreading technology to
						build and test features for accessibility.
					</p>
					<p>
						Reach me at{" "}
						<a href="emailto:lizdavidson45@gmail.com">
							lizdavidson45@gmail.com
						</a>
						.
					</p>
				</div>
			</section>
		)
	}
}

export default AboutMe

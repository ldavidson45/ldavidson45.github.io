import React from "react"
import "./ProjectCard.scss"

class ProjectCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isHovered: false,
			inlineStyles: {
				background: `linear-gradient(0deg, ${this.props.backgroundCol},${this.props.backgroundCol}), url(${this.props.backgroundImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center"
			}
		}
		this.toggleHover = this.toggleHover.bind(this)
	}

	toggleHover(hovered) {
		this.setState({
			isHovered: hovered
		})
	}
	render() {
		const logoOrTitle = this.props.logoImg ? (
			<img
				className="project-card__logo"
				src={this.props.logoImg}
				alt={this.props.title}
			/>
		) : (
			<h3 className="project-card__logo--text">{this.props.title}</h3>
		)

		return (
			<div className="project-card__wrapper">
				<div
					className="project-card"
					onMouseEnter={() => this.toggleHover(true)}
					onMouseLeave={() => this.toggleHover(false)}
					onFocus={() => this.toggleHover(true)}
					onBlur={() => this.toggleHover(false)}
					tabIndex="0"
					style={this.state.inlineStyles}
				>
					{this.state.isHovered ? (
						<div className="project-card__details">
							<h3 className="project-card__title">
								{this.props.title}
							</h3>
							<p>{this.props.description}</p>
							<a
								className="project-card__button"
								href={this.props.siteURL}
								target="_blank"
							>
								Visit Website {" >"}
							</a>
						</div>
					) : (
						logoOrTitle
					)}
				</div>
			</div>
		)
	}
}

export default ProjectCard

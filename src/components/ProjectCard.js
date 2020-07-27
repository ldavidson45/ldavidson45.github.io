import React from "react"
import "./ProjectCard.scss"

class ProjectCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isHovered: true
		}
		this.toggleHover = this.toggleHover.bind(this)
	}

	toggleHover(hovered) {
		this.setState({
			isHovered: hovered
		})
	}
	render() {
		return (
			<div
				className="project-card"
				onMouseEnter={() => this.toggleHover(true)}
				onMouseLeave={() => this.toggleHover(false)}
				onFocus={() => this.toggleHover(true)}
				onBlur={() => this.toggleHover(false)}
				tabIndex="0"
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
						>
							Visit Website
						</a>
					</div>
				) : (
					<img
						className="project-card__logo"
						src={this.props.logoImg}
						alt={this.props.title}
					/>
				)}
			</div>
		)
	}
}

export default ProjectCard

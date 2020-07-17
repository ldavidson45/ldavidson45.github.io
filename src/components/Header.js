import React from "react"
import "./Header.scss"
import bitmoji from "../images/bitmoji.svg"

import { bounceIn } from "../animations/textAnimate"

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.heading = React.createRef()
		this.subHeading = React.createRef()
	}

	componentDidMount() {
		bounceIn(this.heading.current)
		bounceIn(this.subHeading.current, 900)
	}
	render() {
		return (
			<header>
				<div className="header">
					<h1 ref={this.heading} className="header__title">
						Hi, I'm Liz.
					</h1>
					<div className="header__image-wrapper">
						<img
							className="header__image"
							src={bitmoji}
							alt="Cartoon of Liz waving"
						/>
					</div>
					<p ref={this.subHeading} className="header__subtitle">
						I'm a front-end web developer.
					</p>
				</div>
			</header>
		)
	}
}

export default Header

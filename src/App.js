import React from "react"
import "./App.scss"

import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"

function App() {
	return (
		<div className="app">
			<Header />
			<AboutMe />
			<Skills />
		</div>
	)
}

export default App

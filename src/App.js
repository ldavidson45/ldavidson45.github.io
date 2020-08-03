import React from "react"
import "./App.scss"

import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import RecentWork from "./components/RecentWork"

function App() {
	return (
		<div className="app">
			<Header />
			<AboutMe />
			<Skills />
			{/* <RecentWork /> */}
		</div>
	)
}

export default App

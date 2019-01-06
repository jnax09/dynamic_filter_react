import React from 'react'

export default class Navigationbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<div className="container">
					<button
						type="button"
						className="navbar-brand link-button"
					>
						BB Tech
					</button>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#mobile-nav"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="mobile-nav"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<button
									tyype="button"
									className="nav-link link-button"
								>
									{' '}
									Home{' '}
								</button>
								<button
									tyype="button"
									className="nav-link link-button"
								>
									{' '}
									About{' '}
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

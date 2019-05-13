const { h } = require('hyperons');

const Header = props => {
	const delvGroupName = typeof props.deliveryGroupName;
	const delvTeamName = typeof props.deliveryTeamName;
	const delvSystCode = typeof props.systemCode;
	let underline = null;
	let teamName = null;
	let systCode = null;
	if (delvGroupName !== 'undefined') {
		underline = (
			<li>
				<a href={`/Group/${props.deliveryGroupCode}`}>
					{props.deliveryGroupName}
				</a>
			</li>
		);
	}

	if (delvTeamName !== 'undefined') {
		teamName = (
			<li>
				<a href={`/Team/${props.deliveryTeamCode}`}>
					{props.deliveryTeamName}
				</a>
			</li>
		);
	}

	if (delvSystCode !== 'undefined') {
		systCode = (
			<li>
				<a href={`/System/${props.systemCode}`}>{props.systemCode}</a>
			</li>
		);
	}
	return (
		<div className="o-layout__header">
			<div
				className="o-message o-message--notice o-message--warning-light"
				data-o-component="o-message"
				data-close="false"
			>
				<div className="o-message__container">
					<div className="o-message__content">
						<p className="o-message__content-main">
							<span className="o-message__content-highlight">
								This project is currently in BETA
							</span>
							{', '}
							please provide feedback, or volunteer to take part
							in UX testing, in the{' '}
							<a
								href="https://financialtimes.slack.com/messages/CEJ2Z6EPJ"
								target="_blank"
								rel="noopener noreferrer"
							>
								#ops-and-rel slack channel
							</a>
							.
						</p>
					</div>
				</div>
			</div>
			<header
				className="o-header-services"
				data-o-component="o-header-services"
			>
				<div className="o-header-services__top">
					<div className="o-header-services__logo" />
					<div className="o-header-services__title">
						<a className="o-header-services__product-name" href="/">
							System Operability Score
						</a>{' '}
						<small>
							powered by{' '}
							<a href="https://biz-ops.in.ft.com">Biz Ops</a>
						</small>
					</div>
				</div>
				<nav
					className="o-header-services__primary-nav"
					aria-label="primary"
				>
					<ul className="o-header-services__primary-nav-list">
						<li>
							<a href="/">All Groups</a>
						</li>
						<li>
							<a href="/teams">Team league table</a>
						</li>
						<li>
							<a href="/systems">System league table</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
					</ul>
				</nav>
				{underline ? (
					<nav
						className="o-header-services__secondary-nav"
						aria-label="secondary"
						data-o-header-services-nav=""
					>
						<div className="o-header-services__secondary-nav-content">
							<ol className="o-header-services__secondary-nav-list o-header-services__secondary-nav-list--ancestors">
								<li>
									<a href="/">All Groups</a>
								</li>
								{underline}
								{teamName}
								{systCode}
							</ol>
						</div>
					</nav>
				) : null}
			</header>
		</div>
	);
};
module.exports = { Header };

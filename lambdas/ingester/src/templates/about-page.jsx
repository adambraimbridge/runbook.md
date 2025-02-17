const { h } = require('hyperons');
const { GraphvizLibrary } = require('./components/structure');

const About = () => {
	return (
		<main className="o-layout__main">
			<GraphvizLibrary />
			<div className="o-layout-typography">
				<h1 className="group-title">
					About RUNBOOK.md (GitHub markdown importer)
				</h1>
				<p>
					This project provides tech teams at the FT with a simple
					method of populating Biz Ops from the content of a
					RUNBOOK.md file in their GitHub repository. It comprises of
					these parts: A <a href="#form">Form</a>, A Github{' '}
					<a href="#github-app">GitHub App</a> and{' '}
					<a href="#changeapi">Change API event handling</a>.
				</p>
				<div id="flow" />
				<p />
				<h3 id="form">The Form.</h3>A form is provided{' '}
				<a href={`${process.env.BIZ_OPS_URL}/runbook.md`}>here</a> for
				users who wish to familiarise themselves with the RUNBOOK.md
				concept. It provides sample RUNBOOK.md content and invites the
				user to enter markdown text. On submission the text is then run
				through the <a href="#parser">parser</a>, the{' '}
				<a href="#validator">validator</a> and the{' '}
				<a href="#scoring">scorer</a>. Any errors are then{' '}
				<a href="#errors">displayed</a>. If the form validation is
				successful then the user may, on entry of a systemCode and a Biz
				Ops apikey, trigger the validated details to be written to Biz
				Ops. Integration with the Github app and Change api events is
				preferable to using the form to write to Biz Ops.
				<p />
				<h3 id="github-app">The GitHub App</h3>
				The github app can be installed in any repository. This will
				give feedback on any PR about the quality of RUNBOOK.md&apos;s
				content. This is a work in progress - please ask in the{' '}
				<a href="https://financialtimes.slack.com/messages/C07B3043U">
					#reliability-eng slack channel
				</a>{' '}
				if you would like to try it out.
				<p />
				<h3 id="changeapi">Change API Events</h3>
				The Change API allows engineers to automatically log test and
				production releases within their deployment pipelines. On
				receipt of a change api event RUNBOOK.md will{' '}
				<a href="#parser">parse</a>, <a href="#validator">validate</a>{' '}
				and <a href="#scoring">score</a> the RUNBOOK.md associated with
				any <b>production</b> release. Any failings in the RUNBOOK.md
				will <a href="#errors">logged.</a>
				<p />
				<h3 id="structure">The RUNBOOK.md file</h3>
				RUNBOOK.md is a markdown file that describes the system. Ideally
				there would be a RUNBOOK.md file present in each code repository
				which described the system that resides in that repository. To
				achieve the maximum benefit you will need to ensure the markdown
				file is formed of:
				<ul>
					<li>
						A single level one (#) header which contains the name of
						your system.
					</li>
					<li>
						A block of text, after the header but before the
						sections, which contains the description of your system.
					</li>
					<li>
						Many level two (##) sections each of which is named
						after a System property and followed by the value for
						that property.
					</li>
				</ul>
				<h3 id="parser">The Parser.</h3>
				This will scan the markdown in the RUNBOOK.md to extract the
				values contained within sections which are named after Biz Ops
				system properties. If the RUNBOOK.MB file does not meet the
				requirements of a correctly formatted file then errors will be{' '}
				<a href="#errors">returned</a>. These include:
				<ul>
					<li>The absence of the level one header.</li>
					<li>The absence of a description.</li>
					<li>
						Level two sections which are not named after system
						properties.
					</li>
					<li>Incorrect values.</li>
				</ul>
				An example of a typical RUNBOOK.md file is offered as
				placeholder text in the form{' '}
				<a href={`${process.env.BIZ_OPS_URL}/runbook.md`}>here.</a>
				<p />
				<h3 id="validator">The Related Code Validator.</h3>
				This will check all the Biz Ops codes supplied in the RUNBOOK.md
				are valid and of the correct type. For example it is an error
				to:
				<ul>
					<li>Use a person code for the delivery or support teams</li>
					<li>Use a team code for product owners or tech leads</li>
					<li>
						Use system names for dependencies; use their systemCodes
					</li>
				</ul>
				<p />
				<h3 id="scoring">The Runbook Scorer.</h3>
				This will pass any successfully parsed data through SOS scoring
				to highlight any potential operability failings in the resulting
				runbook. Any resulting errors will be{' '}
				<a href="#errors">returned</a>.
				<p />
				<h3 id="errors">Error Output</h3>
				When a RUNBOOK.md does not meet the{' '}
				<a href="#validaton">validation</a> or{' '}
				<a href="#scoring">scoring</a> requirements a set of errors will
				either be output to the screen (if you are using the form) or
				returned as a JSON error array (if you are using the automated
				process). You cannot import a RUNBOOK.md into Biz Ops that has
				validation errors. You may import a RUNBOOK.md that has scoring
				errors but those errors must be fixed before Operations will
				accept the content.
				<p />
				<h3 id="save">Save to Biz Ops</h3>
				A RUNBOOK.md with no validation errors will be saved to Biz Ops
				if a systemCode and a Biz Ops apikey have been supplied. This
				save is an automatic part of the GitHub and Change API
				integrations but is optional for users of the form.
				<p />
				<p>
					Please ask any questions in the{' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://financialtimes.slack.com/messages/C9S0V2KPV"
					>
						#bizops channel
					</a>
				</p>
			</div>
		</main>
	);
};

module.exports = About;

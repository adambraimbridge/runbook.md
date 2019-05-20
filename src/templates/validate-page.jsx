const { h, Fragment } = require('hyperons');

const {
	SystemCode,
	WriteFlag,
	ApiKey,
	RunbookMd,
} = require('./components/input-fields');

const {
	ParseSuccess,
	ParseErrors,
	ValidationErrors,
	UpdatedFields,
} = require('./components/output-fields');

const ValidateForm = ({
	systemCode,
	writeToBizOps,
	bizOpsApiKey,
	content,
	parseData = {},
	parseErrors = [],
	validationErrors = {},
	updatedFields = {},
}) => {
	return (
		<Fragment>
			<h1 id="edit-form--title">Content Validator and Importer</h1>
			<form action={`${process.env.BASE_URL}/validate`} method="POST">
				<div className="o-grid-container">
					<div className="o-grid-row o-forms--wide">
						<div data-o-grid-colspan="3">
							<SystemCode systemCode={systemCode} />
						</div>
						<div data-o-grid-colspan="3">
							<WriteFlag writeToBizOps={writeToBizOps} />
						</div>
						<div data-o-grid-colspan="6">
							<ApiKey bizOpsApiKey={bizOpsApiKey} />
						</div>
					</div>
				</div>
				<p />
				<div className="o-forms o-forms--wide">
					<RunbookMd content={content} />
				</div>
				<p />
				<button
					className="o-buttons o-buttons--primary o-buttons--mono o-buttons--big"
					type="submit"
				>
					Parse & Validate & Upload
				</button>
				{parseErrors.length ? (
					<ParseErrors errors={parseErrors} />
				) : null}
				{Object.entries(validationErrors).length ? (
					<ValidationErrors errors={validationErrors} />
				) : null}
				{Object.entries(parseData).length ? (
					<ParseSuccess data={parseData} />
				) : null}
				{Object.entries(updatedFields).length ? (
					<UpdatedFields data={updatedFields} />
				) : null}
			</form>
		</Fragment>
	);
};

module.exports = ValidateForm;

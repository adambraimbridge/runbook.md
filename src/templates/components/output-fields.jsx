const { h } = require('hyperons');

const UpdatedFields = ({ data }) => (
	<div className="parsed-data">
		<table
			className="o-table o-table--horizontal-lines "
			data-o-component="o-table"
		>
			<caption className="o-table__caption">
				<h2 className="o-typography-heading-level-2">
					Updated Biz Ops Fields
				</h2>
			</caption>
			<thead>
				<tr>
					<th scope="col" role="columnheader">
						Property
					</th>
					<th scope="col" role="columnheader">
						Value
					</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(data).map(([property, value]) => (
					<tr>
						<td>{property}</td>
						<td>{value}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

const ParseSuccess = ({ data }) => (
	<div className="parsed-data">
		<table
			className="o-table o-table--horizontal-lines "
			data-o-component="o-table"
		>
			<caption className="o-table__caption">
				<h2 className="o-typography-heading-level-2">
					Parse Successes
				</h2>
			</caption>
			<thead>
				<tr>
					<th scope="col" role="columnheader">
						Property
					</th>
					<th scope="col" role="columnheader">
						Value
					</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(data).map(([name, value]) => (
					<tr>
						<td>{name}</td>
						<td>{value}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

const ParseErrors = ({ errors }) => (
	<div className="parsed-errors">
		<table
			className="o-table o-table--horizontal-lines "
			data-o-component="o-table"
		>
			<caption className="o-table__caption">
				<h2 className="o-typography-heading-level-2">Parse Errors</h2>
			</caption>
			<thead>
				<tr>
					<th scope="col" role="columnheader">
						Message
					</th>
				</tr>
			</thead>
			<tbody>
				{errors.map(message => (
					<tr>
						<td>{message}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

const ValidationErrors = ({ errors }) => (
	<div className="validation-errors">
		<table
			className="o-table o-table--horizontal-lines "
			data-o-component="o-table"
		>
			<caption className="o-table__caption">
				<h2 className="o-typography-heading-level-2">
					Validation Errors
				</h2>
			</caption>
			<thead>
				<tr>
					<th scope="col" role="columnheader">
						Facet
					</th>
					<th scope="col" role="columnheader">
						Errors
					</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(errors).map(([facet, messages]) => (
					<tr>
						<td>{facet}</td>
						<td className="with-line-breaks">
							{messages.join('\n')}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

module.exports = {
	ParseSuccess,
	ParseErrors,
	UpdatedFields,
	ValidationErrors,
};

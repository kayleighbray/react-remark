import React from 'react';
import Remarkable from 'remarkable';

class ReactRemark extends React.Component {
	constructor(props) {
		super(props);
		this.md = new Remarkable({
			html: this.props.html || false
		});
	}

	render() {
		return (
			<span
				dangerouslySetInnerHTML={{ __html: this.md.render(this.props.source) }}
			/>
		);
	}
}

ReactRemark.propTypes = {
	html: React.PropTypes.bool,
	source: React.PropTypes.string
};

export default ReactRemark;

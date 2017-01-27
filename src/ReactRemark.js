import React from 'react';
import Remarkable from 'remarkable';

class ReactRemark extends React.Component {
	constructor(props) {
		super(props);
		this.md = new Remarkable({
			html: this.props.html
		});
	}

	render() {
		return (
			<span
				className={`${this.props.className}`}
				dangerouslySetInnerHTML={{ __html: this.md.render(this.props.source) }}
			/>
		);
	}
}

ReactRemark.propTypes = {
	className: React.PropTypes.string,
	html: React.PropTypes.bool,
	source: React.PropTypes.string
};

React.defaultProps = {
	className: 'react-remark',
	html: false
};

export default ReactRemark;

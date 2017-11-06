import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Remarkable from 'remarkable';

class ReactRemark extends Component {
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
	className: PropTypes.string,
	html: PropTypes.bool,
	source: PropTypes.string
};

React.defaultProps = {
	className: 'react-remark',
	html: false
};

export default ReactRemark;

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRemark from 'react-remark';

class App extends React.Component {
	render () {
		const example = [
			'# React Remark\n\n ***\n This is a react component that wraps [Remarkable](https://github.com/jonschlinkert/remarkable). ',
			'Anything that is possible with Remarkable should be possible with this component.\n\n',
			'Even embedding html into markdown works!\n\n Go to google with this link: <a href="https://www.google.com/">Google</a>'
		].join('');

		return (
			<div>
				<ReactRemark html source={example} />
			</div>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('app'));

var React = require('react');

var Button = React.createClass({
	render: function() {
		var icon;

		if (this.props.icon) {
			var iconClass = 'glyphicon glyphicon-'+this.props.icon;
			icon = <span className={iconClass}></span>;
		}

		var btnClass = 'btn btn-' + (this.props.btnClass) || 'primary';
		
		return (
			<button className={btnClass}>
				{icon}  {this.props.children}
			</button>
		);
	}
});

module.exports = Button;
import React from "react";

class SelectElement extends React.Component {
	render() {
		return (
			<div className="selectElement">
				<icon className="icon">{this.props.img}</icon>
				{this.props.title}
			</div>
		)
	}
}

export default SelectElement
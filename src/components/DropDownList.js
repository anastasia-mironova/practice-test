import React from "react";
import { Select } from "antd";

class DropDownList extends React.Component {

	render() {
		return (
			<div className="dropDownList">
				<p>{this.props.title}</p>
				<Select className="select" options={this.props.options} onChange={this.props.onChange}/>
			</div>)
	}
}

export default DropDownList
import React from "react";
import { Button, Select } from "antd";

class DropDownList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			disabledButton: true
		}
	}
	render() {
		return (
			<div className="dropDownList">
				<p>{this.props.title}</p>
				<Select className="select" id="select" virtual={false} options={this.props.options} onSelect={this.props.onChange} onChange={() => {
					this.setState({ disabledButton: false })
				}} />
				<Button size="small" disabled={this.state.disabledButton} onClick={() => {
					//Написать код для очистки фильтра
					this.setState({ disabledButton: true })
				}}>Убрать фильтр</Button>
			</div>)
	}
}

export default DropDownList
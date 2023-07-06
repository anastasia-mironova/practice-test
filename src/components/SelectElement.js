import React from "react";

class SelectElement extends React.Component {
	render() {
		return (
			<div className="selectElement" id={this.props.id} onClick={(e)=>{
				const el1 = document.getElementById('1')
				el1.classList.remove("currentTable")
				const el2 = document.getElementById('2')
				el2.classList.remove("currentTable")
				const el3 = document.getElementById('3')
				el3.classList.remove("currentTable")
				const el4 = document.getElementById('4')
				el4.classList.remove("currentTable")
				e.target.classList.add("currentTable");
			}}>
				<div className="icon">{this.props.img}</div>
				{this.props.title}
			</div>
		)
	}
}

export default SelectElement
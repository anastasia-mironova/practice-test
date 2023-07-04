import React from "react";
import { Table, Input, Select } from 'antd';
import { Preorder, Configuration, Environment } from "../models";
import { useState, useEffect } from "react";
import DropDownList from "./DropDownList";

const columns = [
	{
		title: "ID",
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: "Рег.номер",
		dataIndex: 'regNumber',
		key: 'regNumber',
		render: (text) => <a href="">{text}</a>,
	},
	{
		title: "Статус",
		dataIndex: 'status',
		key: 'status',
		render: (text) => {
			if (text === "NEW") {
				return (<div className="status new">{text}</div>)
			} else if (text === "APPROVED") {
				return (<div className="status approved">{text}</div>)
			} else if (text === "IN_WORK") {
				return (<div className="status inWork">{text}</div>)
			} if (text === "COMPLETED") {
				return (<div className="status complited">{text}</div>)
			} else {
				return (<div className="status canceled">{text}</div>)
			}
		}
	},
];

const statuses = [
	{
		value:"",
		label:""
	},
	{
		value: "NEW",
		label: 'NEW'
	},
	{
		value: "APPROVED",
		label: 'APPROVED'
	},
	{
		value: "IN_WORK",
		label: 'IN_WORK'
	},
	{
		value: "COMPLETED",
		label: 'COMPLETED'
	},
	{
		value: "CANCELED",
		label: 'CANCELED'
	}
]

function TableComponent() {
	const [countData, setCount] = useState(0);
	const [dataSource, setData] = useState();
	const [codesConfigurations, setCodesConfigurations] = useState();
	const [codesEnvironments, setCodesEnvironments] = useState();

	useEffect(() => {
		// Preorder.find(21).then(result => console.log(result)) ПОИСК

		// 	Preorder.search({ preorderTypeId: 1, perPage: 5, page: 1 }).then(results => {dataSource = results.results; console.log(dataSource)})
		// }, [])
		Preorder.search().then(results => { setData(results.results); setCount(results.count) });
		Configuration.search().then(results => { setCodesConfigurations(Array.prototype.map.call(results.results, (el) => ({ ['value']: el.id, ['label']: el.code }))) });
		Environment.search().then(results => { setCodesEnvironments(Array.prototype.map.call(results.results, (el) => ({ ['value']: el.id, ['label']: el.code })))});
	}, []);
	return (
		<div className="tableComponent">
			<div className="filter">
				<div className="input" >
					<p>Рег. номер:</p>
					<Input placeholder="Начните ввод номера" onChange={(text) => {
						Preorder.search({ regNumber: text.target.value }).then(results => { setData(results.results); setCount(results.count)})
					}} />
				</div>
				<DropDownList title="Конфигурация:" options={codesConfigurations} onChange={(el) => {
					Preorder.search({ configurationId: el }).then(results => { setData(results.results); setCount(results.count) })
				}} />
				<DropDownList title="Среда:" options={codesEnvironments} onChange={(el) => {
					Preorder.search({ environmentId: el }).then(results => { setData(results.results); setCount(results.count) })
				}} />
				<DropDownList title="Статусы:" options={statuses} onChange={(el) => {
					Preorder.search({ status: el }).then(results => { setData(results.results); setCount(results.count)})
				}} />
			</div>
			<div className="countData">Найдено: {countData}</div>
			<Table dataSource={dataSource} columns={columns} />
		</div>
	);
}

export default TableComponent
import React from 'react'
import {Datacenters} from '../data'
import { Table } from 'antd'


const columns = [
	{
		title: "ID",
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: "Код",
		dataIndex: 'code',
		key: 'code',
	},
	{
		title: "Заголовок",
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: "Описание",
		dataIndex: 'description',
		key: 'description',
	},
]
function TableDataCenters() {
	return (<div className='main'>
		<main>
		<p className='tableTitle'>Среды</p>
		<Table dataSource={Datacenters} columns={columns}/>
		</main>
	</div>
	)
}
export default TableDataCenters
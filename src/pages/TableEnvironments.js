import React from 'react'
import {Environments} from '../data'
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
function tableEnvironments() {
	return (<div className='main'>
		<main>
		<p className='tableTitle'>ЦОДы</p>
		<Table dataSource={Environments} columns={columns}/>
		</main>
	</div>
	)
}
export default tableEnvironments
import React from 'react'
import {Configurations} from '../data'
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
function Configuration() {
	return (<div className='main'>
		<main>
			<p className='tableTitle'>Конфигурации</p>
		<Table dataSource={Configurations} columns={columns}/>
		</main>
	</div>
	)
}
export default Configuration
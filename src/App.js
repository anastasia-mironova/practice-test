import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Profile from './components/Profile'
import { Button } from 'antd'
import SelectElement from './components/SelectElement';
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdPhotoCamera } from "react-icons/md";
import { MdMap } from "react-icons/md";
import TableComponent from './components/TableComponent'
import Configuration from './pages/Configuration';
import TableEnvironments from './pages/TableEnvironments';
import TableDataCenters from './pages/TableDataCenters';

function App() {
	useEffect(() => {
		const selectBlock = document.getElementById("selectBlock");
		selectBlock.style.display = 'none';
	}, [])
	return (<div className='main'>
		<aside>
			<Profile name="AC Практика" />
			<Button className='menuButton' onClick={() => {
				const selectBlock = document.getElementById("selectBlock");
				if (selectBlock.style.display === 'none') {
					selectBlock.style.display = ''
				}
				else {
					selectBlock.style.display = 'none'
				}
			}}>Меню</Button>


			<div className="selectBlock" id="selectBlock">
				<Link to="/preorders"><SelectElement id={1} img={<AiFillHeart />} title="Потребности" /></Link>
				<Link to="/configuration"><SelectElement id={2} img={<BsFillBookmarkFill />} title="Конфигурации" /></Link>
				<Link to="/environments"><SelectElement id={3} img={<MdPhotoCamera />} title="Среды" /></Link>
				<Link to="/dataCenters"><SelectElement id={4} img={<MdMap />} title="ЦОДы" /></Link>
			</div>

		</aside>
		<main>
			<Routes>
				<Route path='/preorders' element={<TableComponent />} />
				<Route path='/configuration' element={<Configuration />} />
				<Route path='/environments' element={<TableEnvironments />} />
				<Route path='/dataCenters' element={<TableDataCenters />} />
			</Routes>
		</main>
	</div>
	)
}
export default App
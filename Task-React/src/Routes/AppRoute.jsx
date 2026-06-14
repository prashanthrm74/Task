import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Tasks from '../components/Tasks'
import Task1 from '../components/AssignmentOne/Task1/Task1'


const AppRoute = () => {
  return (
    <>
    <div className="bg-teal-500 min-h-screen">

    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/tasks' element={<Tasks/>} />
    <Route path='/task1' element={<Task1/>}/>



    </Routes>
    </div>

    </>
  )
}

export default AppRoute
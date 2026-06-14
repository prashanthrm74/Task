import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Tasks from '../components/Tasks'
import Assignment1Task1 from '../components/AssignmentOne/Task1/Assignment1Task1'
import Assignment2Task1 from '../components/AssignmentTwo/Assignment2Task1'
import SPLClassTask1 from '../components/SPL_Class_Test1/SPLClassTask1'


const AppRoute = () => {
  return (
    <>
    <div className="bg-teal-500 min-h-screen">

    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/tasks' element={<Tasks/>} />
    <Route path='/assignment1-task1' element={<Assignment1Task1/>}/>
    <Route path='/assignment2-task1' element={<Assignment2Task1/>}/>
    <Route path='/splclass1-task1' element={<SPLClassTask1/>}/>
  
    </Routes>
    </div>

    </>
  )
}

export default AppRoute
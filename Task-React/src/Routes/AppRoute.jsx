import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Tasks from '../components/Tasks'

import SPLClassTask1 from '../components/SPL_Class_Test1/SPLClassTask1'
import Assignment2Task1 from '../components/AssignmentTwo/Task1/Assignment2Task1'
import EmployeeDetails from '../components/AssignmentOne/Tasks/Task1/EmployeeDetails'
import MovieDetails from '../components/AssignmentOne/Tasks/Task1/MovieDetails'
import ProductCard from '../components/AssignmentOne/Tasks/Task1/ProductCard'
import StudentDetails from '../components/AssignmentOne/Tasks/Task1/StudentDetails'
import CompanyInfo from '../components/AssignmentOne/Tasks/Task1/CompanyInfo'
import SchoolList from '../components/AssignmentThree/SchoolList'
import Count from '../components/AssignmentFive/Tasks/Count'
import StudentNameUpdate from '../components/AssignmentFive/Tasks/StudentNameUpdate'
import Age from '../components/AssignmentFive/Tasks/Age'
import Theme from '../components/AssignmentFive/Tasks/Theme'
import ClassComponent from '../components/AssignmentFour/ClassComponent'
import ObjectState from '../components/AssignmentSix/Tasks/ObjectState'
import UserForm from '../components/AssignmentSeven/Tasks/UserForm'
import RegisterDetails from '../components/AssignmentNine/RegisterDetails'
import Studentdata from '../components/AssignmentTen/Tasks/Studentdata'
import ProductData from '../components/AssignmentTen/Tasks/ProductData'
import RegisterForm from '../components/AssignmentEleven/RegisterForm'
import PageLoadMessage from '../components/AssignmentTwelve/Tasks/PageLoadMessage'
import DigitalClock from '../components/AssignmentTwelve/Tasks/DigitalClock'
import StudentSearch from '../components/AssignmentThirteen/Tasks/StudentSearch'
import CategoryData from '../components/AssignmentFifteen/CategoryData'
import TodoList from '../components/AssignmentSixteen/TodoList'
import UseRefInput from '../components/AssignmentSeventeen.jsx/UseRefInput'
import ContextData from '../components/AssignmentEighteen/ContextData'
import UserProvider from '../components/AssignmentEighteen/provider/UserProvider'
import RouteApp from '../components/AssignmentNineteen/routes/RouteApp'
import { AuthProvider } from '../components/AssignmentNineteen/context/AuthContext'
import ProductSearch from '../components/AssignmentTwentyTwo/usememo/ProductSearch'



const AppRoute = () => {
  return (
    <>
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100">

    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 py-8">
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/tasks' element={<Tasks/>} />
    <Route path='/studentdetails' element={<StudentDetails/>}/>
    <Route path='/employeedetails' element={<EmployeeDetails/>}/>
    <Route path='/productdetails' element={<ProductCard/>}/>
    <Route path='/moviedetails' element={<MovieDetails/>}/>
    <Route path='/companydetails' element={<CompanyInfo/>}/>

    <Route path='/assignment2-task1' element={<Assignment2Task1/>}/>
    <Route path='/splclass1-task1' element={<SPLClassTask1/>}/>
    <Route path='/schoollist' element={<SchoolList/>}/>
    <Route path='/classcomponent' element={<ClassComponent/>}/>
     <Route path='/counter' element={<Count/>}/>
     <Route path='/studentnameupdate' element={<StudentNameUpdate/>}/>
     <Route path='/age' element={<Age/>}/>
     <Route path='/theme' element={<Theme/>}/>
      <Route path='/object-state' element={<ObjectState/>}/>
      <Route path='/userform' element={<UserForm/>}/>
      <Route path='/userdata' element={<RegisterDetails/>}/>
       <Route path='/studentdata' element={<Studentdata/>}/>
      <Route path='/productdata' element={<ProductData/>}/>
      <Route path='/registration' element={<RegisterForm/>}/>
      <Route path='/pageload' element={<PageLoadMessage/>}/>
      <Route path='/digitalclock' element={<DigitalClock/>}/>
      <Route path='/studentsearch' element={<StudentSearch/>}/>
      <Route path='/catsearch' element={<CategoryData/>}/>
      <Route path='/todolist' element={<TodoList/>}/>
      <Route path='/useref' element={<UseRefInput/>}/>
      <Route path="/context" element={<UserProvider><ContextData/></UserProvider>}/>
      <Route path="/routeapp/*" element={<AuthProvider><RouteApp/></AuthProvider>}/>
      <Route path='/productsearch' element={<ProductSearch/>}/>


    </Routes>
    </div>
    </div>

    </>
  )
}

export default AppRoute
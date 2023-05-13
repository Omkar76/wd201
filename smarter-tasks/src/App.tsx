import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import Header from "./Header";
import Signin from "./SignIn";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";

function Layout(){
  return <div>
    <Header/>
    
    {/* render child routes element */}
    <Outlet/> 
  </div>
}

function App() {

  return (
    <div>
      <Routes>
        {/* Layout with header is used for these pages */}
        <Route element={<Layout/>}>
          <Route index element={ <ProtectedRoute element={<HomePage/>}/> } />
          <Route path="/tasks" element={ <ProtectedRoute element={<TaskApp/> }/>} />
          <Route path="/tasks/:id" element={ <ProtectedRoute element={<TaskDetailsPage/>} /> } />
        </Route>

        {/* No Layout for these pages */}
        <Route path="/signin" Component={Signin} />
        <Route path="/notfound" element={<NotFound/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/study" Component={TeacherList} />
        <Route path="/give-classes" Component={TeacherForm} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
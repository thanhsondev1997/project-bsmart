import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import { PATH } from "./config/path";
import KhoaHoc from "./pages/KhoaHoc";
import Detail from "./pages/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path={PATH.khoahoc} element={<KhoaHoc />}>
            
          </Route>
            <Route path={PATH.CourseDetail} element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

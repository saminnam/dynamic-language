import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Blogs from "./Blogs";
import BlogsDetail from "./BlogsDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect from / to /blogs */}
        <Route path="/" element={<Navigate to="/blogs" replace />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

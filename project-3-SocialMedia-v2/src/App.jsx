import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <PostListProvider>
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet></Outlet>
        
          <Footer></Footer>
        </div>
      </div>
      </PostListProvider>
    </>
  );
}

export default App;

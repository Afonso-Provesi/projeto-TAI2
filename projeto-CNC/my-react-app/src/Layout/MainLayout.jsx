import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./Main-Layout.css";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

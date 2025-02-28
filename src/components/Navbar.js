import React, { useState } from "react";
import { Link } from "react-router-dom";

// Định nghĩa mảng chứa thông tin các route
const menuItems = [
  { path: "/regaccountdemo", label: "Regaccountdemo" },
  { path: "/regaccountvalidiation", label: "Regaccountvalidiation" },
  { path: "/validateformlogin", label: "Validate-Form-Login" },
  { path: "/validateformloginformik", label: "ValidateFormLoginFormik" },
  { path: "/router1", label: "Router1" },
  { path: "/router2", label: "Router2" },
  { path: "/contactform", label: "ContactForm" },
  { path: "/bookmanager", label: "BookManager" },
  { path: "/emailformwithupload", label: "EmailFormwithUpload" },
  { path: "/reduxsagaexample", label: "ReduxSagaExample" },
  { path: "/reduxtodolist", label: "ReduxToDoList" },
  { path: "/reduxcart", label: "ReduxCart" }, 
  { path: "/reduxgetdeleteuser", label: "ReduxGetDeleteUser"},
  { path: "/reduxgetpostupdate", label: "ReduxGetPostUpdate"}

];

function Navbar() {
  const [showAll, setShowAll] = useState(false);
  const initialVisibleItems = 6; // Số lượng nút hiển thị ban đầu

  const visibleMenuItems = showAll 
    ? menuItems 
    : menuItems.slice(0, initialVisibleItems);

  return (
    <div className="navbar-container">
      <h1 className="project-title">Project Menu</h1>
      <div className={`project-menu ${showAll ? 'show-all' : ''}`}>
        {visibleMenuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <button>{item.label}</button>
          </Link>
        ))}
      </div>
      {menuItems.length > initialVisibleItems && (
        <button 
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Thu gọn' : 'Xem thêm'}
        </button>
      )}
    </div>
  );
}

export default Navbar;

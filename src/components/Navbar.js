import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h2>Project Menu</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li><Link to="/project1">Project 1</Link></li>
        <li><Link to="/project2">Project 2</Link></li>
        <li><Link to="/Regaccountdemo">Regaccountdemo</Link></li>
        <li><Link to="/Regaccountvalidiation">Regaccountvalidiation</Link></li>

        
      </ul>
    </nav>
  );
};

export default Navbar;

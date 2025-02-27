/* src/components/Navbar.js */
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";

const NavigationBar = () => {
  const buttons = [
    // { to: "/project1", label: "Project 1" },
    // { to: "/project2", label: "Project 2" },
    { to: "/Regaccountdemo", label: "Regaccountdemo" },
    { to: "/Regaccountvalidiation", label: "Regaccountvalidiation" },
    { to: "/ValidateFormLogin", label: "Validate-Form-Login" },
    { to: "/ValidateFormLoginFormik", label: "ValidateFormLoginFormik" },
    { to: "/Router1", label: "Router1" },
    { to: "/Router2", label: "Router2" },

  ];

  return (
    <Navbar bg="light" className="mb-3 p-3">
      <Container className="d-flex flex-column align-items-center">
        <h2>Project Menu</h2>
        <div className="d-flex flex-wrap gap-2 mt-2" style={{ maxWidth: "900px" }}>
          {buttons.map((btn, index) => (
            <Button key={index} variant="success" as={Link} to={btn.to} className="text-nowrap">
              {btn.label}
            </Button>
          ))}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

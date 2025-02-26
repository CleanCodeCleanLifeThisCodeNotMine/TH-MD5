/* src/components/Navbar.js */
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import { useState } from "react";

const NavigationBar = () => {
  const [showAll, setShowAll] = useState(false);
  const buttons = [
    { to: "/project1", label: "Project 1" },
    { to: "/project2", label: "Project 2" },
    { to: "/Regaccountdemo", label: "Regaccountdemo" },
    { to: "/Regaccountvalidiation", label: "Regaccountvalidiation" },
    { to: "/Validate-Form-Login", label: "Validate-Form-Login" },
    { to: "/ValidateFormLoginFormik", label: "ValidateFormLoginFormik" },
  ];

  const visibleButtons = showAll ? buttons : buttons.slice(0, 12);

  return (
    <Navbar bg="light" className="mb-3 p-3">
      <Container className="d-flex flex-column align-items-center">
        <h2>Project Menu</h2>
        <div className="d-flex flex-wrap gap-2 mt-2" style={{ maxHeight: showAll ? "none" : "200px", overflow: "hidden" }}>
          {visibleButtons.map((btn, index) => (
            <Button key={index} variant="success" as={Link} to={btn.to} className="text-nowrap">
              {btn.label}
            </Button>
          ))}
        </div>
        {buttons.length > 12 && (
          <Button variant="outline-success" className="mt-2" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Hide" : "Unhide"}
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

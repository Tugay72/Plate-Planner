import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import './navbar.css';

const { Header } = Layout;

const Navbar = () => {
  const menu1 = (
    <Menu>
      <Menu.Item>Meal Prep</Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu>
      <Menu.Item>Breakfast</Menu.Item>
      <Menu.Item>Lunch</Menu.Item>
      <Menu.Item>Dinner</Menu.Item>
      <Menu.Item>Snacks</Menu.Item>
    </Menu>
  );

  const menu3 = (
    <Menu>
      <Menu.Item>BMI</Menu.Item>
      <Menu.Item>Nutritions</Menu.Item>
    </Menu>
  );

  // Fix : Use menu instead of overlay but using menu gives errors
  return (
    <Header className="navbar">
      <div className="logo">Plate Planner</div>
      <div className="nav-labels">
        <Dropdown overlay={menu1} placement="bottom" arrow>
          <span className="nav-label">Meal Prep</span>
        </Dropdown>
        <Dropdown overlay={menu2} placement="bottom" arrow>
          <span className="nav-label">Pre-Build Meals</span>
        </Dropdown>
        <Dropdown overlay={menu3} placement="bottom" arrow>
          <span className="nav-label">Calculations</span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
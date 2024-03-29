import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import URLS from "../../shared/urls";

const AdminHeader = () => {
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: "64px" }}
        className="header-menu"
      >
        <Menu.Item>
          <Link to={URLS.ADMIN_USERS}>Usuarios</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={URLS.ADMIN_INCIDENTS}>Incidentes</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={URLS.ADMIN_NEWS}>Noticias</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={URLS.ADMIN_USEFUL_INFO}>Información Útil</Link>
        </Menu.Item>
        <Menu.Item className="header-menu__right">
          <Link
            onClick={() => localStorage.removeItem("token")}
            to={URLS.LOGIN}
          >
            Salir
          </Link> 
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default AdminHeader;

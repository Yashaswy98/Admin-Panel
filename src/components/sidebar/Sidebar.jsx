import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StoreIcon from '@mui/icons-material/Store';
import SellIcon from '@mui/icons-material/Sell';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TuneIcon from '@mui/icons-material/Tune';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const {dispatch}= useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
      <Link to="/" style={{textDecoration: "none"}}>
      <span className="logo">Admin</span>
      </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}}>
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration: "none"}}>
            <li>
                <PeopleAltOutlinedIcon className="icon"/>
                <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration: "none"}}>
            <li>
                <StoreIcon className="icon"/>
                <span>Products</span>
            </li>
            </Link>
            <li>
                <SellIcon className="icon"/>
                <span>Order</span>
            </li>
            <li>
                <DeliveryDiningIcon className="icon"/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <AssessmentIcon className="icon"/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsActiveIcon className="icon"/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <MonitorHeartIcon className="icon"/>
                <span>System Health</span>
            </li>
            <li>
                <ManageHistoryIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
                <TuneIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <PermIdentityIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className="icon"/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar

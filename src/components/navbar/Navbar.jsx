import "./navbar.scss";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AvatarImage from "./images/avatarProfile.jpg";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const {dispatch}= useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <TravelExploreOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <NightsStayOutlinedIcon className="icon" onClick={()=> dispatch({type: "TOGGLE"})} />
          </div>
          <div className="item">
            <CropFreeOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatOutlinedIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <WidgetsOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img src={AvatarImage} alt="" className="avatar" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar

import "../../styles/user.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser'>
        <button className="userAddButton">Create</button>
        
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShoTop">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="avatar"
              className="userShowImg"
            />
            <div className="usershowTopTitle">
              <span className="userShowUsername">Mariana Trujillo</span>
              <span className="userShowTitle">Doctor</span>
            </div>
          </div>
          <div className="userShoBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1995</span>
            </div>
            <span className="userShowTitle">Contact Details </span>

            <div className="userShowInfo">
              <PhoneIphoneIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+1 215 654 65</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Mariana@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label className="">User Name</label>
                <input
                  type="text"
                  placeholder="Mariana54"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label className="">Full Name</label>
                <input
                  type="text"
                  placeholder="Mariana Trujillo"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label className="">User Name</label>
                <input
                  type="text"
                  placeholder="Mariana Trujillo"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label className="">Email</label>
                <input
                  type="text"
                  placeholder="Mariana@gmail.com
"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label className="">Phone</label>
                <input
                  type="text"
                  placeholder="+1 215 654 65"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label className="">Addres</label>
                <input
                  type="text"
                  placeholder="New York | USA
                  "
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file"><PublishIcon  className='userUpdateIcon'/></label>
                <input type="file" name="" id="file" style={{display:"none"}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

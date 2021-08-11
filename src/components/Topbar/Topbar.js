import './topbar.css'
import {Search, Person, Chat, Notifications} from '@material-ui/icons';

function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Facebook</span>

            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input type="text" placeholder="Search friends, post or videos" className="searchInput"/>

                </div>
            </div>
            <div className="topbaRight">
                <div className="topbarLinks">
                       <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>

                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                    <img src="/assets/person/1.jpeg" alt="Profile" className="topbarImage" />
                </div>
            </div>

        </div>
    )
}
export default Topbar;

import Topbar from '../../components/Topbar/Topbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Feed from '../../components/Feed/Feed'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import './home.css'
function Home(){
    return(
        <div>
            <Topbar/>
               <div className="homeContainer">
                    <LeftSidebar/>
                   
                    <Feed/>
                    <RightSidebar/>
                  
               </div>
        </div>
    
    )
}

export default Home;
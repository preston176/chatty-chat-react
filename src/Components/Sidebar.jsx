import './Sidebar.css'
import PersonIcon from '@mui/icons-material/Person';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { ChatBubbleOutline, MoreVertRounded } from '@mui/icons-material';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <PersonIcon />
                <div className="sidebar__headerRight">
                    <DonutLargeIcon />
                    <ChatBubbleOutline />
                    <MoreVertRounded />
                </div>
            </div>
            <div className="sidebar__search">

            </div>

            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar
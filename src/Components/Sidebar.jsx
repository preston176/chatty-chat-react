import './Sidebar.css'
import PersonIcon from '@mui/icons-material/Person';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { ChatBubbleOutline, MoreVertRounded, SearchOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutline />
                    </IconButton>
                    <IconButton>
                        <MoreVertRounded />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search ..." type='text' />
                </div>
            </div>

            <div className="sidebar__chats">
                {/* Chats */}
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
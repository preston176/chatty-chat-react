import './Sidebar.css'
import PersonIcon from '@mui/icons-material/Person';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { ChatBubbleOutline, MoreVertRounded, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
import { useState, useEffect } from 'react';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useStateValue } from '../StateProvider';


function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    useEffect(() => {
        // Define an async function to fetch rooms
        const fetchRooms = async () => {
          try {
            const snapshot = await getDocs(collection(db, 'rooms'));
            const roomData = snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data(),
            }));
            setRooms(roomData);
          } catch (error) {
            console.error("Error fetching rooms: ", error);
          }
        };
      
        // Call the async function to fetch rooms
        fetchRooms();
      
        // Return an empty function to unsubscribe (no need for async)
        return () => {};
      }, []);
      
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <IconButton>
                    <Avatar src={user?.photoURL} />
               
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
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
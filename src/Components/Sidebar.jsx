import './Sidebar.css';
import { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { SearchOutlined } from '@mui/icons-material';

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
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

    fetchRooms();

    return () => {};
  }, []);

  // Filter rooms based on search query
  const filteredRooms = rooms.filter(room =>
    room.data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <IconButton>
          <Avatar src={user?.photoURL} />
        </IconButton>
        {/* Rest of your header content */}
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input
            placeholder="Search ..."
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="sidebar__chats">
        {/* Chats */}
        <SidebarChat addNewChat />
        {filteredRooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

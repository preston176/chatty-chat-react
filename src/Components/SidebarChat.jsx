import { Avatar } from '@mui/material'
import './SidebarChat.css'
import { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import db from '../firebase';
import { Link } from 'react-router-dom';
function SidebarChat({ addNewChat, name, id }) {
    const [seed, setSeed] = useState('')
    const [messages, setMessages] = useState("")

    useEffect(() => {
        if (id) {
            const q = query(
                collection(db, 'rooms', id, 'messages'),
                orderBy('timestamp', 'desc')
            );

            const unsubscribe = onSnapshot(q, (snap) => {
                setMessages(snap.docs.map((doc) => doc.data()));
            });

            return () => {
                // Cleanup function to unsubscribe from the snapshot listener
                unsubscribe();
            };
        }
    }, [id]);


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))

    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter a name for the chat");

        if (roomName) {
            // Reference to the 'rooms' collection and add a new document with a generated ID
            const roomsRef = collection(db, 'rooms');
            addDoc(roomsRef, {
                name: roomName,
            })
                .then((docRef) => {
                    console.log("Chat room created with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error creating chat room: ", error);
                });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
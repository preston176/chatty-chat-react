import { Avatar, IconButton } from "@mui/material"
import "./Chat.css"
import { useEffect, useState } from "react"
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";

function Chat() {
    const [input, setInput] = useState("")
    const [seed, setSeed] = useState("")
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])
    useEffect(() => {
        if (roomId) {
            // Room details listener
            const roomRef = doc(db, 'rooms', roomId);
            const roomUnsubscribe = onSnapshot(roomRef, (snapshot) => {
                if (snapshot.exists()) {
                    setRoomName(snapshot.data().name);
                } else {
                    setRoomName('Room Not Found');
                }
            });

            // Messages listener
            const messagesRef = collection(db, 'rooms', roomId, 'messages');
            const messagesUnsubscribe = onSnapshot(query(messagesRef, orderBy('timestamp', 'asc')), (snapshot) => {
              
                setMessages(snapshot.docs.map((doc) => doc.data()));
            });

            return () => {
                // Unsubscribe from both listeners when the component unmounts
                roomUnsubscribe();
                messagesUnsubscribe();
            };
        }
    }, [roomId]);

    useEffect(() => {

        const newSeed = Math.floor(Math.random() * 5000)
        setSeed(newSeed)
    }, [roomId])

    const sendMessage = (e) => {
        //function to send msg
        e.preventDefault();
    }
    return (
        <div className='chat'>
            <div className="chat__header">
                {/* //icons n stuff */}
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    {/* some kind of data */}
                    <p>Last seen at</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message, index) => (

                    <div key={index} className={`chat__message ${true ? "chat__receiver" : ""}`}>

                        <span className="chat__name">{message.name}</span>
                        <p>{message.message}

                            <span className="chat__timestamp">
                                {message.timestamp.toDate().toLocaleTimeString('en-US')}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
            <div className="chat__footer">
                {/* input  */}

                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicOutlined />
            </div>
        </div>
    )
}

export default Chat
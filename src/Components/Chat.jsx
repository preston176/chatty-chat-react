import { Avatar, IconButton } from "@mui/material"
import "./Chat.css"
import { useEffect, useState } from "react"
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";

function Chat() {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random()) * 5000)
    }, []);

    return (
        <div className='chat'>
            <div className="chat__header">
                {/* //icons n stuff */}
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
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
                {/* texts */}
                <div className={`chat__message ${true ? "chat__receiver" : ""}`}>

                    <span className="chat__name">pres</span>
                    <p>Hello there

                        <span className="chat__timestamp">2:53 PM</span>
                    </p>
                </div>
            </div>
            <div className="chat__footer">
                {/* input  */}
            </div>
        </div>
    )
}

export default Chat
import { Avatar } from "@mui/material"
import "./Chat.css"
import { useEffect, useState } from "react"

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
            </div>
            <div className="chat__body">
                {/* texts */}
            </div>
            <div className="chat__footer">
                {/* input  */}
            </div>
        </div>
    )
}

export default Chat
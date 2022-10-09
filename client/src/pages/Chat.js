import '../App.css';
import MessageRecieve from '../component/MessageRecieve';
import MessageSend from '../component/MessageSend';
import { useState } from 'react'

export default function Chat() {

    const [msg, setMsg] = useState([{ text: 'sender', id: 0 }, { text: 'Sender', id: 0 }, { text: 'Reciev', id: 1 }])
    const [input, setInput] = useState('')


    const sndMsg = () => {
        if (input) {
            setMsg(msg => [...msg, { text: input, id: 0 }])
            setInput('')
        }

    }


    return (
        <div className="chat">
            <div className="messagePanel">
                {msg.map(msg => {
                    if (msg.id === 0) {
                        return <MessageSend text={msg.text} />
                    } else {
                        return <MessageRecieve text={msg.text} />
                    }
                })}



            </div>
            <div className='inputPanel'>
                <input type="text" className="messageInput" placeholder='Message...' value={input} onInput={e => setInput(e.target.value)}></input>
                <div className='send' onClick={sndMsg}>Send</div>
            </div>
        </div>
    )

}
import '../App.css';
import MessageRecieve from '../component/MessageRecieve';
import MessageSend from '../component/MessageSend';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000')

export default function Chat() {

    const [msg, setMsg] = useState([])
    const [input, setInput] = useState('')

    
    socket.on('connection', () => {
        

    })

    useEffect(() => {
        console.log('connected')
        socket.on('receiveMessage', (data) => {
            setMsg(msg => [...msg, data])


        })

    }, [socket])

    const sndMsg = () => {
        if (input) {
            setMsg(msg => [...msg, { text: input, id: socket.id }])

            socket.emit('sendMessage', {text: input, id: socket.id})

            setInput('')
        }

    }


    return (
        <div className="chat">
            <div className="messagePanel">
                {msg.map(msg => {
                    if (msg.id === socket.id) {
                        return <MessageSend text={msg.text} />
                    } else {
                        return <MessageRecieve text={msg.text} />
                    }
                })}



            </div>
            <div className='inputPanel'>
                <input type="text" className="messageInput" placeholder='Message...' value={input} onInput={e => setInput(e.target.value)}></input>
                <button className='send' type="submit" onClick={sndMsg}>Send</button>
            </div>
        </div>
    )

}
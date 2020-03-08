import { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('http://39.96.50.163:3000')

const Index = () => {
  const [data, setData] = useState([])
  const [message, setMessage] = useState('')
  const list = data.map((val, index) => <li key={index}>{val}</li>)

  const handleMessage = e => {
    e.preventDefault()
    setMessage(e.target.value)
  }
  const handleSend = () => {
    if (message !== '') {
      socket.emit('chat message', message)
      setMessage('')
    }
  }
  const handleKeyDown = e => {
    if (e.which === 13) {
      handleSend()
    }
  }

  useEffect(() => {
    socket.on('chat message', msg => {
      console.log(data)
      setData([...data, msg])
    })
    // must remove the socket when unmounted
    return () => {
      socket.off('chat message')
    }
  })

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="chat">
            <ul className="message">{list}</ul>
          </div>
          <div className="input">
            <input
              value={message}
              onChange={handleMessage}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSend}>SEND</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        body {
          margin: 0px;
        }
        .container {
          display: flex;
          box-sizing: border-box;
        }
        .main {
          box-sizing: border-box;
          margin: auto;
          border: 1px black solid;
          border-radius: 10px;
          height: 90vh;
          width: 70%;
        }
        .chat {
          width: 100%;
          height: 93%;
          border-radius: 10px 10px 0 0;
          background-color: pink;
          overflow: auto;
        }
        .input {
          width: 100%;
          height: 7%;
          border-radius: 0 0 10px 10px;
          border: 1px burlywood solid;
        }
        input {
          width: 70%;
          height: 80%;
        }
        button {
          width: 25%;
          height: 80%;
          margin-left: 10px;
        }
      `}</style>
      <style jsx global>{`
        .message {
          list-style-type: none;
          margin: 0;
          padding: 10px;
        }
        .message li:nth-child(odd) {
          background: beige;
        }
      `}</style>
    </>
  )
}

export default Index

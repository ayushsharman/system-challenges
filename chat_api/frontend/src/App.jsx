import axios from 'axios';
import { useEffect, useState } from 'react';


export default function App() {
  const [messages, setMessages]= useState([]);
  const [text, setText] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:3000/message")
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  }, []);

  const sendMessage = async () => {
    console.log("sending")
    if (!text.trim()) return;

    try{
      const res = await axios.post("http://localhost:3000/message", {
        senderId:1,
        receiverId:2,
text
      });
      setMessages([...messages, res.data]);
      setText("");
    } catch(err){
      console.error(err);
    }
  }  
  return (
    <div className="bg-gray-950 min-h-screen w-full flex items-center justify-center">
      <div className="p-4 bg-gray-900/40 border border-gray-800 w-96 h-96 hover:border-cyan-500/60 transition flex flex-col rounded-lg">

        <h1 className="text-white text-lg font-semibold mb-2">Messaging App</h1>

        <div className="flex-1 overflow-y-auto mb-2">
         {messages.map(m => (
            <p key={m.id} className="text-gray-300">{m.text}</p>
          ))}
        </div>

        <div className="flex gap-1">
          <input
            type="text"
            value={text}
            placeholder="Enter Message"
            onChange={e => setText(e.target.value)}
            className="flex-1 px-3 py-2 bg-gray-950 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500"
          />
          <button onClick={sendMessage}
          className="px-3 py-2 bg-cyan-600 text-white rounded-lg">
            Send
          </button>
        </div>

      </div>
    </div>
  )
}

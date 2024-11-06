import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Image } from 'lucide-react';
import { db } from '../utils/firebaseConfig'; // Ensure Firebase is configured correctly
import { doc, getDoc, updateDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

function ChatDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [otherUser, setOtherUser] = useState(null);
  const messageListRef = useRef(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) setOtherUser(userDoc.data());
    };
    
    const unsubscribe = onSnapshot(doc(db, 'conversations', userId), (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setMessages(Object.entries(data.messages || {}).map(([id, msg]) => ({ id, ...msg })));
      }
    });

    fetchUser();
    return () => unsubscribe();
  }, [userId]);

  const scrollToBottom = () => {
    if (messageListRef.current) messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  };

  useEffect(() => scrollToBottom(), [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      senderId: user.uid,
      content: message,
      timestamp: serverTimestamp(),
    };

    await updateDoc(doc(db, 'conversations', userId), {
      [`messages.${Date.now().toString()}`]: newMessage,
    });

    setMessage('');
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      {/* Chat Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center">
        <button onClick={() => navigate('/messages')} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <div className="ml-2 flex-1">
          <h2 className="font-semibold text-gray-800">{otherUser ? otherUser.name : 'Loading...'}</h2>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={messageListRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.senderId === user.uid ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] rounded-2xl px-4 py-2 ${msg.senderId === user.uid ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
              <p>{msg.content}</p>
              <p className="text-xs mt-1">{new Date(msg.timestamp.seconds * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t p-4">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message..." className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button type="submit" disabled={!message.trim()} className="p-2 bg-purple-600 text-white rounded-full disabled:opacity-50">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatDetail;

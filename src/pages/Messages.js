import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../utils/firebaseConfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

function Messages() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'conversations'), where('participants', 'array-contains', user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const convs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        otherUser: doc.data().participants.find((uid) => uid !== user.uid),
      }));
      setConversations(convs);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="container mt-2">
      <h2 className="mb-4 pt-1">Your Conversations</h2>
      <div className="list-group">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => navigate(`/messages/${conv.otherUser}`)}
            className={`p-4 border-b last:border-0 flex items-center gap-3 hover:bg-gray-50 transition-colors`}
          >
            <div className="flex-1">
              <h5 className="font-semibold text-gray-800">{conv.otherUser}</h5>
              <p className="text-sm text-gray-500">{conv.lastMessage}</p>
            </div>
            <span className="text-xs text-gray-500">{conv.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;

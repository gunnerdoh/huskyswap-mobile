import { 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc, 
    deleteDoc, 
    collection,
    query,
    where,
    orderBy,
    limit,
    getDocs
  } from 'firebase/firestore';
  import { db } from './firebaseConfig';
  
  // User related helpers
  export const getUserProfile = async (userId) => {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  };
  
  export const updateUserProfile = async (userId, data) => {
    const docRef = doc(db, 'users', userId);
    await updateDoc(docRef, data);
  };
  
  // Listing related helpers
  export const createListing = async (listingData) => {
    const listingsRef = collection(db, 'listings');
    const newListing = {
      ...listingData,
      createdAt: new Date().toISOString(),
      status: 'active'
    };
    const docRef = doc(listingsRef);
    await setDoc(docRef, newListing);
    return docRef.id;
  };
  
  export const getListings = async (filters = {}) => {
    const listingsRef = collection(db, 'listings');
    let q = query(listingsRef);
  
    // Apply filters
    if (filters.category) {
      q = query(q, where('category', '==', filters.category));
    }
    if (filters.userId) {
      q = query(q, where('userId', '==', filters.userId));
    }
    if (filters.status) {
      q = query(q, where('status', '==', filters.status));
    }
  
    // Apply sorting
    q = query(q, orderBy('createdAt', 'desc'));
  
    // Apply limit
    if (filters.limit) {
      q = query(q, limit(filters.limit));
    }
  
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  };
  
  // Message related helpers
  export const createChat = async (participants, listingId) => {
    const chatsRef = collection(db, 'chats');
    const newChat = {
      participants,
      listingId,
      createdAt: new Date().toISOString(),
      lastMessage: null,
      lastMessageTime: null
    };
    const docRef = doc(chatsRef);
    await setDoc(docRef, newChat);
    return docRef.id;
  };
  
  export const sendMessage = async (chatId, userId, message) => {
    const messagesRef = collection(db, `chats/${chatId}/messages`);
    const newMessage = {
      userId,
      message,
      timestamp: new Date().toISOString(),
      read: false
    };
    const docRef = doc(messagesRef);
    await setDoc(docRef, newMessage);
  
    // Update chat with last message
    const chatRef = doc(db, 'chats', chatId);
    await updateDoc(chatRef, {
      lastMessage: message,
      lastMessageTime: new Date().toISOString()
    });
  
    return docRef.id;
  };
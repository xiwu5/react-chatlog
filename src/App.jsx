import './App.css';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(messagesData);

  const updateLikedStatus = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? { ...message, liked: !message.liked }
          : message
      )
    );
  };

  const totalLikes = messages.filter((message) => message.liked).length;
  const participants = Array.from(new Set(messages.map((message) => message.sender)));

  let localSender = 'Local';
  if (participants.length > 0 && participants[0]) {
    localSender = participants[0];
  }

  let remoteSender = 'Remote';
  if (participants.length > 1 && participants[1]) {
    remoteSender = participants[1];
  } else if (participants.length > 0 && participants[0]) {
    remoteSender = participants[0];
  }

  let titleText = `Chat between ${localSender} and ${remoteSender}`;
  if (localSender === remoteSender) {
    titleText = `Chat with ${localSender}`;
  }

  return (
    <div id="App">
      <header>
        <h1>{titleText}</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog
          entries={messages}
          localSender={localSender}
          remoteSender={remoteSender}
          onUpdateLiked={updateLikedStatus}
        />
      </main>
    </div>
  );
};

export default App;

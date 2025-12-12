import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
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
      </header>
      <main>
        <ChatLog
          entries={messages}
          localSender={localSender}
          remoteSender={remoteSender}
        />
      </main>
    </div>
  );
};

export default App;

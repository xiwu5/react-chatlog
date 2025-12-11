import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 02: Render ChatLog component */}
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;

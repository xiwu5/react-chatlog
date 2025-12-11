import './App.css';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* 
        Wave 02: Render ChatLog component */}
        <ChatEntry 
          sender="Vladimir"
          body="why are you arguing with me"
          timeStamp="2018-05-29T22:49:06+00:00"
        />
      </main>
    </div>
  );
};

export default App;

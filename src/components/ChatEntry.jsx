import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  let entryClass = 'remote';
  if (props.isLocal) {
    entryClass = 'local';
  }

  return (
    <article className={`chat-entry ${entryClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like">🤍</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLocal: PropTypes.bool,
};

ChatEntry.defaultProps = {
  isLocal: true,
};

export default ChatEntry;

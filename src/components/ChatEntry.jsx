import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  let entryClass = 'remote';
  if (props.isLocal) {
    entryClass = 'local';
  }

  const handleLikeClick = () => {
    props.onUpdateLiked(props.id);
  };

  return (
    <article className={`chat-entry ${entryClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={handleLikeClick}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLocal: PropTypes.bool,
  liked: PropTypes.bool.isRequired,
  onUpdateLiked: PropTypes.func.isRequired,
};

ChatEntry.defaultProps = {
  isLocal: true,
};

export default ChatEntry;

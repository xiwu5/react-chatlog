import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, isLocal, liked, onUpdateLiked }) => {
  const entryClass = isLocal ? 'local' : 'remote';

  const handleLikeClick = () => {
    if (onUpdateLiked) {
      onUpdateLiked(id);
    }
  };

  return (
    <article className={`chat-entry ${entryClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={handleLikeClick}>
          {liked ? '❤️' : '🤍'}
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
  liked: PropTypes.bool,
  onUpdateLiked: PropTypes.func,
};

ChatEntry.defaultProps = {
  isLocal: true,
  liked: false,
};

export default ChatEntry;

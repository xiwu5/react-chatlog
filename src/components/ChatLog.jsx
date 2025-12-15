import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, localSender, remoteSender, onUpdateLiked }) => {
  const senderList = Array.from(new Set(entries.map((entry) => entry.sender)));

  let resolvedLocalSender = 'Local';
  if (localSender) {
    resolvedLocalSender = localSender;
  } else if (senderList.length > 0 && senderList[0]) {
    resolvedLocalSender = senderList[0];
  }

  let resolvedRemoteSender = 'Remote';
  if (remoteSender) {
    resolvedRemoteSender = remoteSender;
  } else if (senderList.length > 1 && senderList[1]) {
    resolvedRemoteSender = senderList[1];
  } else if (senderList.length > 0 && senderList[0]) {
    resolvedRemoteSender = senderList[0];
  }

  return (
    <div className="chat-log">
      {entries.map((entry) => {
        const isLocal = entry.sender === resolvedLocalSender;
        const isRemote = entry.sender === resolvedRemoteSender;
        let isLocalMessage = false;
        if (isLocal) {
          isLocalMessage = true;
        } else if (!isRemote && resolvedLocalSender === resolvedRemoteSender) {
          isLocalMessage = true;
        }

        return (
          <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            isLocal={isLocalMessage}
            liked={entry.liked}
            onUpdateLiked={onUpdateLiked}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  localSender: PropTypes.string,
  remoteSender: PropTypes.string,
  onUpdateLiked: PropTypes.func,
};

ChatLog.defaultProps = {
  localSender: undefined,
  remoteSender: undefined,
};

export default ChatLog;

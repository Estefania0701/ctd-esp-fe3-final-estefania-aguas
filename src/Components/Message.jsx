import React from 'react'
import '../Styles/Message.css';

const Message = ({text, type}) => {
    return (
      <div className="message-container">
          <div className={type === 'error' ? "error" : "success"}>
              {text}
          </div>
      </div>
    );
  };
  
  export default Message;
  

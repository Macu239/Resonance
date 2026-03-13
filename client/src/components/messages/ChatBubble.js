import React from 'react';

function ChatBubble(props){
    const { text, isOutgoing } = props;
    return (
        <div style = {{
            alignSelf: isOutgoing ? 'flex-end' : 'flex-start',
            backgroundColor: isOutgoing ? '#1d9bf0' : '#2a2d33',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: isOutgoing ? '18px 18px 0 18px' : '0 18px 18px 18px',
            maxWidth: '70%',
            fontSize: '18px',
            marginBottom: '10px'
        }}>
        {text}
        </div>
    );
}

export default ChatBubble;
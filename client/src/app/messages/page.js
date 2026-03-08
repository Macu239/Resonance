import React from 'react';

import Sidebar from '../../components/messages/Sidebar'; 
import UserPanel from '../../components/messages/UserPanel';
import ChatBubble from '../../components/messages/ChatBubble'; 

function App() {

    return (
        <div style = {{ 
            display: 'flex', 
            height: '100vh', 
            backgroundColor: '#000' 
        }}>
      
        {/* Sidebar */}
        <Sidebar />

        {/* Middle: User Panel */}
        <div style = {{ width: '350px', 
            borderRight: '1px solid #2a2d33', 
            display: 'flex', 
            flexDirection: 'column' 
        }}>

            <div style = {{ 
                padding: '40px 24px 20px 30px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                color: '#fff' 
            }}>
                <h2 style = {{ 
                    margin: 0, 
                    fontSize: '24px', 
                    fontWeight: 'bold' 
                }}>Messages</h2>
                
                <button style = {{ 
                    color: '#1d9bf0', 
                    fontSize: '0px', 
                    cursor: 'pointer', 
                    background: 'none',
                    border: 'none',
                    alignItems: 'center', 
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '4px'
                }}>
                    <img 
                    src = "/imgs/messages/add.svg" 
                    alt = "Add" 
                    style = {{
                        width: '24px',
                        height: '24px',
                        filter: 'brightness(0) invert(1)'
                    }}/>

                </button>
            </div>

            <div style={{
                margin: '10px 16px 10px 16px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#1A1A1E',
                borderRadius: '12px',
                padding: '10px 12px',
                gap: '10px'
            }}>
                {/* Search Icon */}
                <span
                style = {{ 
                    fontSize: '16px',
                    color: '#71767B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center' 
                }}>
                    <img 
                    src="/imgs/messages/search.svg" 
                    alt = "Search" 
                    style = {{
                        width: '14px',
                        height: '14px',
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.4
                    }}/>
                </span>
                
                <input 
                    type="text" 
                    placeholder = "Search messages..." 
                    style = {{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: '#FFFFFF',
                        fontSize: '16px',
                        flex: 1,
                        fontFamily: 'inherit'
                    }} 
                />
            </div>
            
            
            <div style = {{ 
                overflowY: 'auto' 
            }}>
            <UserPanel name = "Joey" message = "Example message here..." time = "11:12" />
            <UserPanel name = "Michelle" message = "Example message here..." time = "8:34" />
            <UserPanel name = "Robbie" message = "Example message here..." time = "4:10" />
            <UserPanel name = "Sunny" message = "Example message here..." time = "Yesterday" />
            <UserPanel name = "Ron" message = "Example message here..." time = "Yesterday" />
            <UserPanel name = "Kayla" message = "Example message here..." time = "Monday" />
            <UserPanel name = "Johnny" message = "Example message here..." time = "Sunday" />
            <UserPanel name = "Belle" message = "Example message here..." time = "Sunday" />
            <UserPanel name = "Margo" message = "Example message here..." time = "Saturday" />
            <UserPanel name = "Tommy" message = "Example message here..." time = "Saturday" />
            <UserPanel name = "Greg" message = "Example message here..." time = "Saturday" />
            <UserPanel name = "Fred" message = "Example message here..." time = "Saturday" />
            </div>
        </div>

        {/* Active Chat Window */}
        <div style = {{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column' 
        }}>
            
            {/* Chat Header */}
                <div style = {{ 
                    padding: '30px 20px 20px 20px', 
                    color: '#fff', 
                    borderBottom: '1px solid #2a2d33', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px' 
            }}>
            
            {/* User Icon */}
                <div style = {{ 
                    height: '45px', 
                    width: '45px', 
                    backgroundColor: '#3D3D42', 
                    borderRadius: '12px' 
                }}></div>
            
            <span style = {{ 
                fontWeight: 'bold', 
                fontSize: '18px' 
            }}>Full Name Here</span>
            </div>

            {/* 1. The Scrollable Container */}
            <div className = "no-scrollbar" style = {{ 
                flex: 1, 
                overflowY: 'auto', 
                display: 'flex', 
                flexDirection: 'column-reverse',
                scrollbarWidth: 'none',
            }}>
                
                {/* Messages Area */}
                <div style = {{ 
                    padding: '20px', 
                    display: 'flex', 
                    flexDirection: 'column'
                }}>
                    <ChatBubble text = "OLDEST MESSAGE" isOutgoing={false} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {false} />
                    <ChatBubble text = "Text Here" isOutgoing = {false} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {false} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {false} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {false} />
                    <ChatBubble text = "Text Here" isOutgoing = {true} />
                    <ChatBubble text = "Text Here" isOutgoing = {false} />
                    <ChatBubble text = "NEWEST MESSAGE" isOutgoing = {true} />
                    
                
                </div>
            </div>

            {/* Input Footer */}
            <div style = {{ 
                padding: '20px', 
                borderTop: '1px solid #2a2d33'
            }}>
            <div style = {{ 
                backgroundColor: '#1e1f25', 
                borderRadius: '20px', 
                padding: '20px 20px', 
                display: 'flex', 
                border: 'none'
            }}>
                
                <input 
                type = "text"
                placeholder = "Message here" 
                style = {{ 
                    flex: 1, 
                    fontSize: '18px',
                    background: 'transparent', 
                    outline: 'none',
                    border: 'none'
                }} 
                />
                
                {/* Emoji Button */}
                <button style = {{ 
                    cursor: 'pointer',
                    fontSize: '18px',
                    background: 'none',
                    border: 'none',
                    padding: '4px',
                    alignItems: 'center',
                    display: 'flex',
                    marginRight: '4px',
                    marginLeft: '4px'
                }}>
                    <img 
                    src="/imgs/messages/emoji.svg" 
                    alt="Emoji" 
                    style = {{
                        width: '20px',
                        height: '20px',
                        filter: 'brightness(0) invert(1)'
                    }}/>
                </button>

                {/* Picture Button */}
                <button style = {{ 
                    cursor: 'pointer',
                    fontSize: '18px',
                    background: 'none',
                    border: 'none',
                    padding: '4px',
                    alignItems: 'center',
                    display: 'flex',
                    marginRight: '4px',
                    marginLeft: '4px'
                }}>
                    <img 
                    src="/imgs/messages/picture.svg" 
                    alt="Picture" 
                    style = {{
                        width: '20px',
                        height: '20px',
                        filter: 'brightness(0) invert(1)'
                    }}/>
                </button>

                
            </div>
            </div>
        </div>

        </div>
    );
};

export default App;
"use client";
import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

import Sidebar from '../../components/messages/Sidebar'; 
import UserPanel from '../../components/messages/UserPanel';
import ChatBubble from '../../components/messages/ChatBubble'; 

function App() {

    
    const [activeUser, setActiveUser] = useState("Joey");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const [chatHistories, setChatHistories] = useState({
        "Joey": {
        avatar: "/imgs/messages/avatars/joey.png",
        messages: [{ text: "Hi! This is Joey.", isOutgoing: false, time: "15:25" }]
        },
        "Michelle": {
            avatar: "/imgs/messages/avatars/michelle.png",
            messages: [{ text: "Hi! This is Michelle.", isOutgoing: false, time: "15:39" }]
        },
        "Robbie": {
            avatar: "/imgs/messages/avatars/robbie.png",
            messages: [{ text: "Hi! This is Robbie.", isOutgoing: false, time: "16:01" }]
        },
        "Sunny": {
            avatar: "/imgs/messages/avatars/Sunny.png",
            messages: [{ text: "Hi! This is Sunny.", isOutgoing: false, time: "16:01" }]
        },
        "Ron": {
            avatar: "/imgs/messages/avatars/ron.png",
            messages: [{ text: "Hi! This is Ron.", isOutgoing: false, time: "16:01" }]
        }
    });
    

    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false
    });

        const newMessage = { 
            text: inputValue,
            isOutgoing: true,
            time: timeString
        };

        setChatHistories(prev => ({
            ...prev,
            [activeUser]: {
                ...prev[activeUser],
                messages: [...(prev[activeUser].messages || []), newMessage]
            }
        }));

        setInputValue("");
        setShowEmojiPicker(false)
    };
    
    const onEmojiClick = (emojiData) => {
        setInputValue((prev) => prev + emojiData.emoji);
    };
    
    return (
        <div style = {{ 
            display: 'flex', 
            height: '100vh', 
            backgroundColor: '#000' 
        }}>
      
        {/* Sidebar */}
        <Sidebar />

        {/* Middle: User Panel */}
        <div style = {{ 
            width: '350px', 
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

            <div style = {{
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
                    src = "/imgs/messages/search.svg" 
                    alt = "Search" 
                    style = {{
                        width: '14px',
                        height: '14px',
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.4
                    }}/>
                </span>
                
                <input 
                    type = "text" 
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
                {Object.keys(chatHistories).map((name) => {
                    const userData = chatHistories[name];
                    const historyArray = userData.messages || [];
                    const lastMsg = historyArray[historyArray.length - 1];

                    return (
                        <div 
                            key = {name}
                            onClick = {() => setActiveUser(name)}
                            style = {{ 
                                cursor: 'pointer',
                                backgroundColor: activeUser === name ? '#2a2d33' : 'transparent',
                                transition: '0.2s'
                            }}
                        >
                            <UserPanel 
                                name = {name} 
                                image = {userData.avatar}
                                message = {lastMsg?.text || "No messages yet"} 
                                time = {lastMsg?.time || ""}
                                isActive={activeUser === name}
                            />

                    </div>

                );
                })}
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
            
            <img 
                src = {chatHistories[activeUser]?.avatar || "/imgs/default-avatar.png"} 
                alt = {activeUser}
                style = {{ 
                    height: '45px', 
                    width: '45px', 
                    borderRadius: '12px', 
                    objectFit: 'cover' 
            }} 
            />

            <span style = {{
                fontWeight: 'bold',
                fontSize: '18px'
            }}>{activeUser}</span>
            
            </div>

            {/* Scrollable Container */}
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
                    
                    {(chatHistories[activeUser]?.messages || []).map((msg, index) => (
                        <ChatBubble 
                            key = {index} 
                            text = {msg.text} 
                            isOutgoing = {msg.isOutgoing} 
                        />
                    ))}

                </div>
            </div>

            {/* Emoji Picker */}
            {showEmojiPicker && (
                <div style = {{ 
                    position: 'absolute',
                    bottom: '100px',
                    right: '20px',
                    zIndex: 10
                }}>
                    <EmojiPicker 
                        theme = "dark" 
                        onEmojiClick = {onEmojiClick}
                        width = {300}
                        height = {400}
                    />
                </div>
            )}

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
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
                onKeyDown = {(e) => e.key === 'Enter' && handleSend()}
                style = {{ 
                    flex: 1, 
                    fontSize: '18px',
                    background: 'transparent', 
                    outline: 'none',
                    border: 'none'
                }} 
                />
                
                {/* Emoji Button */}
                <button
                    onClick = {() => setShowEmojiPicker(!showEmojiPicker)}
                    style = {{ 
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
                        src = "/imgs/messages/emoji.svg" 
                        alt = "Emoji" 
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
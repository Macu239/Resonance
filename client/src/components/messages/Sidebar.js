import React from 'react';
// import HomeIcon from '/public/imgs/messages/home.svg';
// import SearchIcon from '/public/imgs/messages/search.svg';
// import SettingsIcon from '/public/imgs/messages/settings.svg';
// import UserIcon from '/public/imgs/messages/user.svg';


function Sidebar() {
    const iconStyle = {
        fontSize: '24px',
        marginBottom: '40px',
        cursor: 'pointer',
        color: '#fff',
        background: 'none',
        border: 'none'
    };

    return (
        <div style = {{ 
            width: '80px', 
            height: '100vh',
            backgroundColor: '#000000', 
            borderRight: '1px solid #2a2d33', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '40px 0' 
        }}>
        {/* Top Icons */}
        <button style = {iconStyle} title = "Home">
           <img
            src="/imgs/messages/home.svg"
            alt = "Home"
            style={{
                width: '24px', 
                height: '24px',
                filter: 'brightness(0) invert(1)'
            }}/>
        </button>
        
        <button style = {iconStyle} title = "Profile">
            <img 
            src = "/imgs/messages/user.svg"
            alt = "Profile"
            style={{
                width: '24px', 
                height: '24px',
                filter: 'brightness(0) invert(1)'
            }}/>
        </button>

        <button style = {iconStyle} title = "Search">
            <img
            src="/imgs/messages/search.svg" 
            alt = "Search"
            style = {{
                width: '24px', 
                height: '24px',
                filter: 'brightness(0) invert(1)'
            }}/>
        </button>

        {/* Bottom Setting Icon */}
        <button style = {{ 
            marginTop: 'auto', 
            fontSize: '24px', 
            cursor: 'pointer', 
            color: '#fff',
            background: 'none',
            border: 'none'
        }} title = "Settings">
            <img 
            src = "/imgs/messages/settings.svg"
            alt = "Settings"
            style={{
                width: '24px', 
                height: '24px',
                filter: 'brightness(0) invert(1)'
            }}/>
        </button>
        </div>
    );
}

export default Sidebar;
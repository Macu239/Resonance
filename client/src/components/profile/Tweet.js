import React from 'react';

const Tweet = ({ name, handle, content, timestamp }) => {
  // Same Dark Mode Palette
  const colors = {
    background: '#000000',
    border: '#2f3336',
    textMain: '#e7e9ea',
    textSecondary: '#71767b',
    blue: '#1d9bf0',
  };

  return (
    <div style={{ 
      display: 'flex', 
      padding: '12px 16px', 
      borderBottom: `1px solid ${colors.border}`,
      backgroundColor: colors.background,
      fontFamily: 'sans-serif',
      cursor: 'pointer'
    }}>
      {/* Left: Profile Picture */}
      <div style={{ marginRight: '12px' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: '#333639',
          overflow: 'hidden'
        }}>
          <img 
            src="https://via.placeholder.com/100/1d9bf0/ffffff?text=U" 
            alt="User" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      </div>

      {/* Right: Content */}
      <div style={{ flex: 1 }}>
        {/* User Info Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
          <span style={{ fontWeight: 'bold', color: colors.textMain, fontSize: '15px' }}>{name}</span>
          <span style={{ color: colors.textSecondary, fontSize: '15px' }}>{handle} · {timestamp}</span>
        </div>
        
        {/* Tweet Text */}
        <p style={{ 
          margin: '0 0 12px 0', 
          lineHeight: '20px', 
          fontSize: '15px', 
          color: colors.textMain 
        }}>
          {content}
        </p>

        {/* Action Buttons (Icons) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          maxWidth: '425px', 
          color: colors.textSecondary, 
          fontSize: '13px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>💬 <span>12</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🔁 <span>5</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>❤️ <span>120</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📊 <span>1.2k</span></div>
          <div>📤</div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
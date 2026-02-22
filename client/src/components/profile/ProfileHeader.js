import React from 'react';

const ProfileHeader = () => {
  // Dark Mode Palette
  const colors = {
    background: '#000000',     // True Black
    border: '#2f3336',         // Dark Gray border
    textMain: '#e7e9ea',       // Almost White
    textSecondary: '#71767b',  // Muted Gray
    blue: '#1d9bf0',           // Twitter Blue
  };

  return (
    <div style={{ backgroundColor: colors.background, borderBottom: `1px solid ${colors.border}`, color: colors.textMain, fontFamily: 'sans-serif' }}>
      
      {/* 1. Top Navigation Bar */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 16px', 
        height: '53px', 
        position: 'sticky', 
        top: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.65)', // Semi-transparent black
        backdropFilter: 'blur(12px)',
        zIndex: 10
      }}>
        <div style={{ marginRight: '30px', cursor: 'pointer', fontSize: '20px' }}>←</div>
        <div>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '800', lineHeight: '24px' }}>Your Name</h2>
          <span style={{ color: colors.textSecondary, fontSize: '13px' }}>1,234 Posts</span>
        </div>
      </div>

      {/* 2. Banner Image */}
      <div style={{ 
        height: '200px', 
        backgroundColor: '#333639', 
        backgroundImage: 'url("https://via.placeholder.com/1500x500/1e1e1e/ffffff")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>

      {/* 3. Profile Section */}
      <div style={{ padding: '12px 16px 0 16px' }}>
        
        {/* Profile Picture & Button Row */}
        <div style={{ 
          marginTop: '-70px', 
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}>
          <div style={{ 
            width: '134px', 
            height: '134px', 
            borderRadius: '50%', 
            border: `4px solid ${colors.background}`, 
            overflow: 'hidden',
            backgroundColor: '#333639'
          }}>
            <img 
              src="https://via.placeholder.com/400/1d9bf0/ffffff?text=Avatar" 
              alt="Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          
          <button style={{
            backgroundColor: 'transparent',
            border: `1px solid ${colors.textSecondary}`,
            color: colors.textMain,
            borderRadius: '999px',
            padding: '8px 16px',
            fontWeight: 'bold',
            fontSize: '15px',
            cursor: 'pointer',
            marginBottom: '12px'
          }}>
            Edit profile
          </button>
        </div>

        {/* Name and Handle */}
        <div style={{ marginBottom: '12px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '800' }}>Your Name</h2>
          <p style={{ margin: 0, color: colors.textSecondary, fontSize: '15px' }}>@yourhandle</p>
        </div>

        {/* Bio */}
        <p style={{ fontSize: '15px', lineHeight: '20px', marginBottom: '12px' }}>
          🌙 Exploring the dark side of the MERN stack. <br />
          📍 Cyberspace · 🔗 <span style={{ color: colors.blue }}>github.com</span> · 📅 Joined February 2026
        </p>

        {/* Followers/Following */}
        <div style={{ display: 'flex', gap: '20px', fontSize: '14px', paddingBottom: '16px' }}>
          <span style={{ color: colors.textSecondary }}><strong style={{ color: colors.textMain }}>452</strong> Following</span>
          <span style={{ color: colors.textSecondary }}><strong style={{ color: colors.textMain }}>1.2k</strong> Followers</span>
        </div>
      </div>

      {/* 4. Tabs */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${colors.border}` }}>
        {['Posts', 'Replies', 'Highlights', 'Media', 'Likes'].map((tab, index) => (
          <div key={tab} style={{
            flex: 1,
            textAlign: 'center',
            padding: '16px 0',
            fontSize: '15px',
            fontWeight: index === 0 ? 'bold' : '500',
            color: index === 0 ? colors.textMain : colors.textSecondary,
            cursor: 'pointer',
            position: 'relative'
          }}>
            {tab}
            {index === 0 && (
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '20%', 
                right: '20%', 
                height: '4px', 
                backgroundColor: colors.blue, 
                borderRadius: '99px' 
              }}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;
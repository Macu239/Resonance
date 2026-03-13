import React from 'react';

function UserPanel(props) {
    const { name, message, time, isActive } = props;
	return (
		<button style = {{ 
			display: 'flex',
            width: 'calc(100% - 24px)',
            textAlign: 'left',
            border: 'none',
            fontFamily: 'inherit',
			
			backgroundColor: isActive ? '#1A1A1E' : 'transparent',
			margin: '8px 12px',
			padding: '16px',
			borderRadius: '16px',
			display: 'flex',
			gap: '12px',
			cursor: 'pointer',
			overflow: 'hidden'
		}}>
			<div style = {{ 
				width: '48px',
				height: '48px',
				backgroundColor: '#3D3D42',
				borderRadius: '12px',
				flexShrink: 0
			}} />
			<div style = {{ 
				flex: 1,
				minWidth: 0,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center'
			}}>
				<div style = {{ 
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}>
				<span style = {{
					fontWeight: '600',
					color: '#FFFFFF',
					fontSize: '16px'
				}}>{name}</span>
				<span style = {{
					color: '#71767B',
					fontSize: '14px',
					flexShrink: 0
				}}>{time}</span>
				</div>
				<div style = {{
					color: '#71767B',
					fontSize: '14px',
					marginTop: '4px',
					whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
				}}>{message}</div>
			</div>
		</button>
  	)
}

export default UserPanel;
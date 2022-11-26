import React from 'react';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
  side: 'left' | 'right';
  style?: React.CSSProperties;
}

const IconButton: React.FC<Props> = (props) => {
  const iconStyles: React.CSSProperties = {
    fontSize: '1.3rem',
    paddingRight: props.side === 'left' && '0.6rem',
    paddingLeft: props.side === 'right' && '0.6rem',
    verticalAlign: 'center',
    display: 'flex',
  };

  return (
    <div
      style={{
        width: 'fit-content',
        fontWeight: '600',
        padding: '0.5rem',
        borderRadius: '0.2rem',
        verticalAlign: 'baseline',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        ...props.style,
      }}
      className="icon-button"
    >
      {props.side === 'left' && <div style={iconStyles}>{props.icon}</div>}
      <div>{props.children}</div>
      {props.side === 'right' && <div style={iconStyles}>{props.icon}</div>}
    </div>
  );
};

export default IconButton;

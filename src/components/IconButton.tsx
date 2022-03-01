import React from 'react';

interface Props {
  icon: Element;
  side: 'left' | 'right';
  style?: React.CSSProperties;
}

const IconButton: React.FC<Props> = (props) => {
  const iconStyles: React.CSSProperties = {
    fontSize: '1.7rem',
    paddingRight: props.side === 'left' && '0.6rem',
    paddingLeft: props.side === 'right' && '0.6rem',
    verticalAlign: 'center',
    display: 'flex',
  };

  return (
    <div
      style={{
        width: 'fit-content',
        height: '3rem',
        padding: '0.8rem',
        borderRadius: '0.2rem',
        verticalAlign: 'baseline',
        textAlign: 'center',
        ...props.style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

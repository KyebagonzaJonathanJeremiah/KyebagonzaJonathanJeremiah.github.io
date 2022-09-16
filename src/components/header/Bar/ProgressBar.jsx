import React from 'react'
import './progressBar.css';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 15,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        width: `${completed}%`,
        backgroundColor: bgcolor,
        height: '100%',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: '100'
    }
  return (
    <div className="containerStyles" style={containerStyles}>
        <div className="fillerStyles" style={fillerStyles}>
            <span className="labelStyles" style={labelStyles}>{`${completed}%`}</span>
        </div>
    </div>
  )
}

export default ProgressBar;

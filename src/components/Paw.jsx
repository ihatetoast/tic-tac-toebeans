import React from 'react'


 const Paw = ({className}) => {
  return (
    <div className={`leg-container ${className} `}>
      <div className="leg">
        <div className="paw-middle left"></div>
        <div className="paw-middle right"></div>
        <div className="paw">
            <span className="bean left-bean"></span>
            <span className="bean inner-left-bean"></span>
            <span className="bean inner-right-bean"></span>
            <span className="bean right-bean"></span>
            <span className="bottom-pad"></span>
        </div>
      </div>
    </div>
  )
}

// to become pure css paw shape with color themes

export default Paw;


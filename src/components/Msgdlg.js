import React from 'react';


let dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

export default function Dialog ({show, title, description, cancel})  {

    if(!show){
        return <></>;
    }


        return (
            <div style={dialogStyles}>
               <button onClick={cancel} className="Cancel" style={dialogCloseButtonStyles}> x </button>
                <div className ="dialog">
                    <div className="dialog-content">
                        <h2 className="title">Selected Student {title}</h2>
                            <p className="description">{description}</p>
                    </div>               
                </div>
            </div>
        );
    
}


import React from 'react';

const Error = ({ children, message }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: '1' }} >
            <h2 style={
                { fontSize: '2rem', fontWeight: 700 }
            }>{ message }</h2>
            { children }
        </div>
    );
};

export default Error;
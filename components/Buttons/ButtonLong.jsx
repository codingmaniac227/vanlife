import React from 'react';
import { ButtonContext } from '../../App'

const ButtonLong = ({ children, onClick }) => {
    const { blackLongButton, orangeLongButton } = React.useContext(ButtonContext);

    return (
        <>
            {orangeLongButton && (
                <button onClick={onClick} style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    textDecoration: 'none',
                    backgroundColor: '#FF8C38',
                    border: 'none',
                    width: '100%',
                    marginTop: '3.229rem',
                    marginBottom: '4.049rem',
                    paddingBlock: '.75rem',
                    color: 'white',
                    fontWeight: '700',
                    borderRadius: '0.313rem',
                    cursor: 'pointer',
                    transition: 'transform .1s ease-in-out',

                }}>
                    {children}
                </button>
            )}

            {blackLongButton && (
                <button onClick={onClick} style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    textDecoration: 'none',
                    backgroundColor: '#161616',
                    border: 'none',
                    width: '100%',
                    marginTop: '3.229rem',
                    marginBottom: '4.049rem',
                    paddingBlock: '.75rem',
                    color: 'white',
                    fontWeight: '700',
                    borderRadius: '0.313rem',
                    cursor: 'pointer',
                    transition: 'transform .1s ease-in-out',

                }}>
                    {children}
                </button>
            )}
        </>
    );
};

export default ButtonLong;

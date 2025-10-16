import React from 'react';
import {ButtonContext} from "../../App";

const ButtonMedium = ({ id }) => {
    const { data } = React.useContext(ButtonContext);
    const van = data.find((v) => v.id === id);

    if (!van) return null;



    return (
        <>
            {van.type === 'simple' && (
                <button style={
                    {
                        height: '2.118rem',
                        width: '5.357rem',
                        marginTop: '0.850rem',
                        borderRadius: '0.313rem',
                        backgroundColor: '#E17654',
                        borderStyle: 'none',
                        color: '#FFEAD0'
                    }
                }>
                    {van.type}
                </button>
            )}

            {van.type === 'rugged' && (
                <button style={
                    {
                        height: '2.118rem',
                        width: '5.357rem',
                        marginTop: '0.850rem',
                        borderRadius: '0.313rem',
                        backgroundColor: '#115E59',
                        borderStyle: 'none',
                        color: '#FFEAD0'
                    }
                }>
                    {van.type}
                </button>
            )}

            {van.type === 'luxury' && (
                <button style={
                    {
                        height: '2.118rem',
                        width: '5.357rem',
                        marginTop: '0.850rem',
                        borderRadius: '0.313rem',
                        backgroundColor: '#161616',
                        borderStyle: 'none',
                        color: '#FFEAD0'
                    }
                }>
                    {van.type}
                </button>
            )}
        </>
    );
};

export default ButtonMedium;
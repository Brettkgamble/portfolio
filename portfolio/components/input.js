import React from 'react';
import PropTypes from "prop-types";

export default function Input({id, name, label, placeholder,value, onChange, ...props}) {
    return (
        <div className="w-full mb-3">
            <label className="block text-lg" htmlFor={id}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                autoComplete="off"
                type="text"
                id={id}
                name={name}
                placeholder={placeholder}
                {...props}
                className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md
                focus:ring-2 focus:ring-purple-500"
            />
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: () => PropTypes.void
}


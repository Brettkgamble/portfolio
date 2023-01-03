import React from 'react';
import PropTypes from "prop-types";

export default function TextArea ({id, name, label, placeholder, ...props}) {
    return (
        <div className="w-full mb-3">
            <label className="block text-lg" htmlFor={id}>{label}</label>
            <textarea
                autoComplete="off"
                id={id}
                name={name}
                placeholder={placeholder}
                rows={5}
                style={{
                    resize: 'none'
                }}
                {...props}
                className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md
                focus:ring-2 focus:ring-purple-500"
            ></textarea>
        </div>
    )
}

TextArea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
}


import React from 'react'

const InputComponent = ({ label = "", name = "", type = "text", value, onChange, required }) => {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                    }}
                />
            </div>
        </div>
    )
}

export default InputComponent;

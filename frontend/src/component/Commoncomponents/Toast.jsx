import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, Server } from 'lucide-react';

const Toast = ({ id, message, type, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
   
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  // Styles based on type
  const styles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-500",
      text: "text-green-800",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-500",
      text: "text-red-800",
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-800",
      icon: <Server className="w-5 h-5 text-blue-500" />,
    },
  };

  const currentStyle = styles[type] || styles.info;

  return (
    <div
      className={`
        flex items-center w-full max-w-sm p-4 mb-3 text-gray-500 bg-white rounded-lg shadow-lg border-l-4 
        transition-all duration-300 ease-in-out transform
        ${currentStyle.bg} ${currentStyle.border}
        ${isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}
      `}
      role="alert"
    >
      <div className="inline-flex items-center justify-center ">
        {currentStyle.icon}
      </div>
      <div className={`ml-3 text-sm font-medium ${currentStyle.text}`}>
        {message}
      </div>
      <button
        type="button"
        className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 text-gray-500 hover:text-gray-900 transition-colors`}
        onClick={handleClose}
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
export default Toast;
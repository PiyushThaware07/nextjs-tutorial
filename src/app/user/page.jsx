"use client"
import Script from 'next/script';
import React from 'react';

export default function User() {
    return (
        <div>
            {/* Load the external script for location functionality */}
            <Script 
                src="./location.js" 
                strategy="lazyOnload" // Ensures script is loaded lazily after the page is interactive
                onLoad={() => console.log("Location script loaded successfully")} 
            />

            <button className="bg-indigo-600 text-white px-5 py-2 rounded">
                Get Location
            </button>
        </div>
    );
}

'use client';

import { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';


export default function Home() {
  const [dotColor, setDotColor] = useState('#FF8000');  
  const [bgColor, setBgColor] = useState('#4A4A4A');    

  const apiUrl = `/api/generate?dotColor=${dotColor.slice(1)}&bgColor=${bgColor.slice(1)}`;

  return (
    <div style={{ 
      background: '#111', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '40px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: dotColor }}>2026 Dots Wallpaper Customizer</h1>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '60px', 
        margin: '40px 0',
        flexWrap: 'wrap'
      }}>
        {/* Dots Color Picker */}
        <div>
          <h3>Dots Color (Orange default)</h3>
          <HexColorPicker 
            color={dotColor} 
            onChange={setDotColor} 
            style={{ width: '220px', height: '220px' }} 
          />
          <div style={{ marginTop: '15px' }}>
            <HexColorInput 
              color={dotColor} 
              onChange={setDotColor} 
              prefixed 
              style={{ 
                width: '120px', 
                padding: '8px', 
                fontSize: '16px', 
                textAlign: 'center',
                background: '#222',
                color: '#fff',
                border: '1px solid #444',
                borderRadius: '6px'
              }} 
            />
          </div>
        </div>

        {/* Background Color Picker */}
        <div>
          <h3>Background Color (Grey default)</h3>
          <HexColorPicker 
            color={bgColor} 
            onChange={setBgColor} 
            style={{ width: '220px', height: '220px' }} 
          />
          <div style={{ marginTop: '15px' }}>
            <HexColorInput 
              color={bgColor} 
              onChange={setBgColor} 
              prefixed 
              style={{ 
                width: '120px', 
                padding: '8px', 
                fontSize: '16px', 
                textAlign: 'center',
                background: '#222',
                color: '#fff',
                border: '1px solid #444',
                borderRadius: '6px'
              }} 
            />
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto 60px auto',
        padding: '30px',
        background: '#1a1a1a',
        borderRadius: '16px',
        border: '1px solid #333'
      }}>
        <h2 style={{ marginBottom: '25px', fontSize: '1.6em' }}>
          Generated API URL for Shortcuts:</h2>
        <code style={{ 
          display: 'block',
          background: '#222', 
          padding: '18px 24px', 
          borderRadius: '12px', 
          fontSize: '1.15em',
          wordBreak: 'break-all',
          marginBottom: '20px',
          color: '#eee'
        }}>
          {apiUrl}
        </code>
        <p style={{ 
          fontSize: '1.05em', 
          color: '#ccc', 
          lineHeight: '1.6',
          marginBottom: '15px'
        }}>
          Copy this URL then Paste into Shortcuts to Get Contents of URL
        </p>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2>Preview Wallpaper</h2>
        <a 
          href={apiUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            marginTop: '15px',
            padding: '12px 30px',
            background: dotColor,
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          Open Full PNG Preview →
        </a>
      </div>

      <p style={{ marginTop: '60px', color: '#888', fontSize: '0.9em' }}>
        Changes are live — pick your perfect vibe! 🧡
      </p>
    </div>
  );
}
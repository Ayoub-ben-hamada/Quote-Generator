import './App.css'
import React, { useState } from 'react';

function QuoteGenerator() {

    const [bgColor, setBgColor] = useState('#4f46e5');

  function getRandomColor() {
    const colors = ['#4f46e5', '#4338ca', '#16a34a', '#dc2626', '#ea580c', '#0ea5e9', '#9333ea'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function handleHover() {
    const newColor = getRandomColor();
    setBgColor(newColor);
  }

    const quotes = [
        "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "It always seems impossible until it’s done. - Nelson Mandela",
        "I am not afraid... I was born to do this. - Joan of Arc",
        "Believe you can and you’re halfway there. - Theodore Roosevelt","The only way to do great work is to love what you do.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "In the middle of every difficulty lies opportunity.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Believe you can and you're halfway there.",
        "Dream big and dare to fail.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Start where you are. Use what you have. Do what you can.",
        "It always seems impossible until it’s done.",
        "You miss 100% of the shots you don’t take.",
        "Act as if what you do makes a difference. It does.",
        "Everything you’ve ever wanted is on the other side of fear.",
        "Work hard in silence, let success make the noise.",
        "Push yourself, because no one else is going to do it for you."
    ];

    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    function generatorQuote(){

       const random_index = Math.floor(Math.random() * quotes.length);
       setCurrentQuote(quotes[random_index]);
    }
    return (
        <div className="quote-generator" style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Quote Generator</h1>
            <p style={{ fontStyle: 'italic', margin: '20px' }}>{currentQuote}</p>
            <button onClick={generatorQuote} style={{
            backgroundColor: bgColor,
            color: 'white',
            padding: '12px 25px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',}}
            onMouseEnter={handleHover} onMouseLeave={handleHover} ></button>
        </div>
    )
}
export default QuoteGenerator;
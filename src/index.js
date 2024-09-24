import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







// // ux ui pages/index.js
// import { useState, useEffect } from 'react'
// import { supabase } from '../lib/supabaseClient'
// import Link from 'next/link'

// export default function HomePage() {
//   const [session, setSession] = useState(null)

//   useEffect(() => {
//     const session = supabase.auth.session()
//     setSession(session)

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })
//   }, [])

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//   }

//   return (
//     <div className="homepage">
//       {/* Header */}
//       <header className="header">
//         <nav className="menu">
//           <a href="#" className="menu-link">Menu</a>
//         </nav>
//         <div className="auth">
//           {session ? (
//             <button className="logout-btn" onClick={handleSignOut}>
//               Log Out
//             </button>
//           ) : (
//             <Link href="/login">
//               <a className="login-btn">Log In</a>
//             </Link>
//           )}
//         </div>
//       </header>

//       {/* Title Section */}
//       <div className="hero-section">
//         <h1>The Innovation Collective</h1>
//         <h2>Unite Locally, Connect Globally</h2>
//       </div>

//       {/* Hobbies Section */}
//       <div className="hobbies-section">
//         <h3>Explore Hobbies:</h3>
//         <div className="hobbies-buttons">
//           <Link href="/hobbies/cooking">
//             <a className="hobby-button">Cooking</a>
//           </Link>
//           <Link href="/hobbies/sports">
//             <a className="hobby-button">Sports</a>
//           </Link>
//           <Link href="/hobbies/art">
//             <a className="hobby-button">Art</a>
//           </Link>
//           <Link href="/hobbies/music">
//             <a className="hobby-button">Music</a>
//           </Link>
//         </div>
//       </div>

//       {/* Chat/Messages Section */}
//       <div className="chat-section">
//         <h3>Messages/Chat</h3>
//         {session ? (
//           <Link href="/chat">
//             <a className="chat-button">Open Chat</a>
//           </Link>
//         ) : (
//           <p>Please log in to access messages and chat.</p>
//         )}
//       </div>
//     </div>
//   )
// }
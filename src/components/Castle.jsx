import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import ProCard from './ProCard'
import './Castle.css' 

// --- 1. IMPORT BACKGROUND & DEMONS (Existing) ---
import castleBg from '../assets/castle_bg.jpg' 
import muzanImg from '../assets/muzan2.jpg'
import kokushiboImg from '../assets/kokushibo2.jpg'

// --- 2. IMPORT THE NEW IMAGES ---
import tanjiroImg from '../assets/tanjiro.jpg'
import zenitsuImg from '../assets/zenitsu.jpg'
import inosukeImg from '../assets/inosuke.jpg'
import rengokuImg from '../assets/rengoku.jpg'

// --- NEW DEMON IMPORTS ---
import domaImg from '../assets/doma.png'
import akazaImg from '../assets/akaza.jpg'
import hantenguImg from '../assets/hantengu.jpg'
import nakimeImg from '../assets/nakime2.jpg'
import gyokkoImg from '../assets/gyokko.jpg'
import dakiImg from '../assets/daki.png'
import gyutaroImg from '../assets/gyutaro.png'
import kaigakuImg from '../assets/kaigaku.jpg'
import enmuImg from '../assets/enmu.png'
import ruiImg from '../assets/rui.png'
import tamayoImg from '../assets/tamayo1.jpg'
import yushiroImg from '../assets/yushiro.jpg'
// --- HASHIRA IMPORTS ---
import giyuImg from '../assets/giyu.jpg'
import shinobuImg from '../assets/shinobu.jpg'
import tengenImg from '../assets/tengen.jpg'
import muichiroImg from '../assets/muichiro.jpg'
import mitsuriImg from '../assets/mitsuri.jpg'
import obanaiImg from '../assets/obanai.jpg'
import sanemiImg from '../assets/sanemi.jpg'
import gyomeiImg from '../assets/gyomei.jpg'

// --- NEW ADDITIONS ---
import nezukoImg from '../assets/nezuko.jpg'
import kagayaImg from '../assets/kagaya.png'
import kanaoImg from '../assets/kanao.jpg'
import urokodakiImg from '../assets/urokodaki.jpg'

const Castle = () => {
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState("");

  // --- 3. CHARACTER LIST ---
  const characters = [
    // --- MAIN SQUAD ---
    { id: 1, name: "Tanjiro Kamado", role: "Sun Breathing ☀️", desc: "A kind-hearted boy with a hard head and a burning resolve.", color: "#e74c3c", type: "slayer", img: tanjiroImg },
    { id: 2, name: "Zenitsu Agatsuma", role: "Thunder Breathing ⚡", desc: "Cowardly while awake, but a god of speed when asleep.", color: "#f1c40f", type: "slayer", img: zenitsuImg },
    { id: 3, name: "Inosuke Hashibira", role: "Beast Breathing 🐗", desc: "A dual-wielding wild man raised by boars. Comin' through!", color: "#3498db", type: "slayer", img: inosukeImg },
    {
      id: 4, 
      name: "Kanao Tsuyuri",
      role: "Flower Breathing 🌸",
      desc: "Shinobu's Tsuguko. A quiet girl with keen eyes who flips a coin to decide her actions.",
      color: "#fd13d6ff",
      type: "slayer",
      img: kanaoImg
    },
    
    // --- THE HASHIRAS ---
    // ... inside characters array ...
    
    // Put Kagaya at the very top (before Tanjiro) or with Hashiras
    { 
      id: 99, 
      name: "Kagaya Ubuyashiki", 
      role: "Oyakata-sama 🌸", 
      desc: "The leader of the Demon Slayer Corps. His voice soothes the soul.", 
      color: "#a55ac3ff", 
      type: "slayer", 
      img: kagayaImg 
    },
    // Put Nezuko after Tanjiro/Inosuke
    { 
      id: 401, 
      name: "Nezuko Kamado", 
      role: "The Chosen Demon 🎋", 
      desc: "Tanjiro's sister. She fights to protect humans and sleeps to recover.", 
      color: "#ff9ff3", 
      type: "demon", // She gets the Demon badge but lives in the heroes list
      img: nezukoImg 
    },
    { id: 4, name: "Kyojuro Rengoku", role: "Flame Hashira 🔥", desc: "Set your heart ablaze! A warrior with unwavering spirit.", color: "#fb780dff", type: "slayer", img: rengokuImg },
    { id: 5, name: "Giyu Tomioka", role: "Water Hashira 🌊", desc: "Calm and stoic. He believes he is unworthy, yet stands strong.", color: "#2980b9", type: "slayer", img: giyuImg },
    { id: 6, name: "Shinobu Kocho", role: "Insect Hashira 🦋", desc: "Lacks physical strength to cut heads, so she uses lethal poisons.", color: "#9b59b6", type: "slayer", img: shinobuImg },
    { id: 7, name: "Tengen Uzui", role: "Sound Hashira 🎵", desc: "The flashiest ninja alive. Everything he does must be flamboyant!", color: "#d35400", type: "slayer", img: tengenImg },
    { id: 8, name: "Muichiro Tokito", role: "Mist Hashira 🌫️", desc: "A prodigy who forgets things easily, but never forgets how to kill demons.", color: "#1abc9c", type: "slayer", img: muichiroImg },
    { id: 9, name: "Mitsuri Kanroji", role: "Love Hashira 💖", desc: "Possesses muscle density 8x that of a normal human. Seeking a husband!", color: "#fd79a8", type: "slayer", img: mitsuriImg },
    { id: 10, name: "Obanai Iguro", role: "Serpent Hashira 🐍", desc: "Strict and harsh, with a snake named Kaburamaru always around his neck.", color: "#ecf0f1", type: "slayer", img: obanaiImg },
    { id: 11, name: "Sanemi Shinazugawa", role: "Wind Hashira 🌪️", desc: "Aggressive and scarred. His blood is intoxicating to demons.", color: "#2ecc71", type: "slayer", img: sanemiImg },
    { id: 12, name: "Gyomei Himejima", role: "Stone Hashira 📿", desc: "The strongest Hashira. A blind giant who prays before crushing heads.", color: "#95a5a6", type: "slayer", img: gyomeiImg }
  ];

  // --- DEMON LIST ---
  const demons = [
// ... inside demons array ...

    
    
    { id: 101, name: "Muzan Kibutsuji", role: "Demon King 🩸", desc: "The progenitor of all demons. Ruthless, eternal, and fears only the sun.", color: "#c0392b", type: "demon", img: muzanImg },
    { id: 102, name: "Kokushibo", role: "Upper Rank One 🌙", desc: "The strongest swordsman. Brother of Yoriichi. Uses Moon Breathing.", color: "#f7f6f7ff", type: "demon", img: kokushiboImg },
    { id: 103, name: "Doma", role: "Upper Rank Two ❄️", desc: "A soulless cult leader who devours women. Uses lethal Cryokinesis.", color: "#7ec9fbff", type: "demon", img: domaImg },
    { id: 104, name: "Akaza", role: "Upper Rank Three 👊", desc: "Respects the strong, despises the weak. A martial arts master.", color: "#2b1cf6ff", type: "demon", img: akazaImg },
    { id: 105, name: "Hantengu", role: "Upper Rank Four 👺", desc: "A coward who splits into powerful clones representing his emotions.", color: "#D4AF37", type: "demon", img: hantenguImg },
    { id: 106, name: "Nakime", role: "New Upper Rank Four 🏯", desc: "The Biwa Woman. She controls the layout of the Infinite Castle.", color: "#2c3e50", type: "demon", img: nakimeImg },
    { id: 107, name: "Gyokko", role: "Upper Rank Five 🏺", desc: "Obsessed with art and pots. Can teleport between vases.", color: "#16a085", type: "demon", img: gyokkoImg },
    { id: 108, name: "Gyutaro", role: "Upper Rank Six (True) 💀", desc: "Wields poison sickles. Fueled by envy and hatred for the beautiful.", color: "#41b527ff", type: "demon", img: gyutaroImg },
    { id: 109, name: "Daki", role: "Upper Rank Six 👘", desc: "A beautiful but cruel oiran who traps victims in her Obi sashes.", color: "#f90bbdff", type: "demon", img: dakiImg },
    { id: 110, name: "Kaigaku", role: "New Upper Rank Six ⚡", desc: "Zenitsu's former senior. A traitor who uses Black Thunder Breathing.", color: "#ffe711ff", type: "demon", img: kaigakuImg },
    { id: 111, name: "Enmu", role: "Lower Rank One 🚂", desc: "Enjoyed showing people nightmares. Fused with the Mugen Train.", color: "#9b59b6", type: "demon", img: enmuImg },

    { 
      id: 201, 
      name: "Tamayo", 
      role: "Skilled Doctor 💉", 
      desc: "A demon who broke Muzan's curse. Dedicated to destroying him.", 
      color: "#8e44ad", 
      type: "demon", 
      img: tamayoImg 
    },
    { 
      id: 202, 
      name: "Yushiro", 
      role: "Tamayo's Assistant 😡", 
      desc: "Created by Tamayo. He only cares about her and hates everyone else.", 
      color: "#2ecc71", 
      type: "demon", 
      img: yushiroImg 
    },
    { 
      id: 203, 
      name: "Rui", 
      role: "Lower Rank Five 🕸️", 
      desc: "Obsessed with family bonds. Uses razor-sharp threads to slice victims.", 
      color: "#dcdde1", 
      type: "demon", 
      img: ruiImg 
    },
    {
      id: 99, 
      name: "Sakonji Urokodaki",
      role: "Former Water Hashira 👺",
      desc: "Tanjiro's master who wears a goblin mask. He taught Tanjiro the Water Breathing technique.",
      color: "#3498db", // Water Blue
      type: "slayer",
      img: urokodakiImg
    }
  ];

  const allCharacters = [...characters, ...demons];

  return (
    <div 
      className="castle-page"
      style={{ backgroundImage: `url(${castleBg})` }}
    >
      <div className="content-container">
        
        {/* EXIT BUTTON */}
        <button 
          onClick={() => navigate('/')} 
          style={{
            position: 'absolute', top: '20px', left: '20px', background: 'transparent',
            border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '10px 20px',
            cursor: 'pointer', fontSize: '0.9rem', letterSpacing: '2px', transition: '0.3s'
          }}
          onMouseOver={(e) => e.target.style.borderColor = 'white'}
          onMouseOut={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
        >
          ← EXIT CASTLE
        </button>

        <div className="castle-header">
          <h1>THE INFINITE ARCHIVES</h1>
          <p>Search the records of the Demon Slayer Corps</p>
        </div>

        <div className="search-section">
          <input 
            type="text" 
            placeholder="Search for a Slayer or Demon..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid-container">
          {allCharacters
            .filter(char => char.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(char => (
              <ProCard 
                key={char.id}
                name={char.name}
                role={char.role}
                description={char.desc}
                img={char.img}
                color={char.color}
                type={char.type}
              />
            ))
          }
        </div>

{/* --- FOOTER START --- */}
        <footer className="castle-footer">
          <div className="footer-container">
            
            {/* MAIN ROW (Everything is now in one row) */}
            <div className="footer-top">
              
              {/* 1. BRAND (Left Side) */}
              <div className="footer-brand">
                <div className="footer-logo">
                  <h3>⼕ INFINITE ARCHIVES</h3>
                </div>
                <p className="footer-tagline">
                  A comprehensive database for the Demon Slayer Corps, documenting humanity's greatest heroes and darkest threats.
                </p>
                
                {/* SOCIAL ICONS */}
                <div className="social-icons-clean">
                  {/* INSTAGRAM */}
                  <a href="https://instagram.com/rishux_98" target="_blank" rel="noreferrer" className="social-icon-link">
                    <span className="social-id">rishux_98</span>
                    <svg className="social-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* GITHUB */}
                  <a href="https://github.com/rishux98" target="_blank" rel="noreferrer" className="social-icon-link">
                    <span className="social-id">rishux98</span>
                    <svg className="social-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>

                  {/* EMAIL */}
                  <a href="mailto:rishavraj74799@gmail.com" className="social-icon-link">
                    <span className="social-id">rishavraj74799@gmail.com</span>
                    <svg className="social-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>Email</title>
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  
                  {/* LINKEDIN */}
                  <a href="https://linkedin.com/in/rishav-raj-242303389" target="_blank" rel="noreferrer" className="social-icon-link">
                    <span className="social-id">/rishav-raj-242303389</span>
                    <svg className="social-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>LinkedIn</title>
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* 2. NAVIGATION LINKS */}
              <div className="footer-links-column">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="/">Home Portal</a></li>
                  <li><a href="#">Slayers</a></li>
                  <li><a href="#">Demons</a></li>
                </ul>
              </div>

          
              {/* 5. CREDITS (MOVED HERE TO THE RIGHT SIDE) */}
              <div className="footer-credits-side">
                <p className="forged-by">Forged By Rishav Raj</p>
                <p className="made-in">Made in NIT Rourkela with Enthusiasm 💖</p>
                <p className="copyright-text">
                  © {new Date().getFullYear()} Infinite Archives. Fan project.
                </p>
              </div>
            </div>

          </div>
        </footer>
        {/* --- FOOTER END --- */}

      </div>
    </div>
  )
}

export default Castle
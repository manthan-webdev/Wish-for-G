import {useState} from 'react';
export default function Diya({lit=true,onToggle,size=240}){
  const [puff,setPuff]=useState(0);
  const svg=(<svg viewBox="0 0 200 170" width={size} height={size*.85} aria-hidden="true">
    <defs><radialGradient id="halo"><stop offset="0" stopColor="#FFB65C" stopOpacity=".7"/><stop offset="1" stopColor="#FFB65C" stopOpacity="0"/></radialGradient>
    <linearGradient id="gd" x1="0" x2="1"><stop offset="0" stopColor="#D8A95B"/><stop offset=".5" stopColor="#F4D79B"/><stop offset="1" stopColor="#B9843A"/></linearGradient>
    <radialGradient id="fl" cx=".5" cy=".7"><stop offset="0" stopColor="#FFF4E3"/><stop offset=".5" stopColor="#FFB65C"/><stop offset="1" stopColor="#E0641C"/></radialGradient></defs>
    <circle cx="100" cy="62" r="80" fill="url(#halo)" style={{opacity:lit?1:0,transition:'opacity .6s'}}/>
    <path d="M18 90 Q100 72 182 90 Q172 142 100 148 Q28 142 18 90Z" fill="url(#gd)"/>
    <ellipse cx="100" cy="88" rx="82" ry="12" fill="#7a4a17"/><ellipse cx="100" cy="88" rx="82" ry="12" fill="none" stroke="#F4D79B" strokeWidth="2"/>
    <path d="M40 112 Q100 128 160 112" stroke="#7a4a17" strokeWidth="2" fill="none"/><circle cx="100" cy="124" r="4" fill="#7a4a17"/>
    <rect x="97" y="76" width="6" height="10" rx="2" fill="#3a2410"/>
    <g className={`flame ${lit?'on':''}`}><path d="M100 24 C122 50 122 72 100 80 C78 72 78 50 100 24Z" fill="url(#fl)"/></g>
    {puff>0&&!lit&&<path key={puff} className="smoke" d="M100 74 C90 58 112 48 100 30 C92 18 104 10 100 0" stroke="#d8c8b7" strokeWidth="3" fill="none" strokeLinecap="round"/>}
  </svg>);
  if(!onToggle)return <div className="diya">{svg}</div>;
  return <div className="diya"><button className="diya-btn" aria-pressed={lit} aria-label={lit?'Blow out the diya':'Light the diya'} onClick={()=>{if(lit)setPuff(p=>p+1);onToggle()}}>{svg}</button>
    <p className="hint">{lit?'Tap the diya to blow it out':'Tap to light it again'}</p></div>;
}

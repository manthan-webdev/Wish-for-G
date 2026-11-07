import {useRef,useState} from 'react';
export default function Hamper({btn,onOpened}){
  const [st,setSt]=useState('closed'),busy=useRef(false);
  const open=()=>{if(busy.current)return;busy.current=true;setSt('opening');setTimeout(()=>{setSt('open');onOpened()},2200)};
  return <div className="hamper-wrap"><svg className={`hamper ${st}`} viewBox="0 0 400 320" role="img" aria-label="Diwali gift hamper">
    <ellipse cx="200" cy="300" rx="170" ry="14" fill="#000" opacity=".35"/>
    <circle className="hglow" cx="200" cy="150" r="140" fill="#FFB65C"/>
    <g className="items">
      <g><rect x="50" y="130" width="100" height="50" rx="4" fill="#5b2a6e" stroke="#F4D79B" strokeWidth="2"/>{[0,1,2].map(i=><polygon key={i} points={`${68+i*28},155 ${80+i*28},141 ${92+i*28},155 ${80+i*28},169`} fill="#F4E8C8" stroke="#D8A95B"/>)}</g>
      <g fill="#E8962E" stroke="#B8651A">{[[185,160,17],[212,150,17],[205,174,16]].map(([a,b,r],i)=><circle key={i} cx={a} cy={b} r={r}/>)}</g>
      <g><path d="M245 150 Q275 190 305 150Z" fill="#D8A95B"/>{[[258,148],[275,142],[292,148]].map(([a,b],i)=><circle key={i} cx={a} cy={b} r="10" fill="#5a2412"/>)}</g>
      <g transform="rotate(-12 100 120)"><rect x="70" y="95" width="46" height="30" rx="3" fill="#4a2a1a" stroke="#F4D79B"/><rect x="82" y="95" width="6" height="30" fill="#F4D79B"/></g>
      <g><rect x="150" y="105" width="38" height="34" fill="#9b1d3a"/><rect x="166" y="105" width="6" height="34" fill="#F4D79B"/><rect x="150" y="119" width="38" height="6" fill="#F4D79B"/></g>
      <g transform="rotate(10 300 110)"><rect x="270" y="88" width="46" height="34" rx="3" fill="#C0392B" stroke="#F4D79B"/><polygon points="293,96 296,105 305,105 298,110 301,118 293,113 285,118 288,110 281,105 290,105" fill="#F4D79B"/></g>
      <g transform="rotate(8 230 100)"><rect x="205" y="82" width="48" height="34" fill="#FFF4E3"/><path d="M215 99h28" stroke="#D8A95B" strokeWidth="2"/></g>
      {[[120,150],[335,160]].map(([a,b],i)=><g key={i}><path d={`M${a-14} ${b} Q${a} ${b+14} ${a+14} ${b}Z`} fill="#D8A95B"/><path d={`M${a} ${b-16} C${a+8} ${b-6} ${a+8} ${b-2} ${a} ${b}C${a-8} ${b-2} ${a-8} ${b-6} ${a} ${b-16}Z`} fill="#FFB65C"/></g>)}
    </g>
    <g className="sparkles" fill="#FFF4E3">{[[90,70],[200,40],[310,70],[150,50],[260,55]].map(([a,b],i)=><circle key={i} cx={a} cy={b} r="3" style={{animationDelay:i*.2+'s'}}/>)}</g>
    <rect x="50" y="185" width="300" height="105" rx="10" fill="#5a1a3e"/><rect x="50" y="185" width="300" height="12" fill="#7a2650"/>
    <rect x="188" y="185" width="24" height="105" fill="#F4D79B"/><rect x="50" y="228" width="300" height="14" fill="#D8A95B" opacity=".85"/>
    <g className="lid"><rect x="40" y="150" width="320" height="40" rx="8" fill="#6d2349" stroke="#F4D79B" strokeWidth="2"/><rect x="188" y="150" width="24" height="40" fill="#F4D79B"/>
      <g className="bow"><path d="M200 150 C150 100 140 150 200 150 C260 150 250 100 200 150Z" fill="#F4D79B" stroke="#B9843A" strokeWidth="2"/><circle cx="200" cy="150" r="9" fill="#D8A95B"/></g></g>
  </svg>
  {st==='closed'&&<button className="gold-btn" onClick={open}>{btn}</button>}</div>;
}

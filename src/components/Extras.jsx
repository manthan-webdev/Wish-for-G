import {useEffect,useMemo,useRef,useState} from 'react';
const rnd=(a,b)=>a+Math.random()*(b-a);
export const Mandala=({heart,size=300})=><svg className="mandala" width={size} height={size} viewBox="-100 -100 200 200" aria-hidden="true">
  <g fill="none" stroke="#D8A95B" strokeWidth=".8">{[90,72,54,36].map(r=><circle key={r} r={r} strokeDasharray={r%2?'2 3':'0'}/>)}
  {Array.from({length:16}).map((_,i)=><path key={i} transform={`rotate(${i*22.5})`} d="M0 -36 Q10 -62 0 -88 Q-10 -62 0 -36Z"/>)}</g>
  {heart&&<path className="heart" d="M0 30 C-50 -5 -30 -40 0 -18 C30 -40 50 -5 0 30Z" fill="#FFB65C" opacity=".85"/>}</svg>;
export const Particles=()=>{const d=useMemo(()=>Array.from({length:26},()=>({l:rnd(0,100),s:rnd(2,5),t:rnd(10,22),dl:-rnd(0,20)})),[]);
  return <div className="particles" aria-hidden="true">{d.map((p,i)=><i key={i} style={{left:p.l+'%',width:p.s,height:p.s,animationDuration:p.t+'s',animationDelay:p.dl+'s'}}/>)}</div>};
export const HangingLanterns=()=><div className="hang" aria-hidden="true">{[8,88].map((l,i)=><div key={i} className="hl" style={{left:l+'%',animationDelay:i*.8+'s'}}><span/><b/></div>)}</div>;
export const SkyLanterns=()=>{const d=useMemo(()=>Array.from({length:16},()=>({x:rnd(0,95),s:rnd(26,64),d:rnd(14,30),dl:-rnd(0,28),dx:rnd(-60,60),o:rnd(.6,1)})),[]);
  return <div className="sky" aria-hidden="true">{d.map((l,i)=><i key={i} className="sl" style={{'--x':l.x+'%','--s':l.s+'px','--d':l.d+'s','--dl':l.dl+'s','--dx':l.dx+'px',opacity:l.o}}/>)}
  <div className="candles">{Array.from({length:7}).map((_,i)=><u key={i} style={{left:8+i*13+'%',animationDelay:i*.7+'s'}}><em/></u>)}</div>
  <svg className="skyline" viewBox="0 0 400 60" preserveAspectRatio="none"><path d="M0 60V40h20V25l8-10 8 10v15h25V30h18V18l10-12 10 12v12h20V42h30V28h16v-8l8-8 8 8v8h20V38h30V22l10-14 10 14v18h30V30h20v30Z" fill="#1a0f2e"/></svg></div>};
export function Photos({photos,captions}){
  const [bad,setBad]=useState({}),[sel,setSel]=useState(null),btn=useRef();
  useEffect(()=>{if(sel===null)return;const k=e=>e.key==='Escape'&&setSel(null);addEventListener('keydown',k);btn.current?.focus();return()=>removeEventListener('keydown',k)},[sel]);
  const Img=({i,big})=>photos[i]&&!bad[i]?<img src={photos[i]} alt={captions[i]||`Memory ${i+1}`} onError={()=>setBad(b=>({...b,[i]:1}))} style={{objectFit:big?'contain':'cover'}}/>:<div className="ph">Memory 0{i+1}</div>;
  return <><div className="grid">{[0,1,2,3].map(i=><button key={i} className="photo" onClick={()=>setSel(i)} aria-label={`Open ${captions[i]||'memory '+(i+1)}`}><div className="pimg"><Img i={i}/></div><span>{captions[i]}</span></button>)}</div>
  {sel!==null&&<div className="lb" role="dialog" aria-modal="true" aria-label="Photo" onClick={()=>setSel(null)}><div className="lbin" onClick={e=>e.stopPropagation()}><div className="lbimg"><Img i={sel} big/></div><p>{captions[sel]}</p><button ref={btn} className="gold-btn" onClick={()=>setSel(null)}>Close</button></div></div>}</>;
}
export function Envelope({letter}){
  const [open,setOpen]=useState(false);
  return <div className="env-wrap"><div className={`env ${open?'open':''}`}><div className="flap"/><button className="seal" aria-label={open?'Close the letter':'Open the letter'} aria-expanded={open} onClick={()=>setOpen(o=>!o)}>{open?'×':'✦'}</button></div>
  {open&&<article className="letter"><p>{letter.greeting}</p><p>{letter.content}</p><p className="sig">{letter.signature}</p></article>}
  {!open&&<p className="hint">Tap the seal to open</p>}</div>;
}
export function Music({src}){
  const a=useRef(),[on,setOn]=useState(false),[err,setErr]=useState(false);
  if(!src||err)return null;
  return <><audio ref={a} src={src} loop onError={()=>setErr(true)}/><button className="music" aria-pressed={on} aria-label={on?'Pause music':'Play music'} onClick={()=>{on?a.current.pause():a.current.play().catch(()=>setErr(true));setOn(!on)}}>{on?'❚❚':'♪'}</button></>;
}

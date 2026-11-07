import {useEffect,useRef} from 'react';
const COLS=['#F4D79B','#D8A95B','#FFB65C','#FFF4E3'];
export default function Fireworks({rate=1,burst=0}){
  const ref=useRef(),R=useRef(rate),api=useRef({});R.current=rate;
  useEffect(()=>{
    const c=ref.current,x=c.getContext('2d'),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W,H,rk=[],ps=[],last=performance.now(),nx=.3,raf,timers=[];
    const size=()=>{const d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)};
    size();addEventListener('resize',size);
    const launch=()=>{if(ps.length>1400)return;const z=Math.floor(Math.random()*3);
      const tx=([0,.3,.7][z]+Math.random()*[.3,.4,.3][z])*W,ty=H*(.08+Math.random()*.6),t=.8+Math.random()*.4,sx=tx+(Math.random()-.5)*80;
      rk.push({x:sx,y:H,vx:(tx-sx)/t,vy:(ty-H)/t,ty});};
    const boom=(px,py)=>{const col=COLS[Math.floor(Math.random()*4)],n=Math.round((W<600?36:70)*(.7+Math.random()*.7)),sp=90+Math.random()*130;
      for(let i=0;i<n;i++){const a=Math.PI*2*i/n+Math.random()*.2,s=sp*(.5+Math.random()*.5);
        ps.push({x:px,y:py,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,d:.5+Math.random()*.5,c:Math.random()<.7?col:'#FFF4E3',tw:Math.random()*6});}};
    api.current.burst=n=>{for(let i=0;i<n;i++)timers.push(setTimeout(launch,i*280));};
    const loop=now=>{raf=requestAnimationFrame(loop);const dt=Math.min((now-last)/1000,.05);last=now;
      x.clearRect(0,0,W,H);if(document.hidden)return;
      nx-=dt;if(nx<=0&&!reduce&&R.current>0){launch();nx=(.5+Math.random()*1.2)/R.current;}
      x.globalCompositeOperation='lighter';
      rk=rk.filter(r=>{r.x+=r.vx*dt;r.y+=r.vy*dt;x.fillStyle='#FFF4E3';x.globalAlpha=.9;x.fillRect(r.x-1,r.y,2,10);
        if(r.y<=r.ty){boom(r.x,r.y);return false}return true});
      ps=ps.filter(p=>{p.vy+=80*dt;p.vx*=.992;p.x+=p.vx*dt;p.y+=p.vy*dt;p.l-=p.d*dt;if(p.l<=0)return false;
        x.globalAlpha=Math.max(0,p.l)*(.7+.3*Math.sin(p.tw+now*.02));x.fillStyle=p.c;x.beginPath();x.arc(p.x,p.y,1.6,0,6.3);x.fill();return true});
      x.globalAlpha=1;};
    raf=requestAnimationFrame(loop);
    return()=>{cancelAnimationFrame(raf);timers.forEach(clearTimeout);removeEventListener('resize',size)};
  },[]);
  useEffect(()=>{if(burst&&!matchMedia('(prefers-reduced-motion: reduce)').matches)api.current.burst?.(8)},[burst]);
  return <canvas ref={ref} className="fw" aria-hidden="true"/>;
}

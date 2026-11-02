import { useLayoutEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { MotionStyle } from 'motion/react';
import IcebergScene from './IcebergScene';

// Camera positions follow actual document landmarks, including expanded evidence cards.
// This keeps the water crossing aligned with the story at every viewport size.
export default function DiveScene({active}:{active:string}) {
  const {scrollY}=useScroll();
  const reduced=useReducedMotion();
  const [geometry,setGeometry]=useState({height:900,mobile:false,stops:[0,900,2800,3600,5000,5800,7400]});
  useLayoutEffect(()=>{
    const measure=()=>{
      const top=(id:string)=>{const el=document.getElementById(id);return el?el.getBoundingClientRect().top+window.scrollY:0;};
      const h=window.innerHeight;
      const stops=[0,top('artefacts'),top('water-crossing'),top('valeurs'),top('abyss-crossing'),top('presupposes'),top('dive-end')-h];
      setGeometry({height:h,mobile:window.innerWidth<=700,stops:stops.map((v,i)=>Math.max(v,i?stops[i-1]+1:0))});
    };
    measure();
    const observer=new ResizeObserver(measure);
    const story=document.getElementById('dive-journey');
    if(story)observer.observe(story);
    window.addEventListener('resize',measure);
    return()=>{observer.disconnect();window.removeEventListener('resize',measure);};
  },[]);
  const {height:h,mobile,stops}=geometry;
  const surfaceY=(mobile?.29:.20)*h;
  const surfaceScale=mobile?.42:.5;
  const y=useTransform(scrollY,stops,[surfaceY,surfaceY,.03*h,-1.35*h,-1.6*h,-2.15*h,-2.28*h]);
  const scale=useTransform(scrollY,stops,[surfaceScale,surfaceScale,.68,1,1.04,1.12,1.12]);
  const left=useTransform(scrollY,stops,[mobile?'88%':'69%','30%','37%','28%','28%','26%','26%']);
  const waterY=useTransform(()=>y.get()+h*3*(327/850)*scale.get());
  const darkness=useTransform(scrollY,stops,[0,0,.05,.55,.65,.9,.95]);
  const submergedOpacity=useTransform(scrollY,stops,[.04,.05,.4,.9,1,1,1]);
  const lightOpacity=useTransform(scrollY,stops,[0,0,.25,.6,.4,.12,.04]);
  const stage=active==='valeurs'?1:active==='presupposes'?2:0;
  const stillY=[surfaceY,-1.35*h,-2.15*h][stage];
  const stillScale=[surfaceScale,1,1.12][stage];
  return <div className="dive-backdrop" aria-hidden="true"><div className="dive-viewport">
    <div className="dive-sky"><div className="cloud cloud-one"/><div className="cloud cloud-two"/></div>
    <motion.div className="world-ocean" style={{y:reduced?stillY+h*3*(327/850)*stillScale:waterY}}><div className="ocean-skin"/><div className="ocean-ripples"/></motion.div>
    <motion.div className="dive-ice-position" style={{left:reduced?(stage?'28%':'65%'):left}}><motion.div className="dive-world" style={{y:reduced?stillY:y,scale:reduced?stillScale:scale,width:h*3*700/850,height:h*3,marginLeft:-h*1.5*700/850,'--submerged-opacity':reduced?(stage?1:.05):submergedOpacity} as MotionStyle}><IcebergScene active={stage}/></motion.div></motion.div>
    <motion.div className="ocean-rays" style={{opacity:lightOpacity}}/>
    <motion.div className="depth-shade" style={{opacity:reduced?[0,.55,.9][stage]:darkness}}/>
    <div className="dive-grain"/>
    <div className="dive-vignette"/>
    <div className="drifting-particles">{Array.from({length:22},(_,i)=><i key={i} style={{left:`${(i*43+9)%100}%`,top:`${(i*29+7)%100}%`,animationDelay:`-${i*1.7}s`,animationDuration:`${12+i%6*3}s`}}/>)}</div>
  </div></div>;
}

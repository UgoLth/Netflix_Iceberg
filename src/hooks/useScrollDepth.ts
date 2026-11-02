import { useEffect, useState } from 'react';
import { chapters } from '../content/netflix';
export function useScrollDepth() {
  const [active,setActive]=useState('surface');
  useEffect(()=>{
    let frame=0;
    const measure=()=>{
      frame=0;
      let current='surface';
      for(const chapter of chapters){
        const element=document.getElementById(chapter.id);
        if(element && element.getBoundingClientRect().top<=window.innerHeight*.46)current=chapter.id;
      }
      setActive(current);
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(measure);};
    measure();
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule);
    return()=>{window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);if(frame)cancelAnimationFrame(frame);};
  },[]);
  return active;
}

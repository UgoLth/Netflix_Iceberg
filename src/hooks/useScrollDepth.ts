import { useEffect, useState } from 'react';
import { chapters } from '../content/netflix';
export function useScrollDepth() {
  const [active,setActive]=useState('surface');
  useEffect(()=>{
    let frame=0;
    let current='surface';
    let positions:{id:string;top:number}[]=[];
    let threshold=0;
    const update=()=>{
      frame=0;
      let next='surface';
      const cursor=window.scrollY+threshold;
      for(const chapter of positions){
        if(chapter.top<=cursor)next=chapter.id;
      }
      if(next!==current){current=next;setActive(next);}
    };
    // Cache document coordinates only when layout changes, not on every scroll frame.
    const measure=()=>{
      if(frame){cancelAnimationFrame(frame);frame=0;}
      const scroll=window.scrollY;
      threshold=window.innerHeight*.46;
      positions=chapters.flatMap(chapter=>{
        const el=document.getElementById(chapter.id);
        return el?[{id:chapter.id,top:el.getBoundingClientRect().top+scroll}]:[];
      });
      update();
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
    measure();
    const observer=new ResizeObserver(measure);
    const main=document.querySelector('main');
    if(main)observer.observe(main);
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',measure);
    return()=>{observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',measure);if(frame)cancelAnimationFrame(frame);};
  },[]);
  return active;
}

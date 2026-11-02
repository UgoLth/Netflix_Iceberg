import { ArrowDown, Plus } from 'lucide-react';
const levels=[{id:'artefacts',title:'Les artefacts',detail:'Ce qui se voit',mark:'01'},{id:'valeurs',title:'Les valeurs',detail:'Ce qui est affiché',mark:'02'},{id:'presupposes',title:'Les présupposés',detail:'Ce que l’on peut inférer',mark:'03'}];
export default function DiveCompass({active}:{active:string}) {
 const index=levels.findIndex(l=>l.id===active);
 return <aside className={`dive-compass ${index<0?'at-horizon':''}`} aria-label="Les trois niveaux de la plongée"><p>ICEBERG CULTUREL <span>SCHEIN</span></p><div className="compass-track">{levels.map((l,i)=><a className={index===i?'current':''} key={l.id} href={`#${l.id}`} aria-current={index===i?'step':undefined}><span className="compass-mark">{l.mark}</span><span className="compass-word"><strong>{l.title}</strong><small>{l.detail}</small></span><Plus size={13}/></a>)}</div><div className="compass-foot"><ArrowDown size={14}/><span>LA PROFONDEUR EST UNE MÉTAPHORE,<br/>PAS UNE MESURE.</span></div></aside>;
}

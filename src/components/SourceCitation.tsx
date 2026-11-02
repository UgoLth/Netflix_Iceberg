import { ArrowUpRight } from 'lucide-react';
import { sources } from '../content/sources';
import type { SourceId } from '../content/sources';
export function SourceCitation({id}:{id:SourceId}) {const s=sources[id]; return <a className="source-link" href={s.url} target={id==='course'?undefined:'_blank'} rel="noreferrer">{s.author.split(' · ')[0]} · {s.date}<ArrowUpRight size={13}/><span className="sr-only"> — {s.title}</span></a>}
export function Caption({number,children,source}:{number:string;children:React.ReactNode;source?:SourceId}) {return <figcaption><span>FIG. {number}</span> {children}<small>Création originale pour ce projet, 2 novembre 2026{source && <> · d’après <SourceCitation id={source}/></>}</small></figcaption>}

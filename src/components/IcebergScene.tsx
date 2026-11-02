import { useId } from 'react';
export default function IcebergScene({labels=false,active=0}:{labels?:boolean;active?:number}) {
 const id=useId().replace(/:/g,'');
 return <svg className="iceberg-svg" viewBox="0 0 700 850" role="img" aria-label="Iceberg culturel : les artefacts au-dessus de l’eau, les valeurs et les présupposés en profondeur. Les proportions sont symboliques.">
 <defs><linearGradient id={`${id}ice`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f3ffff"/><stop offset=".45" stopColor="#a5d9e7"/><stop offset="1" stopColor="#447e9c"/></linearGradient><linearGradient id={`${id}deep`} x1="0" y1="0" x2=".6" y2="1"><stop stopColor="#91d2e2" stopOpacity=".86"/><stop offset="1" stopColor="#1d5876" stopOpacity=".32"/></linearGradient><filter id={`${id}glow`}><feGaussianBlur stdDeviation="18"/></filter></defs>
 <ellipse cx="350" cy="325" rx="278" ry="35" fill="#a3e7ee" opacity=".16" filter={`url(#${id}glow)`}/>
 <g className="ice-tip"><path d="M142 325 191 264 239 244 276 168 308 176 357 57 397 118 425 129 452 219 506 239 552 325Z" fill={`url(#${id}ice)`}/>
 <path d="m357 57-18 213 58-152Z" fill="#f5ffff"/><path d="m357 57 40 61 28 11-37 127-49 14Z" fill="#b8dfeb"/><path d="m276 168 32 8 31 94-101-26Z" fill="#e1f4f6"/><path d="m239 244 100 26-65 55H142l49-61Z" fill="#90bece"/><path d="m339 270 49-14 64-37 54 20 46 86H274Z" fill="#d1e9ee"/><path d="m425 129 27 90-64 37Z" fill="#649ab1"/><path d="m308 176 49-119-18 213Z" fill="#d1ebf1"/><path d="m452 219 21 106h79l-46-86Z" fill="#6b9eb4"/><path d="m339 270 27 55h-92Z" fill="#e9fcfd"/>
 <g fill="none" stroke="#fff" strokeOpacity=".26"><path d="m293 197 21 56m38-142-6 105m52-51-16 61m41-4 13 44m-226 18 61-8"/></g></g>
 <g className={`submerged layer-${active}`}><path d="M142 328 113 412 165 474 146 530 223 598 251 701 338 797 412 728 446 642 514 579 541 474 587 410 552 328Z" fill={`url(#${id}deep)`}/>
 <path d="m142 328 184 89-161 57-52-62Z" fill="#a6dce7" opacity=".4"/><path d="m326 417 40-89h186l35 82-73 169Z" fill="#6ba6c0" opacity=".6"/><path d="m326 417 12 380-87-96-28-103Z" fill="#97cddc" opacity=".25"/><path d="m326 417 188 162-68 63-34 86-74 69Z" fill="#326e8c" opacity=".68"/><path d="m165 474 161-57-103 181-77-68Z" fill="#387a98" opacity=".65"/><path d="m326 417 120 225-108 155Z" fill="#71adc3" opacity=".28"/><path d="m366 328-40 89-184-89Z" fill="#def6fa" opacity=".45"/>
 <g fill="none" stroke="#a5dae7" strokeOpacity=".22"><path d="m142 328 184 89 188 162M326 417l12 380M165 474l58 124 28 103M552 328 514 579 446 642"/><path d="m209 375 44 67-32 86m223-156-46 67 18 72m-127 69 25 103"/></g></g>
 <path className="waterline" d="M35 327Q122 319 211 327T387 327T563 327T690 327" fill="none" stroke="#d7f6f7" strokeWidth="1.5" opacity=".8"/>
 <path d="M90 339Q190 345 264 338M417 338q85 8 171-1" stroke="#8ec9da" fill="none" opacity=".3"/>
 {labels && <g className="svg-labels" fill="#d2e9ec" fontFamily="monospace" fontSize="13"><text x="30" y="216">01 — VISIBLE</text><path d="M30 227h180" stroke="#d2e9ec" opacity=".4"/><text x="452" y="452">02 — DÉCLARÉ</text><path d="M432 461h222" stroke="#d2e9ec" opacity=".4"/><text x="20" y="660">03 — IMPLICITE</text><path d="M20 672h251" stroke="#d2e9ec" opacity=".4"/></g>}
 </svg>
}

import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DiveScene from '../components/DiveScene';
import DiveCompass from '../components/DiveCompass';
import IcebergScene from '../components/IcebergScene';
import { HeroSection, Exploration } from '../sections/Exploration';
import Stations from '../sections/Stations';
import { useScrollDepth } from '../hooks/useScrollDepth';
export default function App() {const [reading,setReading]=useState(false);const active=useScrollDepth();return <MotionConfig reducedMotion="user"><div className={reading?'app reading-mode':'app'}><Navigation active={active} reading={reading} onReading={()=>setReading(!reading)}/><main><div id="dive-journey" className="dive-journey"><DiveScene active={active}/><DiveCompass active={active}/><HeroSection/><div className="introduction"><span className="eyebrow">LA MÉTHODE</span><p>Ce qui se voit. Ce qui se dit.<br/><em>Ce qui est tenu pour évident.</em></p><div>Trois niveaux pour lire une culture selon Edgar Schein. Une descente pour distinguer les preuves, les hypothèses et les questions qui restent ouvertes.<span className="intro-caveat">Étude de cas externe · sources publiques · choix de Netflix soumis à l’accord de l’enseignant.</span></div></div><figure className="linear-iceberg"><IcebergScene labels/><p>Les trois niveaux de Schein : vue d’ensemble (figure 01).</p></figure><Exploration reading={reading}/></div><Stations reading={reading}/></main><Footer/></div></MotionConfig>}

import type { SourceId } from './sources';
export const chapters = [
 {id:'surface',label:'L’horizon',short:'Départ',depth:'Surface'},
 {id:'artefacts',label:'Les artefacts',short:'Artefacts',depth:'01 · Émergé'},
 {id:'valeurs',label:'Les valeurs',short:'Valeurs',depth:'02 · Immersion'},
 {id:'presupposes',label:'Les présupposés',short:'Présupposés',depth:'03 · Profondeur'},
 {id:'ocai',label:'Le profil OCAI',short:'OCAI',depth:'Station · OCAI'},
 {id:'competition',label:'La compétition',short:'Compétition',depth:'Station · Marché'},
 {id:'innovation',label:'L’intrapreneuriat',short:'Innover',depth:'Station · Innovation'},
 {id:'diagnostic',label:'Le diagnostic',short:'Diagnostic',depth:'Retour · Diagnostic'},
 {id:'sources',label:'Sources & méthode',short:'Sources',depth:'Carnet de recherche'},
];
export interface Evidence {title:string; subtitle:string; fact:string; interpretation:string; limit:string; source:SourceId; icon:'memo'|'language'|'feedback'}
export const evidence: Evidence[] = [
 {title:'Un mémo public',subtitle:'Le document comme artefact',fact:'Le mémo culturel est publié en ligne et existe en français. Une nouvelle version est annoncée le 24 juin 2024.',interpretation:'La culture devient un objet que candidats et lecteurs peuvent consulter. Le support est visible ; les convictions qu’il expose relèvent, elles, du deuxième niveau de Schein.',limit:'Publier une règle ne démontre pas son application quotidienne.',source:'update',icon:'memo'},
 {title:'Un langage de performance',subtitle:'Les mots comme symboles',fact:'Le mémo emploie « Dream Team » et la métaphore de l’équipe sportive professionnelle.',interpretation:'Ce vocabulaire rend l’excellence collective tangible. Il suggère une appartenance fondée sur la contribution, plutôt qu’une appartenance inconditionnelle.',limit:'Le mot est observable dans le texte ; son appropriation par les équipes ne l’est pas ici.',source:'memo',icon:'language'},
 {title:'Le feedback sans détour',subtitle:'Une pratique décrite publiquement',fact:'L’analyse de Harvard Business School décrit des retours francs et fréquents, attendus entre collègues, au-delà du rang hiérarchique.',interpretation:'Ce feedback peut servir de mécanisme de coordination et d’apprentissage. Chez Schein, la pratique décrite constitue un indice d’artefact, sous réserve d’observation.',limit:'Il s’agit d’une pratique rapportée par une étude externe, sans observation directe de notre part.',source:'hbs',icon:'feedback'},
];
export const values = [
 {title:'People over Process',fr:'Faire confiance au jugement',text:'Netflix privilégie l’autonomie de décision, nourrie par le contexte et l’information.',analysis:'Lecture : moins d’autorisations préalables pourrait raccourcir le chemin entre un problème et sa résolution. Mais une responsabilité mal définie pourrait aussi isoler le décideur.'},
 {title:'The Dream Team',fr:'Viser l’excellence ensemble',text:'Netflix affiche une ambition de performance et de coopération exigeantes.',analysis:'Lecture : la compétence collective peut rendre la délégation crédible. La question décisive devient alors : comment rester assez en confiance pour demander de l’aide ?'},
];
export const ocai = [
 {name:'Clan',status:'Indices limités',orientation:'Interne · flexible',text:'La coopération évoque le clan, mais elle ne suffit pas à démontrer une culture d’appartenance durable. La métaphore sportive du mémo invite à nuancer ce profil.',source:'memo' as SourceId},
 {name:'Adhocratie',status:'Profil secondaire',orientation:'Externe · flexible',text:'L’autonomie et l’expérimentation évoquent l’adhocratie. L’élargissement d’Ads Suite en 2026 illustre une adaptation de l’offre ; il ne prouve pas à lui seul la liberté vécue des équipes.',source:'recent' as SourceId},
 {name:'Hiérarchie',status:'Présence de garde-fous',orientation:'Interne · stable',text:'Des règles restent nécessaires. Un discours favorable à l’autonomie ne signifie pas absence de contrôle : responsabilité, conformité et coordination peuvent coexister.',source:'memo' as SourceId},
 {name:'Marché',status:'Diagnostic dominant',orientation:'Externe · stable',text:'Le « keeper test », décrit aussi par Harvard Business School, relie le maintien dans l’équipe à la contribution attendue. J’y vois un indice fort d’une logique de résultats, caractéristique du profil marché.',source:'hbs' as SourceId},
];
export const timeline = [
 {date:'1er avril 2025',title:'Construire l’outil',text:'Lancement de Netflix Ads Suite aux États-Unis, confirmé dans la lettre aux actionnaires du 17 avril.',source:'q1' as SourceId},
 {date:'5 novembre 2025',title:'Étendre l’échelle',text:'Netflix déclare sa plateforme publicitaire interne déployée dans les douze pays proposant son offre avec publicité.',source:'ads' as SourceId},
 {date:'4 mars 2026',title:'Renouveler l’avantage',text:'Netflix annonce de nouveaux ciblages via Amazon et Yahoo et ses outils Conversion API. Les extensions internationales annoncées restent un calendrier, pas un déploiement vérifié ici.',source:'recent' as SourceId},
];
export const innovationSteps = [
 {time:'Semaine 1',title:'Formuler',text:'Une équipe volontaire de 3 à 5 personnes (produit, technique, publicité) propose une hypothèse : réduire la répétition publicitaire perçue sans dégrader la valeur des campagnes.'},
 {time:'Semaines 2–3',title:'Prototyper',text:'Un sponsor libère 20 % du temps sur six semaines, un mentor accompagne l’équipe et un budget plafonné est validé avant le départ. Prototype sur données synthétiques.'},
 {time:'Semaines 4–5',title:'Expérimenter',text:'Après revue juridique et technique, test limité et réversible. Mesurer répétition perçue, satisfaction, qualité de diffusion et délai idée–test. Les seuils sont fixés avant l’essai.'},
 {time:'Semaine 6',title:'Décider & apprendre',text:'Démonstration au sponsor : poursuivre, modifier ou arrêter selon les critères initiaux. Publier les apprentissages. Un essai rigoureux non concluant ne doit pas pénaliser l’évaluation individuelle.'},
];
export const observations = [
 {date:'24 juin 2024',title:'Un référentiel public renouvelé',text:'Annonce de mise à jour du Culture Memo. Objet observé : un document institutionnel ; lien : artefact et valeurs affichées.',source:'update' as SourceId},
 {date:'6 août 2025',title:'Une tension discutée de l’extérieur',text:'Harvard Business School analyse le lien entre liberté, exigences et adaptation de la culture. Objet observé : une analyse académique, pas un entretien réalisé par l’étudiant.',source:'hbs' as SourceId},
 {date:'4 mars 2026',title:'Une offre publicitaire qui évolue',text:'Annonce d’extensions d’Ads Suite. Objet observé : un communiqué commercial ; lien : renouvellement de l’avantage et rythme d’adaptation.',source:'recent' as SourceId},
];
export const synthesis = [
 {title:'Un atout',text:'L’autonomie peut réduire les délais de décision. Une équipe compétente et des retours directs peuvent faciliter l’adaptation à une offre publicitaire en mouvement.'},
 {title:'Une fragilité',text:'Si l’échec d’un essai est assimilé à une insuffisance personnelle, chacun pourrait protéger sa place au lieu d’explorer. C’est un risque analytique, pas un vécu salarié démontré.'},
 {title:'Une condition',text:'Distinguer la qualité d’une expérimentation de son résultat immédiat ; donner du contexte, des ressources et un droit au désaccord. L’exigence doit soutenir l’apprentissage.'},
];

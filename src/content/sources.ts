export const consulted = '2 novembre 2026';
export const sources = {
 memo: {title:'Culture Memo — Le meilleur de nous-mêmes', author:'Netflix',date:'juin 2024',url:'https://jobs.netflix.com/netflix-culture-fr.pdf'},
 update: {title:'Sharing Our Latest Culture Memo',author:'Netflix',date:'24 juin 2024',url:'https://about.netflix.com/en/news/sharing-our-latest-culture-memo'},
 hbs: {title:'Freedom, Fear, and Feedback: Should Other Companies Follow Netflix’s Lead?',author:'James Barnett et Stacy Straaberg · Harvard Business School',date:'6 août 2025',url:'https://www.library.hbs.edu/working-knowledge/freedom-fear-and-feedback-should-other-companies-follow-netflixs-lead'},
 q1: {title:'Q1 2025 Shareholder Letter',author:'Netflix Investor Relations',date:'17 avril 2025',url:'https://ir.netflix.net/files/doc_financials/2025/q1/COMBINED-Q1-25-Shareholder-Letter-V2.pdf'},
 ads: {title:'Netflix’s Third Season of Ads and a Look Ahead at What’s Next',author:'Amy Reinhard · Netflix',date:'5 novembre 2025',url:'https://about.netflix.com/en/news/netflix-third-season-of-ads-and-a-look-ahead-at-whats-next-uk'},
 recent: {title:'Netflix Ads Suite Expands Capabilities',author:'Netflix',date:'4 mars 2026',url:'https://about.netflix.com/en/news/netflix-ads-suite-expands-capabilities'},
 course: {title:'La culture d’entreprise à l’épreuve de l’hypercompétition',author:'Camille Foulon · Master CCM, INSSET / UPJV',date:'support fourni, sans date d’édition',url:'#references-theoriques'},
} as const;
export type SourceId = keyof typeof sources;
export const bibliography = [
 ['Edgar H. Schein','Organizational Culture and Leadership','1985','Modèle à trois niveaux ; cours, p. 17–18.'],
 ['Kim S. Cameron & Robert E. Quinn','Diagnosing and Changing Organizational Culture','1999','Competing Values Framework et OCAI ; cours, p. 22–23.'],
 ['Richard A. D’Aveni','Hypercompetition','1994','Avantages temporaires et arènes concurrentielles ; cours, p. 28–29.'],
 ['George Stalk Jr.','Time—The Next Source of Competitive Advantage, Harvard Business Review','1988','Le temps comme ressource stratégique ; cours, p. 30.'],
 ['Gifford Pinchot III','Intrapreneuring','1985','Entreprendre à l’intérieur de l’organisation ; cours, p. 41–43.'],
];

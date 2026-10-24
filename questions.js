"use strict";

/* Banque de questions de Quiz Me Up.
   Pour ajouter une question : Q("id-du-thème", "Question ?", "Bonne réponse", "Fausse 1", "Fausse 2", "Fausse 3");
   La bonne réponse se met toujours en premier, le jeu mélange l'ordre à l'affichage.
   Évite les questions dont la réponse change avec le temps (records, présidents, populations). */

const GENRES = [
  { id: "histoire",   nom: "Histoire" },
  { id: "geographie", nom: "Géographie" },
  { id: "sciences",   nom: "Sciences" },
  { id: "nature",     nom: "Nature et animaux" },
  { id: "cinema",     nom: "Cinéma et séries" },
  { id: "musique",    nom: "Musique" },
  { id: "arts",       nom: "Arts et littérature" },
  { id: "sport",      nom: "Sport" },
  { id: "football",   nom: "Football" },
  { id: "tunisie",    nom: "Tunisie et monde arabe" },
  { id: "tech",       nom: "Tech et jeux vidéo" },
];

const QUESTIONS = [];
function Q(g, q, bonne, ...fausses) { QUESTIONS.push({ g, q, c: [bonne, ...fausses], b: 0 }); }

/* ---------- Histoire ---------- */
Q("histoire", "En quelle année la Révolution française a-t-elle commencé ?", "1789", "1792", "1804", "1776");
Q("histoire", "Qui fut le premier empereur romain ?", "Auguste", "Jules César", "Néron", "Trajan");
Q("histoire", "Quelle civilisation a construit le Machu Picchu ?", "Les Incas", "Les Aztèques", "Les Mayas", "Les Olmèques");
Q("histoire", "En quelle année l'être humain a-t-il marché sur la Lune pour la première fois ?", "1969", "1961", "1972", "1965");
Q("histoire", "Quelle ville a été ensevelie par l'éruption du Vésuve en l'an 79 ?", "Pompéi", "Carthage", "Athènes", "Alexandrie");
Q("histoire", "Quel général carthaginois a traversé les Alpes avec des éléphants ?", "Hannibal", "Hasdrubal", "Scipion", "Hamilcar");
Q("histoire", "En quelle année le mur de Berlin est-il tombé ?", "1989", "1991", "1985", "1979");
Q("histoire", "Quel navigateur a atteint l'Amérique en 1492 pour le compte de l'Espagne ?", "Christophe Colomb", "Vasco de Gama", "Magellan", "Amerigo Vespucci");
Q("histoire", "Quel pharaon est célèbre pour son tombeau découvert en 1922 ?", "Toutânkhamon", "Ramsès II", "Khéops", "Akhenaton");
Q("histoire", "Quelle guerre a opposé le Nord et le Sud des États-Unis de 1861 à 1865 ?", "La guerre de Sécession", "La guerre d'Indépendance", "La guerre de Corée", "La guerre de 1812");

/* ---------- Géographie ---------- */
Q("geographie", "Quel est le plus long fleuve d'Afrique ?", "Le Nil", "Le Congo", "Le Niger", "Le Zambèze");
Q("geographie", "Quelle est la capitale de l'Australie ?", "Canberra", "Sydney", "Melbourne", "Perth");
Q("geographie", "Quel est le plus grand océan du monde ?", "Le Pacifique", "L'Atlantique", "L'océan Indien", "L'Arctique");
Q("geographie", "Quelle est la capitale du Canada ?", "Ottawa", "Toronto", "Montréal", "Vancouver");
Q("geographie", "Quel est le plus grand désert chaud du monde ?", "Le Sahara", "Le Gobi", "Le Kalahari", "Le Thar");
Q("geographie", "Quelle montagne a le plus haut sommet du monde au-dessus du niveau de la mer ?", "L'Everest", "Le K2", "Le Kilimandjaro", "Le mont Blanc");
Q("geographie", "Quel pays est le plus vaste du monde par sa superficie ?", "La Russie", "Le Canada", "La Chine", "Les États-Unis");
Q("geographie", "Quel détroit relie la Méditerranée à l'océan Atlantique ?", "Le détroit de Gibraltar", "Le Bosphore", "Le canal de Suez", "Le détroit d'Ormuz");
Q("geographie", "Quelle est la capitale du Brésil ?", "Brasília", "Rio de Janeiro", "São Paulo", "Salvador");
Q("geographie", "Quel pays est surnommé le « pays du Soleil-Levant » ?", "Le Japon", "La Chine", "La Corée du Sud", "La Thaïlande");

/* ---------- Sciences ---------- */
Q("sciences", "Quel est le symbole chimique de l'or ?", "Au", "Ag", "Or", "Fe");
Q("sciences", "Combien de planètes compte le système solaire ?", "8", "9", "7", "10");
Q("sciences", "Quelle planète est la plus proche du Soleil ?", "Mercure", "Vénus", "Mars", "La Terre");
Q("sciences", "Quel gaz les plantes absorbent-elles pour la photosynthèse ?", "Le dioxyde de carbone", "L'oxygène", "L'azote", "L'hydrogène");
Q("sciences", "Quelle est la vitesse de la lumière dans le vide, environ ?", "300 000 km/s", "150 000 km/s", "30 000 km/s", "3 000 000 km/s");
Q("sciences", "Combien d'os compte le corps d'un adulte ?", "206", "186", "256", "300");
Q("sciences", "Qui a formulé la théorie de la relativité ?", "Albert Einstein", "Isaac Newton", "Niels Bohr", "Galilée");
Q("sciences", "Quel est l'élément le plus abondant de l'univers ?", "L'hydrogène", "L'hélium", "L'oxygène", "Le carbone");
Q("sciences", "À quelle température l'eau bout-elle au niveau de la mer ?", "100 °C", "90 °C", "120 °C", "80 °C");
Q("sciences", "Quelle unité mesure la fréquence d'un signal ?", "Le hertz", "Le watt", "Le volt", "Le newton");

/* ---------- Nature et animaux ---------- */
Q("nature", "Quel est le plus grand animal terrestre ?", "L'éléphant d'Afrique", "La girafe", "Le rhinocéros blanc", "L'hippopotame");
Q("nature", "Combien de pattes a une araignée ?", "8", "6", "10", "12");
Q("nature", "Quel animal est le plus rapide sur terre ?", "Le guépard", "Le lion", "L'antilope", "Le cheval");
Q("nature", "Quel est le plus grand mammifère marin ?", "La baleine bleue", "Le cachalot", "L'orque", "Le requin-baleine");
Q("nature", "Comment appelle-t-on les petits de la grenouille ?", "Des têtards", "Des chenilles", "Des alevins", "Des poussins");
Q("nature", "Quel arbre produit les glands ?", "Le chêne", "Le hêtre", "Le pin", "Le châtaignier");
Q("nature", "Quel oiseau ne vole pas et vit dans les régions polaires du sud ?", "Le manchot", "Le pélican", "Le cormoran", "L'albatros");
Q("nature", "Quel insecte produit le miel ?", "L'abeille", "La guêpe", "Le papillon", "La fourmi");
Q("nature", "Quel animal est un marsupial ?", "Le kangourou", "Le lapin", "Le panda", "Le lynx");
Q("nature", "Quelle est la plus grande forêt tropicale du monde ?", "L'Amazonie", "Le bassin du Congo", "Bornéo", "Sumatra");

/* ---------- Cinéma et séries ---------- */
Q("cinema", "Qui a réalisé le film Titanic, sorti en 1997 ?", "James Cameron", "Steven Spielberg", "Ridley Scott", "Christopher Nolan");
Q("cinema", "Dans quelle saga trouve-t-on le personnage de Dark Vador ?", "Star Wars", "Star Trek", "Matrix", "Dune");
Q("cinema", "Quel réalisateur a signé Pulp Fiction ?", "Quentin Tarantino", "Martin Scorsese", "David Fincher", "Wes Anderson");
Q("cinema", "Quel film d'animation suit un poisson-clown parti à la recherche de son fils ?", "Le Monde de Nemo", "Shrek", "Là-haut", "Ratatouille");
Q("cinema", "Quel acteur incarne Jack Sparrow dans Pirates des Caraïbes ?", "Johnny Depp", "Orlando Bloom", "Brad Pitt", "Tom Cruise");
Q("cinema", "Dans quelle ville se déroule la série Friends ?", "New York", "Los Angeles", "Chicago", "Boston");
Q("cinema", "Quel film sud-coréen a remporté l'Oscar du meilleur film en 2020 ?", "Parasite", "Oldboy", "Dernier train pour Busan", "Burning");
Q("cinema", "Qui a réalisé Inception ?", "Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "Zack Snyder");
Q("cinema", "Quel festival décerne la Palme d'or ?", "Le festival de Cannes", "La Mostra de Venise", "La Berlinale", "Sundance");
Q("cinema", "Dans quelle série suit-on le professeur de chimie Walter White ?", "Breaking Bad", "The Wire", "Les Soprano", "Dexter");

/* ---------- Musique ---------- */
Q("musique", "Combien de cordes a une guitare classique ?", "6", "4", "5", "7");
Q("musique", "Quel compositeur a écrit Les Quatre Saisons ?", "Vivaldi", "Mozart", "Bach", "Beethoven");
Q("musique", "Quel groupe britannique a chanté « Hey Jude » ?", "Les Beatles", "Les Rolling Stones", "Queen", "Pink Floyd");
Q("musique", "Quel instrument à vent est typique de la musique écossaise ?", "La cornemuse", "Le hautbois", "Le saxophone", "L'accordéon");
Q("musique", "Qui était le chanteur du groupe Queen ?", "Freddie Mercury", "David Bowie", "Elton John", "Mick Jagger");
Q("musique", "Quel compositeur a continué à écrire ses symphonies alors qu'il devenait sourd ?", "Beethoven", "Mozart", "Chopin", "Haendel");
Q("musique", "Quel instrument traditionnel arabe est un luth à manche court ?", "L'oud", "Le qanûn", "Le ney", "La darbouka");
Q("musique", "Combien de notes différentes compte la gamme majeure ?", "7", "5", "8", "12");
Q("musique", "Quel genre musical est né à La Nouvelle-Orléans ?", "Le jazz", "Le reggae", "Le rock", "Le flamenco");
Q("musique", "Qui est surnommé le « Roi de la pop » ?", "Michael Jackson", "Prince", "Elvis Presley", "Justin Timberlake");

/* ---------- Arts et littérature ---------- */
Q("arts", "Qui a peint La Joconde ?", "Léonard de Vinci", "Michel-Ange", "Raphaël", "Botticelli");
Q("arts", "Quel écrivain a écrit Les Misérables ?", "Victor Hugo", "Émile Zola", "Balzac", "Flaubert");
Q("arts", "Dans quel musée est exposée La Joconde ?", "Le Louvre", "Le Prado", "L'Ermitage", "Le British Museum");
Q("arts", "Qui a écrit Roméo et Juliette ?", "William Shakespeare", "Molière", "Goethe", "Dante");
Q("arts", "Quel peintre a réalisé La Nuit étoilée ?", "Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Paul Cézanne");
Q("arts", "Qui est l'auteur du Petit Prince ?", "Antoine de Saint-Exupéry", "Jules Verne", "Albert Camus", "Marcel Pagnol");
Q("arts", "Quel mouvement artistique est associé à Salvador Dalí ?", "Le surréalisme", "Le cubisme", "L'impressionnisme", "Le fauvisme");
Q("arts", "Qui a créé le personnage d'Harry Potter ?", "J. K. Rowling", "J. R. R. Tolkien", "Roald Dahl", "C. S. Lewis");
Q("arts", "Quel écrivain russe a écrit Guerre et Paix ?", "Léon Tolstoï", "Dostoïevski", "Tchekhov", "Pouchkine");
Q("arts", "Quel sculpteur a réalisé Le Penseur ?", "Auguste Rodin", "Michel-Ange", "Donatello", "Camille Claudel");

/* ---------- Sport ---------- */
Q("sport", "Dans quelle ville ont eu lieu les premiers Jeux olympiques modernes, en 1896 ?", "Athènes", "Paris", "Londres", "Rome");
Q("sport", "Combien de sets faut-il gagner, au minimum, pour remporter un match masculin en Grand Chelem ?", "3", "2", "4", "5");
Q("sport", "Quelle distance fait un marathon ?", "42,195 km", "40 km", "21,097 km", "50 km");
Q("sport", "Quel sport se joue à Roland-Garros ?", "Le tennis", "Le golf", "Le rugby", "Le cyclisme");
Q("sport", "Quel pays a accueilli les Jeux olympiques d'été de 2016 ?", "Le Brésil", "La Chine", "Le Royaume-Uni", "Le Japon");
Q("sport", "Combien de joueurs d'une même équipe sont sur le terrain au basket-ball ?", "5", "6", "7", "11");
Q("sport", "Combien de joueurs d'une même équipe sont sur le terrain au volley-ball ?", "6", "5", "7", "8");
Q("sport", "Quel sport se joue avec un volant ?", "Le badminton", "Le squash", "Le tennis de table", "Le padel");
Q("sport", "Quel pays est le berceau du judo ?", "Le Japon", "La Corée du Sud", "La Chine", "Le Brésil");
Q("sport", "Quel sprinteur détient le record du monde du 100 mètres, en 9 s 58 ?", "Usain Bolt", "Carl Lewis", "Justin Gatlin", "Tyson Gay");

/* ---------- Football ---------- */
Q("football", "Quel pays a remporté la Coupe du monde 2022 ?", "L'Argentine", "La France", "Le Brésil", "La Croatie");
Q("football", "Quelle nation a remporté la CAN 2023, jouée en 2024 ?", "La Côte d'Ivoire", "Le Nigeria", "Le Sénégal", "Le Maroc");
Q("football", "Quel club a gagné le plus de fois la Ligue des champions ?", "Le Real Madrid", "L'AC Milan", "Le Bayern Munich", "Liverpool");
Q("football", "Combien de Ballons d'Or Lionel Messi a-t-il gagnés ?", "8", "6", "7", "5");
Q("football", "Quel pays a organisé la Coupe du monde 2010 ?", "L'Afrique du Sud", "Le Brésil", "L'Allemagne", "Le Qatar");
Q("football", "Combien de joueurs par équipe sont sur le terrain au football ?", "11", "10", "12", "9");
Q("football", "Quel pays a gagné la toute première Coupe du monde, en 1930 ?", "L'Uruguay", "Le Brésil", "L'Italie", "L'Argentine");
Q("football", "Quel club joue ses matchs au Parc des Princes ?", "Le Paris Saint-Germain", "L'Olympique lyonnais", "L'AS Monaco", "L'Olympique de Marseille");
Q("football", "Combien de temps dure un match de football, hors prolongations ?", "90 minutes", "80 minutes", "100 minutes", "70 minutes");
Q("football", "Quelle couleur est le carton le plus sévère au football ?", "Rouge", "Jaune", "Orange", "Bleu");
Q("football", "Quel pays a organisé la CAN 2025 ?", "Le Maroc", "L'Égypte", "L'Algérie", "Le Sénégal");
Q("football", "Quels pays accueillent la Coupe du monde 2026 ?", "Les États-Unis, le Canada et le Mexique", "L'Espagne et le Portugal", "L'Arabie saoudite", "L'Angleterre");
Q("football", "Quelle équipe a gagné le championnat d'Espagne 2023-2024 ?", "Le Real Madrid", "Barcelone", "L'Atlético Madrid", "Girona");
Q("football", "Qui a marqué de la main contre l'Angleterre en 1986 ?", "Diego Maradona", "Pelé", "Zinédine Zidane", "Gabriel Batistuta");

/* ---------- Tunisie et monde arabe ---------- */
Q("tunisie", "Quelle est la capitale de la Tunisie ?", "Tunis", "Sfax", "Sousse", "Kairouan");
Q("tunisie", "Quelle cité antique proche de Tunis fut la grande rivale de Rome ?", "Carthage", "Dougga", "Utique", "El Jem");
Q("tunisie", "Quel est le plus long cours d'eau de Tunisie ?", "La Medjerda", "Le Miliane", "Le Zeroud", "Le Nebhana");
Q("tunisie", "Quelle ville tunisienne abrite la grande mosquée fondée par Oqba ibn Nafi ?", "Kairouan", "Tunis", "Mahdia", "Sousse");
Q("tunisie", "Quelle chanteuse égyptienne était surnommée « l'astre de l'Orient » ?", "Oum Kalthoum", "Fairouz", "Asmahan", "Warda");
Q("tunisie", "Quel écrivain égyptien a reçu le prix Nobel de littérature en 1988 ?", "Naguib Mahfouz", "Taha Hussein", "Tawfiq al-Hakim", "Alaa El Aswany");
Q("tunisie", "Dans quel pays se trouvent les pyramides de Gizeh ?", "L'Égypte", "Le Soudan", "La Libye", "L'Irak");
Q("tunisie", "Quelle pâte de piment est incontournable dans la cuisine tunisienne ?", "La harissa", "Le zaatar", "Le sumac", "Le tahini");
Q("tunisie", "Quel penseur né à Tunis a écrit la Muqaddima ?", "Ibn Khaldoun", "Averroès", "Avicenne", "Ibn Battuta");
Q("tunisie", "Quel village tunisien est célèbre pour ses maisons blanches aux portes bleues ?", "Sidi Bou Saïd", "Hammamet", "Tozeur", "Tabarka");

/* ---------- Tech et jeux vidéo ---------- */
Q("tech", "Que signifie le sigle « USB » ?", "Universal Serial Bus", "United System Board", "Universal Storage Box", "Unified Serial Band");
Q("tech", "Quelle entreprise a lancé l'iPhone ?", "Apple", "Samsung", "Nokia", "Google");
Q("tech", "Quel personnage de Nintendo est un plombier moustachu ?", "Mario", "Sonic", "Link", "Pac-Man");
Q("tech", "Quel langage de programmation rend les pages web interactives dans le navigateur ?", "JavaScript", "Python", "C++", "Swift");
Q("tech", "Qui a fondé Microsoft avec Paul Allen ?", "Bill Gates", "Steve Jobs", "Elon Musk", "Mark Zuckerberg");
Q("tech", "Quel jeu se joue dans un monde fait de blocs cubiques que l'on construit ?", "Minecraft", "Fortnite", "Roblox", "Tetris");
Q("tech", "Combien de bits compte un octet ?", "8", "4", "16", "10");
Q("tech", "Quel jeu de blocs qui tombent a été créé par Alekseï Pajitnov ?", "Tetris", "Pong", "Snake", "Pac-Man");
Q("tech", "Quelle console de Sony est sortie en 1994 ?", "La PlayStation", "La Dreamcast", "La Saturn", "La PSP");
Q("tech", "Que signifie « IA » en informatique ?", "Intelligence artificielle", "Interface avancée", "Information automatisée", "Internet actif");

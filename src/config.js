const countryCode = [
  "UA",
  "GR",
  "AT",
  "SE",
  "HR",
  "BE",
  "DK",
  "BG",
  "RO",
  "CA",
  "MX",
  "BR",
  "AU",
  "AR",
  "CO",
  "PE",
  "CL",
  "VE",
  "UY",
  "PY",
]

const universities = {
  // Europe
  "UA": [
    "Taras Shevchenko National University of Kyiv",
    "Igor Sikorsky Kyiv Polytechnic Institute",
    "Bukovinian State Medical University",
    "Ivan Franko National University of Lviv",
    "Ternopil National Medical University",
    "Danylo Halytsky Lviv National Medical University",
    "Kharkiv National Medical University",
    "Rectorate of O.O.Bogomolets National Medical University",
    "Ivano-Frankivsk National Medical University",
    "Lviv Polytechnic National University",
  ],
  // Greece
  "GR": [
    "National and Kapodistrian University of Athens",
    "Aristotle University of Thessaloniki",
    "The American College of Greece",
    "University of Ioannina",
    "University Of Patras",
    "National Technical University of Athens",
    "University of Crete",
    "University of the Aegean",
    "Athens University of Economics and Business",
    "Agricultural University of Athens",
  ],
  // "Austria",
  "AT": [
    "University of Vienna",
    "Medical University of Graz",
    "Medical University of Innsbruck",
    "Medical University of Vienna",
    "University of Klagenfurt",
    "University of Innsbruck",
    "Vienna University of Technology",
    "Graz University of Technology (TU Graz)",
    "Johannes Kepler University Linz",
    "Karl-Franzens University of Graz",
  ],
  // "Sweden",
  "SE": [
    "KTH Royal Institute of Technology",
    "Uppsala University",
    "Lund University",
    "Stockholm University",
    "Chalmers University of Technology",
    "Karolinska Institutet",
    "University of Gothenburg",
    "Malardalen University",
    "Linkoping University",
    "Linnaeus University",
  ],
  // "Croatia",
  "HR": [
    "University of Zadar",
    "University of Zagreb",
    "University of Osijek",
    "University of Pula",
    "University of Dubrovnik",
    "University of Split",
    "University of Rijeka",
    "Dubrovnik International University",
    "University North (Koprivnica and Varaždin)",
    "Catholic University of Croatia",
  ],
  // "Belgium",
  "BE": [
    "Ghent University ",
    "Katholieke Universiteit Leuven",
    "Université Catholique de Louvain",
    "Université libre de Bruxelles",
    "University of Liège",
    "Vrije Universiteit Brussel",
    "University of Antwerp",
    "University of Namur",
    "Hasselt University",
    "Thomas More University",
  ],
  // "Denmark",
  "DK": [
    "University of Copenhagen",
    "Aarhus University",
    "Technical University of Denmark (DTU)",
    "Aalborg University",
    "Copenhagen Business School (CBS)",
    "University of Southern Denmark",
    "Roskilde University",
    "Technical University of Denmark (TUD)",
    "Copenhagen School of Design and Technology (KEA)",
    "University College of Northern Denmark",
  ],
  // "Bulgaria",
  "BG": [
    "Sofia University",
    "Technical University - Sofia",
    "Medical University-Sofia",
    "Trakia University",
    "University of Chemical Technology and Metallurgy",
    "Technical University - Varna",
    "Burgas Prof. Assen Zlatarov University",
    "Plovdiv University",
    "American University In Bulgaria",
    "New Bulgarian University",
  ],
  // "Romania",
  "RO": [
    "Transilvania University of Brasov",
    "University of Bucharest",
    "University POLITEHNICA of Bucharest",
    "Bucharest Academy of Economic Studies",
    "Babes-Bolyai University",
    "Technical University of Cluj-Napoca",
    "Alexandru Ioan Cuza University",
    "Gheorghe Asachi Technical University of Iași",
    "West University of Timişoara",
    "Politehnica University of Timişoara",
  ],
  // "Canada",
  "CA": [
    "University of Toronto",
    "University of British Columbia",
    "McGill University",
    "McMaster University",
    "University of Alberta",
    "University of Montreal",
    "University of Calgary",
    "University of Ottawa",
    "University of Windsor",
    "Toronto Metropolitan University",
  ],
  // "Mexico",
  "MX": [
    "Monterrey Institute of Technology",
    "National Autonomous University of Mexico",
    "Metropolitan Autonomous University",
    "Autonomous University of San Luis Potos",
    "University of Guadalajara",
    "Autonomous University Of Baja California",
    "Benemérita Universidad Autónoma de Puebla",
    "Instituto Politécnico Nacional",
    "Universidad Autónoma de Nuevo León",
    "Universidad Michoacana de San Nicolás de Hidalgo",
  ],
  // "Brazil",
  "BR": [
    "University of São Paulo",
    "State University of Campinas",
    "Federal University of Rio de Janeiro",
    "Federal University of Minas Gerais",
    "São Paulo State University",
    "Federal University of Rio Grande do Sul",
    "Federal University of São Paulo",
    "Federal University of Santa Catarina",
    "University of Brasília",
    "Pontificia Universidade Catolica do Rio de Janeiro",
  ],
  // Australia
  "AU": [
    "University of Queensland (UQ)",
    "University of New South Wales (UNSW)",
    "University of Melbourne",
    "University of Sydney",
    "Australian National University (ANU)",
    "Monash University",
    "University of Western Australia (UWA)",
    "University of Adelaide",
    "University of Technology Sydney (UTS)",
    "University of Wollongong",
  ],
  // "Argentina",
  "AR": [
    "University of Buenos Aires",
    "Austral University",
    "National University of San Martín",
    "National University of San Luis",
    "Torcuato di Tella University",
    "National University of Patagonia San Juan Bosco",
    "National University of San Juan",
    "Latin American Faculty of Social Sciences",
    "National University of Entre Ríos",
    "National University of Luján",
  ],
  // "Colombia",
  "CO": [
    "University of La Sabana",
    "Pontificia Bolivariana University",
    "University of Valle",
    "Technological University of Pereira",
    "University of Cartagena",
    "Costa University Corporation",
    "University of Magdalena",
    "CES University",
    "University of Quindío",
    "University Francisco de Paula Santander",
  ],
  // "Peru",
  "PE": [
    "Agrarian National University",
    "National University of Engineering",
    "Continental University",
    "Saint Ignatius of Loyola University",
    "National University of Saint Anthony the Abbot in Cuzco",
    "San Pablo Catholic University",
    "Norbert Wiener University",
    "National University of Agriculture of La Selva",
    "Private University of Tacna",
    "National University of Santa",
  ],
  // "Chile",
  "CL": [
    "University of Concepción",
    "Autonomous University of Chile",
    "Federico Santa María Technical University",
    "Vina del Mar, Universidad Adolfo Ibáñez Viña del Mar",
    "Austral University of Chile",
    "San Sebastián University",
    "Arturo Prat University",
    "Finis Terrae University",
    "Alberto Hurtado University",
    "Catholic University of the Maule",
  ],
  // "Venezuela",
  "VE": [
    "University of the Andes",
    "Central University of Venezuela",
    "Simón Bolívar University",
    "Andres Bello Catholic University",
    "University of Zulia",
    "University of Carabobo",
    "Lisandro Alvarado Central Western University",
    "Rafael Belloso Chacín University",
    "Bicentenary University of Aragua",
    "National Experimental University of Sur del Lago",
  ],
  // "Uruguay",
  "UY": [
    "University of the Republic",
    "Catholic University of Uruguay",
    "University of Montevideo",
    "Technological University of Uruguay",
    "ORT Uruguay University",
    "Latin American Center for Human Economics University Institute",
    "University of Enterprise",
    "Postgraduate University Institute of Psychoanalysis",
    "Christian Youth Association University Institute",
    "Bios University Institute",
  ],
  // "Paraguay",
  "PY": [
    "Northern University",
    "Autonomous University of Asunción",
    "Universidad Católica Nuestra Señora de la Asunción (UCNSA)",
    "American University",
    "Columbia University of Paraguay",
    "National University of the East",
    "University of the Southern Cone of the Americas",
    "Autonomous University of Paraguay",
    "Universidad Americana",
    "National University of Asuncion",
  ],
}

const languages = {
  "UA": "Ukrainian",
  "GR": "Greek",
  "AT": "German",
  "SE": "Swedish",
  "HR": "Croatian",
  "BE": "Dutch",
  "DK": "Danish",
  "BG": "Bulgarian",
  "RO": "Romanian",
  "CA": "English",
  "MX": "Spanish",
  "BR": "Portuguese",
  "AU": "Australian",
  "AR": "Spanish",
  "CO": "Spanish",
  "PE": "Spanish",
  "CL": "Spanish",
  "VE": "Spanish",
  "UY": "Spanish",
  "PY": "Spanish",
}

const timezone = {
  "UA": "+3 Eastern Europe",
  "GR": "+3 Eastern Europe",
  "AT": "+2 Berlin",
  "SE": "+2 Berlin",
  "HR": "+2 Berlin",
  "BE": "+2 Berlin",
  "DK": "+2 Berlin",
  "BG": "+3 Eastern Europe",
  "RO": "+3 Eastern Europe",
  "CA": "-4 Eastern Time(US & Canada)",
  "MX": "-5 Mexico City",
  "BR": "-3 NE Brazil",
  "AU": "+10 Sydney",
  "AR": "-3 E Argentina",
  "CO": "-5 Central Time",
  "PE": "-5 Central Time",
  "CL": "-4 Eastern Time - Indiana",
  "VE": "-4 Eastern Time - Indiana",
  "UY": "-3 NE Brazil",
  "PY": "-4 Eastern Time - Indiana",
}

const skilset = [
  // Title
  "Full-Stack, ",
  "Front-End, ",
  "Back-End, ",

  // Blockchain
  "Blockchain, ",
  "Ethereum, ",
  "Bitcoin, ",
  "NFT, ",
  "Remix, ",
  "Truffle, ",
  "Hardhat, ",
  "Solidity, ",
  "Rust, ",
  "GoLang, ",
  "Metaverse, ",
  
  // Normal
  "jQuery, ",
  "Javascript, ",
  "CSS, ",
  "HTML, ",

  // Front-End
  "Swift, ",
  "React, ",
  "Angular, ",
  "Vue, ",
  "CSS, ",
  "Less, ",
  "Sass, ",

  // Backend
  "NodeJS, ",
  "Python, ",
  "PHP, ",
  "Ruby, ",

  // Database
  "SQL, ",
  "MongoDB, ",
  "Firebase, ",
  
  // javascript frameworks
  "Express, ",
  "Next, ",
  "Gatsby, ",
  "Ember, ",
  "Nuxt, ",
  
  // PHP frameworks
  "Laravel, ",
  "CI, ",
  "YII, ",
  "Drupal, ",
  "Symfony, ",

  // Python framework
  "Django, ",
  "Flask, ",
  "FastAPI, ",

  // API
  "GraphQL, ",
];

const keyRoles = [
  "● Brainstorm and evaluate applications for new tools and technologies ",
  "● Managed time-sensitive updates, including content changes and database upgrades.",
  "● Planned, wrote, and debugged web applications and software with complete accuracy.",
  "● Maintaining client and server-side applications.",
  "● Educating sales personnel on blockchain features that allow secure digital payments.",
  "● Documenting blockchain development processes and complying with best practices in data protection.",
  "● Optimizing and securing blockchain applications by integrating new tools and technologies.",
  "● Document and maintain new as well as existing solutions ",
  "● Creating application features and interfaces by using programming languages and writing multithreaded codes.",
  "● Applying the latest cryptology techniques to protect digital transaction data against cyberattacks and information hacks.",
  "● Developed full-stack web applications which processed, analyzed, and rendered data visually.",
  "● Designing user interactions on web pages.",
  "● Managed, optimized, and updated PHP databases as necessary.",
  "● ERC20 Token Development",
  "● Working alongside graphic designers for web design features.",
  "● Creating servers and databases for functionality.",
  "● Front-end development - React, Web3.js, Moralis",
  "● Used various ideas from distributed computing, large-scale design, real-time data processing, data storage, ML, and AI to solve challenging dataset problems.",
  "● Ensuring responsiveness of applications.",
  "● Seeing through a project from conception to finished product.",
  "● Smart Contract Development using solidity",
  "● NFT Marketplace Development",
  "● Liaised with back end developers, front end developers, quality assurance testers, and CTO as needed.",
  "● Maximized applications’ efficiency, data quality, scope, operability, and flexibility.",
  "● Keeping up with current blockchain technologies and cryptography methods.",
  "● Develop application functionality with the help of various programming languages",
  "● Meeting both technical and consumer needs.",
  "● Ensuring cross-platform optimization for mobile phones.",
  "● Designing and developing APIs.",
  "● Enterprise-grade Private blockchain solutions using Hyperledger Fabric",
  "● NFT Minting Engine - ERC721A, ERC1155",
  "● Collaborate with cross-functional teams and managers to determine blockchain technology needs",
  "● Provide security measures against various cybercrimes",
  "● Research, analyze, design, develop, test, and maintain various Blockchain applications ",
  "● Developing back end website applications.",
  "● Staying abreast of developments in web applications and programming languages.",
  "● Ethereum Decentralized Applications",
  "● Integrate new tools and technology to optimize as well as secure blockchain applications",
  "● Developed app integration with REST / SOAP and other APIs for Google Maps, social media logins, payment processors, and other services.",
  "● Design, implement, and support distributed blockchain-based network",
  "● Connect with key stakeholders, technical partners, developers community and discuss innovative ideas ",
  "● Support and maintain current as well as future distributed applications ",
  "● Back-end Development - Node.js, GraphQL",
  "● Developing front end website architecture.",
  "● Collaborating with managers to determine blockchain technology needs and envisaged functionalities.",
  "● Working alongside Front-End Developers to develop high quality user-facing elements",
  "● Ensuring applications are optimised for speed and convenience, and making sure existing platforms can be scaled up in the future",
  "● Incorporating adequate and future-proof security elements and monitoring their continuing practicality",
  "● Implementing data storage applications and maintaining their effectiveness",
  "● Working with senior management to make sure the user experience continues to be of a high standard",
  "● Collaborating with relevant team members at all stages of the relevant processes",
  "● Hands-on experience in developing user interface applications with JavaScript, HTML5, CSS3 and Bootstrap.",
  "● Hands-on experience in developing secure and scalable web applications using at least one of the following frameworks/libraries - React/Angular/Vue/ DOM/BOM/Ajax/JSON/jQuery.",
  "● Hand-on experience in developing high-performance, reusable code for Web application.",
  "● English communication capability",
  "● Determining the structure and design of web pages.",
  "● Ensuring user experience determines design choices.",
  "● Developing features to enhance the user experience.",
  "● Striking a balance between functional and aesthetic design.",
  "● Ensuring web design is optimized for smartphones.",
  "● Building reusable code for future use.",
  "● Optimizing web pages for maximum speed and scalability.",
  "● Utilizing a variety of markup languages to write web pages.",
  "● Maintaining brand consistency throughout the design.",
];

const companies = [
  { name: "Quytech", city: "NYC", country: "United States", },
  { name: "OpenXcell", city: "Sunnyvale", country: "United States", },
  { name: "Alphonic Network Solutions Pvt. Ltd.", city: "Chicago", country: "United States", },
  { name: "InterScale", city: "Washington DC", country: "United States", },
  { name: "Hash Code Programmers Private Limited", city: "Ashburn", country: "United States", },
  { name: "Blocktech", city: "NYC", country: "United States", },
  { name: "Cryptonomex Inc.", city: "Blacksburg", country: "United States", },
  { name: "MixBytes", city: "San Francisco", country: "United States", },
  { name: "Deqode", city: "Wilmington", country: "United States", },
  { name: "Suffescom Solutions Inc", city: "California City", country: "United States", },
  { name: "Bitdeal", city: "McAllen", country: "United States", },
  { name: "TechGropse Pvt. Ltd.", city: "Decatur", country: "United States", },
  { name: "Antier Solutions", city: "San Jose", country: "United States", },
  { name: "CDN Solutions Group", city: "Phoenix", country: "United States", },
  { name: "HoC Solutions", city: "Providence", country: "United States", },

  { name: "Peiko", city: "Kyiv", country: "Ukraine", },
  { name: "Altamira", city: "Kyiv", country: "Ukraine", },
  { name: "OpenGeeksLab", city: "Zaporizhia", country: "Ukraine", },
  { name: "TrendLine Global", city: "Kyiv", country: "Ukraine", },
  { name: "Redwerk", city: "Kyiv", country: "Ukraine", },
  { name: "Cleveroad", city: "Dnipropetrovsk", country: "Ukraine", },
  { name: "JustCoded", city: "Kharkiv", country: "Ukraine", },
  { name: "OTAKOYI", city: "Lviv", country: "Ukraine", },
  { name: "Relevant Software", city: "Lviv", country: "Ukraine", },
  { name: "VT Labs", city: "Kyiv", country: "Ukraine", },
  { name: "Artelogic", city: "Lviv", country: "Ukraine", },
  { name: "MobiDev", city: "Chernivtsi", country: "Ukraine", },
  { name: "Unit Space", city: "Kharkiv", country: "Ukraine", },
  { name: "SamsonOS", city: "Kyiv", country: "Ukraine", },
  { name: "Web Peppers", city: "Kyiv", country: "Ukraine", },

  { name: "7EDGE", city: "Melbourne", country: "Australia", },
  { name: "Zealous System", city: "Melbourne", country: "Australia", },
  { name: "Bachoo", city: "Melbourne", country: "Australia", },
  { name: "PageTraffic Inc", city: "Sydney", country: "Australia", },
  { name: "GlanceSys Information Technology Private Limited", city: "Sydney", country: "Australia", },
  { name: "Promatics Technologies", city: "Sydney", country: "Australia", },
  { name: "KrishaWeb", city: "Melbourne", country: "Australia", },
  { name: "Next Big Technology(NBT)", city: "Sydney", country: "Australia", },
  { name: "Dedicated Developers", city: "Sydney", country: "Australia", },
  { name: "Caveni Digital Solutions", city: "Sydney", country: "Australia", },
  { name: "Vrinsoft Technology", city: "Melbourne", country: "Australia", },
  { name: "Codiant Software Technologies Pvt. Ltd.", city: "Sydney", country: "Australia", },
  { name: "Ateam Soft Solutions", city: "Gold Coast", country: "Australia", },
  { name: "Web Design Sun®", city: "Sydney", country: "Australia", },
  { name: "SAG IPL", city: "Lalor", country: "Australia", },

  { name: "7EDGE", city: "Bengaluru", country: "India", },
  { name: "SPEC INDIA", city: "Ahmedabad", country: "India", },
  { name: "OpenXcell", city: "Ahmedabad", country: "India", },
  { name: "AllianceTek", city: "Ahmedabad", country: "India", },
  { name: "Zealous System", city: "Ahmedabad", country: "India", },
  { name: "Brights", city: "Ahmedabad", country: "India", },
  { name: "Binmile Technologies", city: "Mumbai", country: "India", },
  { name: "Alphonic Network Solutions Pvt. Ltd.", city: "Jaipur", country: "India", },
  { name: "PageTraffic Inc", city: "Delhi", country: "India", },
  { name: "Aalpha Information Systems India Pvt. Ltd.", city: "Hubli", country: "India", },
  { name: "Promatics Technologies", city: "Ludhiana", country: "India", },
  { name: "GlanceSys Information Technology Private Limited", city: "Gwalior", country: "India", },
  { name: "Next Big Technology(NBT)", city: "Jaipur", country: "India", },
  { name: "Dynamic Dreamz", city: "Surat", country: "India", },
  { name: "BrancoSoft Private Limited", city: "Noida", country: "India", },

  { name: "Magneto IT Solutions", city: "London", country: "United Kingdom", },
  { name: "7EDGE", city: "London", country: "United Kingdom", },
  { name: "SPEC INDIA", city: "London", country: "United Kingdom", },
  { name: "Powercode", city: "London", country: "United Kingdom", },
  { name: "AllianceTek", city: "London", country: "United Kingdom", },
  { name: "Glorium Technologies", city: "London", country: "United Kingdom", },
  { name: "Zealous System", city: "London", country: "United Kingdom", },
  { name: "Brights", city: "London", country: "United Kingdom", },
  { name: "CodeBright", city: "London", country: "United Kingdom", },
  { name: "instinctools", city: "London", country: "United Kingdom", },
  { name: "Bachoo", city: "London", country: "United Kingdom", },
  { name: "Dedicated Developers", city: "London", country: "United Kingdom", },
  { name: "Gearheart", city: "London", country: "United Kingdom", },
  { name: "LinkUp Studio", city: "London", country: "United Kingdom", },
  { name: "HQSoftware", city: "London", country: "United Kingdom", },

  { name: "Magneto IT Solutions", city: "Toronto", country: "Canada", },
  { name: "7EDGE", city: "Calgary", country: "Canada", },
  { name: "SPEC INDIA", city: "Toronto", country: "Canada", },
  { name: "OpenXcell", city: "Toronto", country: "Canada", },
  { name: "Powercode", city: "Toronto", country: "Canada", },
  { name: "AllianceTek", city: "Toronto", country: "Canada", },
  { name: "Glorium Technologies", city: "Toronto", country: "Canada", },
  { name: "Zealous System", city: "Montreal", country: "Canada", },
  { name: "Brights", city: "Toronto", country: "Canada", },
  { name: "CodeBright", city: "Toronto", country: "Canada", },
  { name: "instinctools", city: "Toronto", country: "Canada", },
  { name: "Bachoo", city: "Toronto", country: "Canada", },
  { name: "Dedicated Developers", city: "Victoria", country: "Canada", },
  { name: "Gearheart", city: "Toronto", country: "Canada", },
  { name: "Canada", city: "Toronto", country: "Canada", },
  
  { name: "SolveIt", city: "Tallinn", country: "Estonia", },
  { name: "Design Den", city: "Tallinn", country: "Estonia", },
  { name: "Axmit", city: "Tallinn", country: "Estonia", },
  { name: "Swaran Soft Support Solutions Pvt. Ltd.", city: "Tallinn", country: "Estonia", },
  { name: "Impulsis", city: "Tallinn", country: "Estonia", },
  { name: "Bamboo Agile", city: "Tallinn", country: "Estonia", },
  { name: "Perpetio", city: "Tallinn", country: "Estonia", },
  { name: "8allocate", city: "Tallinn", country: "Estonia", },
  { name: "Qubit Labs", city: "Tallinn", country: "Estonia", },
  { name: "Carter Point", city: "Tallinn", country: "Estonia", },
  { name: "Limegrow Web Development", city: "Tallinn", country: "Estonia", },
  { name: "Decima Digital", city: "Tallinn", country: "Estonia", },
  { name: "Techstack Ltd", city: "Tallinn", country: "Estonia", },
  { name: "Brainbean Apps", city: "Tallinn", country: "Estonia", },
  { name: "Code Care", city: "Tallinn", country: "Estonia", },

  { name: "Bisoft", city: "Culiacán Rosales", country: "Mexico", },
  { name: "MANIAK", city: "Zapopan", country: "Mexico", },
  { name: "DO.LOGICAL", city: "Ciudad de México", country: "Mexico", },
  { name: "Bliss DDM", city: "Pachuca de Soto", country: "Mexico", },
  { name: "Deintec", city: "Monterrey", country: "Mexico", },
  { name: "Mobiik", city: "Ciudad de México", country: "Mexico", },
  { name: "SIAC (Soluciones Informáticas y Aplicaciones Crediticias)", city: "Guadalajara", country: "Mexico", },
  { name: "Ixaya", city: "León", country: "Mexico", },
  { name: "Madata IT", city: "Chihuahua", country: "Mexico", },
  { name: "ODASOFT Software", city: "Tijuana", country: "Mexico", },

  { name: "Target Work", city: "Rio de Janeiro", country: "Brazil", },
  { name: "Nassar Tecnologia", city: "Goiânia", country: "Brazil", },
  { name: "Intelivix", city: "Recife", country: "Brazil", },
  { name: "Alltech", city: "Maceió", country: "Brazil", },
  { name: "JRS Consultoria", city: "Maceió", country: "Brazil", },
  { name: "Itcorp Tecnologia", city: "Manaus", country: "Brazil", },
  { name: "Canes Technologies", city: "Porto Alegre", country: "Brazil", },
  { name: "GNP Brasil", city: "Brasilia", country: "Brazil", },
  { name: "Cloud Market", city: "Brasilia", country: "Brazil", },
  { name: "JBF Informática", city: "Maceió", country: "Brazil", },
  
]

const roles = [
  "Senior Software Engineer",
  "Software Engineer",
  "Senior Full Stack Developer",
  "Full Stack Developer",
  "Senior Full Stack Engineer",
  "Full Stack Engineer",
  "Senior Front End Engineer",
  "Front End Engineer",
  "Senior Back End Engineer",
  "Back End Engineer",
  "Senior Blockchain Engineer",
  "Blockchain Engineer",
  "Senior Blockchain Developer",
  "Blockchain Developer",
  "Senior Defi/Dapp/Dex Developer",
  "Blockchain Full Stack Developer",
  "Blockchain Front-End Developer",
  "Blockchain Back-End Developer",
]

module.exports = {
  countryCode,
  universities,
  languages,
  timezone,
  roles,
  companies,
  skilset,
  keyRoles,
};

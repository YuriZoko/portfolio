const Services = [
    {
        Id: '1',
        sImgS: 'images/service-single/development/site-internet.webp',
        sTitle: 'Création de sites web sur mesure',
        description: 'Conception et développement de sites web personnalisés, optimisés pour le SEO et adaptés à tous les appareils.',
        des2: 'J\'utilise des technologies comme HTML5, CSS3, JavaScript, et des frameworks comme React ou Vue.js.',
        des3: 'Vous bénéficiez d\'un site performant, sécurisé et compatible sur tous les navigateurs et appareils.',
        icon: 'flaticon-vector',
        ssImg1: 'images/service-single/development/site-web-1.webp',
        ssImg2: 'images/service-single/development/site-web-2.webp',
        skills: [
            'Création de sites web robustes et sécurisés.',
            'Adaptation aux appareils mobiles et optimisation pour le SEO.',
            'Utilisation de frameworks modernes comme React et Vue.js.',
            'Design d\'interfaces utilisateur ergonomiques et intuitives.',
            'Maintenance et optimisation des performances continues.'
        ]
    },
    {
        Id: '2',
        sImgS: 'images/service-single/development/web-app.webp',
        sTitle: 'Développement d\'applications web',
        description: 'Conception d\'applications web interactives avec des frameworks comme React et Node.js pour des performances optimales.',
        des2: 'Je développe des applications robustes et évolutives adaptées aux besoins de vos utilisateurs.',
        des3: 'De la conception à la mise en production, je m\'assure que votre application web fonctionne sans accroc.',
        icon: 'flaticon-palette',
        ssImg1: 'images/service-single/development/web-app-1.webp',
        ssImg2: 'images/service-single/development/web-app-2.webp',
        skills: [
            'Conception d\'applications web performantes et évolutives.',
            'Utilisation de React et Node.js pour des applications interactives.',
            'Optimisation des performances et scalabilité.',
            'Intégration d\'API tierces pour enrichir les fonctionnalités.',
            'Design d\'interfaces responsive pour une expérience utilisateur optimale.'
        ]
    },
    {
        Id: '3',
        sImgS: 'images/service-single/development/maintenance.webp',
        sTitle: 'Maintenance et optimisation de sites web',
        description: 'Amélioration des performances, de la sécurité, et gestion des mises à jour de votre site.',
        des2: 'Je propose des audits complets et des recommandations pour optimiser votre site web.',
        des3: 'Votre site restera toujours à jour et performant grâce à une maintenance continue.',
        icon: 'flaticon-add',
        ssImg1: 'images/service-single/development/maintenance-1.webp',
        ssImg2: 'images/service-single/development/maintenance-2.webp',
        skills: [
            'Audits de performance et optimisation du code.',
            'Maintenance de la sécurité et gestion des mises à jour.',
            'Surveillance continue pour identifier les améliorations potentielles.',
            'Optimisation du SEO pour améliorer la visibilité en ligne.',
            'Adaptation des sites aux nouveaux standards web.'
        ]
    },
    {
        Id: '4',
        sImgS: 'images/service-single/development/game.webp',
        sTitle: 'Conception de systèmes de gameplay',
        description: 'Développement de mécaniques de jeu interactives et immersives pour offrir des expériences captivantes.',
        des2: 'Création de systèmes de progression, de combat et d\'interactions dynamiques avec des moteurs comme Unity, Unreal Engine, ainsi que des scripts en LUA et SQF.',
        des3: 'Mon objectif est de créer des jeux captivants grâce à des mécaniques de gameplay fluides et équilibrées, quel que soit le moteur ou le langage utilisé.',
        icon: 'flaticon-coding',
        ssImg1: 'images/service-single/development/game-1.webp',
        ssImg2: 'images/service-single/development/game-2.webp',
        skills: [
            'Conception de systèmes de progression et de combat.',
            'Développement d\'interactions dynamiques pour les joueurs.',
            'Utilisation de moteurs de jeux comme Unity et Unreal Engine.',
            'Création de scripts en LUA et SQF pour des jeux comme ARMA 3.',
            'Optimisation des performances des systèmes de gameplay.'
        ]
    },
    {
        Id: '5',
        sImgS: 'images/service-single/development/ia.webp',
        sTitle: 'Création de scripts d\'IA et d\'événements',
        description: 'Programmation de comportements d\'IA et d\'événements pour enrichir l\'expérience de jeu, en utilisant notamment LUA et SQF.',
        des2: 'Je développe des scripts d\'IA et des événements dynamiques en LUA pour des jeux comme Garry\'s Mod ou SQF pour des environnements comme ARMA 3.',
        des3: 'L\'IA de vos jeux vidéo sera capable de s\'adapter aux actions du joueur pour une expérience immersive, quel que soit le moteur de jeu utilisé.',
        icon: 'flaticon-app-development',
        ssImg1: 'images/service-single/development/ia-1.webp',
        ssImg2: 'images/service-single/development/ia-2.webp',
        skills: [
            'Programmation d\'IA pour des comportements réalistes.',
            'Création d\'événements dynamiques réagissant aux actions du joueur.',
            'Utilisation de LUA pour des jeux comme Garry\'s Mod.',
            'Création de scripts SQF pour ARMA 3.',
            'Test et optimisation des performances de l\'IA.'
        ]
    },
    {
        Id: '6',
        sImgS: 'images/service-single/development/opti.webp',
        sTitle: 'Optimisation des performances de jeu',
        description: 'Amélioration de l\'efficacité du moteur de jeu Unreal et optimisation des scripts en LUA et SQF pour une expérience fluide.',
        des2: 'Je réduis les temps de chargement, optimise les graphismes et les scripts pour que vos jeux tournent efficacement sur toutes les plateformes.',
        des3: 'Le résultat : des performances optimales, que ce soit pour des jeux sur Unity, Unreal, ou des systèmes basés sur LUA et SQF.',
        icon: 'flaticon-smartphone',
        ssImg1: 'images/service-single/development/opti-1.webp',
        ssImg2: 'images/service-single/development/opti-2.webp',
        skills: [
            'Réduction des temps de chargement pour une meilleure fluidité.',
            'Optimisation des graphismes et des scripts de jeu.',
            'Utilisation d\'Unreal Engine et Unity pour des performances maximales.',
            'Optimisation des scripts en LUA et SQF.',
            'Surveillance des performances pour garantir une expérience utilisateur fluide.'
        ]
    },
    {
        Id: '7',
        sImgS: 'images/service-single/development/mobile.webp',
        sTitle: 'Développement d\'applications mobiles',
        description: 'Création d\'applications pour Android et iOS, utilisant Swift ou React Native pour des performances optimales.',
        des2: 'Je conçois des applications rapides, réactives et optimisées pour chaque plateforme mobile.',
        des3: 'Les applications que je développe offrent une expérience utilisateur fluide et intuitive.',
        icon: 'flaticon-social-media',
        ssImg1: 'images/service-single/development/mobile-1.webp',
        ssImg2: 'images/service-single/development/mobile-2.webp',
        skills: [
            'Développement d\'applications mobiles pour Android et iOS.',
            'Utilisation de Swift et React Native pour des applications natives performantes.',
            'Design d\'interfaces utilisateurs mobiles optimisées.',
            'Intégration d\'API tierces pour enrichir les fonctionnalités.',
            'Optimisation des performances pour une expérience fluide.'
        ]
    },
    {
        Id: '8',
        sImgS: 'images/service-single/development/api.webp',
        sTitle: 'Intégration d\'API et de services tiers',
        description: 'Connexion d\'applications mobiles à des services externes comme des API REST pour enrichir les fonctionnalités.',
        des2: 'J\'intègre des services comme des systèmes de paiement, géolocalisation, ou gestion des utilisateurs pour enrichir vos applications mobiles.',
        des3: 'L\'intégration se fait de manière transparente pour offrir une expérience utilisateur cohérente et riche.',
        icon: 'flaticon-promotion',
        ssImg1: 'images/service-single/development/api-1.webp',
        ssImg2: 'images/service-single/development/api-2.webp',
        skills: [
            'Connexion aux API REST pour des fonctionnalités avancées.',
            'Intégration de systèmes de paiement sécurisés.',
            'Intégration de services de géolocalisation et de gestion des utilisateurs.',
            'Optimisation de l\'interopérabilité avec des services tiers.',
            'Assurer une expérience utilisateur fluide et intégrée.'
        ]
    },
    {
        Id: '9',
        sImgS: 'images/service-single/development/mobile-maintenance.webp',
        sTitle: 'Maintenance et mise à jour des applications',
        description: 'Gestion des correctifs, des mises à jour de versions et optimisation pour les nouvelles versions des systèmes d’exploitation.',
        des2: 'Je veille à ce que vos applications mobiles restent à jour avec les dernières technologies et optimisations.',
        des3: 'Les utilisateurs profiteront toujours d\'une application performante, sécurisée et conforme aux standards actuels.',
        icon: 'flaticon-email-marketing',
        ssImg1: 'images/service-single/development/mobile-maintenance-1.webp',
        ssImg2: 'images/service-single/development/mobile-maintenance-2.webp',
        skills: [
            'Maintenance des applications pour une sécurité continue.',
            'Mises à jour régulières pour suivre les nouvelles versions d\'OS.',
            'Optimisation des performances à chaque mise à jour.',
            'Surveillance des bugs et correctifs rapides.',
            'Amélioration continue de l\'expérience utilisateur.'
        ]
    }
];

export default Services;

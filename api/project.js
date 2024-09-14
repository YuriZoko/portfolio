const Projects = [
   {
      Id: '1',
      pImg: 'images/project/ohmyfood.webp',
      title: 'OhMyFood - Développement d\'une application mobile first',
      subTitle: 'Développement Web',
      description: `Développement d'une application mobile first pour faciliter la commande de plats en ligne. Le projet se concentre sur l'ergonomie mobile et l'expérience utilisateur.`,
      projectDetails: {
          location: 'Paris, France',
          client: 'OpenClassRooms',
          consult: 'Paul',
          projectType: 'Exercice de Formation',
          duration: '1 semaine',
          completion: 'Mars 2023',
          share: 'Mobile First, Web, Exercice'
      },
      strategies: {
          description: 'L\'objectif principal est de rendre la commande de plats en ligne facile et rapide, avec une interface conviviale et une navigation fluide.',
          points: [
              'Développement mobile first pour garantir une compatibilité maximale sur smartphones.',
              'Développement des animations uniquement en CSS.',
              'Optimisation de la performance pour une navigation rapide.',
              'Design intuitif et accessible.'
          ]
      },
      quote: {
          text: '“Bonne présentation des livrables, l\'étudiant a su démontré des compétences acquises durant ce projet”',
          author: 'Georges Gouchere - Evaluateur OpenClassRooms'
      },
      approach: `L'approche adoptée était de se concentrer sur l'expérience utilisateur mobile, en développant une interface intuitive et des animations fluides pour une navigation agréable.`,
      goals: [
          'Créer une interface utilisateur simplifiée.',
          'Développer une application rapide et performante.',
          'Garantir la compatibilité sur tous les appareils mobiles.',
          'Animations CSS pour une expérience utilisateur fluide.'
      ],
      results: [
          'Application mobile responsive sur tous les appareils testés.',
          'Réduction du temps de chargement à moins de 2 secondes.',
          'Apprentissage du SAAS.',
          'Retour positif lors de la soutenance.'
      ],
      projectLink: 'https://github.com/YuriZoko/ohmyfood'
   },
   {
      Id: '2',
      pImg: 'images/project/adminpanelmultigame.webp',
      title: 'Admin Panel MultiGame - Création d\'un panel administrateur pour serveurs de jeux',
      subTitle: 'Développement Mobile',
      description: `Cette application mobile permet de gérer les données des serveurs de jeux depuis n’importe où via un téléphone (Android et iOS), il suffit de se connecter via Steam sur un compte administrateur.`,
      projectDetails: {
          location: 'Rouen, France',
          client: 'The-Programmer',
          consult: 'Maxence',
          projectType: 'Application Mobile',
          duration: '6 mois',
          completion: 'Avril 2023',
          share: 'Jeux, Administration, Mobile, Api'
      },
      strategies: {
          description: 'L\'objectif principal était de créer une solution mobile et centralisée pour la gestion de serveurs de jeux, offrant des fonctionnalités avancées tout en étant facile d\'utilisation via Android et iOS.',
          points: [
              'Connexion via Steam et gestion des accès selon l\'adminlevel de l\'utilisateur.',
              'Affichage et recherche en temps réel des données de joueurs, véhicules, maisons, etc.',
              'Modification ou suppression des données directement depuis l\'application.',
              'Ajout de nouvelles tables et colonnes dynamiquement via un fichier de configuration.',
              'Pré-configuré pour la base de données AltisLife et les scripts The-Programmer.'
          ]
      },
      quote: {
          text: '“L\'admin Panel a rendu la gestion de nos serveurs beaucoup plus efficace. Plus besoin de se connecter à chaque serveur manuellement, tout est centralisé.”',
          author: 'Leblond- Client The-Programmer'
      },
      approach: `L'approche adoptée était de développer une interface intuitive et flexible permettant aux administrateurs de serveurs de jeux de gérer facilement les données depuis leur téléphone portable, où qu'ils soient.`,
      goals: [
          'Développer une application mobile compatible Android et iOS.',
          'Créer un système de gestion dynamique et en temps réel des serveurs de jeux.',
          'Assurer une compatibilité avec Steam et une gestion des droits d\'utilisateurs.',
          'Optimiser l\'interface pour une utilisation fluide même sur mobile.'
      ],
      results: [
          'Publication sur le Google Play et l\'App Store.',
          'Gestion efficace des serveurs de jeux depuis n\'importe où avec un téléphone.',
          'Ajout de fonctionnalités dynamiques pour étendre les capacités de l\'application.',
          'Réduction du temps de gestion des serveurs et des interactions avec la base de données.'
      ],
      projectLink: 'https://www.the-programmer.com/product/admin-panel-multigame/'
   },
   {
      Id: '3',
      pImg: 'images/project/advancednotifications.webp',
      title: 'Advanced Notifications - Création d\'un système de notifications avancé avec outil d\'installation',
      subTitle: 'Développement Jeux Vidéo',
      description: `Advanced Notifications permet de personnaliser toutes les notifications du jeu Arma3. La conversion dans les scripts se fait en 1 clic grâce à un outil intégré !`,
      projectDetails: {
          location: 'Totes, France',
          client: 'The-Programmer',
          consult: 'Maxence',
          projectType: 'Développement Jeux Vidéo',
          duration: '3 mois',
          completion: 'Mai 2024',
          share: 'Jeux Vidéo, Notifications, Outils, C#, Arma3, SQF'
      },
      strategies: {
          description: 'L\'objectif principal était de fournir une solution clé en main pour personnaliser et intégrer facilement des notifications avancées dans Arma 3, avec un outil automatisé pour convertir les scripts existants.',
          points: [
              '6 types de notifications pré-configurés avec des icônes et des couleurs.',
              'Notifications animées avec barre de progression avant de disparaître.',
              'Affichage dynamique s\'adaptant à la taille du texte.',
              'Conversion en 1 clic des missions et scripts avec l\'outil intégré.',
              'Compatibilité avec le framework AltisLife et tous les scripts The-Programmer.',
              'Ajout d\'icônes animées personnalisées avec un outil générateur d\'images fourni.'
          ]
      },
      quote: {
          text: '“L\'outil d\'installation a révolutionner le temps d\'installation de ce genre de script passant de plusieurs heures à 2 secondes. C\'est à la fois rapide et efficace !”',
          author: 'Thomas - Client The-Programmer'
      },
      approach: `L'approche adoptée a été de simplifier au maximum la gestion et la personnalisation des notifications dans Arma 3, tout en assurant une conversion automatique des scripts existants pour une intégration facile.`,
      goals: [
          'Permettre la personnalisation avancée des notifications en jeu.',
          'Simplifier la conversion des scripts existants en un clic.',
          'Assurer la compatibilité avec le framework AltisLife et les scripts The-Programmer.',
          'Fournir un outil pour générer des icônes animées personnalisées.'
      ],
      results: [
          'Augmentation du temps d\'installation des notifications en jeu.',
          'Réduction du temps nécessaire pour convertir les scripts grâce à l\'outil intégré.',
          'Compatibilité étendue avec divers frameworks et scripts.',
          'Retour très positif des utilisateurs sur la facilité d\'utilisation et de personnalisation.'
      ],
      projectLink: 'https://www.the-programmer.com/product/advanced-notifications/'
    },
   {
      Id: '4',
      pImg: 'images/project/custom.webp',
      title: 'Custom The-Programmer - Site de prestations de services et de gestion pour développeurs',
      subTitle: 'Développement Web',
      description: `Création d'un site web de gestion et de services pour développeurs, permettant aux utilisateurs de suivre leurs projets, de gérer leurs clients et de facturer leurs services.`,
      projectDetails: {
          location: 'Totes, France',
          client: 'The Programmer',
          consult: 'Maxence',
          projectType: 'Développement Web',
          duration: '6 mois',
          completion: 'Juin 2022',
          share: 'Développement Web, Gestion, Services'
      },
      strategies: {
          description: 'L\'objectif principal était de concevoir un site de gestion intuitif et complet pour les développeurs, leur permettant de centraliser leurs projets et leurs relations avec les clients.',
          points: [
              'Développement d\'un tableau de bord interactif pour le suivi des projets.',
              'Intégration de systèmes de gestion des paiements.',
              'Optimisation de l\'interface pour une utilisation simple et efficace.',
              'Mise en place d\'un système de gestion des clients.',
              'Telechargement des scripts sur le site.'
          ]
      },
      quote: {
          text: '“Ce site a simplifié notre gestion des projets et des clients. Le tableau de bord est extrêmement pratique et facile à utiliser.”',
          author: 'Maxence - CEO The Programmer'
      },
      approach: `L'approche adoptée a été de développer une interface utilisateur simple mais puissante, permettant aux développeurs de gérer efficacement leurs projets et leurs clients, tout en garantissant une expérience utilisateur fluide.`,
      goals: [
          'Développer un système de gestion de projets complet.',
          'Faciliter la gestion des clients et des paiements.',
          'Assurer la compatibilité du site avec différents appareils.',
          'Optimiser l\'interface pour une utilisation fluide et intuitive.'
      ],
      results: [
          'Réduction du temps de gestion des projets de 50%.',
          'Augmentation de la satisfaction des clients grâce à un suivi précis.',
          'Interface utilisateur très appréciée pour sa simplicité et son efficacité.',
          'Amélioration de la gestion des paiements.'
      ],
      projectLink: 'https://custom.the-programmer.com/'
   }
];

export default Projects;

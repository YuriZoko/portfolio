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
           'Apprentissage du SAAS',
           'Retour positif lors de la soutenance'
       ]
    },
    {
       Id: '2',
       pImg: 'images/project/adminpanelmultigame.webp',
       title: 'Admin Panel MultiGame - Création d\'un panel administrateur pour serveurs de jeux',
       subTitle: 'Développement Mobile',
       description: `Développement d'un panel administrateur permettant de gérer plusieurs serveurs de jeux en simultané, avec une interface simple et un accès sécurisé.`,
       projectDetails: {
           location: 'Londres, UK',
           client: 'MultiGame Corp',
           consult: 'Harry Johnson',
           projectType: 'Panel Administrateur',
           duration: '6 mois',
           completion: 'Avril 2023',
           share: 'Jeux, Administration, MultiServeurs'
       },
       strategies: {
           description: 'L\'objectif principal était de créer une solution centralisée pour la gestion de serveurs de jeux, offrant des fonctionnalités avancées tout en étant facile d\'utilisation.',
           points: [
               'Création d\'une interface d\'administration intuitive.',
               'Gestion des permissions utilisateur pour chaque serveur.',
               'Intégration d\'API pour la surveillance en temps réel des serveurs.',
               'Automatisation des sauvegardes et des mises à jour.',
               'Optimisation de la sécurité avec authentification à deux facteurs.'
           ]
       },
       quote: {
           text: '“L\'admin panel a rendu la gestion de nos serveurs beaucoup plus efficace. Plus besoin de se connecter à chaque serveur manuellement, tout est centralisé.”',
           author: 'Mark - Directeur Technique MultiGame'
       },
       approach: `L'approche adoptée était de développer une interface intuitive tout en offrant des fonctionnalités complexes de gestion multi-serveurs. L'architecture a été pensée pour être évolutive et sécurisée.`,
       goals: [
           'Développer un tableau de bord pour la gestion centralisée.',
           'Assurer la compatibilité avec plusieurs types de serveurs de jeux.',
           'Mettre en place un système de permissions utilisateurs.',
           'Améliorer la sécurité et la surveillance en temps réel.'
       ],
       results: [
           'Gestion simplifiée de plus de 20 serveurs simultanément.',
           'Diminution du temps de gestion des serveurs de 40%.',
           'Amélioration de la sécurité grâce à l\'authentification à deux facteurs.',
           'Retour utilisateur très positif sur la fluidité de l\'interface.'
       ]
    },
    {
      Id:'3',
      pImg:'images/project/advancednotifications.webp',
      title:'Advanced Notifiations - Création d\'un système de notifications avancé avec outil d\'installation',  
      subTitle:'Développement Jeux Vidéo',   
   },
   {
      Id:'4',
      pImg:'images/project/custom.webp',
      title:'Custom The-Programmer - Site de préstations de services et de gestion pour développeurs', 
      subTitle:'Développement Web',    
   },
   
    
]

export default Projects;
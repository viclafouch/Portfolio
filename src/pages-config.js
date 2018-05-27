import FormationsContainer from './containers/FormationContainer';
import ProductionsContainer from './containers/ProductionsContainer';
import SkillContainer from './containers/SkillsContainer';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';

export default [
    {
        metas: {
            title: 'Portfolio de',
            description: "Je m'appelle Victor de la Fouchardière et je suis développeur web et étudiant depuis septembre 2015 à l'Ecole Européenne des Métiers de l'Internet (EEMI), j'ai une vraie vocation pour la programmation web (React.js, Angular 6, Vue.js,...)",
            contentType: 'website'
        },
        url: '/',
        exact: true,
        component: HomeContainer,
        inNav: true,
        textInNav: 'Accueil'
    },
    {
        metas: {
            title: 'Compétences de',
            description: "Découvrez les compétences de Victor de la Fouchardière, développeur web et étudiant à l'Ecole Européenne des Métiers de l'Internet (EEMI)",
            contentType: 'website'
        },
        url: '/competences',
        exact: false,
        component: SkillContainer,
        inNav: true,
        textInNav: 'Compétences'
    },
    {
        metas: {
            title: 'Productions de',
            description: "Découvrez les productions de Victor de la Fouchardière, développeur web et étudiant à l'Ecole Européenne des Métiers de l'Internet (EEMI)",
            contentType: 'website'
        },
        url: '/productions',
        exact: false,
        component: ProductionsContainer,
        inNav: true,
        textInNav: 'Productions'
    },
    {
        metas: {
            title: 'Formations de',
            description: "Découvrez les formations de Victor de la Fouchardière, développeur web et étudiant à l'Ecole Européenne des Métiers de l'Internet (EEMI)",
            contentType: 'website'
        },
        url: '/formations',
        exact: false,
        component: FormationsContainer,
        inNav: true,
        textInNav: 'Formations'
    },
    {
        metas: {
            title: 'Contacter',
            description: "Prenez contact maintenant avec Victor de la Fouchardière, développeur et étudiant à l'Ecole Européenne des Métiers de l'Internet (EEMI). Email : victor.dlf@outlook.fr",
            contentType: 'website'
        },
        url: '/contact',
        exact: false,
        component: ContactContainer,
        inNav: true,
        textInNav: 'Contact'
    }
]
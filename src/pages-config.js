import { FormationsContainer } from './containers/FormationContainer';
import { ProductionsContainer } from './containers/ProductionsContainer';
import { SkillContainer } from './containers/SkillsContainer';
import { HomeContainer } from './containers/HomeContainer';
import { ContactContainer } from './containers/ContactContainer';

export default [
    {
        metas: {
            title: 'Portfolio de',
            description: 'Ma description',
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
            description: 'Ma description',
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
            description: 'Ma description',
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
            description: 'Ma description',
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
            description: 'Ma description',
            contentType: 'website'
        },
        url: '/contact',
        exact: false,
        component: ContactContainer,
        inNav: true,
        textInNav: 'Contact'
    }
]
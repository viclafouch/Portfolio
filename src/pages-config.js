import { FormationsContainer } from './containers/FormationContainer';
import { ProductionsContainer } from './containers/ProductionsContainer';
import { SkillContainer } from './containers/SkillsContainer';
import { HomeContainer } from './containers/HomeContainer';

export default [
    {
        metas: {
            title: 'Portfolio',
            description: 'Ma description'
        },
        url: '/',
        exact: true,
        component: HomeContainer,
        inNav: true,
        textInNav: 'Accueil'
    },
    {
        metas: {
            title: 'Compétences',
            description: 'Ma description'
        },
        url: '/competences',
        exact: false,
        component: SkillContainer,
        inNav: true,
        textInNav: 'Compétences'
    },
    {
        metas: {
            title: 'Productions',
            description: 'Ma description'
        },
        url: '/productions',
        exact: false,
        component: ProductionsContainer,
        inNav: true,
        textInNav: 'Productions'
    },
    {
        metas: {
            title: 'Formations',
            description: 'Ma description'
        },
        url: '/formations',
        exact: false,
        component: FormationsContainer,
        inNav: true,
        textInNav: 'Formations'
    }
]
import routeImporter from '../modules/importers/routeImporter';

const routes = routeImporter(require.context('./customers', false, /.*\.js$/));
const RouterView = () => import('../core/Router.vue');

export default {
    path: '/customers/',
    component: RouterView,
    meta: {
        breadcrumb: 'customers',
        route: 'customers.index',
    },
    children: routes,
};


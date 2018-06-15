import routeImporter from '../modules/importers/routeImporter';

const routes = routeImporter(require.context('./workorders', false, /.*\.js$/));
const RouterView = () => import('../core/Router.vue');

export default {
    path: '/workorders/',
    component: RouterView,
    meta: {
        breadcrumb: 'workorders',
        route: 'workorders.index',
    },
    children: routes,
};


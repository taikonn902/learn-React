//layout
import { HeaderOnly } from '~/components/Layout';

//page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/components/Layout/DefaultLayout/Upload';
import Search from '~/pages/Search';

//public link
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [
    //login use this
];

export { publicRoutes, privateRoutes };

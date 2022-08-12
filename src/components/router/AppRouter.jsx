import { Routes, Route } from 'react-router-dom'
import Main from '../../pages/Main';
import Layout from '../Layout/Layout';
import { publicRoutes } from './routers';

const AppRouter = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Layout/>}>
                {publicRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={route.element} />
                )}
                <Route path='*' element={<Main/>}/>
            </Route>
        </Routes>
     );
}
 
export default AppRouter;
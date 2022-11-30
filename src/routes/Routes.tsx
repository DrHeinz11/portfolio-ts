
import { Route } from 'wouter'
import { lazy, FC, Suspense } from 'react'
import { Maintenance } from './components'

const Home = lazy(() => import('../pages/Home/Home'))
const ProjectAll = lazy(() => import('../pages/Projects/ProjectAll'))

const Routes: FC = (props) => {
    return (

        <>
            {/* <Route path="/" >
                <Home />
            </Route>
            <Route path="/*">
                <Error/>
            </Route>
            <Route path="/products/:id" >
                <ProjectAll />
            </Route> */}
            <Route path="/">
                <Maintenance />
            </Route>
        </>



    )
}

export default Routes
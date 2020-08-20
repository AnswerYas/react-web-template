import React, { ComponentType, LazyExoticComponent, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from '@/components/Loading'
import NotFound from '@/pages/exception/404'
import ServiceError from '@/pages/exception/500'

const App = lazy(() => import(/* webpackChunkName:"app" */ '@/pages/app'))

export interface RouteItem {
    path: string | [string]
    redirect?: string
    children?: RouteItem[]
    layout?: ComponentType
    parent?: RouteItem
    component?: ComponentType | LazyExoticComponent<ComponentType>
}

export const renderRoutes = (routes: RouteItem[]) => {
    const renderedRoutesList: any = []

    const loopRender = (routes: RouteItem[], parentPath: string) => {
        if (Array.isArray(routes)) {
            for (let route of routes) {
                const { path, redirect, children, component } = route
                const routePath = `${parentPath}${path}`
                if (redirect) {
                    renderedRoutesList.push(
                        <Redirect key={routePath} exact from={routePath} to={redirect} />,
                    )
                }
                if (component) {
                    renderedRoutesList.push(
                        <Route key={routePath} exact path={routePath} component={component} />,
                    )
                }
                if (Array.isArray(children) && children.length > 0) {
                    loopRender(children, routePath)
                }
            }
        }
    }
    loopRender(routes, '')
    return renderedRoutesList
}

const routers = () => (
    <Suspense fallback={<Loading />}>
        <ServiceError>
            <Switch>
                <Route key="app" path="/" component={App} />
                <Redirect key="app-redirect" exact from="/" to="/condition-monitoring/overview" />
                <Route component={NotFound} exact />
            </Switch>
        </ServiceError>
    </Suspense>
)
export default routers

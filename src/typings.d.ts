declare module 'slash2'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'omit.js'

declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
    const content: SvgrComponent
    export default content
}

interface Global {
    lang: string
}

interface Params {
    [propName: string]: any
}

interface State {
    global: Global
}

type Options = {
    label: string
    value: string | number
}[]

interface HttpResponse<D> {
    success: boolean
    data: D
    message: string
}

interface LooseObject {
    [key: string]: any
}

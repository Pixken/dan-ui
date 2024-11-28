import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'
type SFCWithInstall<T> = T & Plugin

export function makeInstaller(components: Plugin[]) {
  const install = (app: App) => {
    each(components, (component) => {
      app.use(component)
    })
  }
  return install as Plugin
}


export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component((component as any).name, component as Plugin)
  }
  return component as SFCWithInstall<T>
}
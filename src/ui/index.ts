import type { App, ComponentInstance } from 'vue'
import { Layout, Region } from './Layout'

const components: ComponentInstance<any>[] = [Layout, Region]

export default {
  install(app: App) {
    components.forEach(com => app.component(com.name, com))
  }
}

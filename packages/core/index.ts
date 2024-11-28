import { makeInstaller } from '@dan-ui/utils'
import components from './components'
import '@dan-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '@dan-ui/components'
export default installer
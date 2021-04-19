/* typescript 不支持`*.vue`文件, 所以需要下面的声明 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

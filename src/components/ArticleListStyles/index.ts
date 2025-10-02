import ArticleBase from './ArticleBase.vue'

export interface IArticleListStyles {
  base: typeof ArticleBase
  // waterfall: any
  // card: any
}

const components: IArticleListStyles = {
  base: ArticleBase
}

export default components
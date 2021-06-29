export default {
  title: `Bienvenidos`,
  tags: ['bienvenidos', 'primer post'],
  spoiler: "Learn how to add new posts and tweak the theme to your liking.",
  getContent: () => import('./document.mdx'),
}
import Causl from './components/causl'
import { getAllPosts } from './utils/getMarkdownContent'

export default function Page() {
  const posts = getAllPosts()
  return (
    <div>
      <Causl posts={posts} />
    </div>
  )
}

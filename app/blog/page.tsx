import { getAllPosts } from '../lib/getMarkdownContent'
import Causl from './causl'

export default function Page() {
  const posts = getAllPosts()
  return (
    <div>
      <Causl posts={posts} />
    </div>
  )
}

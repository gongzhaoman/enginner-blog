'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Causl({ posts }: { posts: { title: string; slug: string }[] }) {
  const [displayPosts, setDisplayPosts] = useState(posts.slice(0, 10))
  const [pageIndex, setPageIndex] = useState(1)

  const loadMorePosts = () => {
    const newPageIndex = pageIndex + 1
    const newDisplayPosts = posts.slice(0, 10 * newPageIndex) // 获取更多文章
    setDisplayPosts(newDisplayPosts)
    setPageIndex(newPageIndex)
  }

  return (
    <div>
      <ul>
        {displayPosts.map((post, index) => (
          <li key={index}>
            <Link href={'/' + post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={loadMorePosts}>More</button>
    </div>
  )
}

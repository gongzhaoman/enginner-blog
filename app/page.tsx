import Causl from './components/causl'
import { getAllPosts } from './utils/getMarkdownContent'

export default function Page() {
  const posts = getAllPosts()
  return (
    <main>
      <section className="relative  mx-auto max-w-[720px] py-10 lg:pt-16">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="mb-10 text-7xl leading-[1.2]">What's new at Evernote</h1>
            <p className="text-xl leading-[1.6]">
              Curious about what's happening at Evernote? Check out the articles below to see all
              the exciting things we're working on.
            </p>
          </div>
        </div>
      </section>

      <div>
        <Causl posts={posts} />
      </div>
    </main>
  )
}

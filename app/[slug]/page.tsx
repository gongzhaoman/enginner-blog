import '../../public/styles/lapis.css'

import fs from 'fs'
import path from 'path'

import { getMarkdownDataByFileName } from '../../lib/getMarkdownContent'

export async function generateStaticParams() {
  const rootDirPath = path.resolve('./markdown-notes')

  const slugs = fs
    .readdirSync(rootDirPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .reduce(
      (accumulatedSlugs, authorDirent) => {
        const authorDirPath = path.join(rootDirPath, authorDirent.name)
        const authorFiles = fs
          .readdirSync(authorDirPath, { withFileTypes: true })
          .filter((fileDirent) => fileDirent.isFile() && path.extname(fileDirent.name) === '.md')
          .map((fileDirent) => ({
            slug: path.basename(fileDirent.name, '.md'),
          }))

        return accumulatedSlugs.concat(authorFiles)
      },
      [] as { slug: string }[],
    )

  return slugs
}

export default function Page({ params }: { params: { slug: string } }) {
  const htmlContent = getMarkdownDataByFileName(params.slug)
  return (
    <div
      className="markdown-content mx-auto"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></div>
  )
}

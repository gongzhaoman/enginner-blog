// lib/markdown.js
import fs from 'fs'
import { marked } from 'marked'
import path from 'path'

// 根据文件名查找 Markdown 文件并转换为 HTML
export function getMarkdownDataByFileName(fileName: string) {
  const rootDirPath = path.resolve('./markdown-notes')
  const authors = fs.readdirSync(rootDirPath)

  for (const author of authors) {
    const authorPath = path.join(rootDirPath, author)
    const files = fs.readdirSync(authorPath)

    for (const file of files) {
      if (file.replace('.md', '') === fileName) {
        const fullPath = path.join(authorPath, file)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const htmlContent = marked.parse(fileContents)
        return htmlContent
      }
    }
  }

  // 如果找不到文件，可以根据需要返回一个错误或默认信息
  return 'File not found'
}

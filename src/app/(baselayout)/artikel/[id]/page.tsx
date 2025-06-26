'use client'

import Image from 'next/image'
import { format } from 'date-fns'
import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

interface Article {
  title: string
  author: string
  publishedAt: string
  coverImage: string
  content: string
  images: Array<{url: string, caption: string}>
  category: string
  readTime: number
}

const generateArticle = (): Article => {
  const paragraphs = Array.from({ length: 3 }, () => faker.lorem.paragraph())
  
  const images = Array.from({ length: 2 }, () => ({
    url: faker.image.url(),
    caption: faker.lorem.sentence()
  }))

  return {
    title: faker.lorem.sentence(),
    author: faker.person.fullName(),
    publishedAt: faker.date.past().toISOString(),
    coverImage: faker.image.url(),
    content: `
      <h2>${faker.lorem.sentence()}</h2>
      <p>${paragraphs[0]}</p>
      
      <h2>${faker.lorem.sentence()}</h2>
      <p>${paragraphs[1]}</p>
      
      <h3>${faker.lorem.sentence()}</h3>
      <ul>
        ${Array.from({ length: 3 }, () => `<li>${faker.lorem.sentence()}</li>`).join('')}
      </ul>
      
      <p>${paragraphs[2]}</p>
    `,
    images,
    category: faker.helpers.arrayElement(['Mental Health', 'Wellness', 'Self Care', 'Psychology']),
    readTime: faker.number.int({ min: 3, max: 10 })
  }
}

export default function ArticleDetail() {
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    setArticle(generateArticle())
  }, [])

  if (!article) {
    return <div>Loading...</div>
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{article.category}</span>
          <span>{article.readTime} min read</span>
        </div>

        <h1 className="text-4xl font-bold">{article.title}</h1>
        
        <div className="flex items-center text-gray-600">
          <span>{format(new Date(article.publishedAt), 'MMMM dd, yyyy')}</span>
          <span className="mx-2">•</span>
          <span>{article.author}</span>
        </div>

        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {article.images && article.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {article.images.map((image, index) => (
              <div key={index} className="relative aspect-square group">
                <Image
                  src={image.url}
                  alt={image.caption || `Article image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-b-lg">
                    {image.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

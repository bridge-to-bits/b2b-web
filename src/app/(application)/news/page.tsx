'use client'

import React, { memo } from 'react'
import { useQuery } from '@tanstack/react-query'
import NewsApi from '@/app/api/news/news-api'
import Link from 'next/link'
import Image from 'next/image'

interface SectionProps<T> {
  title: string
  items: T[]
  isScrollable?: boolean
  type: 'articles' | 'interviews'
}

interface CardProps {
  id: string
  title: string
  backgroundPhotoUrl: string
  type: 'articles' | 'interviews'
}

const MainPage: React.FC = () => {
  const { data: articles, isLoading: articlesLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: NewsApi.getArticles,
    select: (data) => data.slice(0, 4),
  })

  const { data: interviews, isLoading: interviewsLoading } = useQuery({
    queryKey: ['interviews'],
    queryFn: NewsApi.getInterviews,
    select: (data) => data.slice(0, 4),
  })

  if (articlesLoading || interviewsLoading) {
    return <div className="text-center mt-20 text-primary">Loading...</div>
  }

  const navigationItems = [
    { label: 'Статті', href: '/articles' },
    { label: 'Інтерв\'ю', href: '/interviews' },
    { label: 'Альбоми', href: '/albums' },
    { label: 'Треки', href: '/tracks' },
  ]

  return (
    <div className="min-h-screen bg-[#1C1C1C] p-6 text-white">
      {/* Navigation Buttons */}
      <nav className="flex justify-center space-x-4 mb-8">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="px-8 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Articles Section */}
      <Section
        title="Головні новини тижня"
        items={articles ?? []}
        type="articles"
      />

      {/* Interviews Section */}
      <Section
        title="Топ тижневих інтерв'ю"
        items={interviews ?? []}
        type="interviews"
        isScrollable
      />
    </div>
  )
}

const Section = memo(
  <T extends { id: string; title: string; backgroundPhotoUrl: string }>({
      title,
      items,
      isScrollable = false,
      type,
    }: SectionProps<T>) => (
    <div className="mb-12">
      <div className="relative py-3">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />

        {/* Title */}
        <h2 className="text-xl font-bold text-center relative z-10">
          {title}
        </h2>
      </div>

      {/* Cards Container */}
      <div
        className={`grid gap-4 ${
          isScrollable
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            backgroundPhotoUrl={item.backgroundPhotoUrl}
            type={type}
          />
        ))}
      </div>
    </div>
  )
)
Section.displayName = 'Section'

const Card: React.FC<CardProps> = memo(({ id, title, backgroundPhotoUrl, type }) => (
  <Link
    href={`/news/${type}/${id}`}
    className="relative group w-full max-w-xs mx-auto rounded-lg overflow-hidden bg-gray-800 shadow-lg"
  >
    {/* Image */}
    <Image
      src={backgroundPhotoUrl}
      alt={`Image for ${title}`}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      width={300}
      height={200}
      loading="lazy"
    />

    {/* Title Overlay */}
    <div className="absolute inset-0 bg-black/60 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <p className="text-sm font-medium text-white">{title}</p>
    </div>
  </Link>
))
Card.displayName = 'Card'

export default MainPage
'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import NewsApi from '@/app/api/news/news-api'
import Link from 'next/link'
import Image from 'next/image';

// Define props for the Section component
interface SectionProps<T> {
  title: string
  items: T[]
  isScrollable?: boolean
  type: 'articles' | 'interviews'
}

// Update interface to include id
interface CardProps {
  id: string
  title: string
  backgroundPhotoUrl: string
  type: 'articles' | 'interviews'
}

// Main Page Component
const MainPage: React.FC = () => {
  const { data: articles, isLoading: articlesLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: NewsApi.getArticles,
    select: (data) => data.slice(0,4),
  })

  const { data: interviews, isLoading: interviewsLoading } = useQuery({
    queryKey: ['interviews'],
    queryFn: NewsApi.getInterviews,
    select: (data) => data.slice(0,4),
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
            className="bg-orange px-8 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
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

// Section Component
const Section = <T extends { id: string; title: string; backgroundPhotoUrl: string }>({
                                                                                        title,
                                                                                        items,
                                                                                        isScrollable = false,
                                                                                        type,
                                                                                      }: SectionProps<T>) => (
  <div className="mb-12">
    <div className="relative py-3">
      {/* Background gradient container */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue to-transparent opacity-20" />

      {/* Title with its own gradient for text */}
      <h2 className="text-xl font-bold text-center relative z-10 bg-clip-text">
        {title}
      </h2>
    </div>
    <div className="relative mt-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid ${
            isScrollable
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          } gap-4 justify-items-center`}
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
    </div>
  </div>
)

// Card Component
const Card: React.FC<CardProps> = ({ id, title, backgroundPhotoUrl, type }) => (
  <Link
    href={`/news/${type}/${id}`}
    className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer w-full max-w-sm block"
  >
    <Image
      src={backgroundPhotoUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-100">
      <p className="text-white text-sm font-medium">{title}</p>
    </div>
  </Link>
)

export default MainPage
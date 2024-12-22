'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import NewsApi from '@/app/api/news/news-api'
import { ChevronRight } from 'lucide-react'

// Define props for the Section component
interface SectionProps<T> {
  title: string
  items: T[]
  isScrollable?: boolean
  showMoreButton?: boolean
}

// Main Page Component
const MainPage: React.FC = () => {
  const { data: articles, isLoading: articlesLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: NewsApi.getArticles,
    select: (data) => data,
  })

  const { data: interviews, isLoading: interviewsLoading } = useQuery({
    queryKey: ['interviews'],
    queryFn: NewsApi.getInterviews,
    select: (data) => data,
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
          <button
            key={item.label}
            className="bg-orange px-8 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Articles Section */}
      <Section
        title="Головні новини тижня"
        items={articles ?? []}
      />

      {/* Interviews Section */}
      <Section
        title="Топ тижневих інтерв'ю"
        items={interviews ?? []}
        isScrollable
        showMoreButton
      />
    </div>
  )
}

// Section Component
  const Section = <T extends { id: string; title: string; backgroundPhotoUrl: string }>({
                                                                                          title,
                                                                                          items,
                                                                                          isScrollable = false,
                                                                                          showMoreButton = false,
                                                                                        }: SectionProps<T>) => (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-6 bg-[#1E0B40] py-3 px-4 rounded-lg">
        {title}
      </h2>
      <div className="relative">
        <div
          className={`grid ${
            isScrollable
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
          } gap-4`}
        >
          {items.map((item) => (
            <Card key={item.id} title={item.title} backgroundPhotoUrl={item.backgroundPhotoUrl} />
          ))}
        </div>
        {showMoreButton && (
          <button
            className="absolute -right-2 top-1/2 -translate-y-1/2 text-blue-500 p-2"
            aria-label="Show more"
          >
            <ChevronRight size={24} className="text-blue" />
          </button>
        )}
      </div>
    </div>
  )

// Card Component
  interface CardProps {
    title: string
    backgroundPhotoUrl: string
  }

  const Card: React.FC<CardProps> = ({ title, backgroundPhotoUrl }) => (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
      <img
        src={backgroundPhotoUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-100">
        <p className="text-white text-sm font-medium">{title}</p>
      </div>
    </div>
  )

  export default MainPage
'use client'

import { memo, useMemo, useState, useCallback } from 'react'
import { PlantillaCard } from './plantilla-card'
import type { Template } from '@/lib/template-data'

interface OptimizedTemplateListProps {
  templates: Template[]
  categories: string[]
  searchTerm?: string
}

const ITEMS_PER_PAGE = 12

const TemplateListMemo = memo(function TemplateList({ 
  templates, 
  currentPage, 
  itemsPerPage 
}: { 
  templates: Template[]
  currentPage: number
  itemsPerPage: number
}) {
  const paginatedTemplates = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return templates.slice(start, start + itemsPerPage)
  }, [templates, currentPage, itemsPerPage])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {paginatedTemplates.map((template) => (
        <PlantillaCard 
          key={template.id} 
          plantilla={template} 
          showImage={false}
        />
      ))}
    </div>
  )
})

export const OptimizedTemplateList = memo(function OptimizedTemplateList({
  templates,
  categories,
  searchTerm = ''
}: OptimizedTemplateListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredTemplates = useMemo(() => {
    let filtered = templates

    // Filter by category
    if (selectedCategory !== 'todas') {
      filtered = filtered.filter(template => 
        template.categoria.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(template =>
        template.titulo.toLowerCase().includes(searchLower) ||
        template.descripcion.toLowerCase().includes(searchLower) ||
        template.categoria.toLowerCase().includes(searchLower)
      )
    }

    return filtered
  }, [templates, selectedCategory, searchTerm])

  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE)

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }, [])

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange('todas')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'todas'
              ? 'bg-orange-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Todas ({templates.length})
        </button>
        {categories.map((category) => {
          const count = templates.filter(t => t.categoria === category).length
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category} ({count})
            </button>
          )
        })}
      </div>

      {/* Results info */}
      <div className="text-gray-600">
        Mostrando {filteredTemplates.length} plantilla{filteredTemplates.length !== 1 ? 's' : ''}
        {searchTerm && ` para "${searchTerm}"`}
        {selectedCategory !== 'todas' && ` en la categoría "${selectedCategory}"`}
      </div>

      {/* Template list */}
      {filteredTemplates.length > 0 ? (
        <>
          <TemplateListMemo 
            templates={filteredTemplates}
            currentPage={currentPage}
            itemsPerPage={ITEMS_PER_PAGE}
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
              >
                Anterior
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === page
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
              >
                Siguiente
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron plantillas que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  )
})
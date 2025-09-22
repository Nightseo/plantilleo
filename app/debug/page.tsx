import { getAllTemplates, getTemplateBySlug } from '@/lib/template-data'

export default function DebugPage() {
  const allTemplates = getAllTemplates()
  const testSlug1 = 'modelo-de-carta-de-amonestacion'
  const testSlug2 = 'modelo-carta-amonestacion'
  
  const result1 = getTemplateBySlug(testSlug1)
  const result2 = getTemplateBySlug(testSlug2)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug Information</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Total Templates: {allTemplates.length}</h2>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Template Lookup Test</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Testing slug:</strong> {testSlug1}</p>
          <p><strong>Result:</strong> {result1 ? `FOUND: ${result1.titulo}` : 'NOT FOUND'}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded mt-2">
          <p><strong>Testing slug:</strong> {testSlug2}</p>
          <p><strong>Result:</strong> {result2 ? `FOUND: ${result2.titulo}` : 'NOT FOUND'}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">All Template Slugs</h2>
        <div className="bg-gray-100 p-4 rounded max-h-96 overflow-y-auto">
          {allTemplates.map((template, i) => (
            <div key={template.id} className="mb-2">
              <strong>{i + 1}.</strong> {template.titulo}
              <br />
              <code className="text-sm text-blue-600">Slug: {template.slug}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
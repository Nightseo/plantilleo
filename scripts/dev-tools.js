#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const commands = {
  'check-templates': checkTemplates,
  'validate-json': validateJson,
  'analyze-performance': analyzePerformance,
  'help': showHelp
}

function checkTemplates() {
  console.log('🔍 Checking template consistency...')
  
  try {
    const data = JSON.parse(fs.readFileSync('data/plantillas.json', 'utf-8'))
    const templates = data.plantillas
    
    console.log(`📊 Found ${templates.length} templates`)
    
    // Check for duplicate IDs
    const ids = templates.map(t => t.id)
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index)
    if (duplicateIds.length > 0) {
      console.error('❌ Duplicate IDs found:', duplicateIds)
    } else {
      console.log('✅ All template IDs are unique')
    }
    
    // Check for duplicate slugs
    const slugs = templates.map(t => t.slug)
    const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index)
    if (duplicateSlugs.length > 0) {
      console.error('❌ Duplicate slugs found:', duplicateSlugs)
    } else {
      console.log('✅ All template slugs are unique')
    }
    
    // Check categories
    const categories = [...new Set(templates.map(t => t.categoria))]
    console.log(`📁 Categories (${categories.length}):`, categories.join(', '))
    
    // Check missing fields
    const requiredFields = ['id', 'titulo', 'slug', 'categoria', 'descripcion', 'descargas', 'valoracion']
    let hasErrors = false
    
    templates.forEach((template, index) => {
      const missing = requiredFields.filter(field => !template[field])
      if (missing.length > 0) {
        console.error(`❌ Template ${index + 1} (${template.titulo || 'Unknown'}) missing fields:`, missing)
        hasErrors = true
      }
    })
    
    if (!hasErrors) {
      console.log('✅ All templates have required fields')
    }
    
  } catch (error) {
    console.error('❌ Error checking templates:', error.message)
  }
}

function validateJson() {
  console.log('🔍 Validating JSON structure...')
  
  try {
    const content = fs.readFileSync('data/plantillas.json', 'utf-8')
    JSON.parse(content)
    console.log('✅ JSON structure is valid')
  } catch (error) {
    console.error('❌ JSON validation failed:', error.message)
    
    if (error.message.includes('line') && error.message.includes('column')) {
      const lines = fs.readFileSync('data/plantillas.json', 'utf-8').split('\n')
      const match = error.message.match(/line (\d+) column (\d+)/)
      if (match) {
        const lineNum = parseInt(match[1])
        const colNum = parseInt(match[2])
        console.log(`Problem around line ${lineNum}:`)
        console.log(`${lineNum - 1}: ${lines[lineNum - 2] || ''}`)
        console.log(`${lineNum}: ${lines[lineNum - 1] || ''}`)
        console.log(`${lineNum + 1}: ${lines[lineNum] || ''}`)
        console.log(`${' '.repeat(colNum + 3)}^`)
      }
    }
  }
}

function analyzePerformance() {
  console.log('📊 Analyzing performance...')
  
  try {
    const data = JSON.parse(fs.readFileSync('data/plantillas.json', 'utf-8'))
    const jsonSize = fs.statSync('data/plantillas.json').size
    
    console.log(`📂 JSON file size: ${(jsonSize / 1024).toFixed(2)} KB`)
    console.log(`📄 Total templates: ${data.plantillas.length}`)
    console.log(`💾 Average template size: ${(jsonSize / data.plantillas.length / 1024).toFixed(2)} KB`)
    
    // Analyze template sizes
    const templateSizes = data.plantillas.map(template => {
      return {
        title: template.titulo,
        size: JSON.stringify(template).length
      }
    }).sort((a, b) => b.size - a.size)
    
    console.log('\n🔝 Largest templates:')
    templateSizes.slice(0, 5).forEach((template, i) => {
      console.log(`${i + 1}. ${template.title}: ${(template.size / 1024).toFixed(2)} KB`)
    })
    
    // Category distribution
    const categoryCount = {}
    data.plantillas.forEach(template => {
      categoryCount[template.categoria] = (categoryCount[template.categoria] || 0) + 1
    })
    
    console.log('\n📊 Templates by category:')
    Object.entries(categoryCount)
      .sort(([,a], [,b]) => b - a)
      .forEach(([category, count]) => {
        console.log(`${category}: ${count} templates`)
      })
    
  } catch (error) {
    console.error('❌ Error analyzing performance:', error.message)
  }
}

function showHelp() {
  console.log(`
🛠️  Plantilleo Development Tools

Available commands:
  check-templates     - Check template data consistency
  validate-json      - Validate JSON structure
  analyze-performance - Analyze file sizes and performance
  help              - Show this help message

Usage:
  node scripts/dev-tools.js <command>

Examples:
  node scripts/dev-tools.js check-templates
  node scripts/dev-tools.js validate-json
`)
}

// Run the command
const command = process.argv[2]
if (commands[command]) {
  commands[command]()
} else {
  console.error(`❌ Unknown command: ${command}`)
  showHelp()
  process.exit(1)
}
const fs = require('fs');
const path = require('path');

function buildTemplates() {
  const templatesDir = path.join(__dirname, '..', 'data', 'plantillas');
  const outputFile = path.join(__dirname, '..', 'data', 'plantillas.json');

  try {
    // Lee todos los archivos JSON del directorio plantillas
    const files = fs.readdirSync(templatesDir).filter(file => file.endsWith('.json'));
    
    console.log(`📁 Encontrados ${files.length} archivos de plantillas`);
    
    const templates = [];
    
    files.forEach(file => {
      const filePath = path.join(templatesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      try {
        const template = JSON.parse(fileContent);
        templates.push(template);
        console.log(`✅ Procesada: ${template.titulo || file}`);
      } catch (parseError) {
        console.error(`❌ Error parsing ${file}:`, parseError.message);
      }
    });
    
    // Ordena por descargas (descendente)
    templates.sort((a, b) => (b.descargas || 0) - (a.descargas || 0));
    
    // Crea el objeto final
    const output = {
      plantillas: templates
    };
    
    // Escribe el archivo combinado
    fs.writeFileSync(outputFile, JSON.stringify(output, null, 2), 'utf-8');
    
    console.log(`\n🎉 ¡Plantillas construidas exitosamente!`);
    console.log(`📊 Total: ${templates.length} plantillas`);
    console.log(`📝 Archivo generado: ${outputFile}`);
    
  } catch (error) {
    console.error('❌ Error construyendo plantillas:', error);
    process.exit(1);
  }
}

// Ejecuta si se llama directamente
if (require.main === module) {
  buildTemplates();
}

module.exports = buildTemplates;
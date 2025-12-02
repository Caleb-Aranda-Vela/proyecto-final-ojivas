import React, { useState } from 'react';
import { 
  BarChart3, TrendingUp, Target, Database, PieChart, Activity, 
  Mail, Phone, Linkedin, BookOpenText, CheckCircle, Zap, Shield, Globe, Layers, LineChart, Code
} from 'lucide-react';

export default function LandingPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 1. HERO SECTION - High Impact */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Abstract Data Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            {[...Array(15)].map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.3"
              />
            ))}
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <Globe className="w-16 h-16 mx-auto mb-4 text-teal-400 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Maestría en la Incertidumbre:<br />
            <span className="text-teal-400">Espacio Muestral y Ojivas Aplicadas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto">
            Transformamos la teoría estadística en inteligencia de negocios accionable. Deje de adivinar el futuro y comience a mapear cada posibilidad para una toma de decisiones blindada.
          </p>
          <button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-12 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl">
            Ver Casos de Éxito
          </button>
        </div>
      </section>

      {/* 2. FUNDAMENTOS CLAVE: Rigor y Claridad */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Fundamentos Clave: El Rigor Técnico, Explicado para Gerentes
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            El valor de la estadística radica en su capacidad para modelar el caos y definir metas claras.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Espacio Muestral Card - Máxima Profundidad */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-2xl border-t-4 border-slate-900 transition-shadow duration-300 hover:shadow-teal-500/50">
              <div className="flex items-start mb-4">
                <PieChart className="w-10 h-10 text-slate-900 mr-4 flex-shrink-0" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-slate-900">Espacio Muestral (Omega): La Mapeo de la Incertidumbre</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                El Espacio Muestral (Ω) es el conjunto exhaustivo de todos los resultados posibles de un proceso, inversión o experimento. Su valor es estratégico: delimita el universo de análisis y previene el sesgo de confirmación al forzarnos a considerar todas las fallas y oportunidades. Es la etapa de Scoping de la incertidumbre.
              </p>
              
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-4 mt-4">
                <li>Rigor Conceptual: Permite la aplicación de los Axiomas de la Probabilidad para asegurar que el modelo es matemáticamente consistente.</li>
                <li>Función en BI: Se utiliza para la creación de árboles de decisión y simulaciones de riesgo extremo (Ej. Modelado de "Cisnes Negros").</li>
                <li>Analogía: Es la lista completa de ingredientes antes de hornear; si falta uno, el resultado es incierto.</li>
              </ul>
            </div>

            {/* Ojivas Card - Máxima Profundidad */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-2xl border-t-4 border-teal-500 transition-shadow duration-300 hover:shadow-slate-900/50">
              <div className="flex items-start mb-4">
                <Activity className="w-10 h-10 text-slate-900 mr-4 flex-shrink-0" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-slate-900">Ojivas: El Umbral de Cumplimiento y Control de Proceso</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                La Ojiva (Curva de Frecuencia Acumulada) es la herramienta visual para medir la velocidad de acumulación de una variable (tiempo, costo, defecto). Su forma en 'S' nos indica dónde están los percentiles (P90, P95).
              </p>
              
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-4 mt-4">
                <li>Aplicación Clave: Fija SLAs (Niveles de Servicio). Si el P90 de entrega es de 5 días, ese se convierte en el estándar de la promesa al cliente.</li>
                <li>Pendiente: Una pendiente pronunciada en la curva indica un control estricto y baja dispersión en el proceso. Una pendiente plana y prolongada indica ineficiencia y alta variabilidad.</li>
                <li>Uso en Finanzas: Determina el Valor en Riesgo (VaR) al identificar el umbral de pérdida acumulada.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUEVA SECCIÓN: Metodología Analítica de Vanguardia */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Metodología Analítica de Vanguardia
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
            Nuestro proceso asegura la integridad del dato y la traducibilidad del resultado.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Metodología 1 */}
            <div className="bg-white p-6 rounded-lg shadow-xl border-b-4 border-teal-500">
              <Layers className="w-10 h-10 text-teal-500 mb-3" />
              <h4 className="font-bold text-xl mb-2 text-slate-900">1. Delimitación del Universo ($\Omega$)</h4>
              <p className="text-sm text-gray-700">
                La fase inicial es la definición formal y exhaustiva del Espacio Muestral. Esto evita el sesgo de datos y establece los límites de validez de cualquier modelo predictivo o simulador.
              </p>
            </div>
            {/* Metodología 2 */}
            <div className="bg-white p-6 rounded-lg shadow-xl border-b-4 border-slate-900">
              <LineChart className="w-10 h-10 text-slate-900 mb-3" />
              <h4 className="font-bold text-xl mb-2 text-slate-900">2. Análisis de Percentiles y Umbrales</h4>
              <p className="text-sm text-gray-700">
                Uso de Ojivas para migrar de la Frecuencia Absoluta a la Frecuencia Acumulada. Este paso crucial permite identificar el P90 de servicio o el P95 de riesgo, esencial para la planificación de recursos.
              </p>
            </div>
            {/* Metodología 3 */}
            <div className="bg-white p-6 rounded-lg shadow-xl border-b-4 border-teal-500">
              <Code className="w-10 h-10 text-teal-500 mb-3" />
              <h4 className="font-bold text-xl mb-2 text-slate-900">3. Traducción y Comunicación Digital</h4>
              <p className="text-sm text-gray-700">
                El resultado del análisis se traduce en formatos interactivos y lenguaje no técnico, permitiendo que el conocimiento pase del ingeniero al gerente de forma clara y accionable, cerrando la brecha de comunicación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APLICACIONES SECTION (Con Shadow y Animación) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Casos de Uso Industrial: Convertir Teoría en Ventaja Competitiva
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
            Transformamos la teoría en ventajas competitivas cuantificables.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Caso 1: Logística */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-xl border-t-4 border-teal-500 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-teal-500 mr-4" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Logística y Abastecimiento</h3>
                  <p className="text-sm text-gray-500 font-medium">Uso: Ojivas</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Se traza la frecuencia acumulada del tiempo de entrega de proveedores. Esto permite a la gerencia establecer un inventario de seguridad óptimo para cubrir el 95% de la demanda, reduciendo costos.
              </p>
              

[Image of a logistics distribution center with data charts overlaid showing delivery times]

            </div>

            {/* Caso 2: Riesgo Financiero */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-xl border-t-4 border-slate-900 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Shield className="w-10 h-10 text-slate-900 mr-4" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Modelado de Riesgo Financiero</h3>
                  <p className="text-sm text-gray-500 font-medium">Uso: Espacio Muestral</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Se define el universo de escenarios de mercado posibles (tasas de interés, inflación) en simulaciones (ej. Monte Carlo). Esto asegura que los modelos de inversión optimicen el retorno ante cualquier riesgo, incluso el menos probable.
              </p>
              
            </div>

            {/* Caso 3: Churn */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-xl border-t-4 border-teal-500 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-10 h-10 text-teal-500 mr-4" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Retención de Clientes (Churn)</h3>
                  <p className="text-sm text-gray-500 font-medium">Uso: Ojivas</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Se grafica la frecuencia acumulada de la permanencia de los clientes. Esto permite identificar el P25, el punto en el tiempo donde el 25% de los clientes más propensos a irse aún están activos, detonando ofertas de retención justo a tiempo.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISUALIZACIÓN SECTION (Diagramas SVG) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Visualizaciones Esquemáticas
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Espacio Muestral (Venn) */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Espacio Muestral (Ω)</h3>
              <svg viewBox="0 0 300 200" className="w-full max-w-md mx-auto">
                <rect width="300" height="200" fill="#f8fafc" rx="8" />
                <text x="150" y="25" textAnchor="middle" className="text-sm font-semibold fill-slate-700">
                  Universo de Resultados Ω
                </text>
                <circle cx="120" cy="110" r="60" fill="none" stroke="#14b8a6" strokeWidth="2.5" opacity="0.7" />
                <text x="120" y="110" textAnchor="middle" className="text-xs fill-slate-600">Riesgo A</text>
                <circle cx="180" cy="110" r="60" fill="none" stroke="#f97316" strokeWidth="2.5" opacity="0.7" />
                <text x="180" y="110" textAnchor="middle" className="text-xs fill-slate-600">Oportunidad B</text>
                <text x="150" y="115" textAnchor="middle" className="text-xs font-bold fill-teal-600">A ∩ B</text>
                <rect x="10" y="10" width="280" height="180" fill="none" stroke="#334155" strokeWidth="2" rx="8" />
              </svg>
              <p className="text-gray-600 mt-6 text-sm">
                Representación de eventos y sus intersecciones en el espacio de posibilidades.
              </p>
            </div>

            {/* Ojiva */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Ojiva Acumulada</h3>
              <svg viewBox="0 0 300 200" className="w-full max-w-md mx-auto">
                <rect width="300" height="200" fill="#f8fafc" rx="8" />
                <line x1="40" y1="160" x2="270" y2="160" stroke="#334155" strokeWidth="2" />
                <line x1="40" y1="160" x2="40" y2="30" stroke="#334155" strokeWidth="2" />
                <text x="150" y="185" textAnchor="middle" className="text-xs fill-slate-600">Valores</text>
                <text x="20" y="100" textAnchor="middle" className="text-xs fill-slate-600" transform="rotate(-90 20 100)">
                  Frecuencia Acumulada
                </text>
                <path
                  d="M 40 160 Q 80 150, 100 130 T 140 90 T 180 60 T 220 40 L 270 35"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="3"
                />
                {[
                  [40, 160], [80, 145], [120, 115], [160, 80], [200, 50], [240, 38], [270, 35]
                ].map((point, i) => (
                  <circle key={i} cx={point[0]} cy={point[1]} r="4" fill="#14b8a6" />
                ))}
                <line x1="40" y1="80" x2="270" y2="80" stroke="#f97316" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
                <text x="275" y="83" className="text-xs fill-orange-600">P75</text>
              </svg>
              <p className="text-gray-600 mt-6 text-sm">
                Curva de frecuencias acumuladas para análisis de percentiles y umbrales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONCLUSIÓN Y RIGOR METODOLÓGICO */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Rigor y Cierre: La Metodología de la Comunicación
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Una visión de cómo la ingeniería traduce la complejidad para el mundo de los negocios.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Cierre/Conclusión */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500">
              <CheckCircle className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Conclusión: El Dominio de la Comunicación</h3>
              <p className="text-gray-700 leading-relaxed">
                La estadística no es solo matemática; es el lenguaje universal para gestionar la incertidumbre. Dominar el Omega es conocer los límites del problema, y la Ojiva es la herramienta para medir el rendimiento contra esos límites. Este proyecto demuestra que la ingeniería es la capacidad de traducir la complejidad en decisiones claras y comunicables.
              </p>
            </div>

            {/* Referencias y Metodología */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-900">
              <BookOpenText className="w-8 h-8 text-slate-900 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rigor Metodológico y Referencias (IEEE/APA)</h3>
              <p className="text-gray-700 mb-3">
                El desarrollo de esta página se centró en la claridad sobre la fórmula, el uso de Analogías No Técnicas y la Visualización Schemática (SVG) para simplificar conceptos profundos.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li>[1] W. Feller, *An Introduction to Probability Theory and Its Applications*. Wiley, 1968.</li>
                <li>[2] E. Tufte, *The Visual Display of Quantitative Information*. Graphics Press, 2001.</li>
                <li>[3] J. S. Milton, *Introducción a la Probabilidad y Estadística*. McGraw-Hill, 2003.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA y Contact Section (Myriam Estrella Ávila Solís) */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          
          {/* Lado Izquierdo: CTA */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Tomar Decisiones Basadas en Datos?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Transforma la incertidumbre en planificación estratégica con herramientas estadísticas de valor.
            </p>
            <button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl">
              Comenzar Ahora
            </button>
          </div>

          {/* Lado Derecho: Contacto (Myriam Estrella) */}
          <div className="bg-slate-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-teal-400">Contacto Experto</h3>
            <p className="mb-4 text-lg font-semibold">Myriam Estrella Ávila Solís</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:contacto@bi-proyectofinal.com" className="hover:text-teal-400 transition-colors">contacto@bi-proyectofinal.com</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+525512345678" className="hover:text-teal-400 transition-colors">+52 55 1234 5678</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Linkedin className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" strokeWidth={1.5} />
                <a href="https://linkedin.com/in/MyriamEstrellaSolis" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">linkedin.com/in/MyriamEstrellaSolis</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2024 Business Intelligence Analytics. Visualización Estadística para la Toma de Decisiones. Proyecto Final Comunicación Técnica.
          </p>
        </div>
      </footer>
    </div>
  );
}

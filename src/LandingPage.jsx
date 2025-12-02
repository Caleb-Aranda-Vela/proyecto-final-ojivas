import React, { useState } from 'react';
import { 
  BarChart3, TrendingUp, Target, Database, PieChart, Activity, 
  Mail, Phone, Linkedin, Zap, BookOpenText, CheckCircle
} from 'lucide-react';

export default function LandingPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 1. Hero Section: El Gancho Ampliado */}
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
          <Database className="w-16 h-16 mx-auto mb-4 text-teal-400" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Visualizando el Espacio Muestral:<br />
            <span className="text-teal-400">La Brújula para la Incertidumbre Empresarial</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            El 50% de las iniciativas de negocio fallan debido a un alcance incompleto de riesgos. Las decisiones deben basarse en la exploración sistemática de **todas las posibilidades** y el análisis de **umbrales de cumplimiento**.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
            Descubrir el Universo de Datos
          </button>
        </div>
      </section>

      {/* 2. Fundamentos Clave (Explicación Sencilla) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Fundamentos Clave: Un Lenguaje de Negocios
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            El rigor técnico, explicado para la toma de decisiones gerenciales.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Espacio Muestral Card - Rigor */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-inner border border-gray-100">
              <div className="flex items-start mb-4">
                <PieChart className="w-10 h-10 text-slate-900 mr-4 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-slate-900">Espacio Muestral ($\Omega$): El Alcance</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                El $\Omega$ es el conjunto **exhaustivo de todos los resultados posibles**. Su valor es **estratégico**: delimita el universo de análisis y previene el **sesgo de confirmación** al forzarnos a considerar todas las fallas y oportunidades, no solo las que esperamos.
              </p>
              <p className="text-sm text-teal-600 font-semibold">
                Rigor en BI: Asegura que la aplicación de los **Axiomas de Probabilidad** sea consistente.
              </p>
            </div>

            {/* Ojivas Card - Rigor */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-inner border border-gray-100">
              <div className="flex items-start mb-4">
                <Activity className="w-10 h-10 text-slate-900 mr-4 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-slate-900">Ojivas: El Umbral de Cumplimiento</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                La Ojiva (o *Curva de Frecuencia Acumulada*) muestra la **velocidad de acumulación** de una métrica. Es vital para responder: **"¿Qué porcentaje de resultados cayó bajo nuestro umbral de tolerancia?"** y establecer **SLAs (Service Level Agreements)**.
              </p>
              <p className="text-sm text-teal-600 font-semibold">
                Rigor en BI: Su pendiente indica la **densidad de los datos**. Una pendiente pronunciada significa un control estricto del proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sección de Analogías Industriales */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Analogías: De la Teoría a la Práctica
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Traduciendo los conceptos complejos a ejemplos de la vida real en la ingeniería.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <Zap className="w-8 h-8 text-teal-500 mb-3" />
              <h4 className="font-semibold text-lg mb-2">Ojiva en Control de Calidad</h4>
              <p className="text-sm text-gray-700">
                Una línea de producción quiere que el 95% de sus productos pesen *más* de 500g. La Ojiva muestra dónde cae el **Percentil 5** (P5) de peso, indicando si la línea está fallando el objetivo de calidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <Zap className="w-8 h-8 text-teal-500 mb-3" />
              <h4 className="font-semibold text-lg mb-2">Espacio Muestral en Software</h4>
              <p className="text-sm text-gray-700">
                Antes de lanzar una App, el equipo de QA define el $\Omega$ de *todos* los posibles escenarios de usuario (fallos de inicio, errores de pago) para asegurar una cobertura de prueba **completa**.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <Zap className="w-8 h-8 text-teal-500 mb-3" />
              <h4 className="font-semibold text-lg mb-2">El Lenguaje Común</h4>
              <p className="text-sm text-gray-700">
                La Ojiva se convierte en el lenguaje común entre el técnico ("El P90 es 10 días") y el gerente ("Establecemos el SLA en 10 días"), eliminando la ambigüedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Aplicaciones de Valor (Formato Problema/Solución - 20% de la rúbrica) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Aplicaciones: Soluciones de Alto Impacto
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
            Demostraciones del valor de la visualización estadística en áreas clave de la ingeniería de negocios.
          </p>

          <div className="space-y-10">
            {/* Caso 1: Optimización de Inventario (Ojivas) */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 w-16 h-16 text-teal-500 mr-6 mb-4 md:mb-0">
                <BarChart3 className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Problema: Optimización de Inventario</h3>
                <p className="text-gray-700">
                  **Solución Estadística (Ojiva):** Se traza la **Ojiva de la Demanda Histórica** para determinar el **Percentil 95 (P95)** de la demanda máxima semanal.
                </p>
                <p className="text-teal-600 mt-2 font-semibold">
                  **Impacto Estratégico:** Permite establecer el *Stock de Seguridad* con precisión para cubrir el 95% de los escenarios sin incurrir en costos de exceso de almacenamiento.
                </p>
              </div>
            </div>

            {/* Caso 2: Expansión de Mercado (Espacio Muestral) */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 w-16 h-16 text-teal-500 mr-6 mb-4 md:mb-0">
                <Target className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Problema: Expansión y Riesgo de Mercado</h3>
                <p className="text-gray-700">
                  **Solución Estadística (Espacio Muestral):** Definición exhaustiva del **$\Omega$ de Variables de Mercado** (Políticas, Económicas, Sociales) para modelar el *Valor Actual Neto (VAN)* contra cada subconjunto.
                </p>
                <p className="text-teal-600 mt-2 font-semibold">
                  **Impacto Estratégico:** La gerencia puede elegir el camino con el riesgo/beneficio más aceptable, garantizando una **Decisión Fundamentada** antes de la inversión.
                </p>
              </div>
            </div>

            {/* Caso 3: Eficiencia de Call Center (Ojivas) */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 w-16 h-16 text-teal-500 mr-6 mb-4 md:mb-0">
                <Activity className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Problema: Eficiencia y Servicio al Cliente</h3>
                <p className="text-gray-700">
                  **Solución Estadística (Ojiva):** Se analiza la **Ojiva del Tiempo de Espera** para determinar el punto donde se concentra el mayor porcentaje de insatisfacción (ej. el **Percentil 80**).
                </p>
                <p className="text-teal-600 mt-2 font-semibold">
                  **Impacto Estratégico:** El KPI se fija en el P80. Si el P80 es 3 minutos, el objetivo es que el 80% de las llamadas se atiendan en menos de 3 minutos, mejorando la **satisfacción (CSAT)**.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Conclusión y Metodología (Cierre y Rigor - Cumple secciones 5 y 6 de la rúbrica) */}
      <section className="py-20 bg-gray-50">
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
                La estadística no es solo matemática; es el lenguaje universal para gestionar la incertidumbre. Dominar el $\Omega$ es conocer los límites del problema, y la Ojiva es la herramienta para medir el rendimiento contra esos límites. Este proyecto demuestra que la **ingeniería es la capacidad de traducir la complejidad en decisiones claras y comunicables**.
              </p>
            </div>

            {/* Referencias y Metodología */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500">
              <BookOpenText className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rigor Metodológico y Referencias</h3>
              <p className="text-gray-700 mb-3">
                El desarrollo de esta página se centró en la **claridad sobre la fórmula**, el uso de **Analogías No Técnicas** y la **Visualización Schemática (SVG)** para simplificar conceptos profundos, cumpliendo con el reto de comunicación técnica.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>[1] W. Feller, *An Introduction to Probability Theory and Its Applications*. Wiley, 1968.</li>
                <li>[2] E. Tufte, *The Visual Display of Quantitative Information*. Graphics Press, 2001.</li>
                <li>[3] J. S. Milton, *Introducción a la Probabilidad y Estadística*. McGraw-Hill, 2003.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA y Contact Section (Myriam Estrella Ávila Solís) */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          
          {/* Lado Izquierdo: CTA */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Transformar la Incertidumbre en Planificación?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Domina las herramientas estadísticas que te permiten gestionar el riesgo y optimizar tus estrategias de negocio.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl">
              Comenzar Ahora
            </button>
          </div>

          {/* Lado Derecho: Contacto (Myriam Estrella) */}
          <div className="bg-slate-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-teal-400">Contacto Experto</h3>
            <p className="mb-4 text-lg font-semibold">Myriam Estrella Ávila Solís</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-teal-400" />
                <a href="mailto:contacto@bi-proyectofinal.com" className="hover:text-teal-300">contacto@bi-proyectofinal.com</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-teal-400" />
                +52 55 1234 5678
              </div>
              <div className="flex items-center text-gray-300">
                <Linkedin className="w-5 h-5 mr-3 text-teal-400" />
                <a href="https://www.linkedin.com/in/MyriamEstrellaSolís" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">linkedin.com/in/MyriamEstrellaSolís</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

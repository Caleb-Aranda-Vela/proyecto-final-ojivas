import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Database, PieChart, Activity } from 'lucide-react';

export default function LandingPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
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
          <div className="mb-6">
            <Database className="w-16 h-16 mx-auto mb-4 text-teal-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Visualizando el Espacio Muestral<br />
            <span className="text-teal-400">y las Ojivas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Para la Toma de Decisiones Estratégicas en Negocios
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
            Descubrir el Universo de Datos
          </button>
        </div>
      </section>

      {/* Explicación Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Fundamentos Clave
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Domina los conceptos estadísticos que transforman datos en decisiones inteligentes
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <PieChart className="w-12 h-12" />,
                title: "Espacio Muestral",
                description: "El conjunto completo de resultados posibles en un experimento. Visualizarlo permite identificar todas las oportunidades y riesgos en tu negocio."
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Distribución de Datos",
                description: "Comprende cómo se distribuyen tus métricas clave. La forma de tus datos revela patrones ocultos en el comportamiento del mercado."
              },
              {
                icon: <Activity className="w-12 h-12" />,
                title: "Ojivas Acumuladas",
                description: "Gráficas que muestran frecuencias acumuladas. Esenciales para análisis de percentiles, cuotas de mercado y umbrales críticos."
              }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`text-teal-500 mb-6 transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicación Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Aplicaciones en Business Intelligence
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Transforma conceptos estadísticos en ventajas competitivas
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Análisis de Riesgo",
                subtitle: "Espacio Muestral",
                items: [
                  "Identificar escenarios posibles",
                  "Cuantificar probabilidades",
                  "Modelar resultados adversos"
                ]
              },
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: "Segmentación",
                subtitle: "Distribuciones",
                items: [
                  "Clasificar clientes por valor",
                  "Detectar outliers",
                  "Optimizar estrategias"
                ]
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "KPIs Acumulados",
                subtitle: "Ojivas",
                items: [
                  "Tracking de cuotas",
                  "Análisis de percentiles",
                  "Metas progresivas"
                ]
              }
            ].map((column, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="text-teal-500 mr-4">
                    {column.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {column.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {column.subtitle}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {column.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visualización Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Visualizaciones Esquemáticas
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Espacio Muestral (Venn-style) */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Espacio Muestral</h3>
              <svg viewBox="0 0 300 200" className="w-full max-w-md mx-auto">
                <rect width="300" height="200" fill="#f8fafc" rx="8" />
                <text x="150" y="25" textAnchor="middle" className="text-sm font-semibold fill-slate-700">
                  Universo de Resultados
                </text>
                
                <circle cx="120" cy="110" r="60" fill="none" stroke="#14b8a6" strokeWidth="2.5" opacity="0.7" />
                <text x="120" y="110" textAnchor="middle" className="text-xs fill-slate-600">Evento A</text>
                
                <circle cx="180" cy="110" r="60" fill="none" stroke="#f97316" strokeWidth="2.5" opacity="0.7" />
                <text x="180" y="110" textAnchor="middle" className="text-xs fill-slate-600">Evento B</text>
                
                <text x="150" y="115" textAnchor="middle" className="text-xs font-bold fill-teal-600">A ∩ B</text>
                
                <rect x="10" y="10" width="280" height="180" fill="none" stroke="#334155" strokeWidth="2" rx="8" />
              </svg>
              <p className="text-gray-600 mt-6 text-sm">
                Representación de eventos y sus intersecciones en el espacio de posibilidades
              </p>
            </div>

            {/* Ojiva */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Ojiva Acumulada</h3>
              <svg viewBox="0 0 300 200" className="w-full max-w-md mx-auto">
                <rect width="300" height="200" fill="#f8fafc" rx="8" />
                
                {/* Axes */}
                <line x1="40" y1="160" x2="270" y2="160" stroke="#334155" strokeWidth="2" />
                <line x1="40" y1="160" x2="40" y2="30" stroke="#334155" strokeWidth="2" />
                
                {/* Labels */}
                <text x="150" y="185" textAnchor="middle" className="text-xs fill-slate-600">Valores</text>
                <text x="20" y="100" textAnchor="middle" className="text-xs fill-slate-600" transform="rotate(-90 20 100)">
                  Frecuencia Acumulada
                </text>
                
                {/* Ojiva curve */}
                <path
                  d="M 40 160 Q 80 150, 100 130 T 140 90 T 180 60 T 220 40 L 270 35"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="3"
                />
                
                {/* Points */}
                {[
                  [40, 160], [80, 145], [120, 115], [160, 80], [200, 50], [240, 38], [270, 35]
                ].map((point, i) => (
                  <circle key={i} cx={point[0]} cy={point[1]} r="4" fill="#14b8a6" />
                ))}
                
                {/* Percentile lines */}
                <line x1="40" y1="80" x2="270" y2="80" stroke="#f97316" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
                <text x="275" y="83" className="text-xs fill-orange-600">P75</text>
              </svg>
              <p className="text-gray-600 mt-6 text-sm">
                Curva de frecuencias acumuladas para análisis de percentiles y tendencias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transforma Datos en Decisiones
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Domina la visualización estadística y lleva tu análisis de negocios al siguiente nivel
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl">
            Comenzar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2024 Business Intelligence Analytics. Visualización Estadística para la Toma de Decisiones.
          </p>
        </div>
      </footer>
    </div>
  );
}

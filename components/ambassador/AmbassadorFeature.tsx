"use client"
import React from "react"

interface AmbassadorFeatureProps {
  icon: string
  title: string
  problems: string[]
  solutions: string[]
  benefits: string[]
}

const AmbassadorFeature = ({ icon, title, problems, solutions, benefits }: AmbassadorFeatureProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-[20px] p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600 pb-3">
        {title}
      </h3>
      
      <div className="space-y-6">
        {/* Проблема */}
        <div>
          <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3 text-base">Проблема:</h4>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start">
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Решение */}
        <div>
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 text-base">Решение Maetry:</h4>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start">
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ценность */}
        <div>
          <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 text-base">Ценность для салона:</h4>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AmbassadorFeature

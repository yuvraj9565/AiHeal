import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(date)
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function getHealthScore(responses: any[]): number {
  // Simple health score calculation based on responses
  // This is a placeholder - actual implementation would be more sophisticated
  const baseScore = 70
  const positiveFactors = responses.filter(r =>
    typeof r.answer === 'string' &&
    ['good', 'excellent', 'active', 'low', 'moderate'].includes(r.answer.toLowerCase())
  ).length * 5

  const negativeFactors = responses.filter(r =>
    typeof r.answer === 'string' &&
    ['severe', 'poor', 'high', 'very high', 'chronic'].includes(r.answer.toLowerCase())
  ).length * 10

  return Math.max(0, Math.min(100, baseScore + positiveFactors - negativeFactors))
}

export function getSeverityColor(severity: string): string {
  switch (severity.toLowerCase()) {
    case 'mild':
      return 'text-green-600 bg-green-100'
    case 'moderate':
      return 'text-yellow-600 bg-yellow-100'
    case 'severe':
      return 'text-red-600 bg-red-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

export function getUrgencyColor(urgency: string): string {
  switch (urgency.toLowerCase()) {
    case 'immediate':
      return 'text-red-600 bg-red-100 border-red-200'
    case 'within-week':
      return 'text-orange-600 bg-orange-100 border-orange-200'
    case 'within-month':
      return 'text-yellow-600 bg-yellow-100 border-yellow-200'
    case 'routine':
      return 'text-green-600 bg-green-100 border-green-200'
    default:
      return 'text-gray-600 bg-gray-100 border-gray-200'
  }
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'digestive-health': 'bg-green-100 text-green-800 border-green-200',
    'weight-management': 'bg-blue-100 text-blue-800 border-blue-200',
    'energy-fatigue': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'mental-health': 'bg-purple-100 text-purple-800 border-purple-200',
    'joint-muscle-pain': 'bg-red-100 text-red-800 border-red-200',
    'heart-circulation': 'bg-red-100 text-red-800 border-red-200',
    'skin-hair': 'bg-pink-100 text-pink-800 border-pink-200',
    'respiratory': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'womens-health': 'bg-pink-100 text-pink-800 border-pink-200',
    'general-wellness': 'bg-indigo-100 text-indigo-800 border-indigo-200'
  }

  return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200'
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function kebabToTitle(str: string): string {
  return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

export function downloadAsJSON(data: any, filename: string): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text)
}

export function printElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (!element) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  const printContent = element.innerHTML
  const printStyles = Array.from(document.styleSheets)
    .map(styleSheet => {
      try {
        return Array.from(styleSheet.cssRules)
          .map(rule => rule.cssText)
          .join('\n')
      } catch (e) {
        return ''
      }
    })
    .join('\n')

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print</title>
        <style>
          ${printStyles}
          @media print {
            body { font-size: 12pt; line-height: 1.4; }
            .no-print { display: none !important; }
          }
        </style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `)

  printWindow.document.close()
  printWindow.print()
  printWindow.close()
}

export function calculateProgress(current: number, total: number): number {
  if (total === 0) return 0
  return Math.round((current / total) * 100)
}

export function validateStep(currentStep: number, totalSteps: number): boolean {
  return currentStep >= 1 && currentStep <= totalSteps
}

export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId)
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
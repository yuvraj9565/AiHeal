import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  stepTitles: string[]
}

export function ProgressBar({ currentStep, totalSteps, stepTitles }: ProgressBarProps) {
  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Step {currentStep} of {totalSteps}
        </h2>
        <span className="text-sm text-gray-500">
          {Math.round(progressPercentage)}% Complete
        </span>
      </div>

      <Progress value={progressPercentage} className="h-2 mb-4" />

      <div className="flex justify-between">
        {stepTitles.map((title, index) => (
          <div
            key={index}
            className={cn(
              "flex-1 text-center text-xs font-medium transition-colors",
              index + 1 <= currentStep
                ? "text-blue-600"
                : "text-gray-400"
            )}
          >
            <div
              className={cn(
                "w-8 h-8 mx-auto mb-2 rounded-full border-2 flex items-center justify-center text-sm transition-colors",
                index + 1 <= currentStep
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-300 text-gray-400"
              )}
            >
              {index + 1}
            </div>
            <div className="max-w-20 hidden sm:block">
              {title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
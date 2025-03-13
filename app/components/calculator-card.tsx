'use client';
import { useEffect, useState } from "react"

export const CalculatorCard = () => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState<number | null>(null)
  const [bmiCategory, setBmiCategory] = useState("")
  const [weightRange, setWeightRange] = useState("")
  const [showResult, setShowResult] = useState(false)

  const calculateBMI = () => {
    if (!height || !weight) return

    let bmiValue: number

    if (unit === "metric") {
      const heightInMeters = Number.parseFloat(height) / 100
      bmiValue = Number.parseFloat(weight) / (heightInMeters * heightInMeters)
    } else {
      // Imperial: BMI = (weight in pounds * 703) / (height in inches * height in inches)
      bmiValue = (Number.parseFloat(weight) * 703) / (Number.parseFloat(height) * Number.parseFloat(height))
    }

    setBmi(Number.parseFloat(bmiValue.toFixed(1)))
    setShowResult(true)

    // Determine BMI category
    if (bmiValue < 18.5) {
      setBmiCategory("underweight")
      setWeightRange("below 18.5")
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory("a healthy weight")
      setWeightRange("between 18.5 - 24.9")
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory("overweight")
      setWeightRange("between 25 - 29.9")
    } else {
      setBmiCategory("obese")
      setWeightRange("above 30")
    }
  }

  // Calculate BMI whenever height or weight changes
  useEffect(() => {
    if (height && weight) {
      calculateBMI()
    }
  }, [height, weight, unit])

    return (<div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
        <h2 className="text-lg font-medium mb-4">Enter your details below</h2>

        {/* Unit Selection */}
        <div className="flex gap-8 mb-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="unit"
              checked={unit === "metric"}
              onChange={() => setUnit("metric")}
              className="w-4 h-4 text-blue-600 mr-2"
            />
            <span>Metric</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="unit"
              checked={unit === "imperial"}
              onChange={() => setUnit("imperial")}
              className="w-4 h-4 text-blue-600 mr-2"
            />
            <span>Imperial</span>
          </label>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Height</label>
            <div className="relative">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="0"
                className="w-full border border-gray-200 rounded-lg p-3 pr-12"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {unit === "metric" ? "cm" : "in"}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Weight</label>
            <div className="relative">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
                className="w-full border border-gray-200 rounded-lg p-3 pr-12"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {unit === "metric" ? "kg" : "lb"}
              </span>
            </div>
          </div>
        </div>

        {/* Results */}
        {!showResult ? (
          <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
            <h3 className="font-medium mb-2">Welcome!</h3>
            <p className="text-sm">Enter your height and weight and you'll see your BMI result here</p>
          </div>
        ) : (
          <div className="bg-blue-600 text-white rounded-xl p-6 flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <p className="text-sm mb-1">Your BMI is...</p>
              <p className="text-4xl font-bold">{bmi}</p>
            </div>
            <div className="md:w-2/3 md:pl-4">
              <p className="text-sm">
                Your BMI suggests you're {bmiCategory} - Actual range: {weightRange}.
              </p>
            </div>
          </div>
        )}
      </div>)
}
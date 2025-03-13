import Image from "next/image"
import { Utensils, Activity, Moon, Users, Calendar, Dumbbell, Baby, Globe } from "lucide-react"
import { CalculatorCard } from "./components/calculator-card"

export default function BMICalculator() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header with logo */}
        <div className="flex justify-start mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-blue-300"></div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Body Mass
              <br />
              Index Calculator
            </h1>
            <p className="text-gray-600 mb-6">
              Better understand your weight in relation to your height using our body mass index (BMI) calculator. While
              BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your
              overall health and well-being.
            </p>
          </div>

          {/* Calculator Card */}
          <CalculatorCard />
        </div>

        {/* What BMI Means Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-blue-50 rounded-3xl overflow-hidden">
            <Image
              src="/person.webp"
              alt="Healthy person"
              width={400}
              loading="eager"
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What your BMI result means</h2>
            <p className="text-gray-600 mb-6">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your
              chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious
              diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive
              for regular physical activity, ideally about 30 minutes daily for five days a week.
            </p>
          </div>
        </div>

        {/* Health Tips Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
              <Utensils className="w-5 h-5 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Healthy eating</h3>
            <p className="text-gray-600">
              Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity,
              and mood.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <Activity className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Regular exercise</h3>
            <p className="text-gray-600">
              Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering
              wellness and longevity.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Moon className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Adequate sleep</h3>
            <p className="text-gray-600">
              Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration
              and rejuvenation.
            </p>
          </div>
        </div>

        {/* Limitations Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Limitations of BMI</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
            groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be
            beneficial to use.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Gender</h3>
              <p className="text-gray-600">
                The development and body fat composition of girls and boys vary with age. Consequently, a child's age
                and gender are considered when evaluating their BMI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Age</h3>
              <p className="text-gray-600">
                In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat
                content.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Dumbbell className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Muscle</h3>
              <p className="text-gray-600">
                BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from
                fat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <Baby className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pregnancy</h3>
              <p className="text-gray-600">
                Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy
                BMI is advisable to minimise health risks for both mother and child.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Race</h3>
              <p className="text-gray-600">
                Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than
                others. To learn more, it is advised to discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


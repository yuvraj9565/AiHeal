import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  Brain,
  Activity,
  Apple,
  Stethoscope,
  TrendingUp,
  CheckCircle,
  Users,
  Clock,
  Shield
} from 'lucide-react'
import { healthCategories } from '@/data/healthConditions'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="health-gradient text-white py-20 lg:py-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Personal Health Assessment Companion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get personalized recommendations for diet, exercise, habits, and medical guidance
              tailored to your specific health concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Free Assessment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Learn More
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-blue-100">Health Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5min</div>
                <div className="text-blue-100">Assessment Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-100">Personalized</div>
              </div>
              <div>
                <div className="text-3xl font-bold">Free</div>
                <div className="text-blue-100">To Use</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Categories Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Health Assessment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your primary health concern and receive personalized recommendations across multiple areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {healthCategories.slice(0, 9).map((category) => (
              <Link key={category.id} href={`/assessment?category=${category.id}`}>
                <Card className="category-card h-full hover:shadow-lg cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {category.symptoms.slice(0, 3).map((symptom) => (
                        <Badge key={symptom} variant="outline" className="text-xs">
                          {symptom}
                        </Badge>
                      ))}
                      {category.symptoms.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.symptoms.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How AiHeal Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized health recommendations in 4 simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Assessment</h3>
              <p className="text-muted-foreground">
                Complete our comprehensive 5-minute health questionnaire about your symptoms and lifestyle.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Analysis</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your responses to create a detailed health profile and identify key areas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
              <p className="text-muted-foreground">
                Receive personalized diet plans, exercise routines, healthy habits, and medical guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your progress, adjust recommendations, and achieve your health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll Receive
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive recommendations tailored to your specific health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Apple className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Personalized Diet Plans</CardTitle>
                <CardDescription>
                  Get customized meal plans with vegetarian and non-vegetarian options tailored to your health condition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>7-day meal plans</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Food guidelines</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Healthy recipes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Exercise Recommendations</CardTitle>
                <CardDescription>
                  Receive exercise routines designed for your specific health condition and fitness level.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Condition-specific exercises</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Multiple intensity levels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Safety guidelines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Healthy Habits</CardTitle>
                <CardDescription>
                  Build sustainable lifestyle habits that support your health goals and overall wellbeing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Daily routine suggestions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Stress management techniques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span>Sleep optimization tips</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Stethoscope className="h-12 w-4 text-red-600 mb-4" />
                <CardTitle>Doctor Referrals</CardTitle>
                <CardDescription>
                  Know when to see a doctor and which specialists are most appropriate for your condition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span>Specialist recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span>Urgency level guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span>Questions to ask your doctor</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Monitor your health journey with visual progress tracking and milestone achievements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Symptom tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Health score monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span>Achievement badges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>
                  Your health data is private and secure. We never share your personal information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-gray-600" />
                    <span>Data encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-gray-600" />
                    <span>Anonymous assessments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-gray-600" />
                    <span>GDPR compliant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trusted by Thousands on Their Health Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-muted-foreground">Health Assessments Completed</div>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">5 Minutes</div>
                <div className="text-muted-foreground">Average Assessment Time</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-muted-foreground">User Satisfaction Rate</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-lg text-blue-800 mb-6">
                "AiHeal helped me understand my digestive issues and provided practical recommendations
                that actually work. The personalized diet plan made a huge difference in just a few weeks."
              </p>
              <div className="font-semibold text-blue-900">- Sarah K., Verified User</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="health-gradient text-white py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards better health with our free, personalized assessment.
          </p>
          <Link href="/assessment">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Start Your Free Assessment Now
            </Button>
          </Link>
          <p className="mt-4 text-blue-100 text-sm">
            No credit card required • 100% free • Takes only 5 minutes
          </p>
        </div>
      </section>
    </div>
  )
}
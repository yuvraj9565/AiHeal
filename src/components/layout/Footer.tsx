import Link from 'next/link'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">AiHeal</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your personal health assessment companion providing personalized recommendations for better wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/assessment" className="text-muted-foreground hover:text-primary transition-colors">
                  Start Assessment
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Health Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Health Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/assessment?category=digestive-health" className="text-muted-foreground hover:text-primary transition-colors">
                  Digestive Health
                </Link>
              </li>
              <li>
                <Link href="/assessment?category=weight-management" className="text-muted-foreground hover:text-primary transition-colors">
                  Weight Management
                </Link>
              </li>
              <li>
                <Link href="/assessment?category=mental-health" className="text-muted-foreground hover:text-primary transition-colors">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link href="/assessment?category=energy-fatigue" className="text-muted-foreground hover:text-primary transition-colors">
                  Energy & Fatigue
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@aiheal.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-AIHEAL</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 AiHeal. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
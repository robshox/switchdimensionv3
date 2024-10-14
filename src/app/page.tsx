'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Zap, TrendingUp, Users, Menu, Linkedin, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted with:', { name, email, message })
    // Reset the form
    setName('')
    setEmail('')
    setMessage('')
  }

  const gradientTextClass = "text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-white"
  const thinnerFontClass = "font-light"
  const roundedButtonClass = "rounded-full"

  const NavItems = () => (
    <>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#features">
        Features
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#about">
        About
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#testimonials">
        Testimonials
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#faq">
        FAQ
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-300" href="#contact">
        Contact
      </Link>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-5 w-5 text-yellow-500" />
          <span className="ml-2 text-lg font-bold text-white">Switch<span className="font-light">Dimension</span></span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <NavItems />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className={`p-0 md:hidden hover:bg-yellow-500 group ${roundedButtonClass}`} size="icon">
              <Menu className="h-5 w-5 group-hover:text-black" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black">
            <nav className="flex flex-col gap-4">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-32 lg:py-42 xl:py-62 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-yellow-500/10 to-black animate-breath"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent">
            <div className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] grid-rows-[repeat(auto-fill,minmax(20px,1fr))]">
              {[...Array(2000)].map((_, i) => (
                <div key={i} className="border-t border-l border-white/10" />
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-screen-xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className={`text-3xl ${thinnerFontClass} tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none`}>
                  Learn, Build, Grow with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg">
                  We help you discover, build and launch AI apps and solutions for your team, clients and customers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="#contact">
                  <Button className={`w-full bg-gradient-to-r from-yellow-500 to-white text-gray-900 hover:from-yellow-600 hover:to-gray-100 ${roundedButtonClass}`}>
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="h-px bg-gradient-to-r from-yellow-500 to-black"></div>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl text-center mb-12 ${gradientTextClass}`}>Our AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-neutral-900 border border-gray-700">
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full border border-gray-700 bg-gradient-to-b from-gray-800 to-black flex items-center justify-center">
                    <Zap className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className={`text-xl ${thinnerFontClass} text-center ${gradientTextClass}`}>AI App Development</h3>
                  <p className="text-center text-gray-300">
                    Create cutting-edge AI applications tailored to your business needs and industry requirements.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900 border border-gray-700">
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full border border-gray-700 bg-gradient-to-b from-gray-800 to-black flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className={`text-xl ${thinnerFontClass} text-center ${gradientTextClass}`}>AI Process Automation</h3>
                  <p className="text-center text-gray-300">
                    Streamline your operations with intelligent AI-driven automation solutions for increased efficiency.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900 border border-gray-700">
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full border border-gray-700 bg-gradient-to-b from-gray-800 to-black flex items-center justify-center">
                    <Users className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className={`text-xl ${thinnerFontClass} text-center ${gradientTextClass}`}>AI Enterprise Training</h3>
                  <p className="text-center text-gray-300">
                    Empower your team with comprehensive AI training programs tailored for enterprise-level implementation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-900">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl ${gradientTextClass}`}>About Us</h2>
                <p className="text-gray-300 md:text-lg">
                  At Switch Dimension, we're passionate about leveraging the power of AI to transform businesses. Our team of expert data scientists and engineers work tirelessly to develop cutting-edge AI solutions that drive real-world results.
                </p>
                <p className="text-gray-300 md:text-lg">
                  With years of experience across various industries, we understand the unique challenges businesses face and tailor our AI solutions to meet your specific needs. Our mission is to make AI accessible and impactful for businesses of all sizes.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src="/images/pexels-fauxels-3184357.jpg"
                  alt="About Switch Dimension"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl text-center mb-12 ${gradientTextClass}`}>What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  company: "TechCorp",
                  quote: "Switch Dimension transformed our business with their AI solutions. We've seen a 40% increase in efficiency!"
                },
                {
                  name: "Michael Chen",
                  company: "InnovateCo",
                  quote: "The predictive analytics tool from Switch Dimension has revolutionized our decision-making process."
                },
                {
                  name: "Emily Rodriguez",
                  company: "FutureTech",
                  quote: "Working with Switch Dimension was a game-changer. Their AI expertise is unmatched in the industry."
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-neutral-900 border border-gray-700">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-900">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl text-center mb-12 ${gradientTextClass}`}>Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "What industries do you serve?",
                  answer: "We serve a wide range of industries including finance, healthcare, retail, and manufacturing. Our AI solutions are adaptable to various business needs."
                },
                {
                  question: "How long does it take to implement your AI solutions?",
                  answer: "Implementation time varies depending on the complexity of the solution and your existing infrastructure. Typically, our projects range from 2-6 months."
                },
                {
                  question: "Do I need to have technical expertise to use your services?",
                  answer: "No, our solutions are designed to be user-friendly. We provide comprehensive training and ongoing support to ensure you can maximize the benefits of our AI tools."
                },
                {
                  question: "How do you ensure data privacy and security?",
                  answer: "We adhere to strict data protection protocols and comply with industry standards like GDPR. Your data security is our top priority."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-white">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-300">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className={`text-2xl ${thinnerFontClass} tracking-tighter sm:text-3xl md:text-4xl ${gradientTextClass}`}>
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-lg">
                  Ready to start your AI journey? Contact us today and let's discuss how we can help transform your business.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    className="bg-neutral-800 text-white border-gray-700"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    className="bg-neutral-800 text-white border-gray-700"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Textarea
                    className="bg-neutral-800 text-white border-gray-700"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <Button type="submit" className={`w-full bg-gradient-to-r from-yellow-500 to-white text-gray-900 hover:from-yellow-600 hover:to-gray-100 ${roundedButtonClass}`}>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-xl">
          <p className="text-xs text-gray-400">© 2024 Switch Dimension. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes breath {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-breath {
          animation: breath 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
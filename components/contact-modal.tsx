"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"

interface ContactModalProps {
  subject?: string
  trigger?: React.ReactNode
}

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "technical", label: "Technical Support" },
  { value: "contribute", label: "Contribute to Project" },
  { value: "media", label: "Media/Press Inquiry" },
]

export function ContactModal({ subject = "Contact Inquiry", trigger }: ContactModalProps) {
  const [open, setOpen] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "general",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://submit-form.com/54d32Qt41", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `${inquiryTypes.find(t => t.value === formData.inquiryType)?.label} - ${formData.name}`,
          _redirect: "false",
          ...formData,
        }),
      })
      
      if (response.ok) {
        setOpen(false)
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          inquiryType: "general",
          message: "",
        })
        alert("Thank you for your message! We'll get back to you soon.")
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Contact Us</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-black border-chartreuse/20 p-0 overflow-hidden">
        <div className="relative">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
            <div className="h-full bg-chartreuse w-full" />
          </div>
          
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-chartreuse text-2xl">Get in Touch</DialogTitle>
          </DialogHeader>
          
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <MessageSquare className="w-12 h-12 text-chartreuse mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Let's start a conversation</h3>
                <p className="text-gray-400">We'd love to hear from you</p>
              </div>
              
              <form action="https://submit-form.com/54d32Qt41" method="POST" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-chartreuse/30 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-chartreuse/30 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-gray-300">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Awesome Inc."
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-chartreuse/30 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-chartreuse/30 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <Label className="text-gray-300 mb-3 block">Inquiry Type *</Label>
                  <RadioGroup
                    name="inquiryType"
                    value={formData.inquiryType}
                    onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    {inquiryTypes.map((type) => (
                      <div
                        key={type.value}
                        className="flex items-center space-x-2 p-3 rounded-lg border border-gray-700 hover:border-chartreuse/50 transition-colors cursor-pointer"
                      >
                        <RadioGroupItem value={type.value} id={type.value} className="text-chartreuse" />
                        <Label
                          htmlFor={type.value}
                          className="cursor-pointer text-gray-300 text-sm"
                        >
                          {type.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, question, or how we can help..."
                    className="min-h-[120px] bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="bg-chartreuse/10 border border-chartreuse/30 rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-chartreuse">Ready to send?</span> Your message will be sent securely.
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                    className="bg-transparent border-gray-700 text-gray-400 hover:text-white hover:border-gray-600"
                  >
                    Cancel
                  </Button>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-chartreuse/20 border border-chartreuse/50 text-chartreuse hover:bg-chartreuse/30 hover:border-chartreuse/70 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
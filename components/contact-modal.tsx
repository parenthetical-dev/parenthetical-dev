"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ContactModalProps {
  subject?: string
  trigger?: React.ReactNode
}

const inquiryTypes = [
  { value: "general", label: "General Inquiry", subject: "General Inquiry - Parenthetical" },
  { value: "partnership", label: "Partnership Opportunity", subject: "Partnership Opportunity with Parenthetical" },
  { value: "technical", label: "Technical Support", subject: "Technical Support Request" },
  { value: "contribute", label: "Contribute to Project", subject: "Contributing to Parenthetical Projects" },
  { value: "media", label: "Media/Press Inquiry", subject: "Media Inquiry - Parenthetical" },
]

export function ContactModal({ subject = "Contact Inquiry", trigger }: ContactModalProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedInquiry, setSelectedInquiry] = React.useState("general")
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: inquiryTypes[0].subject,
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const mailtoLink = `mailto:hello@parenthetical.dev?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    setOpen(false)
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
      <DialogContent className="sm:max-w-[600px] bg-black border-chartreuse/20">
        <DialogHeader>
          <DialogTitle className="text-chartreuse text-2xl">Get in Touch</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the form below to send us a message.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 focus:border-chartreuse/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 focus:border-chartreuse/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry-type" className="text-gray-300">Inquiry Type *</Label>
            <Select
              value={selectedInquiry}
              onValueChange={(value) => {
                setSelectedInquiry(value)
                const inquiry = inquiryTypes.find(t => t.value === value)
                if (inquiry) {
                  setFormData({ ...formData, subject: inquiry.subject })
                }
              }}
            >
              <SelectTrigger className="bg-black/50 border-chartreuse/30 text-white focus:border-chartreuse/60">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent className="bg-black border-chartreuse/30">
                {inquiryTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value} className="text-gray-300 hover:bg-chartreuse/20">
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 focus:border-chartreuse/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-300">Company</Label>
            <Input
              id="company"
              name="company"
              placeholder="Acme Inc."
              value={formData.company}
              onChange={handleInputChange}
              className="bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 focus:border-chartreuse/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-300">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 focus:border-chartreuse/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              className="min-h-[100px] bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 focus:border-chartreuse/60"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <p className="text-xs text-gray-500 text-right">
            This will open your default email client.
          </p>
          <DialogFooter className="gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="bg-white text-black border-white hover:bg-gray-200 hover:border-gray-200"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-chartreuse/20 border border-chartreuse/50 text-chartreuse hover:bg-chartreuse/30 hover:border-chartreuse/70"
            >
              Open Email Client
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
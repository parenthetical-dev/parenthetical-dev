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
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Code, Users, Rocket, GitBranch, Heart } from "lucide-react"

interface DevContactModalProps {
  trigger?: React.ReactNode
}

const techStack = [
  "React/Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST APIs",
  "AWS/Cloud",
  "Docker/K8s",
  "AI/ML",
  "Web3/Blockchain",
  "Mobile (React Native)",
  "DevOps/CI/CD",
  "Other"
]

const contributionAreas = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "AI/ML Integration",
  "DevOps & Infrastructure",
  "Security & Privacy",
  "Documentation",
  "Testing & QA",
  "UI/UX Design",
  "Open Source Maintenance"
]

const experienceLevels = [
  { value: "student", label: "Student/Learning", icon: "📚" },
  { value: "junior", label: "Junior (0-2 years)", icon: "🌱" },
  { value: "mid", label: "Mid-level (2-5 years)", icon: "🌿" },
  { value: "senior", label: "Senior (5+ years)", icon: "🌳" },
  { value: "expert", label: "Expert/Architect", icon: "🏔️" }
]

export function DevContactModal({ trigger }: DevContactModalProps) {
  const [open, setOpen] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(0)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    // Step 1 - Basic Info
    name: "",
    email: "",
    github: "",
    portfolio: "",
    
    // Step 2 - Experience
    experienceLevel: "",
    yearsOfExperience: "",
    currentRole: "",
    
    // Step 3 - Technical
    selectedTech: [] as string[],
    otherTech: "",
    
    // Step 4 - Contribution
    contributionAreas: [] as string[],
    availableHours: "",
    
    // Step 5 - Motivation
    motivation: "",
    projectIdeas: "",
    
    // Step 6 - Final
    location: "",
    timezone: "",
    additionalInfo: ""
  })

  const totalSteps = 6

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://submit-form.com/xWu4IGwgM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `Developer Application - ${formData.name}`,
          _redirect: "false",
          ...formData,
          selectedTech: formData.selectedTech.join(", "),
          contributionAreas: formData.contributionAreas.join(", ")
        }),
      })
      
      if (response.ok) {
        setOpen(false)
        // Reset form
        setCurrentStep(0)
        setFormData({
          name: "",
          email: "",
          github: "",
          portfolio: "",
          experienceLevel: "",
          yearsOfExperience: "",
          currentRole: "",
          selectedTech: [],
          otherTech: "",
          contributionAreas: [],
          availableHours: "",
          motivation: "",
          projectIdeas: "",
          location: "",
          timezone: "",
          additionalInfo: ""
        })
        // Show success message
        alert("Thank you for your application! We'll review it and get back to you soon.")
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <Code className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Let's start with the basics</h3>
              <p className="text-gray-400">Tell us who you are</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Developer"
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-gray-600 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-300">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-gray-600 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="github" className="text-gray-300">GitHub Username</Label>
                <Input
                  id="github"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  placeholder="@janedoe"
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-gray-600 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="portfolio" className="text-gray-300">Portfolio/Website</Label>
                <Input
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://jane.dev"
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-gray-600 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                />
              </div>
            </div>
          </motion.div>
        )
        
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Your experience</h3>
              <p className="text-gray-400">Help us understand your journey</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <Label className="text-gray-300 mb-3 block">Experience Level *</Label>
                <RadioGroup
                  value={formData.experienceLevel}
                  onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })}
                  className="space-y-3"
                >
                  {experienceLevels.map((level) => (
                    <div
                      key={level.value}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-gray-700 hover:border-chartreuse/50 transition-colors cursor-pointer"
                    >
                      <RadioGroupItem value={level.value} id={level.value} className="text-white" />
                      <Label
                        htmlFor={level.value}
                        className="flex items-center gap-3 cursor-pointer text-gray-300 flex-1"
                      >
                        <span className="text-2xl">{level.icon}</span>
                        <span>{level.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="currentRole" className="text-gray-300">Current Role/Title</Label>
                <Input
                  id="currentRole"
                  value={formData.currentRole}
                  onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                  placeholder="Frontend Developer at Awesome Inc."
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-gray-600 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                />
              </div>
            </div>
          </motion.div>
        )
        
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <GitBranch className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Technical skills</h3>
              <p className="text-gray-400">Select all that apply</p>
            </div>
            
            <div className="space-y-4">
              <Label className="text-gray-300">Technologies you work with *</Label>
              <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2">
                {techStack.map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <Checkbox
                      id={tech}
                      checked={formData.selectedTech.includes(tech)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({ ...formData, selectedTech: [...formData.selectedTech, tech] })
                        } else {
                          setFormData({
                            ...formData,
                            selectedTech: formData.selectedTech.filter((t) => t !== tech)
                          })
                        }
                      }}
                      className="border-gray-500 data-[state=checked]:bg-white data-[state=checked]:border-white data-[state=checked]:text-black"
                    />
                    <Label
                      htmlFor={tech}
                      className="text-gray-300 cursor-pointer hover:text-white transition-colors"
                    >
                      {tech}
                    </Label>
                  </div>
                ))}
              </div>
              
              {formData.selectedTech.includes("Other") && (
                <div>
                  <Label htmlFor="otherTech" className="text-gray-300">Please specify</Label>
                  <Input
                    id="otherTech"
                    value={formData.otherTech}
                    onChange={(e) => setFormData({ ...formData, otherTech: e.target.value })}
                    placeholder="Rust, Elixir, etc."
                    className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-gray-600 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )
        
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <Rocket className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">How you'd like to contribute</h3>
              <p className="text-gray-400">Where do you see yourself making an impact?</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-gray-300 mb-3 block">Areas of contribution *</Label>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {contributionAreas.map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox
                        id={area}
                        checked={formData.contributionAreas.includes(area)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              contributionAreas: [...formData.contributionAreas, area]
                            })
                          } else {
                            setFormData({
                              ...formData,
                              contributionAreas: formData.contributionAreas.filter((a) => a !== area)
                            })
                          }
                        }}
                        className="border-gray-500 data-[state=checked]:bg-white data-[state=checked]:border-white data-[state=checked]:text-black"
                      />
                      <Label
                        htmlFor={area}
                        className="text-gray-300 cursor-pointer hover:text-white transition-colors text-sm"
                      >
                        {area}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="availableHours" className="text-gray-300">
                  How many hours per week could you contribute?
                </Label>
                <RadioGroup
                  value={formData.availableHours}
                  onValueChange={(value) => setFormData({ ...formData, availableHours: value })}
                  className="flex flex-col space-y-2 mt-2"
                >
                  {["1-5", "5-10", "10-20", "20+", "Flexible"].map((hours) => (
                    <div key={hours} className="flex items-center space-x-2">
                      <RadioGroupItem value={hours} id={hours} className="text-white" />
                      <Label htmlFor={hours} className="text-gray-300 cursor-pointer">
                        {hours} hours
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </motion.div>
        )
        
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Your motivation</h3>
              <p className="text-gray-400">What drives you to contribute?</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="motivation" className="text-gray-300">
                  Why do you want to contribute to Parenthetical? *
                </Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Tell us what resonates with you about our mission..."
                  className="min-h-[120px] bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 outline-none"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="projectIdeas" className="text-gray-300">
                  Any specific ideas or features you'd like to work on?
                </Label>
                <Textarea
                  id="projectIdeas"
                  value={formData.projectIdeas}
                  onChange={(e) => setFormData({ ...formData, projectIdeas: e.target.value })}
                  placeholder="Share your vision for how technology can serve marginalized communities..."
                  className="min-h-[120px] bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 outline-none"
                />
              </div>
            </div>
          </motion.div>
        )
        
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Almost there!</h3>
              <p className="text-gray-400">A few final details</p>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location" className="text-gray-300">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="City, Country"
                    className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-gray-600 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="timezone" className="text-gray-300">Timezone</Label>
                  <Input
                    id="timezone"
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                    placeholder="EST, PST, GMT+2"
                    className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 outline-none autofill:bg-black/50 autofill:text-white autofill:border-gray-600 [-webkit-autofill]:bg-black/50 [-webkit-autofill]:text-white"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="additionalInfo" className="text-gray-300">
                  Anything else you'd like us to know?
                </Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  placeholder="Other relevant experience, personal projects, or anything that might help us understand how we can work together..."
                  className="min-h-[100px] bg-black/50 border-chartreuse/30 text-white placeholder:text-gray-500 outline-none"
                />
              </div>
            </div>
            
            <div className="bg-white/10 border border-white/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">Ready to submit?</span> Your application will be sent securely.
              </p>
            </div>
          </motion.div>
        )
        
      default:
        return null
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Apply to Contribute</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-black border-white/20 p-0 overflow-hidden">
        <div className="relative">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
          
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-white text-2xl">Developer Application</DialogTitle>
          </DialogHeader>
          
          <div className="p-6 min-h-[400px]">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center p-6 pt-0">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="bg-transparent border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <span className="text-gray-500 text-sm">
              {currentStep + 1} of {totalSteps}
            </span>
            
            {currentStep === totalSteps - 1 ? (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-white/20 border border-white/50 text-white hover:bg-white/30 hover:border-white/70 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleNext}
                className="bg-white/20 border border-white/50 text-white hover:bg-white/30 hover:border-white/70"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
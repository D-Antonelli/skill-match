"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock function to analyze job posting
const analyzeJobPosting = (posting: string) => {
  // In a real application, this would be an API call to a backend service
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Agile methodologies",
  ]
  return skills.filter(() => Math.random() > 0.5)
}

function JobSkillsAnalyzer() {
  const [jobPosting, setJobPosting] = useState("")
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([])

  const handleAnalyze = () => {
    const skills = analyzeJobPosting(jobPosting)
    setSuggestedSkills(skills)
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Job Skills Analyzer</h1>
      <Card>
        <CardHeader>
          <CardTitle>Job Posting</CardTitle>
          <CardDescription>Paste the job posting here for analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Paste job posting here..."
            value={jobPosting}
            onChange={(e) => setJobPosting(e.target.value)}
            className="min-h-[200px]"
          />
          <Button onClick={handleAnalyze} className="mt-4">
            Analyze Job Posting
          </Button>
        </CardContent>
      </Card>

      {suggestedSkills.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Suggested Skills to Develop</CardTitle>
            <CardDescription>Based on the analysis of the job posting</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {suggestedSkills.map((skill, index) => (
                <li key={index} className="mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}


export default function Home() {
  return (
    <JobSkillsAnalyzer />
  );
}

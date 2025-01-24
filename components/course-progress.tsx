"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { Video } from "@/types/course"

interface CourseProgressContextType {
  completedVideos: Set<string>
  toggleVideoCompletion: (videoId: string) => void
  getProgress: (courseId: string, videos: Video[]) => number
}

const CourseProgressContext = createContext<CourseProgressContextType | undefined>(undefined)

export function CourseProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedVideos, setCompletedVideos] = useState<Set<string>>(new Set())

  useEffect(() => {
    const saved = localStorage.getItem("completedVideos")
    if (saved) {
      setCompletedVideos(new Set(JSON.parse(saved)))
    }
  }, [])

  const toggleVideoCompletion = (videoId: string) => {
    setCompletedVideos((prev) => {
      const next = new Set(prev)
      if (next.has(videoId)) {
        next.delete(videoId)
      } else {
        next.add(videoId)
      }
      localStorage.setItem("completedVideos", JSON.stringify(Array.from(next)))
      return next
    })
  }

  const getProgress = (courseId: string, videos: Video[]) => {
    const completed = videos.filter((video) => completedVideos.has(video.id)).length
    return (completed / videos.length) * 100
  }

  return (
    <CourseProgressContext.Provider value={{ completedVideos, toggleVideoCompletion, getProgress }}>
      {children}
    </CourseProgressContext.Provider>
  )
}

export function useCourseProgress() {
  const context = useContext(CourseProgressContext)
  if (!context) {
    throw new Error("useCourseProgress must be used within a CourseProgressProvider")
  }
  return context
}


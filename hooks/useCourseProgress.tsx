import { useState, useEffect } from "react"

type Video = {
  id: string
  completed: boolean
}

type Course = {
  id: string
  videos: Video[]
}

export function useCourseProgress() {
  const [progress, setProgress] = useState<{ [courseId: string]: number }>({})

  useEffect(() => {
    // In a real application, you would fetch the progress from an API or local storage
    // For this example, we'll use mock data
    const mockProgress = {
      "1": 0,
      "2": 0,
    }
    setProgress(mockProgress)
  }, [])

  const getProgress = (courseId: string, videos: Video[]) => {
    if (!videos.length) return 0
    const completedVideos = videos.filter((video) => video.completed).length
    return (completedVideos / videos.length) * 100
  }

  const updateProgress = (courseId: string, videoId: string, completed: boolean) => {
    setProgress((prev) => ({
      ...prev,
      [courseId]: getProgress(courseId, [{ id: videoId, completed }]),
    }))
  }

  return { getProgress, updateProgress }
}


"use client"

import { CheckCircle, Circle } from "lucide-react"
import { useCourseProgress } from "@/components/course-progress"
import type { Video } from "@/types/course"

interface VideoListProps {
  videos: Video[]
  selectedVideo: Video
  onSelectVideo: (video: Video) => void
}

export function VideoList({ videos, selectedVideo, onSelectVideo }: VideoListProps) {
  const { completedVideos, toggleVideoCompletion } = useCourseProgress()

  return (
    <div className="space-y-1 p-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className={`flex items-start gap-2 p-3 rounded-lg cursor-pointer hover:bg-accent transition-colors ${
            selectedVideo.id === video.id ? "bg-accent" : ""
          }`}
          onClick={() => onSelectVideo(video)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleVideoCompletion(video.id)
            }}
            className="text-primary mt-1 flex-shrink-0"
          >
            {completedVideos.has(video.id) ? <CheckCircle className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
          </button>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-tight">{video.title}</span>
            <span className="text-xs text-muted-foreground">Aula {video.id}</span>
          </div>
        </div>
      ))}
    </div>
  )
}


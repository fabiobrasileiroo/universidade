"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { VideoPlayer } from "@/components/video-player";
import { VideoList } from "@/components/video-list";
import { useCourseProgress } from "@/components/course-progress";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { coursesData } from "@/data/coursesData";

export function CoursePage({ id }: { id: string }) {
  const courseData = coursesData[id];
  const [selectedVideo, setSelectedVideo] = useState(courseData.videos[0]);
  const { getProgress } = useCourseProgress();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (courseData) {
      setProgress(getProgress(courseData.id, courseData.videos));
    }
  }, [courseData, getProgress]);

  if (!courseData) {
    return <div>Curso não encontrado</div>;
  }

  return (
    <div className="container mx-auto py-6 max-w-[1400px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <div className="space-y-6">
            <Link href="/" passHref>
              <button className="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none">
                <FaArrowLeft />
              </button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
              <p className="text-muted-foreground">{courseData.description}</p>
            </div>
            <VideoPlayer videoId={selectedVideo.videoId} />
            <Card>
              <CardHeader>
                <CardTitle>Sobre o Professor</CardTitle>
              </CardHeader>
              <CardContent className="flex items-start space-x-4">
                <img
                  src={courseData.professor.imageUrl || "/placeholder.svg"}
                  alt={courseData.professor.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{courseData.professor.name}</h3>
                  <p className="text-sm text-muted-foreground">{courseData.professor.bio}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="lg:col-span-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">Aulas</CardTitle>
              <div className="space-y-2">
                <Progress value={progress} />
                <p className="text-sm text-muted-foreground">
                  {Math.round(progress)}% concluído
                </p>
              </div>
            </CardHeader>
            <Separator />
            <ScrollArea className="h-[500px]">
              <VideoList
                videos={courseData.videos}
                selectedVideo={selectedVideo}
                onSelectVideo={setSelectedVideo}
              />
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  );
}

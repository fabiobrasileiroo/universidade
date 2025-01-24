"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useCourseProgress } from "@/components/course-progress"

const courses = [
  {
    id: "1",
    title: "Circuitos Digitais",
    description: "Introdução aos conceitos fundamentais de circuitos digitais",
    videos: [
      { id: "1", title: "Introdução a Circuitos Digitais", videoId: "dQw4w9WgXcQ", completed: false },
    ],
  },

]

export function HomePage() {
  const { getProgress } = useCourseProgress()

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Cursos Disponíveis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link href={`/curso/${course.id}`} key={course.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress value={getProgress(course.id, course.videos)} />
                  <p className="text-sm text-muted-foreground">
                    {Math.round(getProgress(course.id, course.videos))}% concluído
                  </p>
                  <p className="text-sm">{course.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


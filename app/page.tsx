"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useCourseProgress } from "@/hooks/useCourseProgress"
import { CourseGrid } from "@/components/CourserGrid"

const courses = [
  {
    id: "circuitos-digitais",
    title: "Circuitos Digitais",
    description: "Introdução aos conceitos fundamentais de circuitos digitais",
    videos: [],
  },
  {
    id: "matematica-discreta",
    title: "Matemática Discreta",
    description: "Aulas e Provas do Curso de Matemática Discreta voltada para computação",
    videos: [],
  },
]

export default function HomePage() {
  const { getProgress } = useCourseProgress()

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Cursos Disponíveis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

      <h2 className="text-3xl font-bold mb-6">Grade Curricular</h2>
      <h3 className="text-xl font-semibold mb-4">Grade do curso de Ciência da Computação da Universidade Brasileira Livre (UBL)</h3>
      <CourseGrid />
    </div>
  )
}

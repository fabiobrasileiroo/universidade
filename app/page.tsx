"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useCourseProgress } from "@/hooks/useCourseProgress"
import { CourseGrid } from "@/components/CourserGrid"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Github } from "lucide-react"

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
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Portal de Ciência da Computação Open Source</h1>
        <p className="text-xl text-muted-foreground mb-6">Inspirado no projeto Universidade Brasileira Livre (UBL)</p>
        <div className="flex justify-center space-x-4">
          <Button>
            <GraduationCap className="mr-2 h-4 w-4" />
            Comece a Aprender
          </Button>
          <a href="https://github.com/MarlonJerold/universidade" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
          <Github className="mr-2 h-4 w-4" />
        Contribua no GitHub
        </Button>
        </a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              Este portal é um projeto em construção voltado para estudos no curso de Ciência da Computação, inspirado
              no projeto Universidade Brasileira Livre (UBL). Nosso objetivo é criar uma plataforma de aprendizado open
              source, acessível a todos.
            </p>
            <p className="text-lg mb-4">
              Atualmente, disponibilizamos a grade curricular do curso da UBL e estamos trabalhando para adicionar mais
              conteúdos e recursos educacionais.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card>
                <CardContent className="flex flex-col items-center p-4">
                  <BookOpen className="h-12 w-12 text-primary mb-2" />
                  <h3 className="text-lg font-semibold">Conteúdo Gratuito</h3>
                  <p className="text-center text-sm text-muted-foreground">Acesso livre a materiais de estudo</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-4">
                  <Users className="h-12 w-12 text-primary mb-2" />
                  <h3 className="text-lg font-semibold">Comunidade Ativa</h3>
                  <p className="text-center text-sm text-muted-foreground">Aprenda e colabore com outros estudantes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-4">
                  <Github className="h-12 w-12 text-primary mb-2" />
                  <h3 className="text-lg font-semibold">Open Source</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Contribua para o desenvolvimento do projeto
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
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
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Grade Curricular</h2>
        <h3 className="text-xl font-semibold mb-4">
          Grade do curso de Ciência da Computação da Universidade Brasileira Livre (UBL)
        </h3>
        <CourseGrid />
      </section>
    </div>
  )
}


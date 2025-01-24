import { CourseProgressProvider } from "@/components/course-progress"

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CourseProgressProvider>{children}</CourseProgressProvider>
}


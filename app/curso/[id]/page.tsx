import { CoursePage } from "@/components/course-page"

export default function Page({ params }: { params: { id: string } }) {
  return <CoursePage id={params.id} />
}


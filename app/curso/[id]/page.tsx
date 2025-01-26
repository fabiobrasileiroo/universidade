import { CoursePage } from "@/components/course-page"

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params; 
  const { id } = resolvedParams; 
  return <CoursePage id={id} />;
}
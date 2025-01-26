import { CoursePage } from "@/components/course-page"

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params; 
  return <CoursePage id={id} />;
}


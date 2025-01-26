import { CoursePage } from "@/components/course-page"

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params; 
  return <CoursePage id={id} />;
}
import type React from "react"
import { Handle, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"

interface CourseNodeProps {
  data: {
    label: string
    isSelected: boolean
    isConnected: boolean
    semesterIndex: number
  }
}

const CourseNode: React.FC<CourseNodeProps> = ({ data }) => {
  return (
    <Card
      className={`w-48 transition-all duration-300 ${
        data.isSelected ? "bg-primary text-primary-foreground" : data.isConnected ? "bg-secondary" : "bg-background"
      }`}
    >
      <CardContent className="p-4">
        <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-muted-foreground" />
        <div className="font-semibold text-sm">{data.label}</div>
        <div className="text-xs text-muted-foreground mt-1">Semestre {data.semesterIndex + 1}</div>
        <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-muted-foreground" />
      </CardContent>
    </Card>
  )
}

export default CourseNode


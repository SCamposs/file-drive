import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Doc } from '../../convex/_generated/dataModel'
import { Button } from '@/components/ui/button'

export function FileCard({ file }: { file: Doc<'files'> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-ellipsis overflow-hidden">
          {file.name}
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Download</Button>
      </CardFooter>
    </Card>
  )
}

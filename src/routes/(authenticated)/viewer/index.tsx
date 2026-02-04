import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(authenticated)/viewer/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(authenticated)/viewer/"!</div>
}

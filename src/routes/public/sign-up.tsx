import { createFileRoute } from '@tanstack/react-router';
import SignUpLayout from '@/components/sign-up/layout/signUpLayout';

export const Route = createFileRoute('/public/sign-up')({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignUpLayout />;
}

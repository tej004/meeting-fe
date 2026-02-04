import {
  createFileRoute,
  useParams,
  useRouter,
  useSearch,
} from '@tanstack/react-router';
import { Loader2, UserPlus } from 'lucide-react';
import { useId, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { authService } from '@/services/auth/auth.service';
import { useUserStore } from '@/store/stores/user.store';

export const Route = createFileRoute('/public/redirects/room/$roomId')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    key: typeof search.key === 'string' ? search.key : undefined,
  }),
});

function RouteComponent() {
  const nameId = useId();
  const router = useRouter();
  const { login } = useUserStore();
  const roomIdParam = useParams({
    from: '/public/redirects/room/$roomId',
    select: (params) => params.roomId,
  });
  const keyParam = useSearch({
    from: '/public/redirects/room/$roomId',
    select: (search) => search.key,
  });
  const roomId = roomIdParam ?? '';
  const key = keyParam ?? '';

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleLogin = async () => {
    setTouched(true);
    if (!name) return;
    setLoading(true);
    try {
      const { data } = await authService.loginViewer({
        name,
        roomId,
        tempKey: key,
      });

      login({
        auth: { isAuthenticated: true, accessToken: data.data.accessToken },
        user: data.data.user,
      });

      toast.success('Successfully requested as viewer!');
      router.navigate({ to: '/viewer' });
    } catch (err: any) {
      toast.error('Link expired. Please request a new room link.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col gap-2 items-center">
          <span className="inline-flex items-center justify-center text-primary rounded-full w-14 h-14 mb-2 shadow border border-primary/20">
            <UserPlus className="h-7 w-7" />
          </span>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Request to Join Room
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm text-center">
            Enter your name to enter the room
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id={nameId}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched(true)}
                required
                disabled={loading}
                autoFocus
                className={
                  touched && !name
                    ? 'border-destructive focus-visible:ring-destructive'
                    : ''
                }
              />
              {touched && !name && (
                <span className="text-xs text-destructive mt-1">
                  Name is required
                </span>
              )}
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full"
              size="lg"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
              ) : null}
              Join as Viewer
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

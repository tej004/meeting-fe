import { useNavigate } from '@tanstack/react-router';
import { useId, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { userService } from '@/services/auth/user.service';

const SignUpForm = ({ className, ...props }: React.ComponentProps<'form'>) => {
  const firstNameId = useId();
  const lastNameId = useId();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);

    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await userService.signUp(data);
      toast.success('Successful sign up', {
        duration: 1000,
        description: 'Please log in your account.',
      });
      navigate({ to: '/' });
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={cn('flex flex-col gap-6', className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <div className="flex gap-4">
          <Field className="flex-1">
            <FieldLabel htmlFor={firstNameId}>First Name</FieldLabel>
            <Input
              id={firstNameId}
              name="firstName"
              type="text"
              placeholder="John"
              required
              value={data.firstName}
              onChange={handleChange}
            />
          </Field>
          <Field className="flex-1">
            <FieldLabel htmlFor={lastNameId}>Last Name</FieldLabel>
            <Input
              id={lastNameId}
              name="lastName"
              type="text"
              placeholder="Doe"
              required
              value={data.lastName}
              onChange={handleChange}
            />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor={nameId}>Username</FieldLabel>
          <Input
            id={nameId}
            name="username"
            type="text"
            placeholder="johndoe"
            required
            value={data.username}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor={emailId}>Email</FieldLabel>
          <Input
            id={emailId}
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            value={data.email}
            onChange={handleChange}
          />
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email
            with anyone else.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor={passwordId}>Password</FieldLabel>
          <Input
            id={passwordId}
            name="password"
            type="password"
            required
            value={data.password}
            onChange={handleChange}
          />
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor={confirmPasswordId}>Confirm Password</FieldLabel>
          <Input
            id={confirmPasswordId}
            name="confirmPassword"
            type="password"
            required
            value={data.confirmPassword}
            onChange={handleChange}
          />
          <FieldDescription>Please confirm your password.</FieldDescription>
        </Field>
        {error && (
          <Field>
            <span className="text-red-500 text-sm">{error}</span>
          </Field>
        )}
        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Account'}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default SignUpForm;

'use client';
import React, { useEffect, useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { ToastAction } from '@radix-ui/react-toast';
import { LoaderPinwheel, MailCheck, SendHorizontal } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('this is response : >>', response);

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({ loading: false, error: '', success: true });
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setStatus({
        loading: false,
        error: 'Failed to send message',
        success: false,
      });
    }
  };

  useEffect(() => {
    if (status.success) {
      setTimeout(() => {
        setStatus({ loading: false, error: '', success: false });
      }, 3000);
    }
  }, [status.success]);

  return (
    <div className="max-w-md w-full lg:w-[80%] md:w-[80%] sm:w-[80%] mx-auto rounded-2xl md:rounded-2xl p-7 md:p-8 shadow-input bg-white dark:bg-black border border-neutral-500">
      <h2 className="font-bold text-2xl text-neutral-200 dark:text-neutral-200">
        Get in Touch
      </h2>
      <p className="text-neutral-300 text-md max-w-sm mt-2 dark:text-neutral-300">
        Have a question, project idea, or just want to connect?
      </p>

      <form onSubmit={handleSubmit} className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Tyler"
            type="text"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="******@gmail.com"
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your message</Label>
          <textarea
            name="message"
            id="message"
            className="flex h-28 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
            maxLength={100}
            placeholder="Your message"
            value={formData.message}
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </LabelInputContainer>

        {status.loading ? (
          <LoaderPinwheel className="animate-spin mx-auto pt-2 text-neutral-700 w-8 h-8" />
        ) : status.success ? (
          <p className="text-green-500 mt-2 text-center">
            <MailCheck className="animate-pulse mx-auto" />
          </p>
        ) : status.error ? (
          <p className="text-red-500 mt-2 text-center">{status.error}</p>
        ) : (
          <button
            type="submit"
            disabled={status.loading}
            className="bg-gradient-to-br px-2 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block text-sm dark:bg-zinc-800 w-fit mx-auto text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            <div className="flex items-center justify-center gap-2">
              Send it now
              <SendHorizontal className="animate-pulse" />
            </div>
          </button>
        )}

        <BottomGradient />
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(1000, {
      message: 'Message must not exceed 1000 characters.',
    }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        toast.error(
          result.error || 'Failed to send message. Please try again.',
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl relative overflow-hidden"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        
        {/* Header */}
        <div className="relative">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
            <span className="relative flex items-center">
              <span className="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping" />
              <span className="relative w-4 h-4 bg-blue-500 rounded-full" />
            </span>
            Let&apos;s Connect
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Fill out the form and I&apos;ll get back to you soon.
          </p>
        </div>

        {/* Name Field */}
        <div className="relative group">
          <input
            type="text"
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-transparent"
            {...register('name')}
          />
          <label className="absolute left-4 top-2 text-xs font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500">
            Name *
          </label>
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="relative group">
          <input
            type="email"
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-transparent"
            {...register('email')}
          />
          <label className="absolute left-4 top-2 text-xs font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500">
            Email *
          </label>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="relative group">
          <textarea
            placeholder=" "
            rows={4}
            className="peer w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-transparent resize-none"
            {...register('message')}
          />
          <label className="absolute left-4 top-2 text-xs font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500">
            Message *
          </label>
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative mt-2 w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden cursor-pointer"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                Send Message
              </>
            )}
          </span>
          
          {/* Button shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>
      </form>
    </div>
  );
}

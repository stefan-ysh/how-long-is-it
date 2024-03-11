'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { measureAction } from '@/actions/measure-action';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  // 这句话的意思是，length 必须是一个正数
  length: z.string().min(3),
});

type FormSchema = z.infer<typeof formSchema>;

export const HeroForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      length: '',
    },
  });
  const { toast } = useToast();

  const onSubmit = async ({ length }: FormSchema) => {
    console.log('[ length ] >', length);
    const { message } = await measureAction(length);

    toast({ description: message });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) => {
          console.log('form.handleSubmit');
          onSubmit(v);
        })}
        className="flex gap-3"
      >
        <FormField
          control={form.control}
          name="length"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder=""
                  className={cn(
                    'md:w-96',
                    form.formState.errors.length && 'border-destructive'
                  )}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button variant="secondary" type="submit">
          Measure
        </Button>
      </form>
    </Form>
  );
};

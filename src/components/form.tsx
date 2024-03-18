'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { measureAction } from '@/actions/measure-action';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
const options = [
  { value: 'm', label: '米' },
  { value: 'cm', label: '厘米' },
  { value: 'mm', label: '毫米' },
  // { value: 'foot', label: '英尺' },
  // { value: 'yard', label: '码' },
  // { value: 'inch', label: '英寸' },
  // { value: 'mile', label: '英里' },
  // { value: 'kilometer', label: '千米' },
  // { value: 'centimeter', label: '厘米' },
  // { value: 'millimeter', label: '毫米' },
  // { value: 'micrometer', label: '微米' },
  // { value: 'nanometer', label: '纳米' },
  // { value: 'angstrom', label: '埃' },
  // { value: 'light-year', label: '光年' },
];
const formSchema = z.object({
  // 这句话的意思是，length 必须是一个正数
  length: z.string().min(3),
});

type FormSchema = z.infer<typeof formSchema>;

export const HeroForm = () => {
  const [unit, setUnit] = useState('meter');
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      length: '',
    },
  });
  const { toast } = useToast();

  const onSubmit = async ({ length }: FormSchema) => {
    console.log('[ length ] >', length);
    const { message } = await measureAction(unit, length);

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
        <Select
          options={options}
          onChange={(unit) => {
            setUnit(unit);
          }}
        />
        <Button
          variant="secondary"
          type="submit"
          disabled={!form.formState.isValid}
          style={{
            cursor: !form.formState.isValid ? 'not-allowed' : 'pointer',
          }}
        >
          Measure
        </Button>
      </form>
    </Form>
  );
};

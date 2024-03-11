import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground absolute bottom-2 w-full text-center text-sm">
      © {new Date().getFullYear()} By{' '}
      <Button variant="link" className="p-0" asChild>
        <a href="https:/www.507807.xyz/">Shuai Yuan</a>
      </Button>
    </footer>
  );
};

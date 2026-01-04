import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to PreserveWise!",
        description: "You've been added to our newsletter. Check your inbox for preservation tips!",
      });
    }
  };

  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-3xl font-bold">
            Get Science-Based Preservation Tips
          </h2>
          <p className="text-primary-foreground/80">
            Join our newsletter for seasonal guides, safety updates, and tested recipes 
            delivered to your inbox. No spam, just practical knowledge.
          </p>
          
          {isSubmitted ? (
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-6 py-3 rounded-full">
              <Check className="w-5 h-5" />
              <span>You're subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground"
              />
              <Button type="submit" variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Form submission animation
    if (formRef.current) {
      gsap.to(formRef.current, { duration: 0.3, scale: 0.95, ease: "power2.out" })
        .then(() => {
          gsap.to(formRef.current, { duration: 0.3, scale: 1, ease: "power2.out" });
        });
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        console.log('Form submitted successfully');
        form.reset();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    
    elements?.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="reveal">
              <h3 className="text-2xl font-bold mb-8 text-primary">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-text-muted">pandeyarpit0104@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-text-muted">+91 8505957042</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-text-muted">Roshanpura Najafgarh Delhi, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-secondary">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-dark-card rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/arpitpandey" className="w-12 h-12 bg-dark-card rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-dark-card rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-dark-card rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="reveal">
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                  <Input
                    id="name"
                    {...form.register('name')}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-surface rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-surface rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</Label>
                  <Input
                    id="subject"
                    {...form.register('subject')}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-surface rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Subject"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                  <Textarea
                    id="message"
                    {...form.register('message')}
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-surface rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your message..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

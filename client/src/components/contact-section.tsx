import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      institution: "",
      message: "",
      phone: "",
    },
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for your interest. We will contact you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertInquiry) => {
    submitInquiry.mutate(data);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Inquire About Our Collection
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contact us to discuss your institutional requirements or to schedule a private consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Business Inquiry Form
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Your full name"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              placeholder="your.email@institution.com"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="institution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institution / Company *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Institution or company name"
                              data-testid="input-institution"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field}
                              placeholder="Please describe your requirements, including any specific periods, styles, or types of pieces you're seeking..."
                              className="min-h-[150px] resize-none"
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={submitInquiry.isPending}
                      data-testid="button-submit-inquiry"
                    >
                      {submitInquiry.isPending ? "Submitting..." : "Submit Inquiry"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">Email</h3>
                    <div className="space-y-1">
                      <a
                        href="mailto:michelletianna616@gmail.com"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-email-primary"
                      >
                        michelletianna616@gmail.com
                      </a>
                      <a
                        href="mailto:michellescarlet455@gmail.com"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-email-secondary"
                      >
                        michellescarlet455@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">Phone</h3>
                    <a
                      href="tel:+61434654261"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      data-testid="link-phone"
                    >
                      +61 434 654 261
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      International business inquiries
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300 bg-secondary/10 border-secondary/30" data-testid="card-business-model-contact">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-foreground mb-3">Business Model</h3>
                    <div className="space-y-2">
                      <p className="text-foreground font-bold text-lg">
                        Online-Only Operations
                      </p>
                      <p className="text-foreground font-bold text-lg">
                        B2B Exclusively
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      Serving museums, luxury retail, corporate collections, and multinational institutional projects worldwide. All consultations and transactions conducted remotely with the highest professionalism.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <p className="text-sm text-muted-foreground italic">
                  "Response time: Within 24 hours for all institutional inquiries"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  FileText,
  Award,
  ExternalLink,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contatti = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    projectType: "",
    timeline: "",
    message: "",
    privacy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Privacy richiesta",
        description: "Accetta la privacy policy per proseguire",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simula invio
    setTimeout(() => {
      toast({
        title: "Messaggio inviato!",
        description: "Ti ricontatteremo entro 24 ore per programmare la call gratuita.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        projectType: "",
        timeline: "",
        message: "",
        privacy: false
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Prenota Call Gratuita",
      description: "Consulenza gratuita di 15 minuti per discutere il tuo progetto",
      action: "Prenota ora",
      actionType: "primary",
      link: "#calendly"
    },
    {
      icon: Mail,
      title: "Email Diretta",
      description: "Scrivici per domande specifiche o richieste personalizzate",
      action: "info@revmed.it",
      actionType: "secondary",
      link: "mailto:info@revmed.it"
    },
    {
      icon: Phone,
      title: "Supporto Telefonico",
      description: "Lun-Ven 9:00-18:00 per clienti Premium e Standard",
      action: "+39 02 1234 5678",
      actionType: "secondary",
      link: "tel:+390212345678"
    }
  ];

  const packages = [
    {
      name: "Base",
      price: "500-700€",
      description: "Ricerca bibliografica + deduplica",
      duration: "5-7 giorni",
      icon: FileText,
      popular: false
    },
    {
      name: "Standard",
      price: "1.200-2.000€",
      description: "Revisione sistematica completa",
      duration: "≈ 2 settimane",
      icon: Users,
      popular: true
    },
    {
      name: "Premium",
      price: "2.500-4.000€",
      description: "Revisione + meta-analisi + supporto submission",
      duration: "≈ 3 settimane",
      icon: Award,
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Quanto costa una consulenza?",
      answer: "La prima consulenza di 15 minuti è sempre gratuita e senza impegno."
    },
    {
      question: "Entro quanto tempo ricevo un preventivo?",
      answer: "Inviiamo sempre il preventivo dettagliato entro 24-48 ore dalla call."
    },
    {
      question: "Posso vedere esempi di lavori precedenti?",
      answer: "Sì, durante la call ti mostreremo case study anonimi di progetti simili al tuo."
    },
    {
      question: "Offrite garanzie sulla qualità?",
      answer: "Se la revisione non viene accettata per motivi metodologici, rifacciamo il lavoro gratuitamente."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl text-center">
          <MessageSquare className="h-16 w-16 text-teal mx-auto mb-6" />
          
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
            Parliamo del tuo{" "}
            <span className="text-teal">progetto</span>
          </h1>
          
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Consulenza gratuita di 15 minuti per valutare insieme il tuo progetto di revisione sistematica 
            e trovare la soluzione migliore per i tuoi obiettivi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Prenota call gratuita
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="mailto:info@revmed.it">
                <Mail className="mr-2 h-5 w-5" />
                Scrivi una email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-medical-border hover:shadow-medical transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mb-4">
                    <method.icon className="h-8 w-8 text-teal" />
                  </div>
                  <CardTitle className="font-heading text-xl mb-2">
                    {method.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {method.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full"
                    variant={method.actionType === 'primary' ? 'default' : 'outline'}
                    asChild
                  >
                    <a href={method.link} target={method.link.startsWith('http') ? '_blank' : '_self'}>
                      {method.action}
                      {method.link.startsWith('http') && <ExternalLink className="ml-2 h-4 w-4" />}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Quick Packages Overview */}
      <section className="py-20 px-6 bg-medical-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-medical-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">
                    Richiedi Informazioni
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Compila il form per ricevere un preventivo personalizzato o per prenotare una call gratuita
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome e Cognome *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          placeholder="Il tuo nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          placeholder="la.tua@email.it"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefono (opzionale)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+39 123 456 7890"
                        />
                      </div>
                      <div>
                        <Label htmlFor="organization">Organizzazione</Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => handleInputChange('organization', e.target.value)}
                          placeholder="Università, Ospedale, etc."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="project-type">Tipo di progetto</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleziona il tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="systematic-review">Revisione Sistematica</SelectItem>
                            <SelectItem value="meta-analysis">Meta-analisi</SelectItem>
                            <SelectItem value="literature-review">Literature Review</SelectItem>
                            <SelectItem value="scoping-review">Scoping Review</SelectItem>
                            <SelectItem value="bibliographic-search">Solo ricerca bibliografica</SelectItem>
                            <SelectItem value="other">Altro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Tempistiche desiderate</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Quando ti serve?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgente (entro 1 settimana)</SelectItem>
                            <SelectItem value="1-month">Entro 1 mese</SelectItem>
                            <SelectItem value="2-months">Entro 2 mesi</SelectItem>
                            <SelectItem value="3-months">Entro 3 mesi</SelectItem>
                            <SelectItem value="flexible">Flessibile</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Descrizione del progetto</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Descrivici brevemente il tuo progetto, gli obiettivi, il topic di interesse e qualsiasi altra informazione utile..."
                        rows={4}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacy}
                        onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
                      />
                      <Label htmlFor="privacy" className="text-sm leading-relaxed">
                        Accetto la{" "}
                        <a href="/privacy" className="text-teal hover:underline">
                          privacy policy
                        </a>{" "}
                        e autorizzo il trattamento dei miei dati per ricevere informazioni sui servizi RevMed. *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Zap className="mr-2 h-5 w-5 animate-pulse" />
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Invia richiesta
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ti ricontatteremo entro 24 ore per programmare la tua consulenza gratuita
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Quick Packages */}
              <Card className="border-medical-border">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    Pacchetti Disponibili
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {packages.map((pkg, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${pkg.popular ? 'border-teal bg-teal-light' : 'border-medical-border'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <pkg.icon className={`h-5 w-5 ${pkg.popular ? 'text-teal-dark' : 'text-teal'}`} />
                        <div className="font-medium text-sm">{pkg.name}</div>
                        {pkg.popular && (
                          <Badge className="text-xs bg-teal text-white">Popolare</Badge>
                        )}
                      </div>
                      <div className="text-lg font-bold text-teal mb-1">{pkg.price}</div>
                      <div className="text-xs text-muted-foreground mb-2">{pkg.duration}</div>
                      <div className="text-sm text-muted-foreground">{pkg.description}</div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full" size="sm" asChild>
                    <a href="/pacchetti">
                      Vedi tutti i dettagli
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="border-medical-border">
                <CardHeader>
                  <CardTitle className="font-heading text-lg flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-teal" />
                    Tempi di Risposta
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-teal flex-shrink-0" />
                    <span>Prima risposta entro 24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-teal flex-shrink-0" />
                    <span>Call gratuita entro 48h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-teal flex-shrink-0" />
                    <span>Preventivo entro 72h</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-medical-border">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    Altri modi per contattarci
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:info@revmed.it" className="text-teal hover:underline">
                        info@revmed.it
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Telefono</div>
                      <div className="text-muted-foreground">+39 02 1234 5678</div>
                      <div className="text-xs text-muted-foreground">Lun-Ven 9:00-18:00</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Sede</div>
                      <div className="text-muted-foreground">Milano, Italia</div>
                      <div className="text-xs text-muted-foreground">Lavoriamo in remoto</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Domande Frequenti
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Risposte alle domande più comuni sui nostri servizi
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-medical-border">
                <CardContent className="pt-6">
                  <h3 className="font-medium text-charcoal mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Non trovi la risposta che cerchi?
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:info@revmed.it">
                Scrivici una email
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
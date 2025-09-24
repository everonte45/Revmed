import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Search, 
  Filter, 
  Download, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Users,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  FileText,
  Target
} from "lucide-react";

const Home = () => {
  const steps = [
    {
      icon: Search,
      title: "Cerca",
      description: "Costruisci query booleane avanzate con termini MeSH e filtri personalizzati"
    },
    {
      icon: Filter,
      title: "Seleziona", 
      description: "Filtra automaticamente per 'free full text' e visualizza risultati di qualità"
    },
    {
      icon: Download,
      title: "Scarica",
      description: "Esporta in Excel, PDF, RIS o BibTeX per la tua revisione sistematica"
    }
  ];

  const services = [
    {
      name: "Base",
      price: "500-700€",
      duration: "5-7 giorni",
      description: "Ricerca bibliografica avanzata + deduplica professionale",
      features: [
        "Query booleane ottimizzate",
        "Ricerca multi-database", 
        "Deduplica automatica",
        "Report PRISMA preliminare",
        "Supporto email"
      ],
      popular: false
    },
    {
      name: "Standard", 
      price: "1.200-2.000€",
      duration: "≈ 2 settimane",
      description: "Revisione sistematica completa con screening e sintesi",
      features: [
        "Tutto del pacchetto Base",
        "Screening titoli e abstract",
        "Estrazione dati strutturata",
        "Valutazione qualità studi",
        "Sintesi narrativa",
        "Tabelle e figure"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "2.500-4.000€", 
      duration: "≈ 3 settimane",
      description: "Revisione completa + meta-analisi + supporto submission",
      features: [
        "Tutto del pacchetto Standard",
        "Meta-analisi statistica",
        "Forest plot e funnel plot", 
        "Analisi sottogruppi",
        "Supporto alla submission",
        "Revisione pre-pubblicazione"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Pubblicazioni di impatto",
      description: "Revisioni sistematiche pubblicabili su riviste peer-reviewed"
    },
    {
      icon: TrendingUp,
      title: "Crescita professionale", 
      description: "Accelera la tua carriera accademica con pubblicazioni di qualità"
    },
    {
      icon: Award,
      title: "Credibilità scientifica",
      description: "Costruisci la tua reputazione nel settore medico-scientifico"
    },
    {
      icon: Stethoscope,
      title: "Decisioni evidence-based",
      description: "Migliora la pratica clinica con evidenze scientifiche solide"
    }
  ];

  const testimonials = [
    {
      text: "Ho pubblicato la mia prima revisione sistematica in 6 mesi grazie a RevMed. Il supporto è stato eccezionale.",
      author: "Dr. M. Rossi",
      role: "Specializzando in Cardiologia"
    },
    {
      text: "Il tool è semplicissimo da usare e mi ha fatto risparmiare settimane di lavoro manuale su PubMed.",
      author: "Prof.ssa L. Bianchi", 
      role: "Università di Milano"
    },
    {
      text: "Pacchetto Premium fantastico. Meta-analisi perfetta e supporto alla submission impeccabile.",
      author: "Dr. A. Verdi",
      role: "Ricercatore Senior"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-teal-light text-teal-dark border-teal/20">
              Nuovo: Export PRISMA automatico
            </Badge>
            
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
              RevMed: cerca e scarica articoli{" "}
              <span className="text-teal">open access</span>{" "}
              da PubMed in 1 clic
            </h1>
            
            <p className="font-body text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Costruisci query booleane in modo semplice, filtra per 'free full text' e scarica risultati in Excel/PDF.
            </p>
            
            <p className="font-body text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Dallo screening alla revisione sistematica, ti affianchiamo fino alla submission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/tool">
                  Prova gratis il tool
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/pacchetti">
                  Scopri i pacchetti per pubblicare
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              ✓ Nessuna registrazione richiesta ✓ Risultati istantanei
            </p>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Come funziona in 3 step
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Dalla ricerca al download in pochi minuti
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-medical-border hover:shadow-medical transition-all duration-300 animate-fade-in">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-teal" />
                  </div>
                  <div className="text-sm font-medium text-teal mb-2">Step {index + 1}</div>
                  <CardTitle className="font-heading text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi Premium */}
      <section className="py-20 px-6 bg-medical-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Servizi Premium
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Dalla ricerca alla pubblicazione: scegli il supporto più adatto alle tue esigenze
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`relative border-medical-border hover:shadow-teal transition-all duration-300 animate-slide-up ${
                  service.popular ? 'ring-2 ring-teal' : ''
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal text-white">
                    Più Popolare
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl mb-2">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-teal mb-2">{service.price}</div>
                  <div className="text-sm text-muted-foreground mb-4">{service.duration}</div>
                  <p className="font-body text-muted-foreground">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant={service.popular ? "default" : "outline"} asChild>
                    <Link to="/contatti">
                      Prenota una call di 15'
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Tempistiche indicative per set ≤ 2.000 record
          </p>
        </div>
      </section>

      {/* Perché serve una revisione sistematica */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Perché serve una revisione sistematica
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              I benefici concreti per la tua carriera e pratica clinica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-medical-border hover:shadow-medical transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-heading text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-20 px-6 bg-medical-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Cosa dicono i nostri clienti
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Medici e ricercatori che hanno pubblicato con successo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-medical-border animate-fade-in">
                <CardContent className="pt-6">
                  <blockquote className="font-body text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-medium text-charcoal">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-20 px-6 bg-gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <FileText className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Mini-guida PRISMA-ready in 5 step
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Scarica gratuitamente la nostra guida pratica per iniziare subito la tua prima revisione sistematica
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Scarica la guida gratis
            <Download className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-white/80 mt-4">
            ✓ PDF immediato ✓ Checklist inclusa ✓ Template Excel
          </p>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Target className="h-16 w-16 text-teal mx-auto mb-6" />
          <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
            Pronto a pubblicare la tua prima revisione sistematica?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Inizia con il nostro tool gratuito o scegli il supporto completo per arrivare alla pubblicazione
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/tool">
                Inizia gratis ora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/pacchetti">
                Scopri i pacchetti
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
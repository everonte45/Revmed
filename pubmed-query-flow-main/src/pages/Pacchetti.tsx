import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Clock,
  Users,
  FileText,
  BarChart3,
  Microscope,
  Award,
  Calendar,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Target,
  Zap
} from "lucide-react";

const Pacchetti = () => {
  const packages = [
    {
      name: "Base",
      price: "500-700€",
      duration: "5-7 giorni",
      description: "Ricerca bibliografica avanzata + deduplica professionale",
      icon: FileText,
      color: "border-light-gray",
      features: [
        "Query booleane ottimizzate per il tuo topic",
        "Ricerca su database multipli (PubMed, Embase, Cochrane)",
        "Deduplica automatica avanzata",
        "Esportazione in formato Excel/EndNote/Mendeley",
        "Report PRISMA preliminare con flow chart",
        "Supporto email per 30 giorni",
        "Guida metodologica inclusa"
      ],
      deliverables: [
        "File Excel con tutti i record",
        "Report di ricerca dettagliato", 
        "Flow chart PRISMA preliminare",
        "Strategia di ricerca documentata"
      ],
      ideal: "Perfetto per studenti, specializzandi, o ricerche preliminari",
      popular: false
    },
    {
      name: "Standard",
      price: "1.200-2.000€",
      duration: "≈ 2 settimane",
      description: "Revisione sistematica completa con screening e sintesi",
      icon: BarChart3,
      color: "border-teal ring-2 ring-teal",
      features: [
        "Tutto del pacchetto Base",
        "Screening titoli e abstract con doppio reviewer",
        "Full-text screening con criteri di inclusione/esclusione",
        "Estrazione dati strutturata e standardizzata",
        "Valutazione della qualità metodologica degli studi",
        "Sintesi narrativa professionale",
        "Tabelle riassuntive e figure",
        "Bibliografia formattata secondo rivista target"
      ],
      deliverables: [
        "Manoscritto draft pronto per submission",
        "Tabelle e figure complete",
        "Appendici metodologiche",
        "Dataset completo con valutazioni"
      ],
      ideal: "Ideale per pubblicazioni su riviste di medio-alto impatto",
      popular: true
    },
    {
      name: "Premium",
      price: "2.500-4.000€",
      duration: "≈ 3 settimane",
      description: "Revisione completa + meta-analisi + supporto submission",
      icon: Award,
      color: "border-charcoal",
      features: [
        "Tutto del pacchetto Standard",
        "Meta-analisi statistica con software professionale (R/RevMan)",
        "Forest plot e funnel plot per publication bias",
        "Analisi di sensibilità e sottogruppi",
        "Valutazione GRADE della qualità delle evidenze",
        "Supporto attivo alla submission (cover letter, response to reviewers)",
        "Revisione pre-pubblicazione del manoscritto",
        "Consulenza strategica per journal selection"
      ],
      deliverables: [
        "Manoscritto completo submission-ready",
        "Meta-analisi completa con grafici",
        "Supplementary materials",
        "Cover letter personalizzata"
      ],
      ideal: "Per pubblicazioni di alto impatto e ricercatori senior",
      popular: false
    }
  ];

  const timeline = [
    {
      day: "Giorno 1",
      title: "Kick-off call",
      description: "Definiamo obiettivi, PICO question e strategia"
    },
    {
      day: "Giorni 2-7",
      title: "Ricerca e screening",
      description: "Esecuzione ricerca, deduplica e primo screening"
    },
    {
      day: "Giorni 8-14", 
      title: "Analisi e sintesi",
      description: "Estrazione dati, quality assessment e sintesi"
    },
    {
      day: "Giorni 15-21",
      title: "Finalizzazione",
      description: "Meta-analisi, manoscritto e preparazione submission"
    }
  ];

  const faqs = [
    {
      question: "Quanto tempo ci vuole per vedere i primi risultati?",
      answer: "Ricevi il report di ricerca e i primi dati entro 48-72 ore dall'inizio del progetto."
    },
    {
      question: "Posso richiedere modifiche durante il processo?",
      answer: "Sì, includiamo fino a 2 round di revisioni per ogni milestone del progetto."
    },
    {
      question: "Cosa succede se la rivista richiede modifiche?",
      answer: "Nel pacchetto Premium, ti supportiamo gratuitamente nella risposta ai reviewer per 6 mesi."
    },
    {
      question: "Lavorate con tutte le specialità mediche?",
      answer: "Sì, abbiamo esperienza in tutte le aree mediche e collaboriamo con esperti di dominio quando necessario."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-teal-light text-teal-dark border-teal/20">
            Dalla ricerca alla pubblicazione
          </Badge>
          
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
            Pacchetti per{" "}
            <span className="text-teal">pubblicare</span>{" "}
            la tua revisione
          </h1>
          
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Supporto completo dalla ricerca bibliografica alla submission su riviste peer-reviewed. 
            Metodologia rigorosa e expertise consolidata al tuo servizio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contatti">
                Prenota consulenza gratuita
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/tool">
                Prova prima il tool gratuito
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Comparison */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Scegli il pacchetto giusto per te
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Dall'idea iniziale alla pubblicazione: ogni pacchetto è progettato per obiettivi specifici
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-teal transition-all duration-300 ${pkg.color}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Più Popolare
                  </Badge>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mb-4">
                    <pkg.icon className="h-8 w-8 text-teal" />
                  </div>
                  
                  <CardTitle className="font-heading text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-teal mb-2">{pkg.price}</div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <p className="font-body text-muted-foreground text-sm">{pkg.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-medium mb-3 text-sm">Cosa include:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-teal mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="bg-medical-bg p-4 rounded-lg">
                      <h4 className="font-medium mb-3 text-sm">Deliverables:</h4>
                      <ul className="space-y-1">
                        {pkg.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <ArrowRight className="h-3 w-3 mr-2 text-teal" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal for */}
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground italic mb-4">
                        {pkg.ideal}
                      </p>
                      
                      <Button 
                        className="w-full" 
                        variant={pkg.popular ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link to="/contatti">
                          Prenota una call di 15'
                          <Calendar className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              * Prezzi indicativi per revisioni con ≤ 2.000 record. Quote personalizzate per progetti più complessi.
            </p>
            <p className="text-sm text-muted-foreground">
              💡 <strong>Garanzia di qualità:</strong> Se la tua revisione non viene accettata per motivi metodologici, rifacciamo il lavoro gratuitamente.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-medical-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Come lavoriamo insieme
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Un processo strutturato e trasparente per risultati di qualità
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-6">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-1">
                    {phase.day}
                  </h3>
                  <h4 className="font-medium text-teal mb-2">{phase.title}</h4>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Risultati concreti
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              I numeri parlano chiaro
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal mb-2">150+</div>
              <div className="text-muted-foreground">Revisioni completate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal mb-2">89%</div>
              <div className="text-muted-foreground">Tasso di acceptance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal mb-2">4.2</div>
              <div className="text-muted-foreground">Impact Factor medio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal mb-2">21 gg</div>
              <div className="text-muted-foreground">Tempo medio consegna</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-medical-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Domande frequenti
            </h2>
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
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <Target className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Pronto per la tua prossima pubblicazione?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Prenota una consulenza gratuita di 15 minuti per discutere il tuo progetto di revisione sistematica
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/contatti">
                <Calendar className="mr-2 h-5 w-5" />
                Prenota call gratuita
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-teal" asChild>
              <a href="mailto:info@revmed.it">
                <Mail className="mr-2 h-5 w-5" />
                Scrivi una email
              </a>
            </Button>
          </div>

          <p className="text-sm text-white/80 mt-6">
            ✓ Consulenza senza impegno ✓ Quote personalizzate ✓ Supporto completo
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pacchetti;
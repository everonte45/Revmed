import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  FileText,
  Download,
  BookOpen,
  Video,
  Search,
  BarChart3,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  ExternalLink,
  Play,
  Mail
} from "lucide-react";

const Risorse = () => {
  const guides = [
    {
      title: "Mini-guida PRISMA-ready in 5 step",
      description: "La guida completa per iniziare subito la tua prima revisione sistematica seguendo le linee guida PRISMA.",
      type: "PDF Guide",
      size: "2.1 MB",
      pages: "24 pagine",
      icon: FileText,
      featured: true,
      includes: [
        "Checklist PRISMA completa",
        "Template Excel per screening",
        "Esempi di query PubMed",
        "Flow chart editabile"
      ]
    },
    {
      title: "Guida alle Query Booleane PubMed",
      description: "Impara a costruire query avanzate per massimizzare precision e recall nelle tue ricerche bibliografiche.",
      type: "PDF Guide", 
      size: "1.8 MB",
      pages: "16 pagine",
      icon: Search,
      featured: false,
      includes: [
        "Sintassi booleana avanzata",
        "Uso strategico dei MeSH Terms",
        "Filtri automatici per open access",
        "Esempi pratici per specialità"
      ]
    },
    {
      title: "Meta-analisi con R: tutorial pratico",
      description: "Guida step-by-step per condurre meta-analisi statistiche con R e generare forest plot professionali.",
      type: "Tutorial + Code",
      size: "3.2 MB", 
      pages: "32 pagine",
      icon: BarChart3,
      featured: false,
      includes: [
        "Script R commentati",
        "Dataset di esempio",
        "Interpretazione statistiche",
        "Grafici publication-ready"
      ]
    }
  ];

  const articles = [
    {
      title: "Come fare una revisione sistematica: guida completa 2024",
      excerpt: "Tutto quello che devi sapere per condurre una revisione sistematica di qualità, dalla PICO question alla submission.",
      readTime: "12 min",
      category: "Metodologia",
      featured: true,
      slug: "come-fare-revisione-sistematica-2024"
    },
    {
      title: "Query booleane PubMed: strategie avanzate per medici",
      excerpt: "Tecniche professionali per costruire query che catturano tutti gli studi rilevanti minimizzando il rumore.",
      readTime: "8 min", 
      category: "Ricerca",
      featured: false,
      slug: "query-booleane-pubmed-medici"
    },
    {
      title: "Scaricare articoli open access: tools e trucchi",
      excerpt: "I migliori metodi per accedere gratuitamente alla letteratura scientifica per le tue revisioni.",
      readTime: "6 min",
      category: "Tools",
      featured: false,
      slug: "scaricare-articoli-open-access"
    },
    {
      title: "PRISMA 2020: cosa è cambiato nelle linee guida",
      excerpt: "Analisi delle novità introdotte nelle linee guida PRISMA 2020 e come applicarle alle tue revisioni.",
      readTime: "10 min",
      category: "Linee Guida",
      featured: false,
      slug: "prisma-2020-novita-linee-guida"
    },
    {
      title: "Journal selection per revisioni sistematiche", 
      excerpt: "Come scegliere la rivista giusta per la tua revisione sistematica per massimizzare le probabilità di acceptance.",
      readTime: "15 min",
      category: "Pubblicazione",
      featured: false,
      slug: "journal-selection-revisioni-sistematiche"
    },
    {
      title: "Quality assessment: strumenti e checklist 2024",
      excerpt: "Panoramica degli strumenti più utilizzati per valutare la qualità metodologica degli studi nelle revisioni.",
      readTime: "11 min",
      category: "Metodologia", 
      featured: false,
      slug: "quality-assessment-strumenti-2024"
    }
  ];

  const videos = [
    {
      title: "PubMed Advanced Search: tutorial completo",
      description: "Video tutorial di 25 minuti su come utilizzare le funzionalità avanzate di PubMed per le revisioni sistematiche.",
      duration: "25:33",
      views: "12.4K visualizzazioni"
    },
    {
      title: "PRISMA Flow Chart: come crearlo perfettamente",
      description: "Guida pratica per creare flow chart PRISMA professionali che soddisfano i requirement delle riviste.",
      duration: "18:42",
      views: "8.7K visualizzazioni"
    },
    {
      title: "Meta-analisi: quando farla e quando evitarla",
      description: "Criteri per decidere se i tuoi dati sono adatti per una meta-analisi quantitativa o se optare per una sintesi narrativa.",
      duration: "31:15",
      views: "15.2K visualizzazioni"
    }
  ];

  const webinars = [
    {
      title: "Dalle query PubMed alla pubblicazione su riviste di impatto",
      date: "Ogni martedì, 18:00-19:30",
      description: "Webinar settimanale gratuito con esperti RevMed per approfondire metodologie e strategie avanzate.",
      registrants: "150+ partecipanti ogni settimana"
    },
    {
      title: "Q&A Session: Risposte ai reviewer",
      date: "Ultimo venerdì del mese, 17:00-18:00", 
      description: "Sessione dedicata a come gestire i commenti dei reviewer e aumentare le chance di acceptance.",
      registrants: "80+ partecipanti"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl text-center">
          <BookOpen className="h-16 w-16 text-teal mx-auto mb-6" />
          
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
            Risorse e{" "}
            <span className="text-teal">Guide Gratuite</span>
          </h1>
          
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Tutorial, guide pratiche e risorse per migliorare le tue competenze in revisioni sistematiche e ricerca bibliografica.
          </p>

          <Button size="lg" className="text-lg px-8 py-4">
            Scarica la guida PRISMA gratuita
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-teal bg-teal-light relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-teal text-white">
                Più Scaricata
              </Badge>
            </div>
            
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                
                <div className="flex-1">
                  <CardTitle className="font-heading text-2xl text-teal-dark mb-3">
                    {guides[0].title}
                  </CardTitle>
                  <p className="text-teal-dark/80 mb-4">
                    {guides[0].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-teal-dark/70 mb-4">
                    <span className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {guides[0].pages}
                    </span>
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {guides[0].size}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Lettura 15 min
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {guides[0].includes.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-teal-dark">
                        <CheckCircle className="h-4 w-4 mr-2 text-teal flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button size="lg" className="px-8">
                    Scarica Gratis
                    <Download className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-teal-dark/70 text-center">
                    ✓ PDF immediato<br />
                    ✓ Senza registrazione
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Other Guides */}
      <section className="py-20 px-6 bg-medical-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Altre Guide Specialistiche
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Approfondimenti tematici per ogni fase del processo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.slice(1).map((guide, index) => (
              <Card key={index} className="border-medical-border hover:shadow-medical transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <guide.icon className="h-6 w-6 text-teal" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-heading text-lg mb-2">
                        {guide.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mb-4">
                        {guide.description}
                      </p>
                      
                      <div className="flex gap-4 text-xs text-muted-foreground mb-4">
                        <span>{guide.pages}</span>
                        <span>{guide.size}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {guide.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-teal mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant="outline">
                    Scarica Gratis
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Articoli e Tutorial
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Approfondimenti pratici e aggiornamenti dal mondo delle revisioni sistematiche
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className={`border-medical-border hover:shadow-medical transition-all duration-300 ${
                article.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    {article.featured && (
                      <Badge variant="default" className="text-xs">
                        In Evidenza
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="font-heading text-lg leading-tight mb-3">
                    {article.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime} di lettura
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Button variant="outline" className="w-full" size="sm">
                    Leggi articolo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-20 px-6 bg-medical-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Video Tutorial
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Impara guardando: tutorial pratici e screen recording
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="border-medical-border hover:shadow-medical transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-charcoal rounded-lg p-8 mb-4 relative">
                    <Play className="h-12 w-12 text-white mx-auto opacity-80" />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-medium mb-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {video.views}
                    </span>
                  </div>
                  
                  <Button variant="outline" className="w-full" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Guarda video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Webinar e Eventi
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Partecipa ai nostri eventi formativi gratuiti
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-medical-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-heading text-xl mb-2">
                        {webinar.title}
                      </CardTitle>
                      <div className="text-teal font-medium text-sm mb-3">
                        {webinar.date}
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {webinar.description}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        {webinar.registrants}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Button className="w-full">
                    Registrati gratis
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Rimani aggiornato
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ricevi ogni settimana nuovi tutorial, guide pratiche e aggiornamenti sulle migliori pratiche per le revisioni sistematiche.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-charcoal"
            />
            <Button size="lg" variant="secondary" className="px-8">
              Iscriviti
            </Button>
          </div>

          <p className="text-sm text-white/80 mt-4">
            ✓ Newsletter settimanale ✓ Contenuti esclusivi ✓ Niente spam
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Risorse;

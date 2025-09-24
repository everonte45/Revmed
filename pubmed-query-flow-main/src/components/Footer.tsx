import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrizione */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-heading font-bold text-xl">RevMed</span>
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Il tool per cercare e scaricare articoli open access da PubMed. 
              Dalla ricerca alla pubblicazione.
            </p>
          </div>

          {/* Prodotto */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Prodotto</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tool" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Tool Gratuito
                </Link>
              </li>
              <li>
                <Link to="/pacchetti" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Pacchetti Premium
                </Link>
              </li>
              <li>
                <Link to="/risorse" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Guide e Risorse
                </Link>
              </li>
            </ul>
          </div>

          {/* Supporto */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Supporto</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contatti" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <a href="mailto:info@revmed.it" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Email Support
                </a>
              </li>
              <li>
                <Link to="/faq" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legale */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Legale</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/termini" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  Termini di Servizio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="font-body text-sm text-gray-400">
            © 2024 RevMed. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
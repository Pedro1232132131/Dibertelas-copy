import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Droplets, Shield, Clock, Sparkles, CheckCircle2, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent } from '../components/ui/dialog';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Instalação de Tela Armada",
      description: "Revestimento em PVC reforçado com acabamentos lisos e 3D. Efeitos pedra, areia e mármore para um aspeto premium.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Renovação e Reabilitação",
      description: "Transformamos piscinas antigas em espaços modernos e funcionais com tecnologia de ponta.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Deteção e Reparação de Fugas",
      description: "Identificamos e reparamos fugas com precisão, garantindo estanquicidade total.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Manutenção Especializada",
      description: "Serviços de manutenção preventiva e corretiva para prolongar a vida útil da sua piscina.",
    },
  ];

  const advantages = [
    "Resistência superior aos raios UV",
    "Instalação rápida e eficiente",
    "Variedade de texturas e acabamentos",
    "Material higiénico e fácil de limpar",
    "Excelente relação qualidade-preço",
    "Acabamentos premium e duradouros",
  ];

  const portfolioImages = [
    {
      url: "https://customer-assets.emergentagent.com/job_renovacao-piscinas/artifacts/hf2ffnv0_image.png",
      title: "Piscina de Luxo com Cascata"
    },
    {
      url: "/design-paisagistico-premium.jpg",
      title: "Design Paisagístico Premium"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_renovacao-piscinas/artifacts/s7nkfqar_image.png",
      title: "Piscina Moderna em Moradia"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_renovacao-piscinas/artifacts/rpulk54a_image.png",
      title: "Vista Panorâmica"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_renovacao-piscinas/artifacts/h0azv5vj_654e0869-cba6-4861-b620-df217712b6ae_Nero_AI_Image_Upscaler_Photo_Face.png" 
              alt="DiberTelas Logo" 
              className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Serviços</button>
            <button onClick={() => scrollToSection('vantagens')} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Vantagens</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Portfólio</button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Sobre Nós</button>
            <Button onClick={scrollToContact} className="bg-cyan-600 hover:bg-cyan-700 text-white">
              Pedir Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <button onClick={() => scrollToSection('servicos')} className="text-left py-2 text-gray-700 hover:text-cyan-600 font-medium">Serviços</button>
              <button onClick={() => scrollToSection('vantagens')} className="text-left py-2 text-gray-700 hover:text-cyan-600 font-medium">Vantagens</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 text-gray-700 hover:text-cyan-600 font-medium">Portfólio</button>
              <button onClick={() => scrollToSection('sobre')} className="text-left py-2 text-gray-700 hover:text-cyan-600 font-medium">Sobre Nós</button>
              <Button onClick={scrollToContact} className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">
                Pedir Orçamento
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1706043890009-9aae000532cd" 
            alt="Piscina Moderna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-cyan-900/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              DiberTelas: Construção de piscina em 5 dias úteis em betão armado e Revestimentos em Tela Armada
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed">
              Dê uma nova vida à sua piscina com a tecnologia de tela armada mais avançada do mercado. Estanquicidade total e acabamentos de luxo em Braga.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all w-full sm:w-auto"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-cyan-600 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
                onClick={() => scrollToSection('portfolio')}
              >
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Experiência e Qualidade em Braga
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              A <span className="font-semibold text-cyan-600">DiberTelas</span> é uma empresa de referência em Braga especializada na construção, renovação e impermeabilização de piscinas. Com uma equipa altamente qualificada e paixão pelo que fazemos, transformamos o seu espaço de lazer num verdadeiro oásis de conforto e qualidade.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              O nosso compromisso é oferecer soluções duradouras com acabamentos impecáveis, utilizando materiais de primeira linha e as técnicas mais avançadas do mercado. Cada projeto é tratado com rigor técnico e atenção ao detalhe.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Os Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Soluções completas para a sua piscina, da construção à manutenção
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-cyan-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens da Tela Armada */}
      <section id="vantagens" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Vantagens da Tela Armada
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  A tela armada em PVC reforçado é a solução mais moderna e duradoura para o revestimento de piscinas. Oferece benefícios incomparáveis:
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span className="text-sm sm:text-base md:text-lg text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1713936597999-ce0fbfb52c5c" 
                  alt="Água cristalina"
                  className="rounded-xl shadow-lg w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1762917903587-77c20dcbbbc5" 
                  alt="Detalhe textura"
                  className="rounded-xl shadow-lg w-full h-48 sm:h-56 md:h-64 object-cover mt-6 sm:mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Projetos Realizados
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Conheça alguns dos nossos trabalhos em Braga e região
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[95vw] h-auto p-0 bg-black/95 border-0 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 transition-all"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedImage && (
              <div className="w-full">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">{selectedImage.title}</h3>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Área Geográfica */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Onde Atuamos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            A DiberTelas está sediada em <span className="font-semibold text-cyan-600">Braga</span> e presta serviços em toda a região de Portugal Continental e Europa.
          </p>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1770967307107-446055488c0d" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Pronto para Transformar a Sua Piscina?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-cyan-50 px-4">
              Solicite um orçamento gratuito e sem compromisso. A nossa equipa está pronta para realizar o seu projeto.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-cyan-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all w-full sm:w-auto"
            >
              Pedir Orçamento Gratuito
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_renovacao-piscinas/artifacts/h0azv5vj_654e0869-cba6-4861-b620-df217712b6ae_Nero_AI_Image_Upscaler_Photo_Face.png" 
                alt="DiberTelas Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto mb-4 sm:mb-6"
              />
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Especialistas em Construção de piscina em betão armado e Revestimentos em Tela Armada.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contactos</h3>
              <div className="space-y-3 sm:space-y-4">
                <a href="tel:+351911596228" className="flex items-center space-x-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>+351 911 596 228</span>
                </a>
                <a href="tel:+351917275181" className="flex items-center space-x-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>+351 917 275 181</span>
                </a>
                <a href="mailto:DiberTelas2022@gmail.com" className="flex items-center space-x-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>DiberTelas2022@gmail.com</span>
                </a>
                <div className="flex items-center space-x-3 text-sm sm:text-base text-gray-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Braga, Portugal</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Redes Sociais</h3>
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="https://www.facebook.com/p/DiberTelas-100086281004109/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Siga-nos no Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/dibertelas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Siga-nos no Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} DiberTelas - Piscinas e Impermeabilizações. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

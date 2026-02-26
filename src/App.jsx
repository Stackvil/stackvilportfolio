import { motion, AnimatePresence } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import SmoothScroll from './components/layout/SmoothScroll';
import Background3D from './components/3d/Background3D';
import CinematicIntro from './components/ui/CinematicIntro';
import { ThemeProvider } from './theme/ThemeProvider';
import ThemeSwitcher from './components/ui/ThemeSwitcher';
import ScrollProgression from './components/ui/ScrollProgression';
import { PersonalizationProvider, StickyCTA, UserTypeSelector } from './components/PersonalizationEngine';
const Hero = lazy(() => import('./sections/Hero'));
const Solutions = lazy(() => import('./sections/Solutions'));
const LeadershipAlliance = lazy(() => import('./sections/LeadershipAlliance'));
const Process = lazy(() => import('./sections/Process'));
const TechStack = lazy(() => import('./sections/TechStack'));
const Projects = lazy(() => import('./sections/Projects'));
const EngineeringDNA = lazy(() => import('./sections/EngineeringDNA'));
const StorytellingSection = lazy(() => import('./sections/StorytellingSection'));
const LiveSimulation = lazy(() => import('./sections/LiveSimulation'));
const SystemArchitecture = lazy(() => import('./sections/SystemArchitecture'));
const TrustInfrastructure = lazy(() => import('./sections/TrustInfrastructure'));
const Credibility = lazy(() => import('./sections/Credibility'));
const ProductInnovationLab = lazy(() => import('./sections/ProductInnovationLab'));
const AIAgent = lazy(() => import('./components/ai/AIAgent'));

const Testimonials = () => (
  <section id="testimonials" className="py-24 relative border-t border-white/5 bg-transparent">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-accent font-bold tracking-widest uppercase mb-4">Testimonials</h2>
      <h3 className="text-4xl md:text-6xl font-black mb-12 text-text-primary">Executive <span className="text-gradient">Partnership Feedback</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="p-10 glass-morphism rounded-[2.5rem] text-left border border-white/5">
            <p className="text-text-muted mb-8 text-lg font-light leading-relaxed">"The strategic roadmap provided was instrumental in our global infrastructure modernization. Absolute technical authority and execution excellence."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl" />
              <div>
                <h4 className="font-bold text-text-primary">Managing Director</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Global Enterprise Group</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 relative border-t border-white/5 bg-transparent overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="glass-morphism rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-3xl -mr-48 -mt-48" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-accent font-bold tracking-[0.3em] uppercase mb-6 text-xs">Strategic Engagement</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-tight text-text-primary">Initiate <span className="text-gradient">Consultative Dialogue</span></h3>
            <p className="text-text-muted mb-12 text-xl font-light leading-relaxed">Engagement with leadership teams for high-stakes technology transformation and infrastructure governance.</p>
            <div className="flex gap-6">
              <button className="px-10 py-5 bg-accent text-white rounded-xl font-bold shadow-xl shadow-accent/20">Request Strategic Audit</button>
              <button className="px-10 py-5 glass-morphism text-text-primary rounded-xl font-bold border border-white/5">Digital Roadmap Query</button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-accent outline-none transition-all text-text-primary" />
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-accent outline-none transition-all text-text-primary" />
            </div>
            <textarea placeholder="Tell us about your project" rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-accent outline-none transition-all text-text-primary"></textarea>
            <button className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-bold shadow-lg shadow-accent/20">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  const [showIntro, setShowIntro] = React.useState(true);
  const mainRef = React.useRef(null);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mainRef.current) return;
      const { clientX, clientY } = e;
      mainRef.current.style.setProperty('--mouse-x', `${clientX}px`);
      mainRef.current.style.setProperty('--mouse-y', `${clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <PersonalizationProvider>
        <AnimatePresence mode="wait">
          {showIntro && (
            <CinematicIntro key="intro" onComplete={() => setShowIntro(false)} />
          )}
        </AnimatePresence>

        <SmoothScroll>
          <div
            ref={mainRef}
            className={`relative min-h-screen bg-primary selection:bg-accent/30 selection:text-text-primary transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="mouse-light" />
            <div className="noise" />
            <div className="mesh-bg" />
            <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />

            {!showIntro && (
              <>
                <Background3D />
                <CustomCursor />
                <Navbar>
                  <UserTypeSelector />
                </Navbar>
                <ThemeSwitcher />
                <ScrollProgression />
                <StickyCTA />

                <main>
                  <Hero />
                  <EngineeringDNA />
                  <LeadershipAlliance />
                  <StorytellingSection />
                  <Solutions />
                  <LiveSimulation />
                  <SystemArchitecture />
                  <Process />
                  <TechStack />
                  <Projects />
                  <ProductInnovationLab />
                  <TrustInfrastructure />
                  <Credibility />
                  <Testimonials />
                  <Contact />
                </main>
                <Suspense fallback={null}>
                  <AIAgent />
                </Suspense>

                <footer className="py-20 text-center relative z-10 border-t border-white/5">
                  <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-black tracking-tighter mb-8 text-text-primary uppercase">
                      STACKVIL <span className="text-accent opacity-60">TECHNOLOGIES PVT LIMITED</span>
                    </h2>
                    <div className="flex justify-center flex-wrap gap-12 mb-16 text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">
                      <a href="#" className="hover:text-text-primary transition-colors">Strategic Advisory</a>
                      <a href="#" className="hover:text-text-primary transition-colors">Executive Governance</a>
                      <a href="#" className="hover:text-text-primary transition-colors">Architecture Audit</a>
                      <a href="#" className="hover:text-text-primary transition-colors">Engage</a>
                    </div>
                    <p className="text-text-muted text-[10px] uppercase font-bold tracking-widest opacity-20">© {new Date().getFullYear()} Stackvil Technologies Pvt Limited. Measured Advisory for Mission-Critical Excellence.</p>
                  </div>
                </footer>
              </>
            )}
          </div>
        </SmoothScroll>
      </PersonalizationProvider>
    </ThemeProvider>
  );
}

export default App;

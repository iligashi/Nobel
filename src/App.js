import './App.css';
import { Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
};

const pageTransition = { duration: 0.45, ease: 'easeInOut' };

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-warmwhite">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold font-serif tracking-wide text-softbrown">Nobel</span>
          <span className="text-gold text-sm">— Event Venue</span>
        </div>
        <nav className="flex items-center gap-6">
          {['salla-1','salla-2','salla-3'].map((slug, idx) => (
            <NavLink
              key={slug}
              to={`/${slug}`}
              className={({ isActive }) =>
                `uppercase text-sm tracking-wide transition-colors ${isActive ? 'text-softbrown' : 'text-gray-600 hover:text-softbrown'}`
              }
            >
              Salla {idx+1}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

function Footer(){
  return (
    <footer className="border-t border-beige/60 bg-white/60 backdrop-blur mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Nobel. All rights reserved.</span>
        <span className="flex items-center gap-1 text-softbrown">Luxury • Modern • Wedding‑ready <FiChevronRight /></span>
      </div>
    </footer>
  )
}

function VideoHero({ title, videoSrc }){
  return (
    <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden bg-black">
      <video className="absolute inset-0 w-full h-full object-cover opacity-80" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="text-white">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide drop-shadow">{title}</h1>
          <p className="mt-4 text-beige/90">Elegance reimagined for unforgettable events</p>
        </div>
      </div>
    </section>
  )
}

function SectionCard({ children }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur rounded-2xl shadow-glow border border-beige/70 p-6 sm:p-8"
    >
      {children}
    </motion.div>
  )
}

const placeholderVideo = "https://cdn.coverr.co/videos/coverr-a-wedding-reception-2556/1080p.mp4";
const placeholderImg = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=60`;

function Salla({ index, capacity, events, video, photos }){
  return (
    <div className="">
      <VideoHero title={`Nobel — Salla ${index}`} videoSrc={video || placeholderVideo} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SectionCard>
            <h2 className="font-serif text-2xl text-softbrown">Capacity</h2>
            <p className="mt-2 text-gray-700">Up to <span className="font-semibold text-softbrown">{capacity}</span> guests</p>
          </SectionCard>
          <SectionCard>
            <h2 className="font-serif text-2xl text-softbrown">Events</h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-gray-700">
              {events.map(e => (
                <li key={e} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {e}
                </li>
              ))}
            </ul>
          </SectionCard>
          <SectionCard>
            <h2 className="font-serif text-2xl text-softbrown">Ambience</h2>
            <p className="mt-2 text-gray-700">Soft beige tones, warm gold accents, and refined details for a luxury feel.</p>
          </SectionCard>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {photos.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-beige/60">
              <img src={src} alt="Hall" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function SallaOne(){
  return (
    <Salla
      index={1}
      capacity="500 people"
      events={["Weddings","Conferences","Parties","Galas"]}
      video={placeholderVideo}
      photos={[
        placeholderImg('1521336671938-7b84d6d76b2b'),
        placeholderImg('1542038779458-1c8f9f62f42b'),
        placeholderImg('1519741497674-611481863552')
      ]}
    />
  )
}

function SallaTwo(){
  return (
    <Salla
      index={2}
      capacity="350 people"
      events={["Engagements","Corporate Events","Birthdays","Product Launches"]}
      video={placeholderVideo}
      photos={[
        placeholderImg('1515165562835-c3b8f289e0be'),
        placeholderImg('1541542684-e5d6a5db86d8'),
        placeholderImg('1542314831-068cd1dbfeeb')
      ]}
    />
  )
}

function SallaThree(){
  return (
    <Salla
      index={3}
      capacity="220 people"
      events={["Intimate Weddings","Seminars","Family Gatherings","Bridal Showers"]}
      video={placeholderVideo}
      photos={[
        placeholderImg('1500530855697-b586d89ba3ee'),
        placeholderImg('1520697222869-7d08c7e80c48'),
        placeholderImg('1519710164239-da123dc03ef4')
      ]}
    />
  )
}

function AnimatedRoutes(){
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/salla-1" replace />} />
        <Route path="/salla-1" element={<PageWrapper><SallaOne /></PageWrapper>} />
        <Route path="/salla-2" element={<PageWrapper><SallaTwo /></PageWrapper>} />
        <Route path="/salla-3" element={<PageWrapper><SallaThree /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/salla-1" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }){
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      className="min-h-[80vh]"
    >
      {children}
    </motion.div>
  )
}

export default function App(){
  return (
    <Layout>
      <AnimatedRoutes />
    </Layout>
  );
}

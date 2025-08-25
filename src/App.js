"use client"

import "./App.css"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

import {
  FiChevronRight,
  FiStar,
  FiUsers,
  FiCalendar,
  FiMapPin,
  FiPhone,
  FiMail,
  FiGlobe,
  FiMenu,
  FiX,
  FiPlay,
  FiPause,
  FiSend,
  FiCamera,
  FiCoffee,
  FiTruck,
  FiMusic,
  FiHeart,
  FiBriefcase,
  FiGift,
  FiMic,
  FiArrowLeft,
} from "react-icons/fi"

const translations = {
  en: {
    home: "Home",
    salla1: "Salla 1",
    salla2: "Salla 2",
    salla3: "Salla 3",
    contact: "Contact",
    exploreVenue: "Explore Venues",
    scheduleTour: "Schedule a Tour",
    bookNow: "Book Now",
    capacity: "Capacity",
    events: "Events",
    experience: "Experience",
    readyToBook: "Ready to Book?",
    aboutNobel: "About Nobel Venues",
    ourServices: "Our Premium Services",
    advantagesTitle: "Why Choose Nobel",
    parking: "Parking & Location",
    reviews: "Client Reviews",
    contactUs: "Contact Us",
    sendMessage: "Send Message",
    nobelDesc:
      "Nobel Venues represents the pinnacle of luxury event hosting, where timeless elegance meets modern sophistication. Our prestigious venues offer an unparalleled experience for life's most cherished moments.",
    heroTitle: "Elevate Your Events",
    heroSubtitle: "Where luxury meets perfection in every celebration",
    watchVideo: "Watch Our Story",
    services: [
      "Wedding Planning",
      "Corporate Events",
      "Catering Services",
      "Event Coordination",
      "Audio/Visual Setup",
      "Photography Services",
    ],
    advantages: [
      "Premium Location",
      "Professional Staff",
      "Modern Equipment",
      "Flexible Packages",
      "24/7 Support",
      "Luxury Amenities",
    ],
    parkingDesc:
      "Ample parking space for 200+ vehicles with valet service available. Located in the heart of the city with easy access to major transportation hubs.",
    transformVision: "Transform your vision into reality with our premium venues and expert event coordination.",
    luxuryModern: "Luxury • Modern • Unforgettable",
    copyright: "All rights reserved.",
    excellentService: "Excellent service and beautiful venue. Our wedding was perfect!",
    professionalTeam: "Professional team and attention to detail. Highly recommended!",
    amazingExperience: "Amazing experience from start to finish. Will definitely book again!",
    fullName: "Full Name",
    email: "Email",
    phone: "Phone",
    eventDate: "Event Date",
    eventType: "Event Type",
    guestCount: "Guest Count",
    message: "Message",
    close: "Close",
    bookingForm: "Booking Form",
    contactForm: "Contact Form",
    selectEventType: "Select event type",
    wedding: "Wedding",
    corporate: "Corporate",
    birthday: "Birthday",
    conference: "Conference",
    other: "Other",
    details: "Details",
    venueDetails: "Venue Details",
    backToHome: "Back to Home",
    venueCapacity: "Capacity",
    eventTypes: "Event Types",
    amenities: "Amenities",
    venueServices: "Services",
    venueParking: "Parking",
    portfolio: "Portfolio",
    pastEvents: "Past Events",
    // Venue specific details
    salla1Details: {
      name: "Salla 1 - Grand Ballroom",
      capacity: "Up to 500 guests",
      description: "Our largest and most elegant hall, designed for grand and important events.",
      eventTypes: [
        { name: "Grand Weddings", icon: FiHeart, description: "Wedding ceremonies and receptions for up to 500 guests" },
        { name: "Conferences", icon: FiMic, description: "Corporate conferences and professional seminars" },
        { name: "Corporate Events", icon: FiBriefcase, description: "Large corporate meetings and presentations" },
        { name: "Gala & Awards", icon: FiStar, description: "Official ceremonies and special events" },
      ],
      amenities: ["Professional audio system", "LED lighting", "Air conditioning", "Fast WiFi", "Large stage"],
    },
    salla2Details: {
      name: "Salla 2 - Crystal Hall",
      capacity: "Up to 350 guests",
      description: "A modern and flexible space, ideal for medium events and presentations.",
      eventTypes: [
        { name: "Medium Weddings", icon: FiHeart, description: "Intimate ceremonies for up to 350 guests" },
        { name: "Private Parties", icon: FiGift, description: "Birthday parties and anniversaries" },
        { name: "Presentations", icon: FiMic, description: "Product presentations and launches" },
        { name: "Seminars", icon: FiBriefcase, description: "Professional training and workshops" },
      ],
      amenities: ["Modern audio system", "HD projectors", "Air conditioning", "WiFi", "Integrated bar"],
    },
    salla3Details: {
      name: "Salla 3 - Intimate Lounge",
      capacity: "Up to 220 guests",
      description: "Our most intimate hall, perfect for small events and family gatherings.",
      eventTypes: [
        { name: "Small Weddings", icon: FiHeart, description: "Intimate and family wedding ceremonies" },
        { name: "Family Gatherings", icon: FiUsers, description: "Family parties and meetings" },
        { name: "Small Seminars", icon: FiMic, description: "Small training sessions and presentations" },
        { name: "Private Parties", icon: FiGift, description: "Personal parties and anniversaries" },
      ],
      amenities: ["Intimate audio system", "Warm lighting", "Air conditioning", "WiFi", "Lounge space"],
    },
    generalServices: [
      { name: "Premium Catering", icon: FiCoffee, description: "Customized menus and professional service" },
      { name: "Decoration", icon: FiStar, description: "Complete decoration according to chosen theme" },
      { name: "Photography", icon: FiCamera, description: "Professional photography and video services" },
      { name: "Music", icon: FiMusic, description: "Professional DJ and advanced audio system" },
      { name: "Coordination", icon: FiUsers, description: "Complete event coordination from start to finish" },
      { name: "Valet Parking", icon: FiTruck, description: "Valet parking service for guests" },
    ],
    parkingInfo: {
      title: "Parking & Access",
      spaces: "200+ parking spaces",
      valet: "Valet service available",
      location: "Central location with easy access",
      transport: "Near public transport and main roads",
    },
  },
  al: {
    home: "Kryefaqja",
    salla1: "Salla 1",
    salla2: "Salla 2",
    salla3: "Salla 3",
    contact: "Kontakti",
    exploreVenue: "Eksploro Vendin",
    scheduleTour: "Planifiko një Vizitë",
    bookNow: "Rezervo Tani",
    venueCapacity: "Kapaciteti",
    events: "Ngjarjet",
    experience: "Përvoja",
    readyToBook: "Gati për Rezervim?",
    aboutNobel: "Rreth Nobel Venues",
    ourServices: "Shërbimet tona Premium",
    advantagesTitle: "Pse të Zgjedhësh Nobel",
    parking: "Parkimi & Vendndodhja",
    reviews: "Vlerësimet e Klientëve",
    contactUs: "Na Kontaktoni",
    sendMessage: "Dërgo Mesazh",
    nobelDesc:
      "Nobel Venues përfaqëson kulmin e organizimit të ngjarjeve luksoze, ku eleganca e përjetshme takohet me sofistikimin modern. Vendet tona prestigjioze ofrojnë një përvojë të pakrahasueshme për momentet më të çmuara të jetës.",
    heroTitle: "Ngrini Ngjarjet Tuaja",
    heroSubtitle: "Ku luksi takohet me përsosmërinë në çdo festim",
    watchVideo: "Shiko Historinë Tonë",
    services: [
      "Planifikimi i Dasmave",
      "Ngjarje Korporative",
      "Shërbime Catering",
      "Koordinimi i Ngjarjeve",
      "Pajisje Audio/Vizuale",
      "Shërbime Fotografike",
    ],
    advantages: [
      "Vendndodhje Premium",
      "Staf Profesional",
      "Pajisje Moderne",
      "Paketa Fleksibile",
      "Mbështetje 24/7",
      "Komoditet Luksoze",
    ],
    parkingDesc:
      "Hapësirë parkimi e bollshme për 200+ automjete me shërbim valet të disponueshëm. E vendosur në zemër të qytetit me qasje të lehtë në qendrat kryesore të transportit.",
    transformVision:
      "Transformoni vizionin tuaj në realitet me vendet tona premium dhe koordinimin ekspert të ngjarjeve.",
    luxuryModern: "Luksi • Moderne • E Paharrueshme",
    copyright: "Të gjitha të drejtat e rezervuara.",
    excellentService: "Shërbim i shkëlqyer dhe vend i bukur. Dasma jonë ishte perfekte!",
    professionalTeam: "Ekip profesional dhe vëmendje ndaj detajeve. Shumë e rekomanduar!",
    amazingExperience: "Përvojë e mahnitshme nga fillimi deri në fund. Definitivt do të rezervojmë përsëri!",
    fullName: "Emri i Plotë",
    email: "Email",
    phone: "Telefoni",
    eventDate: "Data e Ngjarjes",
    eventType: "Lloji i Ngjarjes",
    guestCount: "Numri i Mysafirëve",
    message: "Mesazhi",
    close: "Mbyll",
    bookingForm: "Formulari i Rezervimit",
    contactForm: "Formulari i Kontaktit",
    selectEventType: "Zgjidhni llojin e ngjarjes",
    wedding: "Dasmë",
    corporate: "Korporative",
    birthday: "Ditëlindje",
    conference: "Konferencë",
    other: "Tjetër",
    details: "Detajet",
    venueDetails: "Detajet e Vendit",
    backToHome: "Kthehu në Kryefaqe",
    eventTypes: "Llojet e Ngjarjeve",
    amenities: "Komoditet",
    venueServices: "Shërbimet",
    venueParking: "Parkimi",
    portfolio: "Portofoli",
    pastEvents: "Ngjarje të Kaluara",
    // Venue specific details
    salla1Details: {
      name: "Salla 1 - Grand Ballroom",
      capacity: "Deri në 500 mysafirë",
      description: "Salla jonë më e madhe dhe më elegante, e dizajnuar për ngjarje të mëdha dhe të rëndësishme.",
      eventTypes: [
        { name: "Dasma të Mëdha", icon: FiHeart, description: "Ceremoni dhe festa dasme për deri në 500 mysafirë" },
        { name: "Konferenca", icon: FiMic, description: "Konferenca korporative dhe seminare profesionale" },
        { name: "Ngjarje Korporative", icon: FiBriefcase, description: "Mbledhje të mëdha dhe prezantime korporative" },
        { name: "Gala & Awards", icon: FiStar, description: "Ceremoni zyrtare dhe ngjarje të veçanta" },
      ],
      amenities: ["Sistem audio profesional", "Ndriçim LED", "Klimatizim", "WiFi i shpejtë", "Skenë e madhe"],
    },
    salla2Details: {
      name: "Salla 2 - Crystal Hall",
      capacity: "Deri në 350 mysafirë",
      description: "Një hapësirë moderne dhe fleksibile, ideale për ngjarje të mesme dhe prezantime.",
      eventTypes: [
        { name: "Dasma të Mesme", icon: FiHeart, description: "Ceremoni intime për deri në 350 mysafirë" },
        { name: "Festa Private", icon: FiGift, description: "Festa ditëlindjesh dhe përvjetorësh" },
        { name: "Prezantime", icon: FiMic, description: "Prezantime produktesh dhe lansime" },
        { name: "Seminare", icon: FiBriefcase, description: "Trajnime dhe workshop-e profesionale" },
      ],
      amenities: ["Sistem audio modern", "Projektorë HD", "Klimatizim", "WiFi", "Bar i integruar"],
    },
    salla3Details: {
      name: "Salla 3 - Intimate Lounge",
      capacity: "Deri në 220 mysafirë",
      description: "Salla jonë më intime, perfekte për ngjarje të vogla dhe mbledhje familjare.",
      eventTypes: [
        { name: "Dasma të Vogla", icon: FiHeart, description: "Ceremoni intime dhe familjare" },
        { name: "Mbledhje Familjare", icon: FiUsers, description: "Festa familjare dhe takime" },
        { name: "Seminare të Vogla", icon: FiMic, description: "Trajnime dhe prezantime të vogla" },
        { name: "Festa Private", icon: FiGift, description: "Festa personale dhe përvjetorë" },
      ],
      amenities: ["Sistem audio intim", "Ndriçim i ngrohtë", "Klimatizim", "WiFi", "Hapësirë lounge"],
    },
    generalServices: [
      { name: "Catering Premium", icon: FiCoffee, description: "Menu të personalizuara dhe shërbim profesional" },
      { name: "Dekorim", icon: FiStar, description: "Dekorim i plotë sipas temës së zgjedhur" },
      { name: "Fotografi", icon: FiCamera, description: "Shërbime fotografike dhe video profesionale" },
      { name: "Muzikë", icon: FiMusic, description: "DJ profesional dhe sistem audio të avancuar" },
      { name: "Koordinim", icon: FiUsers, description: "Koordinim i plotë i ngjarjes nga fillimi deri në fund" },
      { name: "Valet Parking", icon: FiTruck, description: "Shërbim parkimi me valet për mysafirët" },
    ],
    parkingInfo: {
      title: "Parkimi & Qasja",
      spaces: "200+ vende parkimi",
      valet: "Shërbim valet i disponueshëm",
      location: "Vendndodhje qendrore me qasje të lehtë",
      transport: "Afër transportit publik dhe rrugëve kryesore",
    },
  },
}

function ContactModal({ isOpen, onClose, language }) {
  const t = translations[language]
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Përshëndetje! Dua të kontaktoj për shërbimet tuaja.%0A%0AEmri: ${formData.fullName}%0AEmail: ${formData.email}%0ATelefoni: ${formData.phone}%0AMesazhi: ${formData.message}`
    window.open(`https://wa.me/355123456789?text=${whatsappMessage}`, "_blank")
    onClose()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-background rounded-2xl p-8 max-w-md w-full modern-card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold gradient-text font-serif">{t.contactForm}</h3>
            <button onClick={onClose} className="p-2 hover:bg-accent/10 rounded-full transition-colors">
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.fullName}</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.phone}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              />
            </div>
            <button type="submit" className="w-full btn-luxury py-3 flex items-center justify-center space-x-2">
              <FiSend className="w-4 h-4" />
              <span>{t.sendMessage}</span>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function BookingModal({ isOpen, onClose, language }) {
  const t = translations[language]
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Përshëndetje! Dua të rezervoj një vend për ngjarjen time.%0A%0AEmri: ${formData.fullName}%0AEmail: ${formData.email}%0ATelefoni: ${formData.phone}%0AData e Ngjarjes: ${formData.eventDate}%0ALloji i Ngjarjes: ${formData.eventType}%0ANumri i Mysafirëve: ${formData.guestCount}%0AMesazhi: ${formData.message}`
    window.open(`https://wa.me/355123456789?text=${whatsappMessage}`, "_blank")
    onClose()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-background rounded-2xl p-8 max-w-md w-full modern-card max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold gradient-text font-serif">{t.bookingForm}</h3>
            <button onClick={onClose} className="p-2 hover:bg-accent/10 rounded-full transition-colors">
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.fullName}</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.phone}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.eventDate}</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.eventType}</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              >
                <option value="">{t.selectEventType}</option>
                <option value="wedding">{t.wedding}</option>
                <option value="corporate">{t.corporate}</option>
                <option value="birthday">{t.birthday}</option>
                <option value="conference">{t.conference}</option>
                <option value="other">{t.other}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.guestCount}</label>
              <input
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              />
            </div>
            <button type="submit" className="w-full btn-luxury py-3 flex items-center justify-center space-x-2">
              <FiSend className="w-4 h-4" />
              <span>{t.bookNow}</span>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Navbar({ language, setLanguage, currentPage, setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t.home, action: () => setCurrentPage("home") },
    { name: t.salla1, href: "#salla1" },
    { name: t.salla2, href: "#salla2" },
    { name: t.salla3, href: "#salla3" },
    { name: t.details, action: () => setCurrentPage("details") }, // Added Details navigation
    { name: t.contact, onClick: () => setIsContactModalOpen(true) },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl navbar-glow"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground font-bold text-xl font-serif">N</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text font-serif">Nobel</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Venues</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={
                    item.action ||
                    item.onClick ||
                    (() => {
                      if (item.href) {
                        setCurrentPage("home")
                        setTimeout(() => {
                          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                        }, 100)
                      }
                    })
                  }
                  className="relative px-4 py-2 text-foreground hover:text-accent transition-colors duration-300 font-medium cursor-pointer"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.name}
                  {hoveredItem === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent/60"
                      layoutId="navbar-indicator"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                onClick={() => setLanguage(language === "en" ? "al" : "en")}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGlobe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </motion.button>

              <motion.button
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-luxury text-sm px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.bookNow}
              </motion.button>
            </div>

            <motion.button
              className="md:hidden p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </motion.button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 py-4 space-y-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={item.onClick}
                      className="block py-3 text-foreground hover:text-accent transition-colors duration-300 font-medium border-b border-border/50 last:border-b-0 cursor-pointer"
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <div className="pt-4 space-y-3">
                    <button
                      onClick={() => setLanguage(language === "en" ? "al" : "en")}
                      className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors duration-300"
                    >
                      <FiGlobe className="w-4 h-4" />
                      <span>{language.toUpperCase()}</span>
                    </button>
                    <button onClick={() => setIsBookingModalOpen(true)} className="btn-luxury text-sm px-6 py-3 w-full">
                      {t.bookNow}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} language={language} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} language={language} />
    </>
  )
}

function DetailsPage({ language, setCurrentPage }) {
  const t = translations[language]

  const portfolioImages = [
    { src: "/placeholder-wt9o6.png", alt: "Dasmë elegante" },
    { src: "/placeholder-g55z6.png", alt: "Konferencë korporative" },
    { src: "/birthday-party.png", alt: "Festë ditëlindje" },
    { src: "/gala-dinner.png", alt: "Darkë gala" },
    { src: "/placeholder-2mmzt.png", alt: "Mbledhje biznesi" },
    { src: "/anniversary-celebration.png", alt: "Festë përvjetori" },
  ]

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.button
            onClick={() => setCurrentPage("home")}
            className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>{t.backToHome}</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold gradient-text font-serif mb-6">{t.venueDetails}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zbuloni të gjitha detajet e vendeve tona luksoze dhe shërbimet e specializuara
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venue Details Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {[t.salla1Details, t.salla2Details, t.salla3Details].map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-20"
            >
              <div className="modern-card rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold gradient-text font-serif mb-4">{venue.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{venue.description}</p>

                    <div className="flex items-center space-x-4 mb-8">
                      <div className="flex items-center space-x-2">
                        <FiUsers className="w-5 h-5 text-accent" />
                        <span className="font-semibold">{venue.capacity}</span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <FiCalendar className="w-5 h-5 text-accent mr-2" />
                        {t.eventTypes}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {venue.eventTypes.map((eventType, i) => (
                          <div key={i} className="flex items-start space-x-3 p-4 bg-accent/5 rounded-lg">
                            <eventType.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-foreground">{eventType.name}</h4>
                              <p className="text-sm text-muted-foreground">{eventType.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <FiStar className="w-5 h-5 text-accent mr-2" />
                        {t.amenities}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {venue.amenities.map((amenity, i) => (
                          <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={`/abstract-geometric-shapes.png?key=m3h7n&key=4k851&height=500&width=700&query=${venue.name} luxury event venue interior`}
                      alt={venue.name}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* General Services */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold gradient-text font-serif mb-6">{t.services}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Shërbime të plota për ngjarje të personalizuara sipas nevojave tuaja
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.generalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="modern-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parking & Location */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="modern-card rounded-3xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold gradient-text font-serif mb-6 flex items-center">
                  <FiTruck className="w-10 h-10 text-accent mr-4" />
                  {t.parkingInfo.title}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="w-5 h-5 text-accent" />
                    <span className="text-lg">{t.parkingInfo.spaces}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiTruck className="w-5 h-5 text-accent" />
                    <span className="text-lg">{t.parkingInfo.valet}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="w-5 h-5 text-accent" />
                    <span className="text-lg">{t.parkingInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="w-5 h-5 text-accent" />
                    <span className="text-lg">{t.parkingInfo.transport}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder-8f7vq.png"
                  alt="Parking"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold gradient-text font-serif mb-6">{t.portfolio}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Shikoni disa nga ngjarjet e shkëlqyera që kemi organizuar në vendet tona
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{image.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function VideoHero({ title, subtitle, language }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)
  const t = translations[language]

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder-28ejl.png"
        >
          <source
            src={require('./img/open.mp4')}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
      </div>

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <span className="gradient-text-light">{t.heroTitle}</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <motion.button
              className="btn-luxury text-lg px-8 py-4"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.exploreVenue}
              <FiChevronRight className="ml-2 w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={toggleVideo}
              className="flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
              <span className="font-medium">{t.watchVideo}</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function VideoSection({ id, title, description, language }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)
  const t = translations[language]

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id={id} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="https://video-previews.elements.envatousercontent.com/h264-video-previews/6401b1ea-1165-483f-85fa-3c8677fe469f/47247305.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text-light">{title}</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-8 text-white/90 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="btn-luxury text-lg px-8 py-4"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.exploreVenue}
              <FiChevronRight className="ml-2 w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={toggleVideo}
              className="flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
              <span className="font-medium">{t.watchVideo}</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Home({ language }) {
  const t = translations[language]

  return (
    <div className="relative">
      <VideoHero title="Nobel Venues" subtitle={t.nobelDesc} language={language} />

      <VideoSection
        id="salla1"
        title="Salla 1"
        description="Salla jonë më e madhe dhe më elegante, e përshtatshme për dasma të mëdha, konferenca dhe ngjarje korporative. Kapacitet deri në 500 mysafirë."
        language={language}
      />

      <VideoSection
        id="salla2"
        title="Salla 2"
        description="Një hapësirë moderne dhe fleksibile, ideale për ngjarje të mesme, prezantime dhe festa private. Kapacitet deri në 350 mysafirë."
        language={language}
      />

      <VideoSection
        id="salla3"
        title="Salla 3"
        description="Salla jonë më intime, perfekte për dasma të vogla, seminare dhe mbledhje familjare. Kapacitet deri në 220 mysafirë."
        language={language}
      />

      <div className="relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <section className="py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 gradient-text font-serif">{t.aboutNobel}</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto text-muted-foreground">{t.nobelDesc}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { number: "1000+", label: "Ngjarje të Organizuara", icon: FiCalendar },
                { number: "50+", label: "Klientë Korporativë", icon: FiUsers },
                { number: "98%", label: "Kënaqësi e Klientëve", icon: FiStar },
                { number: "15+", label: "Vite Përvojë", icon: FiMapPin },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="modern-card p-6 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="text-4xl font-bold gradient-text mb-2 font-serif">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 gradient-text font-serif">{t.ourServices}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Zgjidhje të plota për ngjarje të personalizuara sipas vizionit tuaj
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.map((service, i) => (
                <SectionCard key={i} delay={i * 0.1} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <FiStar className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service}</h3>
                  <p className="text-muted-foreground">Shërbim profesional me vëmendje ndaj çdo detaji</p>
                </SectionCard>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function Footer({ language }) {
  const t = translations[language]

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/80 text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl font-serif">N</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text font-serif">Nobel Venues</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Luxury Events</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.nobelDesc}</p>
            <div className="flex space-x-4">
              {[FiPhone, FiMail, FiMapPin].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5 text-accent" />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[t.home, t.salla1, t.salla2, t.salla3, t.contact].map((link, i) => (
                <li key={i}>
                  <button className="text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              {t.services.slice(0, 4).map((service, i) => (
                <li key={i}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">© 2024 Nobel Venues. {t.copyright}</p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">{t.luxuryModern}</p>
        </div>
      </div>
    </footer>
  )
}

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: `linear-gradient(135deg, var(--gold-elegant), var(--gold-dark))`,
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            opacity: 0.3,
          }}
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: 0.1,
          }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 25 + 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

function SectionCard({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={`modern-card rounded-2xl p-8 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.div>
  )
}

function Layout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [language, setLanguage] = useState("al")
  const [currentPage, setCurrentPage] = useState("home") // Added page state management

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15), transparent 40%)`,
        }}
      />
      <FloatingParticles />
      <Navbar language={language} setLanguage={setLanguage} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="pt-0 relative z-10">
        {currentPage === "home" ? (
          <Home language={language} />
        ) : currentPage === "details" ? (
          <DetailsPage language={language} setCurrentPage={setCurrentPage} />
        ) : null}
      </main>

      {currentPage === "home" && <Footer language={language} />}
    </div>
  )
}

export default function App() {
  return <Layout />
}

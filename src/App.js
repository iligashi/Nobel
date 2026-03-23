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

import hallImage1 from "./img/sall1.jpg"
import hallImage2 from "./img/hall2.jpg"
import hallImage3 from "./img/hall3.jpg"
import heroVideo from "./img/open.mp4"

/* ═══════════════════════════════════════════════════
   TRANSLATIONS — All content preserved exactly
   ═══════════════════════════════════════════════════ */

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
    luxuryModern: "Luxury · Classic · Unforgettable",
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
    luxuryModern: "Luksi · Klasike · E Paharrueshme",
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

/* ═══════════════════════════════════════════════════
   ORNAMENTAL DIVIDER
   ═══════════════════════════════════════════════════ */

function OrnamentDivider({ className = "" }) {
  return (
    <div className={`ornament ${className}`}>
      <div className="ornament-diamond" />
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   CONTACT MODAL
   ═══════════════════════════════════════════════════ */

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
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white p-10 max-w-lg w-full border border-gold/20 shadow-strong"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="label-elegant">{t.contactForm}</span>
              <div className="gold-separator mt-3" />
            </div>
            <button onClick={onClose} className="p-2 hover:text-gold transition-colors">
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="form-label">{t.fullName}</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.email}</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.phone}</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.message}</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="form-input resize-none" />
            </div>
            <button type="submit" className="btn-filled w-full py-4 flex items-center justify-center gap-2">
              <FiSend className="w-4 h-4" />
              <span>{t.sendMessage}</span>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════════════
   BOOKING MODAL
   ═══════════════════════════════════════════════════ */

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
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white p-10 max-w-lg w-full border border-gold/20 shadow-strong max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="label-elegant">{t.bookingForm}</span>
              <div className="gold-separator mt-3" />
            </div>
            <button onClick={onClose} className="p-2 hover:text-gold transition-colors">
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="form-label">{t.fullName}</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.email}</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.phone}</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.eventDate}</label>
              <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.eventType}</label>
              <select name="eventType" value={formData.eventType} onChange={handleChange} required className="form-input">
                <option value="">{t.selectEventType}</option>
                <option value="wedding">{t.wedding}</option>
                <option value="corporate">{t.corporate}</option>
                <option value="birthday">{t.birthday}</option>
                <option value="conference">{t.conference}</option>
                <option value="other">{t.other}</option>
              </select>
            </div>
            <div>
              <label className="form-label">{t.guestCount}</label>
              <input type="number" name="guestCount" value={formData.guestCount} onChange={handleChange} required min="1" className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.message}</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="form-input resize-none" />
            </div>
            <button type="submit" className="btn-filled w-full py-4 flex items-center justify-center gap-2">
              <FiSend className="w-4 h-4" />
              <span>{t.bookNow}</span>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════════════
   NAVBAR — Classic, refined
   ═══════════════════════════════════════════════════ */

function Navbar({ language, setLanguage, currentPage, setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t.home, action: () => { setCurrentPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }) } },
    { name: t.salla1, action: () => { setCurrentPage("details"); window.scrollTo({ top: 0 }) } },
    { name: t.salla2, action: () => { setCurrentPage("details"); window.scrollTo({ top: 0 }) } },
    { name: t.salla3, action: () => { setCurrentPage("details"); window.scrollTo({ top: 0 }) } },
    { name: t.details, action: () => { setCurrentPage("details"); window.scrollTo({ top: 0 }) } },
    { name: t.contact, onClick: () => setIsContactModalOpen(true) },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-sm shadow-soft border-b border-gold/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-22">
            {/* Logo */}
            <button
              onClick={() => { setCurrentPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }) }}
              className="flex items-center gap-3 cursor-pointer bg-transparent border-none"
            >
              <div className="flex flex-col items-start">
                <h1 className={`text-2xl lg:text-3xl font-display font-light tracking-wide ${
                  isScrolled ? "text-charcoal" : "text-white"
                }`}>
                  NOBEL
                </h1>
                <span className={`text-[10px] tracking-[4px] uppercase ${
                  isScrolled ? "text-gold" : "text-gold-light"
                }`}>
                  VENUES
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <button
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
                  className={`nav-link ${!isScrolled ? "nav-link-light" : ""}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => setLanguage(language === "en" ? "al" : "en")}
                className={`flex items-center gap-2 text-xs tracking-widest uppercase transition-colors ${
                  isScrolled ? "text-warm-gray hover:text-gold" : "text-white/70 hover:text-white"
                }`}
              >
                <FiGlobe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className={isScrolled ? "btn-classic text-xs px-6 py-3" : "btn-classic-light text-xs px-6 py-3"}
              >
                {t.bookNow}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden absolute top-full left-0 right-0 bg-ivory border-b border-gold/10 shadow-medium"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 py-6 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        if (item.action) item.action()
                        else if (item.onClick) item.onClick()
                        else if (item.href) {
                          setCurrentPage("home")
                          setTimeout(() => {
                            document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                          }, 100)
                        }
                      }}
                      className="block w-full text-left py-3 text-sm tracking-widest uppercase text-charcoal hover:text-gold transition-colors border-b border-gold/5 last:border-b-0"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => setLanguage(language === "en" ? "al" : "en")}
                      className="flex items-center gap-2 text-xs tracking-widest text-warm-gray hover:text-gold"
                    >
                      <FiGlobe className="w-4 h-4" />
                      <span>{language.toUpperCase()}</span>
                    </button>
                    <button
                      onClick={() => { setIsMobileMenuOpen(false); setIsBookingModalOpen(true) }}
                      className="btn-filled text-xs px-6 py-3 flex-1"
                    >
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

/* ═══════════════════════════════════════════════════
   VIDEO HERO — Elegant, classic
   ═══════════════════════════════════════════════════ */

function VideoHero({ language }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)
  const t = translations[language]

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause()
      else videoRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-8 md:inset-16 border border-white/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="inline-block text-[11px] tracking-[6px] uppercase text-gold-light mb-8">
            Drenas, Kosova
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-light mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Nobel Venues
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-20 h-px bg-gold mx-auto mb-8"
        />

        <motion.p
          className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a href="#salla1" className="btn-classic-light">
            {t.exploreVenue}
            <FiChevronRight className="w-4 h-4" />
          </a>

          <button onClick={toggleVideo} className="btn-classic-light">
            {isPlaying ? <FiPause className="w-4 h-4" /> : <FiPlay className="w-4 h-4" />}
            <span>{t.watchVideo}</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          className="w-5 h-8 border border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div className="w-0.5 h-2 bg-white/50 rounded-full mt-1.5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   VENUE SHOWCASE — Elegant image + text sections
   ═══════════════════════════════════════════════════ */

const venueImages = [hallImage1, hallImage2, hallImage3]
const venueLabels = ["HALL ONE", "HALL TWO", "HALL THREE"]
const venueCapacities = ["500", "350", "220"]

function VenueShowcase({ id, index, title, description, language, setCurrentPage }) {
  const t = translations[language]
  const isReversed = index % 2 !== 0
  const image = venueImages[index]
  const label = venueLabels[index]
  const capacity = venueCapacities[index]

  return (
    <section id={id} className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? "direction-rtl" : ""}`}>
          {/* Image */}
          <motion.div
            className={`img-zoom ${isReversed ? "lg:order-2" : ""}`}
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 border border-gold/20 m-4 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className={`${isReversed ? "lg:order-1" : ""}`}
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="label-elegant">{label}</span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-charcoal mt-4 mb-2 leading-tight">
              {title}
            </h2>
            <div className="gold-separator" />
            <p className="text-warm-gray leading-relaxed text-lg mb-8">
              {description}
            </p>

            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center">
                <FiUsers className="w-4 h-4 text-gold" />
              </div>
              <div>
                <span className="text-xs tracking-widest uppercase text-warm-gray">{t.capacity}</span>
                <p className="text-charcoal font-display text-xl">{capacity} {language === "al" ? "mysafirë" : "guests"}</p>
              </div>
            </div>

            <button
              className="btn-classic"
              onClick={() => { setCurrentPage("details"); window.scrollTo({ top: 0 }) }}
            >
              {t.exploreVenue}
              <FiChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════ */

function Home({ language, setCurrentPage }) {
  const t = translations[language]

  const serviceIcons = [FiHeart, FiBriefcase, FiCoffee, FiUsers, FiMusic, FiCamera]

  return (
    <div>
      <VideoHero language={language} />

      {/* Venue Sections */}
      <VenueShowcase
        id="salla1"
        index={0}
        title="Salla 1"
        description={language === "al"
          ? "Salla jonë më e madhe dhe më elegante, e përshtatshme për dasma të mëdha, konferenca dhe ngjarje korporative. Kapacitet deri në 500 mysafirë."
          : "Our largest and most elegant hall, suitable for grand weddings, conferences and corporate events. Capacity up to 500 guests."
        }
        language={language}
        setCurrentPage={setCurrentPage}
      />

      {/* Thin Gold Line Separator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gold/15" />
      </div>

      <VenueShowcase
        id="salla2"
        index={1}
        title="Salla 2"
        description={language === "al"
          ? "Një hapësirë moderne dhe fleksibile, ideale për ngjarje të mesme, prezantime dhe festa private. Kapacitet deri në 350 mysafirë."
          : "A modern and flexible space, ideal for medium events, presentations and private parties. Capacity up to 350 guests."
        }
        language={language}
        setCurrentPage={setCurrentPage}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gold/15" />
      </div>

      <VenueShowcase
        id="salla3"
        index={2}
        title="Salla 3"
        description={language === "al"
          ? "Salla jonë më intime, perfekte për dasma të vogla, seminare dhe mbledhje familjare. Kapacitet deri në 220 mysafirë."
          : "Our most intimate hall, perfect for small weddings, seminars and family gatherings. Capacity up to 220 guests."
        }
        language={language}
        setCurrentPage={setCurrentPage}
      />

      {/* ─── About Section ─── */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="label-elegant">{language === "al" ? "RRETH NESH" : "ABOUT US"}</span>
            <h2 className="text-4xl md:text-5xl font-display font-light mt-4 mb-2">
              {t.aboutNobel}
            </h2>
            <OrnamentDivider />
            <p className="text-white/60 text-lg leading-relaxed mt-6">
              {t.nobelDesc}
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[
              { number: "1000+", label: language === "al" ? "Ngjarje të Organizuara" : "Events Organized" },
              { number: "50+", label: language === "al" ? "Klientë Korporativë" : "Corporate Clients" },
              { number: "98%", label: language === "al" ? "Kënaqësi e Klientëve" : "Customer Satisfaction" },
              { number: "15+", label: language === "al" ? "Vite Përvojë" : "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="stat-item border border-white/10 py-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number text-gold-light">{stat.number}</div>
                <div className="stat-label text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="label-elegant">{language === "al" ? "ÇFARË OFROJMË" : "WHAT WE OFFER"}</span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-charcoal mt-4">
              {t.ourServices}
            </h2>
            <OrnamentDivider />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, i) => {
              const Icon = serviceIcons[i] || FiStar
              return (
                <motion.div
                  key={i}
                  className="classic-card p-8 text-center gold-top-border"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="service-icon">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-charcoal mb-3">{service}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {language === "al"
                      ? "Shërbim profesional me vëmendje ndaj çdo detaji"
                      : "Professional service with attention to every detail"
                    }
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Reviews Section ─── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="label-elegant">{language === "al" ? "FJALË NGA KLIENTËT" : "CLIENT TESTIMONIALS"}</span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-charcoal mt-4">
              {t.reviews}
            </h2>
            <OrnamentDivider />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[t.excellentService, t.professionalTeam, t.amazingExperience].map((review, i) => (
              <motion.div
                key={i}
                className="bg-white p-10 border border-gold/10 text-center"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <FiStar key={j} className="w-4 h-4 text-gold fill-current" style={{ fill: "#c9a96e" }} />
                  ))}
                </div>
                <p className="text-warm-gray leading-relaxed italic font-display text-lg">
                  "{review}"
                </p>
                <div className="gold-separator-center mt-6" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hallImage1}
            alt="Nobel Venues"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-8 md:inset-16 border border-white/10 pointer-events-none" />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="label-elegant">{language === "al" ? "REZERVONI SOT" : "RESERVE TODAY"}</span>
            <h2 className="text-4xl md:text-5xl font-display font-light mt-4 mb-4">
              {t.readyToBook}
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              {t.transformVision}
            </p>
            <a href="#home" className="btn-classic-light">
              {t.bookNow}
              <FiChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   DETAILS PAGE — Refined venue details
   ═══════════════════════════════════════════════════ */

function DetailsPage({ language, setCurrentPage }) {
  const t = translations[language]

  const venueDetailImages = [hallImage1, hallImage2, hallImage3]

  const portfolioImages = [
    { src: hallImage1, alt: language === "al" ? "Dasmë elegante" : "Elegant Wedding" },
    { src: hallImage2, alt: language === "al" ? "Konferencë korporative" : "Corporate Conference" },
    { src: hallImage3, alt: language === "al" ? "Festë ditëlindje" : "Birthday Party" },
    { src: hallImage2, alt: language === "al" ? "Darkë gala" : "Gala Dinner" },
    { src: hallImage1, alt: language === "al" ? "Mbledhje biznesi" : "Business Meeting" },
    { src: hallImage3, alt: language === "al" ? "Festë përvjetori" : "Anniversary Celebration" },
  ]

  return (
    <div className="min-h-screen bg-ivory pt-24">
      {/* Header */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.button
            onClick={() => setCurrentPage("home")}
            className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-12 text-sm tracking-widest uppercase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>{t.backToHome}</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="label-elegant">{language === "al" ? "ZBULONI MË SHUMË" : "DISCOVER MORE"}</span>
            <h1 className="text-5xl md:text-6xl font-display font-light mt-4 mb-4">{t.venueDetails}</h1>
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              {language === "al"
                ? "Zbuloni të gjitha detajet e vendeve tona luksoze dhe shërbimet e specializuara"
                : "Discover all the details of our luxury venues and specialized services"
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venue Detail Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {[t.salla1Details, t.salla2Details, t.salla3Details].map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-24 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Image */}
                <div className={`img-zoom ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <img
                      src={venueDetailImages[index]}
                      alt={venue.name}
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 border border-gold/15 m-3 pointer-events-none" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <span className="label-elegant">{venueLabels[index]}</span>
                  <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal mt-3 mb-2">
                    {venue.name}
                  </h2>
                  <div className="gold-separator" />
                  <p className="text-warm-gray leading-relaxed mb-6">{venue.description}</p>

                  {/* Capacity */}
                  <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gold/10">
                    <FiUsers className="w-5 h-5 text-gold" />
                    <span className="text-charcoal font-medium">{venue.capacity}</span>
                  </div>

                  {/* Event Types */}
                  <div className="mb-8">
                    <h3 className="text-sm tracking-widest uppercase text-warm-gray mb-5 flex items-center gap-2">
                      <FiCalendar className="w-4 h-4 text-gold" />
                      {t.eventTypes}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {venue.eventTypes.map((eventType, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 border border-gold/10 bg-cream-light">
                          <eventType.icon className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium text-charcoal">{eventType.name}</h4>
                            <p className="text-xs text-warm-gray mt-1">{eventType.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-sm tracking-widest uppercase text-warm-gray mb-4 flex items-center gap-2">
                      <FiStar className="w-4 h-4 text-gold" />
                      {t.amenities}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {venue.amenities.map((amenity, i) => (
                        <span key={i} className="amenity-badge">{amenity}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < 2 && (
                <div className="mt-24">
                  <OrnamentDivider />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* General Services */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="label-elegant">{language === "al" ? "SHËRBIMET" : "SERVICES"}</span>
            <h2 className="text-4xl md:text-5xl font-display font-light mt-4">
              {language === "al" ? "Shërbime të Plota" : "Complete Services"}
            </h2>
            <OrnamentDivider />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.generalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-8 text-center border border-white/10 hover:border-gold/40 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-5 border border-gold/40 rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display font-medium mb-3">{service.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parking & Location */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <span className="label-elegant">{language === "al" ? "VENDNDODHJA" : "LOCATION"}</span>
              <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal mt-3 mb-2 flex items-center gap-3">
                <FiTruck className="w-8 h-8 text-gold" />
                {t.parkingInfo.title}
              </h2>
              <div className="gold-separator" />
              <div className="space-y-5 mt-6">
                {[
                  { icon: FiMapPin, text: t.parkingInfo.spaces },
                  { icon: FiTruck, text: t.parkingInfo.valet },
                  { icon: FiMapPin, text: t.parkingInfo.location },
                  { icon: FiMapPin, text: t.parkingInfo.transport },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-warm-gray">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-zoom">
              <img
                src={hallImage3}
                alt="Location"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="label-elegant">{language === "al" ? "GALERIA" : "GALLERY"}</span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-charcoal mt-4">{t.portfolio}</h2>
            <OrnamentDivider />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-display">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   FOOTER — Classic, elegant
   ═══════════════════════════════════════════════════ */

function Footer({ language }) {
  const t = translations[language]

  return (
    <footer className="bg-charcoal text-white">
      {/* Gold top line */}
      <div className="h-px bg-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <h3 className="text-3xl font-display font-light tracking-wide">NOBEL</h3>
              <span className="text-[10px] tracking-[4px] uppercase text-gold">VENUES</span>
            </div>
            <p className="text-white/40 leading-relaxed text-sm mb-8 max-w-sm">
              {t.nobelDesc}
            </p>
            <div className="flex gap-3">
              {[
                { icon: FiPhone, label: "Phone" },
                { icon: FiMail, label: "Email" },
                { icon: FiMapPin, label: "Location" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs tracking-[3px] uppercase text-gold mb-6">
              {language === "al" ? "Lidhje të Shpejta" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {[t.home, t.salla1, t.salla2, t.salla3, t.contact].map((link, i) => (
                <li key={i}>
                  <button className="text-white/40 hover:text-gold transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[3px] uppercase text-gold mb-6">
              {language === "al" ? "Shërbimet" : "Services"}
            </h4>
            <ul className="space-y-3">
              {t.services.slice(0, 4).map((service, i) => (
                <li key={i}>
                  <span className="text-white/40 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-widest">
            &copy; 2024 NOBEL VENUES. {t.copyright}
          </p>
          <p className="text-white/30 text-xs tracking-widest">
            {language === "al" ? "Krijuar nga" : "Made by"}{" "}
            <a
              href="https://nexoraagency.llc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              nexoraagency.llc
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════
   LAYOUT & APP
   ═══════════════════════════════════════════════════ */

function Layout() {
  const [language, setLanguage] = useState("al")
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main>
        {currentPage === "home" ? (
          <Home language={language} setCurrentPage={setCurrentPage} />
        ) : currentPage === "details" ? (
          <DetailsPage language={language} setCurrentPage={setCurrentPage} />
        ) : null}
      </main>

      <Footer language={language} />
    </div>
  )
}

export default function App() {
  return <Layout />
}

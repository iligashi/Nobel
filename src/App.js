"use client"

import "./App.css"
import { useState, useEffect } from "react"
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

const hallImage1 = "/Salla1/Salla1thumbnale.jpg"
const hallImage2 = "/Sall2/Salla2Thumbnale.jpg"
const hallImage3 = "/Salla3/Salla3thumbnale.jpg"

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
    menus: "Menu",
    gallery: "Gallery",
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
      "Nobel represents the pinnacle of luxury event hosting, where timeless elegance meets modern sophistication. Our prestigious venues offer an unparalleled experience for life's most cherished moments.",
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
      capacity: "Up to 180 guests",
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
    menus: "Menujtë",
    gallery: "Galeria",
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
      "Nobel përfaqëson kulmin e organizimit të ngjarjeve luksoze, ku eleganca e përjetshme takohet me sofistikimin modern. Vendet tona prestigjioze ofrojnë një përvojë të pakrahasueshme për momentet më të çmuara të jetës.",
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
      capacity: "Deri në 180 mysafirë",
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

function AnimatedWords({ text, className = "", delay = 0 }) {
  const words = text.split(" ")
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.08, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

function DiagonalDivider() {
  return (
    <div className="relative h-14 overflow-hidden -mt-1" style={{ background: "#faf7f2" }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <polygon points="0,0 1440,0 0,56" fill="#1c1c1c" />
      </svg>
    </div>
  )
}

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
    window.open(`https://wa.me/38349482444?text=${whatsappMessage}`, "_blank")
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
    window.open(`https://wa.me/38349482444?text=${whatsappMessage}`, "_blank")
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
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t.salla1, action: () => { setCurrentPage("salla1"); window.scrollTo({ top: 0 }) } },
    { name: t.salla2, action: () => { setCurrentPage("salla2"); window.scrollTo({ top: 0 }) } },
    { name: t.salla3,   action: () => { setCurrentPage("salla3");   window.scrollTo({ top: 0 }) } },
    { name: t.gallery,  action: () => { setCurrentPage("gallery");  window.scrollTo({ top: 0 }) } },
    {
      name: t.menus,
      action: () => { setCurrentPage("menus"); window.scrollTo({ top: 0 }) },
      dropdown: ["Menya 1","Menya 2","Menya 3","Menya 4","Menya 5"].map((name, i) => ({
        name,
        action: () => {
          setCurrentPage("menus")
          setTimeout(() => document.getElementById(`menu-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 150)
        },
      })),
    },
    { name: t.details, action: () => { setCurrentPage("details"); window.scrollTo({ top: 0 }) } },
    { name: t.contact, action: () => { setCurrentPage("contact"); window.scrollTo({ top: 0 }) } },
  ]

  const isDark = ["home","salla1","salla2","salla3"].includes(currentPage) && !isScrolled

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isDark
            ? "bg-black/40 backdrop-blur-sm border-b border-white/10"
            : "bg-ivory/95 backdrop-blur-sm shadow-soft border-b border-gold/10"
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
              className="flex items-center cursor-pointer bg-transparent border-none"
            >
              <img
                src="/NobelLogo-removebg-preview.png"
                alt="Nobel Hotel"
                className="h-12 lg:h-14 w-auto object-contain"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <button
                      onClick={item.action}
                      className={`nav-link flex items-center gap-1 ${isDark ? "nav-link-light" : ""}`}
                    >
                      {item.name}
                      <FiChevronRight className="w-3 h-3 rotate-90 opacity-60" />
                    </button>
                    {/* Dropdown panel */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="bg-ivory border border-gold/20 shadow-medium py-2 min-w-[150px]">
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.name}
                            onClick={sub.action}
                            className="block w-full text-left px-5 py-2.5 text-[11px] tracking-widest uppercase text-charcoal hover:text-gold hover:bg-cream transition-colors"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
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
                    className={`nav-link ${isDark ? "nav-link-light" : ""}`}
                  >
                    {item.name}
                  </button>
                )
              )}
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

const heroSliderImages = [hallImage1, hallImage2, hallImage3]

function VideoHero({ language }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const t = translations[language]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSliderImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={heroSliderImages[currentSlide]}
            alt="Nobel Venues"
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-4 sm:inset-8 md:inset-16 border border-white/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center text-white w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-4 sm:mb-6"
        >
          <img
            src="/NobelLogo-removebg-preview.png"
            alt="Nobel Hotel"
            className="h-32 sm:h-44 md:h-56 lg:h-64 w-auto object-contain max-w-[280px] sm:max-w-xs md:max-w-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-14 sm:w-20 h-px bg-gold mx-auto mb-5 sm:mb-8"
        />

        <p className="text-sm sm:text-base md:text-xl text-white/70 font-light mb-8 sm:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2">
          <AnimatedWords text={t.heroSubtitle} delay={1.2} />
        </p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a href="#salla1" className="btn-classic-light text-xs sm:text-sm px-5 py-3 sm:px-8 sm:py-4">
            {t.exploreVenue}
            <FiChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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

const salla1Gallery = [
  "/Salla1/Salla1thumbnale.jpg",
  "/Salla1/MicrosoftTeams-video.mp4",
  "/Salla1/MicrosoftTeams-video (2).mp4",
  "/Salla1/MicrosoftTeams-video (4).mp4",
]

const salla2Gallery = [
  "/Sall2/Salla2Thumbnale.jpg",
  "/Sall2/Image (31).jpg",
  "/Sall2/Image (32).jpg",
  "/Sall2/Image (33).jpg",
  "/Sall2/Image (34).jpg",
  "/Sall2/Image (36).jpg",
  "/Sall2/Image (37).jpg",
]

const salla3Gallery = [
  "/Salla3/Salla3thumbnale.jpg",
  "/Salla3/Image (2).jpg",
  "/Salla3/Image (3).jpg",
  "/Salla3/Image (4).jpg",
  "/Salla3/Image (7).jpg",
  "/Salla3/Image (8).jpg",
  "/Salla3/Image (9).jpg",
  "/Salla3/Image (10).jpg",
  "/Salla3/Image (13).jpg",
  "/Salla3/Image (14).jpg",
  "/Salla3/Image (15).jpg",
  "/Salla3/Image (16).jpg",
  "/Salla3/Image (17).jpg",
  "/Salla3/Image (18).jpg",
  "/Salla3/Image (20).jpg",
  "/Salla3/Image (21).jpg",
]

const sallaGalleries = [salla1Gallery, salla2Gallery, salla3Gallery]

function VenueShowcase({ id, index, title, description, language, setCurrentPage, targetPage }) {
  const t = translations[language]
  const isReversed = index % 2 !== 0
  const image = venueImages[index]
  const label = venueLabels[index]
  const capacity = venueCapacities[index]

  return (
    <section id={id} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center`}>

          {/* Image */}
          <motion.div
            className="w-full lg:w-[62%] flex-shrink-0"
            initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] md:h-[480px] lg:h-[560px] object-cover"
              />
              <div className={`absolute inset-0 hidden lg:block bg-gradient-to-${isReversed ? "l" : "r"} from-transparent via-transparent to-ivory/30`} />
            </div>
          </motion.div>

          {/* Overlapping content card */}
          <motion.div
            className={`relative z-10 w-full lg:w-[44%] flex-shrink-0 mt-6 lg:mt-0 ${isReversed ? "lg:-mr-14" : "lg:-ml-14"}`}
            initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="bg-ivory border-l-4 border-gold shadow-2xl p-8 md:p-10">
              <span className="label-elegant">{label}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-charcoal mt-4 mb-2 leading-tight">
                {title}
              </h2>
              <div className="gold-separator" />
              <p className="text-warm-gray leading-relaxed text-base md:text-lg mb-8">
                {description}
              </p>

              <div className="flex items-center gap-3 mb-8">
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
                onClick={() => { setCurrentPage(targetPage || "details"); window.scrollTo({ top: 0 }) }}
              >
                {t.exploreVenue}
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   MENU DATA
   ═══════════════════════════════════════════════════ */

const sallaMenus = [
  // Salla 1 — Menya 2, 3, 4
  [
    {
      name: "Menya 1",
      items: [
        { num: "1", text: "Koktej në ambijent të hapur" },
        { num: "2", text: "Paragjellë përsonale" },
        { num: "3", text: "Sallatë e kombinuar përsonale" },
        { num: "4", text: "Katër (4) lloj mishi gjithsej 600 gr për person", sub: ["4/1. Pleskavicë", "4/2. Mish pule", "4/3. Mish viçi", "4/4. Mish i zier dhe i fërguar"] },
        { num: "5", text: "Pije joalkoolike qelqi pa kufij", sub: ["Pije të gazuara (coca-cola, fanta, shweps etj.)", "Lëngje fruktal (mollë, pjeshkë, vishnje etj.)"] },
        { num: "6", text: "Deserti i tortës sipas marrëveshjes" },
        { num: "7", text: "Birrë Peje & Llashko" },
        { num: "8", text: "Verë e kuqe, Verë e bardhë" },
      ],
    },
    {
      name: "Menya 2",
      items: [
        { num: "1", text: "Koktej në ambijent të hapur" },
        { num: "2", text: "Paragjellë përsonale" },
        { num: "3", text: "Sallatë e kombinuar përsonale" },
        { num: "4", text: "Katër (4) lloj mishi gjithsej 600 gr për person", sub: ["4/1. Pleskavicë", "4/2. Mish pule", "4/3. Mish viçi", "4/4. Mish i zier dhe i fërguar"] },
        { num: "5", text: "Pije joalkoolike qelqi pa kufij", sub: ["Pije të gazuara (coca-cola, fanta, shweps etj.)", "Lëngje fruktal (mollë, pjeshkë, vishnje etj.)"] },
        { num: "6", text: "Deserti i tortës sipas marrëveshjes" },
        { num: "7", text: "Birrë Peje & Llashko" },
        { num: "8", text: "Verë e kuqe, Verë e bardhë" },
        { num: "9", text: "Vodka, Stock" },
        
      ],
    },
    {
      name: "Menya 3",
      items: [
        { num: "1", text: "Koktej në ambijent të hapur" },
        { num: "2", text: "Paragjellë përsonale" },
        { num: "3", text: "Sallatë e kombinuar përsonale" },
        { num: "4", text: "Katër (4) lloj mishi gjithsej 600 gr për person", sub: ["4/1. Rollad Pule", "4/2. Mish pule", "4/3. Mish viçi", "4/4. Mish i zier dhe i fërguar"] },
        { num: "5", text: "Pije joalkoolike qelqi pa kufij", sub: ["Pije të gazuara (coca-cola, fanta, shweps etj.)", "Lëngje fruktal (mollë, pjeshkë, vishnje etj.)"] },
        { num: "6", text: "Deserti i tortës sipas marrëveshjes" },
        { num: "7", text: "Birrë Peje, Llashko & Heineken" },
        { num: "8", text: "Verë e kuqe, Verë e bardhë, Vodka, Stock" },
        { num: "9", text: "Redbull" },
        
      ],
    },
  ],
  // Salla 2 — Menya 1
  [
    {
      name: "Menya 1",
      items: [
        { num: "1", text: "Koktej në ambijent të hapur" },
        { num: "2", text: "Paragjellë përsonale" },
        { num: "3", text: "Sallatë e kombinuar përsonale" },
        { num: "4", text: "Katër (4) lloj mishi gjithsej 600 gr për person", sub: ["4/1. Pleskavicë", "4/2. Mish pule", "4/3. Vishlle viçi", "4/4. Mish i zier dhe i fërguar"] },
        { num: "5", text: "Pije joalkoolike pa kufij", sub: ["Lëngje fruti (mollë, pjeshkë, vishnje etj.)", "Pije të gazuara (coca-cola, fanta, shweps etj.)"] },
        { num: "6", text: "Deserti i tortës sipas marrëveshjes" },
        { num: "8", text: "Birrë Peje & Birrë Ilashko" },
        { num: "7", text: "Verë e kuqe & Verë e bardhë" },
        
      ],
    },
  ],
  // Salla 3 — kombinim i të gjitha
  [
    {
      name: "Menya Kombinuar",
      items: [
        { num: "1", text: "Koktej në ambijent të hapur" },
        { num: "2", text: "Paragjellë përsonale" },
        { num: "3", text: "Sallatë e kombinuar përsonale" },
        { num: "4", text: "Katër (4) lloj mishi gjithsej 600 gr për person", sub: ["4/1. Pleskavicë", "4/2. Mish pule", "4/3. Mish viçi / Ramstek", "4/4. Mish i zier dhe i fërguar"] },
        { num: "5", text: "Pije joalkoolike qelqi pa kufij", sub: ["Pije të gazuara (coca-cola, fanta, shweps etj.)", "Lëngje fruktal (mollë, pjeshkë, vishnje etj.)"] },
        { num: "6", text: "Deserti i tortës sipas marrëveshjes" },
        { num: "7", text: "Birrë Peje, Llashko & Heineken" },
        { num: "8", text: "Verë e kuqe, Verë e bardhë" },
        { num: "9", text: "Vodka, Stock" },
        { num: "10", text: "Jack Daniels" },
        { num: "11", text: "Jogermeister" },
      ],
    },
  ],
]

/* ═══════════════════════════════════════════════════
   GALLERY DATA & PAGE
   ═══════════════════════════════════════════════════ */

const galleryImages = [
  { src: "/openingimg.jpg",               hall: "all",   label: "Nobel Venues" },
  // Salla 1
  { src: "/Salla1/Salla1thumbnale.jpg",   hall: "salla1", label: "Salla 1" },
  // Salla 2
  { src: "/Sall2/Salla2Thumbnale.jpg",    hall: "salla2", label: "Salla 2" },
  { src: "/Sall2/Image (31).jpg",         hall: "salla2", label: "Salla 2" },
  { src: "/Sall2/Image (32).jpg",         hall: "salla2", label: "Salla 2" },
  { src: "/Sall2/Image (33).jpg",         hall: "salla2", label: "Salla 2" },
  { src: "/Sall2/Image (34).jpg",         hall: "salla2", label: "Salla 2" },
  { src: "/Sall2/Image (36).jpg",         hall: "salla2", label: "Salla 2" },
  { src: "/Sall2/Image (37).jpg",         hall: "salla2", label: "Salla 2" },
  // Salla 3
  { src: "/Salla3/Salla3thumbnale.jpg",   hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (2).jpg",         hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (3).jpg",         hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (4).jpg",         hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (7).jpg",         hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (8).jpg",         hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (9).jpg",         hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (10).jpg",        hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (13).jpg",        hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (14).jpg",        hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (15).jpg",        hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (16).jpg",        hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (17).jpg",        hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (18).jpg",        hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (20).jpg",        hall: "salla3", label: "Salla 3" },
  { src: "/Salla3/Image (21).jpg",        hall: "salla3", label: "Salla 3" },
]

function GalleryPage({ language, setCurrentPage }) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [lightbox, setLightbox] = useState(null)

  const filters = [
    { key: "all",    label: language === "al" ? "Të Gjitha" : "All" },
    { key: "salla1", label: "Salla 1" },
    { key: "salla2", label: "Salla 2" },
    { key: "salla3", label: "Salla 3" },
  ]

  const filtered = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.hall === activeFilter || img.hall === "all")

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((lightbox - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox((lightbox + 1) % filtered.length)

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === "ArrowLeft")  prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape")     closeLightbox()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox])

  return (
    <div className="min-h-screen bg-ivory pt-28">
      {/* Filters */}
      <div className="sticky top-20 z-30 bg-ivory/95 backdrop-blur-sm border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-6 py-2 text-xs tracking-[3px] uppercase transition-all duration-300 ${
                activeFilter === f.key
                  ? "bg-charcoal text-gold border border-charcoal"
                  : "border border-gold/20 text-warm-gray hover:border-gold hover:text-charcoal"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="break-inside-avoid mb-4 group relative overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
                  <div className="absolute inset-0 border border-white/0 group-hover:border-gold/30 m-3 transition-all duration-500 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-gold text-[10px] tracking-[4px] uppercase">{img.label}</p>
                    <p className="text-white text-xs mt-1 opacity-70">
                      {language === "al" ? "Klikoni për të zmadhuar" : "Click to enlarge"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-gold transition-colors z-10"
            >
              <FiX className="w-7 h-7" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
              {lightbox + 1} / {filtered.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-gold transition-colors z-10"
            >
              <FiArrowLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[85vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-gold transition-colors z-10"
            >
              <FiChevronRight className="w-8 h-8" />
            </button>

            {/* Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <span className="text-gold text-[10px] tracking-[4px] uppercase">{filtered[lightbox].label}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const allMenus = [
  { name: "Menya 1", items: sallaMenus[1][0].items },
  { name: "Menya 2", items: sallaMenus[0][0].items },
  { name: "Menya 3", items: sallaMenus[0][1].items },
  { name: "Menya 4", items: sallaMenus[0][2].items },
  { name: "Menya 5", items: sallaMenus[2][0].items },
]

/* ═══════════════════════════════════════════════════
   MENUS PAGE
   ═══════════════════════════════════════════════════ */

function MenusPage({ language, setCurrentPage }) {
  return (
    <div className="min-h-screen bg-ivory pt-28">

      {/* Menu list */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {allMenus.map((menu, i) => (
            <motion.div
              key={i}
              id={`menu-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Menu heading row */}
              <div className="flex items-end gap-6 mb-10">
                <span className="text-8xl md:text-9xl font-display font-light text-gold/15 leading-none select-none">
                  {i + 1}
                </span>
                <div className="pb-2">
                  <p className="text-xs tracking-[5px] uppercase text-gold mb-1">Nobel Venues</p>
                  <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal">{menu.name}</h2>
                  <div className="w-12 h-px bg-gold mt-3" />
                </div>
              </div>

              {/* Menu items */}
              <div className="ml-0 md:ml-20 mb-6 space-y-4">
                {menu.items.map((item, j) => (
                  <div key={j} className="border-b border-gold/8 pb-4 last:border-0">
                    <div className="flex items-baseline gap-3">
                      <span className="text-gold font-display text-lg w-7 flex-shrink-0">{item.num}.</span>
                      <span className="text-charcoal font-medium">{item.text}</span>
                    </div>
                    {item.sub && (
                      <ul className="ml-10 mt-2 space-y-1.5">
                        {item.sub.map((s, k) => (
                          <li key={k} className="flex items-center gap-3 text-sm text-warm-gray italic">
                            <div className="w-1.5 h-1.5 border border-gold/40 rotate-45 flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {i < allMenus.length - 1 && (
                <div className="my-16">
                  <OrnamentDivider />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   CONTACT PAGE
   ═══════════════════════════════════════════════════ */

function ContactPage({ language, setCurrentPage }) {
  const t = translations[language]
  const [imgError, setImgError] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Përshëndetje! Dua të kontaktoj për shërbimet tuaja.%0A%0AEmri: ${formData.fullName}%0AEmail: ${formData.email}%0ATelefoni: ${formData.phone}%0AMesazhi: ${formData.message}`
    window.open(`https://wa.me/38349482444?text=${msg}`, "_blank")
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-ivory pt-28">
      {/* Manager + Form */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Manager card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-elegant">
                {language === "al" ? "MENAXHERI YNË" : "OUR MANAGER"}
              </span>
              <h2 className="text-3xl font-display font-light text-charcoal mt-4 mb-2">
                {language === "al" ? "Na Kontaktoni Drejtpërdrejt" : "Reach Us Directly"}
              </h2>
              <div className="gold-separator" />

              <div className="classic-card p-8 mt-8">
                {/* Photo */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gold/30 mb-6 bg-cream flex items-center justify-center">
                    {imgError ? (
                      <FiUsers className="w-16 h-16 text-gold/30" />
                    ) : (
                      <img
                        src="/vali.jpeg"
                        alt="Valmir Sinani"
                        className="w-full h-full object-cover"
                        onError={() => setImgError(true)}
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-display font-medium text-charcoal">
                    Valmir Sinani
                  </h3>
                  <span className="text-xs tracking-widest uppercase text-gold mt-1">
                    {language === "al" ? "Menaxher i Ngjarjeve" : "Event Manager"}
                  </span>
                </div>

                {/* Contact details */}
                <div className="space-y-3">
                  {[
                    { icon: FiPhone, label: language === "al" ? "Telefoni" : "Phone", value: "+383 49 482 444  ·  +383 44 482 444  ·  +383 45 888 010" },
                    { icon: FiMail,  label: "Email",                                  value: "info@nobelvenues.com" },
                    { icon: FiMapPin, label: language === "al" ? "Adresa" : "Address", value: "Rruga Bejtë Rexhepi Drenas", href: "https://maps.app.goo.gl/yTHGMX12KsKhhsXb8" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4 p-4 border border-gold/10 bg-cream-light">
                      <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <span className="text-xs tracking-widest uppercase text-warm-gray">{label}</span>
                        {href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="block text-charcoal font-medium hover:text-gold transition-colors">{value}</a>
                        ) : (
                          <p className="text-charcoal font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="label-elegant">{language === "al" ? "FORMULARI" : "FORM"}</span>
              <h2 className="text-3xl font-display font-light text-charcoal mt-4 mb-2">{t.sendMessage}</h2>
              <div className="gold-separator" />

              <form onSubmit={handleSubmit} className="space-y-5 mt-8">
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
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={6} className="form-input resize-none" />
                </div>
                <button type="submit" className="btn-filled w-full py-4 flex items-center justify-center gap-2">
                  <FiSend className="w-4 h-4" />
                  <span>{t.sendMessage}</span>
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   SALLA PAGE — Individual hall pages
   ═══════════════════════════════════════════════════ */

function SallaPage({ sallaIndex, language, setCurrentPage }) {
  const t = translations[language]
  const sallaDetails = [t.salla1Details, t.salla2Details, t.salla3Details][sallaIndex]
  const gallery = sallaGalleries[sallaIndex]

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header with background image */}
      <section className="relative overflow-hidden text-white h-[50vh] min-h-[320px] md:h-[60vh] md:min-h-[420px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={venueImages[sallaIndex]}
            alt={sallaDetails.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Decorative border */}
        <div className="absolute inset-3 sm:inset-5 md:inset-8 border border-white/10 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 md:pt-32 md:pb-10">
          <motion.button
            onClick={() => { setCurrentPage("home"); window.scrollTo({ top: 0 }) }}
            className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-xs sm:text-sm tracking-widest uppercase w-fit"
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
            className="text-center pb-2"
          >
            <span className="label-elegant">{venueLabels[sallaIndex]}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light mt-3 mb-3 leading-tight">{sallaDetails.name}</h1>
            <div className="w-12 md:w-16 h-px bg-gold mx-auto mb-4" />
            <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">{sallaDetails.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="img-zoom">
              <div className="relative">
                <img
                  src={venueImages[sallaIndex]}
                  alt={sallaDetails.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 border border-gold/15 m-3 pointer-events-none" />
              </div>
            </div>

            <div>
              <span className="label-elegant">{venueLabels[sallaIndex]}</span>
              <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal mt-3 mb-2">
                {sallaDetails.name}
              </h2>
              <div className="gold-separator" />
              <p className="text-warm-gray leading-relaxed mb-6">{sallaDetails.description}</p>

              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gold/10">
                <FiUsers className="w-5 h-5 text-gold" />
                <span className="text-charcoal font-medium">{sallaDetails.capacity}</span>
              </div>

              <div className="mb-8">
                <h3 className="text-sm tracking-widest uppercase text-warm-gray mb-5 flex items-center gap-2">
                  <FiCalendar className="w-4 h-4 text-gold" />
                  {t.eventTypes}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sallaDetails.eventTypes.map((eventType, i) => (
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

              <div>
                <h3 className="text-sm tracking-widest uppercase text-warm-gray mb-4 flex items-center gap-2">
                  <FiStar className="w-4 h-4 text-gold" />
                  {t.amenities}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sallaDetails.amenities.map((amenity, i) => (
                    <span key={i} className="amenity-badge">{amenity}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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
            <h2 className="text-4xl md:text-5xl font-display font-light text-charcoal mt-4">
              {language === "al" ? "Fotografi" : "Photography"}
            </h2>
            <OrnamentDivider />
          </motion.div>

          {gallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden"
                >
                  {src.endsWith(".mp4") ? (
                    <video
                      src={src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-72 object-cover"
                    />
                  ) : (
                    <>
                      <img
                        src={src}
                        alt={`${sallaDetails.name} ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-warm-gray">
              <FiCamera className="w-12 h-12 mx-auto mb-4 text-gold/40" />
              <p>{language === "al" ? "Fotografi së shpejti" : "Photos coming soon"}</p>
            </div>
          )}
        </div>
      </section>

      {/* Menus CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="label-elegant">{language === "al" ? "USHQIMI" : "DINING"}</span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-charcoal mt-4">
              {language === "al" ? "Menujtë Tona" : "Our Menus"}
            </h2>
            <OrnamentDivider />
            <p className="text-warm-gray text-lg max-w-2xl mx-auto mt-6 mb-10">
              {language === "al"
                ? "Ofrojmë menu të personalizuara për çdo ngjarje. Shikoni të gjitha menujtë tona."
                : "We offer customized menus for every event. View all our menus."}
            </p>
            <button
              className="btn-classic"
              onClick={() => { setCurrentPage("menus"); window.scrollTo({ top: 0 }) }}
            >
              {language === "al" ? "Shiko Menujtë" : "View Menus"}
              <FiChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
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
        targetPage="salla1"
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
        targetPage="salla2"
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
        targetPage="salla3"
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

      <DiagonalDivider />

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
            loading="lazy"
            decoding="async"
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

function DetailsPage({ language, setCurrentPage, pageTitle }) {
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
    <div className="min-h-screen bg-ivory pt-28">

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
                      loading="lazy"
                      decoding="async"
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
                loading="lazy"
                decoding="async"
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
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
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

function Footer({ language, setCurrentPage }) {
  const t = translations[language]

  const nav = (page) => { setCurrentPage(page); window.scrollTo({ top: 0 }) }

  const quickLinks = [
    { label: t.home,    page: "home"    },
    { label: t.salla1,  page: "salla1"  },
    { label: t.salla2,  page: "salla2"  },
    { label: t.salla3,  page: "salla3"  },
    { label: t.gallery, page: "gallery" },
    { label: t.menus,   page: "menus"   },
    { label: t.contact, page: "contact" },
    { label: t.details, page: "details" },
  ]

  const contacts = [
    { icon: FiPhone,  text: "+383 49 482 444",  href: "tel:+38349482444" },
    { icon: FiPhone,  text: "+383 44 482 444",  href: "tel:+38344482444" },
    { icon: FiPhone,  text: "+383 45 888 010",  href: "tel:+38345888010" },
    { icon: FiMail,   text: "info@nobelvenues.com", href: "mailto:info@nobelvenues.com" },
    { icon: FiMapPin, text: "Rruga Bejtë Rexhepi Drenas", href: "https://maps.app.goo.gl/yTHGMX12KsKhhsXb8" },
  ]

  return (
    <footer className="bg-charcoal text-white">
      {/* Gold top line */}
      <div className="h-px bg-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Logo & Description */}
          <div className="md:col-span-5">
            <button onClick={() => nav("home")} className="block mb-6 bg-transparent border-none p-0">
              <img
                src="/NobelLogo-removebg-preview.png"
                alt="Nobel Hotel"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </button>
            <p className="text-white/40 leading-relaxed text-sm mb-8 max-w-sm">
              {t.nobelDesc}
            </p>
            <div className="space-y-3">
              {contacts.map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/40 text-xs leading-relaxed hover:text-gold transition-colors"
                  >
                    {text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs tracking-[3px] uppercase text-gold mb-6">
              {language === "al" ? "Lidhje të Shpejta" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => nav(page)}
                    className="text-white/40 hover:text-gold transition-colors text-sm text-left"
                  >
                    {label}
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
              {t.generalServices.map((service) => (
                <li key={service.name} className="flex items-center gap-2">
                  <service.icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span className="text-white/40 text-sm">{service.name}</span>
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
        ) : currentPage === "gallery" ? (
          <GalleryPage language={language} setCurrentPage={setCurrentPage} />
        ) : currentPage === "menus" ? (
          <MenusPage language={language} setCurrentPage={setCurrentPage} />
        ) : currentPage === "contact" ? (
          <ContactPage language={language} setCurrentPage={setCurrentPage} />
        ) : currentPage === "salla1" ? (
          <SallaPage sallaIndex={0} language={language} setCurrentPage={setCurrentPage} />
        ) : currentPage === "salla2" ? (
          <SallaPage sallaIndex={1} language={language} setCurrentPage={setCurrentPage} />
        ) : currentPage === "salla3" ? (
          <SallaPage sallaIndex={2} language={language} setCurrentPage={setCurrentPage} />
        ) : currentPage === "details" ? (
          <DetailsPage language={language} setCurrentPage={setCurrentPage} />
        ) : null}
      </main>

      <Footer language={language} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default function App() {
  return <Layout />
}

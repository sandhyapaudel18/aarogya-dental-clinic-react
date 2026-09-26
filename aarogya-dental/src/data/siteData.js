export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const clinicInfo = {
  name: "Aarogya Dental Clinic",
  tagline: "Delivering trusted and quality dental care to our community.",
  address: "Rangeli Road, Biratnagar, Nepal",
  phone: "9847201199",
  email: "ratoguranstech@gmail.com",
  hours: [
    { days: "Sun - Thu", time: "9:00 AM - 6:00 PM" },
    { days: "Fri", time: "9:00 AM - 3:00 PM" },
    { days: "Sat", time: "Closed" },
  ],
};

export const homeServices = [
  {
    icon: "sparkle",
    title: "Braces",
    description:
      "Effective orthodontic treatment to correct alignment, spacing, and bite issues for a straighter, healthier smile.",
  },
  {
    icon: "heart",
    title: "Invisible Aligners",
    description:
      "Clear, removable aligners that gently straighten your teeth with comfort and discretion.",
  },
  {
    icon: "gem",
    title: "Lingual Braces",
    description:
      "Hidden braces placed behind the teeth for a discreet and precise orthodontic solution.",
  },
  {
    icon: "tooth",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements that restore your bite and confidence.",
  },
  {
    icon: "clock",
    title: "Orthodontics",
    description:
      "Braces and clear aligners for straighter teeth and a healthier bite, for patients of all ages.",
  },
  {
    icon: "shield",
    title: "Emergency Care",
    description:
      "Same-day emergency dental appointments for pain relief, broken teeth, and urgent dental needs.",
  },
];

export const homeStats = [
  { value: "13k+", label: "Successful Procedures" },
  { value: "15+", label: "Specialist Doctors" },
  { value: "4.9/5", label: "Patient Rating" },
  { value: "5,240+", label: "Verified Reviews" },
];

export const teamHighlights = [
  {
    title: "Board Certified Specialists",
    description: "Every dentist holds advanced certifications from accredited institutions.",
  },
  {
    title: "Latest Technology",
    description: "Digital X-rays, 3D imaging, and laser treatments for precise, comfortable care.",
  },
  {
    title: "Patient-First Philosophy",
    description: "We listen, explain, and make sure you're comfortable at every step of treatment.",
  },
];

export const testimonials = [
  {
    quote:
      "The staff at Aarogya Dental Clinic was incredibly professional and caring. They made my tooth extraction completely painless. Highly recommended!",
    name: "Riya Dahal",
    role: "Student at PU",
      image: "/images/patient1.jpg",
  },
  {
    quote:
      "I had a wonderful experience at Aarogya Dental Clinic. The staff was caring, professional, and made my wisdom tooth extraction completely painless. Highly recommended!",
    name: "Subas Basnet",
    role: "Employee at RatoGuras",
      image: "/images/patient2.jpg",
  },
];

export const preventiveCare = [
  {
    title: "Comprehensive Exams",
    description:
      "Thorough oral examination including digital X-rays, oral cancer screening, and personalized treatment planning.",
    image: "/images/service-comprehensive-exams.jpg",
  },
  {
    title: "Professional Cleaning",
    description:
      "Deep cleaning to remove plaque and tartar buildup, polishing, and fluoride treatment for lasting protection.",
    image: "/images/service-professional-cleaning.jpg",
  },
  {
    title: "Sealants & Fluoride",
    description:
      "Protective coatings and fluoride applications to prevent cavities, especially recommended for children and teens.",
    label:"photos os ",
    image: "/images/service-sealants-fluoride.jpg",
  },
];

export const orthodonticsCare = [
  {
    title: "Clear Aligners",
    description:
      "Nearly invisible aligners that straighten teeth discreetly. Removable, comfortable, and effective for most cases.",
    image: "/images/service-clear-aligners.jpg",
  },
  {
    title: "Traditional Braces",
    description:
      "Metal and ceramic braces for comprehensive orthodontic correction, ideal for complex alignment and bite issues.",
    image: "/images/service-traditional-braces.jpg",
  },
  {
    title: "Retainers & Follow-up",
    description:
      "Custom retainers and ongoing monitoring to maintain your perfectly aligned smile long after treatment ends.",
    image: "/images/service-retainers-followup.jpg",
  },
];

export const howItWorks = [
  {
    step: "1",
    title: "Book Online",
    description: "Choose your preferred date, time, and service through our easy booking form.",
  },
  {
    step: "2",
    title: "Consultation",
    description: "Meet your dentist for a thorough exam and discuss your goals and treatment options.",
  },
  {
    step: "3",
    title: "Treatment",
    description: "Receive personalized care using the latest techniques in our comfortable clinic.",
  },
  {
    step: "4",
    title: "Follow-Up",
    description: "Ongoing care and check-ins to ensure lasting, beautiful results.",
    
  },
];

export const galleryFilters = ["All Photos", "Our Clinic", "Our Team", "Smile Result"];
export const galleryPhotos = [
  { id: 1, category: "Our Clinic", label: "Treatment in progress", image: "/images/gallery-01-treatment.jpg" },
  { id: 2, category: "Our Clinic", label: "Clinic signage", image: "/images/gallery-02-signage.jpg" },
  { id: 3, category: "Our Team", label: "Dental team at work", image: "/images/gallery-03-team.jpg" },
  { id: 4, category: "Smile Result", label: "Clear aligner trays", image: "/images/gallery-04-aligner-trays.jpg" },
  { id: 5, category: "Smile Result", label: "Patient with aligner", image: "/images/gallery-05-patient-aligner.jpg" },
  { id: 6, category: "Smile Result", label: "Bright smile close-up", image: "/images/gallery-06-smile.jpg" },
  { id: 7, category: "Smile Result", label: "Aligner fitting", image: "/images/gallery-07-fitting.jpg" },
  { id: 8, category: "Smile Result", label: "Teeth close-up", image: "/images/gallery-08-teeth.jpg" },
  { id: 9, category: "Smile Result", label: "Confident smile", image: "/images/gallery-09-confident-smile.jpg" },
];

export const transformations = [
  {
    title: "Dental Implant",
    description:
      "Permanent solution for missing teeth with a natural-looking implant and crown restoration.",
    tags: ["Implant", "Crown"],
    beforeImage: "/images/implant-before.jpg",
    afterImage: "/images/implant-after.jpg",
  },
  {
    title: "Protrusion and Spacing",
    description:
      "Correct protruding or spaced teeth for a healthier, more confident smile.",
    tags: ["Braces", "Clear aligners"],
    beforeImage: "/images/spacing-before.jpg",
    afterImage: "/images/spacing-after.jpg",
  },
  {
    title: "Tooth Filling",
    description:
      "Restore damaged teeth with natural-looking fillings for strength and durability.",
    tags: ["Cavities", "Decay"],
    beforeImage: "/images/filling-before.jpg",
    afterImage: "/images/filling-after.jpg",
  },
];

export const serviceOptions = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Pediatric Dentistry",
  "Emergency Care",
];

export const footerLinks = {
  quickLinks: navLinks,
  services: [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Pediatric Dentistry",
    "Emergency Care",
  ],
};

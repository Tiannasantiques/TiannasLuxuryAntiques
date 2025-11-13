# Design Guidelines: Tianna's Luxury Antiques

## Design Approach
**Reference-Based Luxury**: Drawing inspiration from Sotheby's, Christie's, and high-end luxury brand websites. Focus on sophisticated elegance, prestige, and visual storytelling that conveys exclusivity and international credibility.

## Layout System
**Spacing**: Use Tailwind units of 4, 8, 12, and 16 for consistent rhythm. Generous whitespace communicates luxury - never cramped layouts.

## Typography Hierarchy
**Font Families**: 
- Headings: Playfair Display or Cormorant Garamond (serif, elegant)
- Body: Montserrat or Inter (clean, professional sans-serif)

**Hierarchy**:
- Hero Headline: text-5xl to text-7xl, font-serif
- Section Headers: text-4xl to text-5xl, tracking-tight
- Subheadings: text-2xl to text-3xl
- Body: text-base to text-lg, leading-relaxed
- Captions: text-sm, uppercase tracking-wider

## Page Structure

### Hero Section
Full-width sophisticated hero featuring a curated antique piece (use one of the gilded clocks or candelabra images). Overlay with elegant typography:
- "Tianna's Luxury Antiques"
- Tagline: "Curating Exceptional European Antiques for Distinguished Institutions Worldwide"
- Subtle dark overlay (30-40% opacity) for text readability
- CTA button with frosted glass effect (backdrop-blur)

### CEO Profile Section
Asymmetric two-column layout:
- Left: Professional CEO photo (provided) with elegant border treatment
- Right: Biography highlighting international experience, decades of expertise, exclusive clientele
- Include subtle map graphic or international presence indicators

### Featured Collection Gallery
Masonry grid layout (3 columns desktop, 2 tablet, 1 mobile):
- Each antique displayed with generous padding
- High-quality images on light background cards with subtle shadows
- Hover effect: gentle scale and enhanced shadow
- Title and period/origin beneath each piece (e.g., "Louis XVI Gilded Bronze Clock, 18th Century France")
- NO prices displayed

### International Presence
Visual timeline or map showing business operations across Canada, Singapore, USA, Italy, France, Monaco
- Elegant iconography
- Brief descriptions of institutional partnerships

### Services Section
Grid layout highlighting:
- Museum Collections
- Corporate Art Programs
- Private Institutional Sales
- VIP Consultation Services
- Authentication & Appraisal

### Contact Section
Split layout:
- Business inquiry form (left)
- Contact details (right): Both emails, phone number with international code clearly visible
- Emphasis on "Online-Only Operations" and "B2B Exclusively"

### Footer
Rich footer with:
- Quick links, business hours (international time zones)
- Social proof elements
- Trust indicators
- Newsletter signup for exclusive offerings

## Component Library

**Navigation**: Fixed transparent header that becomes solid on scroll, minimal menu with elegant typography

**Cards**: Antique showcase cards with subtle elevation, generous padding, elegant typography for descriptions

**Buttons**: Primary CTA with sophisticated treatment, secondary outlined style. On hero images, use backdrop-blur-sm for glass effect

**Forms**: Refined input fields with subtle borders, generous padding, elegant focus states

**Image Treatment**: High-quality photography with subtle vignette effects, maintained aspect ratios, lazy loading

## Images
- **Hero**: Full-width image of ornate gilded clock or candelabra from provided assets
- **CEO Section**: Professional photo provided
- **Gallery**: All 8 provided antique images PLUS 8-10 additional sourced images matching 18th-19th century French Empire, Baroque, Rococo styles (ornate clocks, sculptures, vases, candelabras)
- **Background accents**: Subtle damask or baroque pattern overlays at 5% opacity in select sections

## Animations
Minimal and refined:
- Smooth scroll reveals (fade-up) for gallery items
- Gentle parallax on hero section
- Subtle hover transforms on antique cards
- No distracting motion - prioritize elegance
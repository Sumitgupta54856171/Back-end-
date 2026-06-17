---
name: StayHub
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5c3f41'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#906f70'
  outline-variant: '#e5bdbe'
  surface-tint: '#be0038'
  primary: '#ba0036'
  on-primary: '#ffffff'
  primary-container: '#e21e4a'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2b6'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#00685f'
  on-tertiary: '#ffffff'
  tertiary-container: '#008379'
  on-tertiary-container: '#f4fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb2b6'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#920029'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#7af7e8'
  tertiary-fixed-dim: '#5bdacc'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 24px
---

## Brand & Style
The design system is built on a foundation of hospitality, trust, and modern exploration. It targets a global audience of travelers and hosts who value clarity, ease of use, and visual warmth. 

The aesthetic follows a **Corporate / Modern** style with a focus on high-fidelity minimalism. It leverages significant whitespace, high-quality imagery, and subtle depth to make complex search and booking flows feel effortless. The interface is designed to disappear, allowing the vibrant photography of destinations to take center stage while maintaining a reliable and professional structure.

## Colors
This design system utilizes a high-contrast palette optimized for legibility and brand recognition. 

- **Primary (#FF385C):** Used for key actions, brand marks, and active states. It conveys energy and passion.
- **Secondary (#222222):** The core color for text and heavy structural elements. It provides a grounded, premium feel.
- **Accent/Success (#00A699):** Reserved for positive reinforcement, "Superhost" status, and confirmation states.
- **Neutral (#717171):** Used for secondary text, icons, and metadata to create a clear visual hierarchy.
- **Surface & Border:** The background remains pure white (#FFFFFF), with light gray (#F7F7F7) used to define content areas and soft borders (#DDDDDD) to separate logical sections without adding visual clutter.

## Typography
The system uses **Inter** exclusively to achieve a clean, systematic, and highly legible appearance. 

The typographic scale emphasizes a strong hierarchy. Headlines are set with tight letter-spacing and heavy weights to create a sense of authority and modernity. Body text is optimized for long-form reading with generous line heights. Labels use a semi-bold weight to ensure they remain legible even at the smallest sizes (12px), which is essential for data-dense property details and host information.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop and a fluid model for smaller screens. 

- **Desktop:** 12-column grid centered within a 1280px max-width container. 24px gutters provide breathing room between listing cards.
- **Tablet:** Transitions to an 8-column grid with reduced outside margins (40px).
- **Mobile:** A single or dual-column layout with 24px side margins. 

Spacing follows an 8px base unit. Component-level padding should use 16px or 24px to maintain a spacious, premium feel. Vertical rhythm between sections should be 48px to 80px to prevent the interface from feeling crowded.

## Elevation & Depth
Depth is conveyed through a mix of **Tonal Layers** and **Ambient Shadows**. 

1. **Surface 0 (Base):** Pure white background for the main canvas.
2. **Surface 1 (Low):** Light gray (#F7F7F7) used for secondary sections, input backgrounds, or inactive cards.
3. **Shadow - Subtle:** A soft, diffused shadow used for cards in their rest state (0px 2px 4px rgba(0,0,0,0.08)).
4. **Shadow - Elevated:** Used for hover states on listing cards and buttons, providing a sense of tactility (0px 6px 16px rgba(0,0,0,0.12)).
5. **Shadow - Floating:** Reserved for navigation bars and modals (0px 8px 28px rgba(0,0,0,0.15)).

## Shapes
The design system employs a **Rounded** shape language to evoke friendliness and approachability. 

- **Standard Elements:** Buttons, cards, and input fields use a consistent 12px radius.
- **Small Elements:** Tooltips and checkboxes use a 4px-8px radius.
- **Pill Shapes:** Badges (Superhost, New) and search bars use a fully rounded/pill radius to distinguish them from structural content containers.

## Components

### Buttons
- **Primary:** Solid #FF385C with white text. High contrast, rounded corners, 12px radius.
- **Secondary:** Solid #222222 with white text for high-importance alternative actions.
- **Ghost:** Transparent background with #222222 text and a thin #DDDDDD border.
- **Interaction:** On hover, primary buttons scale slightly (1.02) and darken by 5%.

### Inputs
- **Search Bar:** Large, pill-shaped container with inner divisions for location, date, and guests. High elevation on focus.
- **Text Fields:** 12px rounded corners, #DDDDDD border. On focus, the border thickens to 2px and changes to #222222.

### Cards
- **Listing Card:** Clean image container with a 12px radius. Metadata (Title, Rating, Price) is placed directly below the image without a container border to maintain a minimalist look.
- **Hover State:** Subtle lift (Shadow - Elevated) and slight image scale-up.

### Badges & Chips
- **Pills:** Used for categories and property status. White background with #DDDDDD border for inactive; #222222 background or border for active.
- **Status Badges:** "Superhost" uses a small icon with #222222 text, while "Price Drop" uses the Tertiary (#00A699) color.

### Feedback & Motion
- **Transitions:** All state changes (hover, focus) use a 200ms ease-in-out transition.
- **Loading:** Subtle shimmer/skeleton screens that mimic the layout of the property cards.
# 🏰 Explore Rajasthan - Tourism Website

A stunning, interactive tourism website showcasing the royal heritage and cultural richness of Rajasthan, India. This project features modern web design with immersive user experiences, interactive elements, and comprehensive travel information.

## 🌟 Live Demo

Experience the royal journey through Rajasthan's magnificent cities and heritage sites.

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Sections Overview](#-sections-overview)
- [Interactive Elements](#-interactive-elements)
- [Media Assets](#-media-assets)
- [Styling Highlights](#-styling-highlights)
- [Browser Compatibility](#-browser-compatibility)
- [Contributing](#-contributing)
- [Contact Information](#-contact-information)
- [License](#-license)

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Interactive Authentication Modal**: Beautiful login/signup modal with smooth animations
- **Dynamic Video Tours**: Auto-playing video carousel showcasing different cities
- **Interactive Gallery**: Image slider with smooth transitions and navigation controls
- **Smooth Scrolling Navigation**: Fixed navigation with smooth scroll to sections
- **Distance Calculator**: Interactive distance information between major cities
- **Contact Form**: Functional contact form for user inquiries

### Visual Features
- **Modern Glassmorphism UI**: Contemporary design with blur effects and transparency
- **Gradient Animations**: Eye-catching gradient backgrounds and hover effects
- **Hero Section**: Stunning hero section with background imagery
- **Custom Animations**: Smooth transitions and hover effects throughout
- **Icon Integration**: Font Awesome icons for enhanced visual appeal

### Content Features
- **City Showcases**: Detailed information about 5 major cities (Jaipur, Udaipur, Jodhpur, Jaisalmer, Bikaner)
- **Amenities Section**: Comprehensive list of services and facilities
- **Travel Information**: Distance matrix and travel tips
- **Cultural Context**: Rich descriptions of heritage and traditions

## 🛠 Technologies Used

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Bootstrap 5.3**: Responsive framework and utility classes
- **Google Fonts**: Premium typography (Playfair Display & Inter)
- **Font Awesome 6.4**: Icon library for UI elements
- **CSS Variables**: Maintainable color schemes and theming

## 📁 Project Structure

```
explore-rajasthan/
├── index.html              # Main HTML file
├── style.css              # Main stylesheet (referenced but not included)
├── script.js              # JavaScript functionality (referenced but not included)
├── logoo.jpg              # Website logo
└── photos/                # Media assets folder
    ├── photo-1668438773815-d54ce8c6372f.avif
    ├── jj.avif
    ├── jodh1.avif
    ├── jaisa3.avif
    ├── photo-1544503545-d62c3929cd4b.avif
    ├── mappp.mp4           # Distance visualization video
    ├── ja.mp4              # Jaipur tour video
    ├── udaivi.mp4          # Udaipur tour video
    ├── jodhhh.mp4          # Jodhpur tour video
    ├── jaisalm.mp4         # Jaisalmer tour video
    ├── bikaner.mp4         # Bikaner tour video
    ├── jai.avif            # Hawa Mahal image
    ├── lake.avif           # Lake Palace image
    ├── mehran.avif         # Mehrangarh Fort image
    ├── fort.avif           # Jaisalmer Fort image
    ├── amber.avif          # Amber Fort image
    ├── pushkar.avif        # Pushkar Lake image
    ├── thar.avif           # Thar Desert image
    ├── ranak.avif          # Ranakpur Temple image
    ├── camel.avif          # Camel Safari image
    ├── cul.avif            # Cultural Heritage image
    └── jodh3.avif          # Contact section background
```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/explore-rajasthan.git
   cd explore-rajasthan
   ```

2. **Ensure all assets are in place**
   - Verify `logoo.jpg` is in the root directory
   - Confirm all images and videos are in the `photos/` folder
   - Check that `style.css` and `script.js` files exist

3. **Open in browser**
   ```bash
   # Open index.html in your preferred browser
   # Or use a local server (recommended)
   python -m http.server 8000  # Python 3
   # Navigate to http://localhost:8000
   ```

## 💡 Usage

### Navigation
- The website features a fixed navigation bar with smooth scrolling
- Click on any menu item to jump to the corresponding section
- Mobile-responsive hamburger menu for smaller screens

### Authentication Modal
- A stunning authentication modal appears on page load
- Toggle between Login and Sign Up forms
- Close modal by clicking the X button or clicking outside

### Interactive Tours
- Auto-playing video carousel showcasing different cities
- Navigation controls to manually browse tours
- Play/pause button for video control

### Gallery Section
- Image slider with smooth transitions
- Navigation dots for quick jumping between images
- Previous/next buttons for manual control

## 🏛 Sections Overview

### 1. Hero Section
- Captivating introduction to Rajasthan
- Scroll indicator for user guidance
- Responsive background imagery

### 2. About Rajasthan
- Cultural tagline and introduction
- Sets the tone for the journey

### 3. City Showcases
Each city section includes:
- **Jaipur (Pink City)**
  - Hawa Mahal, Amber Fort
  - Bustling bazaars and UNESCO heritage
  
- **Udaipur (Venice of the East)**
  - Lake Palace, City Palace
  - Romantic boat rides and heritage resorts
  
- **Jodhpur (Blue City)**
  - Mehrangarh Fort, Umaid Bhawan Palace
  - Blue-painted old city and authentic cuisine
  
- **Jaisalmer (Golden City)**
  - Living fort, Sam Sand Dunes
  - Camel safaris and desert camping
  
- **Bikaner (Camel City)**
  - Junagarh Fort, Camel Research Centre
  - Famous sweets and Karni Mata Temple

### 4. Distance Information
- Interactive video showing Rajasthan map
- Distance matrix between major cities
- Travel tips and recommendations

### 5. Amenities
- Luxury accommodation options
- Premium transportation services
- Authentic dining experiences
- Cultural activities and adventure sports
- Wellness and spa services

### 6. Tours Section
- Video carousel featuring all major cities
- Pricing and duration information
- Booking call-to-action buttons

### 7. Gallery
- Curated collection of stunning photographs
- Showcases major attractions and landmarks
- Interactive slider with progress indicators

### 8. Contact Section
- Contact form for inquiries
- Business contact information
- Social media links
- Background with Jodhpur imagery

## ⚡ Interactive Elements

### Authentication Modal
```javascript
// Modal appears on page load with smooth animations
// Toggle between login/signup forms
// Form validation and submission handling
```

### Video Tour Carousel
```javascript
// Auto-playing video slides
// Manual navigation controls
// Play/pause functionality
// Progress indicators
```

### Gallery Slider
```javascript
// Smooth image transitions
// Dot navigation
// Progress bar
// Previous/next controls
```

### Smooth Scrolling
```javascript
// Smooth scroll to sections
// Active menu highlighting
// Responsive navigation toggle
```

## 🎨 Styling Highlights

### Design System
- **Primary Colors**: Royal blues, desert oranges, heritage reds
- **Typography**: Playfair Display for headings, Inter for body text
- **Spacing**: Consistent padding and margins using Bootstrap utilities
- **Border Radius**: Rounded corners (15px-25px) for modern look

### Animation Features
- CSS transitions for smooth hover effects
- Transform animations for interactive elements
- Backdrop filters for glassmorphism effects
- Gradient animations for dynamic backgrounds

### Responsive Breakpoints
- **Mobile First**: Optimized for mobile devices
- **Tablet**: Medium screen adaptations
- **Desktop**: Full-featured layout
- **Large Screens**: Enhanced spacing and imagery

## 🌐 Browser Compatibility

- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features Used**:
  - CSS Grid and Flexbox
  - CSS Custom Properties
  - Modern JavaScript (ES6+)
  - HTML5 Video and Audio APIs

## 📱 Mobile Responsiveness

- Responsive navigation with hamburger menu
- Touch-friendly interactive elements
- Optimized images and videos for mobile
- Swipe gestures for gallery and tours
- Mobile-optimized form inputs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow semantic HTML5 practices
- Maintain responsive design principles
- Test across multiple browsers and devices
- Optimize images and videos for web
- Follow accessibility best practices

## 📞 Contact Information

**Developer Contact:**
- **Email**: amaanhussain9467@gmail.com
- **Phone**: +91 84235 89445
- **Address**: WTP Mall, Gate 2

**Social Media:**
- Instagram: [Follow us for travel updates]
- Facebook: [Join our travel community]
- WhatsApp: [Quick travel inquiries]
- YouTube: [Travel vlogs and guides]

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **Tourism Board of Rajasthan** for inspiration and cultural insights
- **Bootstrap Team** for the responsive framework
- **Font Awesome** for comprehensive icon library
- **Google Fonts** for beautiful typography
- **Unsplash/Stock Photo Contributors** for stunning imagery
- **Open Source Community** for tools and libraries

## 🔮 Future Enhancements

- [ ] Booking system integration
- [ ] Real-time weather information
- [ ] Multi-language support (Hindi, English)
- [ ] Virtual reality tour previews
- [ ] Interactive maps with GPS navigation
- [ ] Customer review and rating system
- [ ] Payment gateway integration
- [ ] Social media sharing features
- [ ] Progressive Web App (PWA) capabilities
- [ ] Dark mode theme option

---

**Made with ❤️ for Rajasthan Tourism**

*Experience the royal heritage, embrace the culture, and create memories that last a lifetime.*

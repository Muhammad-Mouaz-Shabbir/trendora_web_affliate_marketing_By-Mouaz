# Affiliate Store Website

A complete responsive and SEO-friendly e-commerce website with 6 category pages, featuring modern design and optimized performance.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **6 Category Pages**: Home & Kitchen, Electronics, Fitness, Fashion, Health, Beauty
- **Product Showcase**: 4 products per category with images, descriptions, and pricing
- **Modern UI**: Clean design with smooth hover effects and animations
- **Fast Loading**: Optimized images and minimal JavaScript
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 File Structure

```
Amazon_1_website/
├── index.html              # Home page with slider and categories
├── home-kitchen.html       # Home & Kitchen category page
├── electronics.html        # Electronics category page
├── fitness.html           # Fitness category page
├── fashion.html           # Fashion category page
├── health.html            # Health category page
├── beauty.html            # Beauty category page
├── style.css              # Main stylesheet
├── script.js              # JavaScript functionality
├── generate-images.html   # Image generator tool
├── img/                   # Images folder
│   ├── logo.png
│   ├── firstimage.png
│   ├── secondimage.png
│   ├── thirdimage.png
│   ├── forthimage.png
│   ├── fifthimage.png
│   ├── sixthimage.png
│   └── [product images]
└── README.md
```

## 🛠️ Setup Instructions

### 1. Add Product Images
1. Open `generate-images.html` in your browser
2. Right-click on each product image and "Save image as..."
3. Save them to the `img/` folder with the correct names:
   - `home-kitchen1.jpg` to `home-kitchen4.jpg`
   - `electronics1.jpg` to `electronics4.jpg`
   - `fitness1.jpg` to `fitness4.jpg`
   - `fashion1.jpg` to `fashion4.jpg`
   - `health1.jpg` to `health4.jpg`
   - `beauty1.jpg` to `beauty4.jpg`

### 2. Add Amazon Links
Replace the `href="#"` in all "Buy on Amazon" buttons with your actual Amazon affiliate links.

### 3. Customize Content
- Update product titles, descriptions, and prices
- Modify category descriptions
- Add your own logo and branding

## 🎨 Design Features

### Home Page
- Hero slider with 6 rotating images
- 6 category cards with horizontal layout (icon left, content right)
- 5-star ratings for all categories
- Responsive navigation

### Category Pages
- Clean product grid layout
- Product cards with hover effects
- Professional "Buy on Amazon" buttons
- Consistent navigation across all pages

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation
- Optimized images for different screen sizes

## 🔧 Technical Details

### CSS Features
- CSS Custom Properties (variables)
- Flexbox and Grid layouts
- Smooth transitions and animations
- Mobile-responsive breakpoints
- Modern gradient backgrounds

### JavaScript
- Minimal JavaScript for performance
- Bootstrap carousel integration
- Navigation state management
- Touch-friendly interactions

### SEO Optimization
- Semantic HTML structure
- Meta tags for each page
- Open Graph tags for social sharing
- Proper heading hierarchy
- Alt text for all images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- Optimized CSS and JavaScript
- Lazy loading for images
- Minimal external dependencies
- Fast loading times
- Mobile-optimized

## 📝 Customization

### Colors
Update CSS variables in `style.css`:
```css
:root {
  --sky: #87CEEB;
  --primary: #0d6efd;
  --accent: #ff6f61;
  --accent-2: #00b894;
  --text: #1f2d3d;
}
```

### Fonts
The website uses Poppins font from Google Fonts. You can change it by updating the font import in the HTML files.

## 📞 Support

For any questions or customization needs, please refer to the code comments or create an issue.

## 📄 License

This project is open source and available under the MIT License.

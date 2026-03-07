# Developer Portfolio Website

A modern, responsive single-page portfolio website built with Next.js, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal developer-themed dark UI
- **Smooth Animations**: Framer Motion powered transitions and effects
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Static Export**: Optimized for Vercel deployment
- **Contact Form**: EmailJS integration for contact functionality
- **Interactive Navigation**: Active section highlighting with smooth scroll

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **EmailJS**
- **React Icons**

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 EmailJS Setup

To enable the contact form, you need to set up EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update the credentials in `components/sections/Contact.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

### EmailJS Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_email}}` - Your email (stanveer1809@gmail.com)

## Change your logo

Replace the image in .app/components/images with your own image to replace mine

## 🏗️ Build for Production

```bash
npm run build
```

This creates a static export in the `out` folder.

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── SectionWrapper.tsx   # Animation wrapper
│   └── sections/
│       ├── Home.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Teach.tsx        # What I Teach section
│       ├── WhyChooseMe.tsx  # Why Choose Me section
│       ├── Projects.tsx     # Projects section
│       └── Contact.tsx      # Contact section
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0f172a',
  secondary: '#020617',
  accent: {
    green: '#22c55e',
    blue: '#38bdf8',
    purple: '#a78bfa',
  },
}
```

### Content

Update the content in each section component located in `components/sections/`.

### Contact Information

Update contact details in `components/sections/Contact.tsx`.

## 📱 Sections

1. **Home** - Hero section with CTA buttons
2. **About** - Personal introduction
3. **What I Teach** - Skills and technologies
4. **Why Choose Me** - Key benefits and features
5. **Projects** - Portfolio of completed and ongoing projects
6. **Contact** - Contact form and social links

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Tanveer**

- LinkedIn: [S Tanveer Muhammed](https://www.linkedin.com/in/s-tanveer-muhammed-611b89336/)
- GitHub: [@TanveerS4](https://github.com/TanveerS4)
- Instagram: [@epicblue06](https://www.instagram.com/epicblue06/)
- Email: stanveer1809@gmail.com
- Phone: 8610534505

---

Built with ❤️ using Next.js and TailwindCSS

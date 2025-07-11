# Parenthetical Website

Official website for Parenthetical - a multidisciplinary agency at the intersection of marketing and technology. We harness the power of AI to create digital spaces where humanity thrives.

## About Parenthetical

Parenthetical operates at the margins—where the most important conversations happen. We believe in building technology that amplifies marginalized voices and creates meaningful connections in the digital landscape.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with Lucide React icons
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/parenthetical-dev/parenthetical-com.git
cd parenthetical-com
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
parenthetical-com/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contributor-guidelines/  # Contributor guidelines
│   ├── fonts/             # Custom fonts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── custom-scroll.tsx  # Custom scroll behavior
│   ├── dev-contact-modal.tsx  # Developer contact modal
│   ├── footer.tsx         # Site footer
│   ├── header.tsx         # Site header
│   └── ui/                # UI components
├── lib/                   # Utility functions
├── public/                # Static assets
└── package.json          # Project dependencies
```

## Key Pages

- **Homepage** (`/`): Landing page showcasing Parenthetical's mission and services
- **About** (`/about`): Detailed information about the agency's philosophy and approach
- **Contributor Guidelines** (`/contributor-guidelines`): Comprehensive guide for open-source contributors

## Development Guidelines

### Code Style

- We use ESLint and Prettier for code formatting
- Follow the existing patterns in the codebase
- Prioritize accessibility and performance
- Write clean, readable code that prioritizes clarity over cleverness

### Commits

- Use clear, descriptive commit messages
- Follow conventional commit format when possible
- Reference issues in commit messages where applicable

### Testing

Before submitting changes:
1. Ensure the development server runs without errors
2. Test responsiveness across different screen sizes
3. Verify accessibility with keyboard navigation
4. Check for console errors

## Contributing

We welcome contributions that align with our mission of building technology for social good. Please read our [Contributor Guidelines](/app/contributor-guidelines/page.tsx) before submitting pull requests.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test thoroughly
5. Commit your changes
6. Push to your fork
7. Open a pull request with a clear description

## Core Values

- **Accessibility First**: Every feature must be usable by everyone
- **Performance Matters**: Optimize for users on older devices and slower connections
- **Privacy by Design**: Minimal data collection, maximum user protection
- **Inclusive Development**: We actively welcome contributors from marginalized communities

## Environment Variables

Create a `.env.local` file in the root directory for any environment-specific variables:

```env
# Example (update as needed)
NEXT_PUBLIC_API_URL=your_api_url
```

## Deployment

The site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with automatic builds on push to main

## License

This project is licensed under the MIT License with additional restrictions - see the [LICENSE](LICENSE) file for details.

**Key Points:**
- ✅ You may use this code for your own individual projects
- ✅ You may modify and distribute the layout and web functions
- ❌ You may NOT use this to imitate or compete with Parenthetical
- ❌ You may NOT use the Parenthetical name or brand
- ❌ Usage must align with our core values and contributor guidelines

## Contact

- Website: [parenthetical.dev](https://parenthetical.dev)
- GitHub: [@parenthetical-dev](https://github.com/parenthetical-dev)

---

Built with care at the margins, where the most important work happens.
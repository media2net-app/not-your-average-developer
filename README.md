# Team Benji Health & Fitness

Een complete health & fitness platform voor training, voeding, herstel en AI-gedreven coaching. Het platform biedt gepersonaliseerde schema's, progressie tracking, en community features voor optimale gezondheid en prestaties.

## Features

- **Modern Login System** with demo authentication
- **Dashboard** with comprehensive health metrics
- **Training Tracking** - workout plans and progress
- **Nutrition Monitoring** - macro tracking and meal planning
- **Recovery Analytics** - sleep, HRV, and recovery metrics
- **Body Composition** - weight, body fat, and muscle mass tracking
- **Learning Modules** - educational content and progress tracking
- **Dark Mode UI** with brand colors (Orange #E33412, Gray #1F1F1F)
- **Responsive Design** with smooth animations

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Local Storage** - Demo authentication

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd team-benji-health-fitness
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

4. Open [http://localhost:6001](http://localhost:6001) in your browser.

## Demo Login

Use these credentials to access the demo dashboard:

- **Email:** `demo@example.com`
- **Password:** `demo123`

Or simply click the "Demo Login" button for instant access.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with global styles
│   ├── page.tsx            # Login page
│   ├── dashboard/
│   │   └── page.tsx        # Dashboard with all features
│   └── globals.css         # Global styles and theme
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Features Overview

### Login Page
- Full-screen animated background
- Form validation
- Demo login functionality
- Responsive design
- Loading states and error handling

### Dashboard
- **Overview Tab**: Daily progress, calories burned, sleep score
- **Training Tab**: Workout plans and completion tracking
- **Nutrition Tab**: Macro tracking (protein, fat, carbs)
- **Recovery Tab**: HRV, resting heart rate, recovery score
- **Body Comp Tab**: Weight, body fat percentage, muscle mass
- **Learning Tab**: Educational modules with progress tracking
- **Community Tab**: Social features and peer support
- **Coaching Tab**: CRM system for coaches and clients

### UI/UX Features
- Dark mode with brand colors
- Smooth animations and transitions
- Responsive design for all devices
- Interactive elements with hover effects
- Loading spinners and state management

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Styling

The project uses Tailwind CSS with custom CSS variables for theming:

- **Primary Color**: #E33412 (Orange)
- **Background**: #1F1F1F (Dark Gray)
- **Secondary**: #2A2A2A (Medium Gray)
- **Text**: #FFFFFF (White)

### Animations

Framer Motion is used for smooth animations:
- Page transitions
- Component mounting/unmounting
- Interactive hover effects
- Loading states

## Future Enhancements

This platform is designed to be expanded with:

- **AI Integration** for personalized recommendations
- **CRM System** for coaches and clients
- **E-commerce** for supplements and equipment
- **Community Features** for social interaction
- **API Integrations** with fitness trackers (Oura, WHOOP)
- **Advanced Analytics** and reporting
- **Mobile App** development
- **Body Composition Tracking** with advanced metrics
- **Automated Workout Generation** based on goals and progress
- **Nutrition Planning** with meal suggestions
- **Recovery Optimization** with sleep and stress tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of Team Benji's health and fitness platform development. 
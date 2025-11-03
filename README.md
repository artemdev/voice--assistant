# Voice AI Interface

A real-time voice conversation interface that enables natural spoken interactions with customizable AI personas using browser-native speech APIs.

## How to Run Locally

### Setup

1. Clone the repository and navigate to the project directory

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

5. Allow microphone permissions when prompted

## Technical Architecture

### Core Technologies

-   **Next.js 16** (React 19)
-   **TypeScript**
-   **Tailwind CSS v4** -

### Key Libraries

**Voice Processing:**

-   `Web Speech API` - Native browser APIs for speech recognition (`SpeechRecognition`) and synthesis (`SpeechSynthesis`)

**UI Components:**

-   `Radix UI` - Accessible component primitives (Dialog, Select, Slider, Accordion)
-   `Framer Motion` - Animations and transitions
-   `Lucide React` - Icon library
-   `Sonner` - Toast notifications

**Form Management:**

-   `React Hook Form` - Form state management
-   `Zod` - Schema validation
-   `@hookform/resolvers` - Form validation integration

**Utilities:**

-   `moment` - Date/time handling
-   `clsx` + `tailwind-merge` - Conditional styling

### Architecture Overview

```
src/
├── app/
│   ├── ActiveCall/         # Voice call interface
│   │   ├── useVoice.ts     # Core voice interaction hook
│   │   ├── Controls/       # Call controls (pause, resume, interrupt)
│   │   ├── Conversation/   # Message history display
│   │   └── assistants/     # Avatar states (idle, listening, speaking)
│   ├── PersonaModal/       # AI persona configuration
│   ├── AssessmentModal/    # Post-call assessment display
│   └── assessment/[id]/    # Session review page
├── components/
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   └── assessment/         # Assessment metrics components
└── lib/
    ├── types.ts            # TypeScript definitions
    ├── validations/        # Zod schemas
    ├── responses.ts        # AI response generation
    └── utils.ts            # Shared utilities
```

### How It Works

1. **Persona Selection**: Users configure AI personality traits (name, role, tone, OCEAN traits)
2. **Voice Call**: Real-time bidirectional voice conversation using Web Speech API
3. **Speech Recognition**: Converts user speech to text (`webkitSpeechRecognition`)
4. **Response Generation**: Generates contextual AI responses based on persona
5. **Speech Synthesis**: Converts AI responses to speech (`SpeechSynthesisUtterance`)
6. **Assessment**: Analyzes conversation quality and provides metrics after call ends

## Known Limitations

### Current Limitations

1. **Browser Compatibility**: Only works in browsers with Web Speech API support (Chrome, Edge, Safari). Firefox has limited support.

2. **Speech Recognition Accuracy**: Dependent on browser's built-in speech recognition, which can have accuracy issues with:

    - Accents and dialects
    - Background noise
    - Uncommon words or technical terms

3. **Offline Support**: Requires internet connection as browser speech APIs use cloud services

4. **Voice Selection**: Limited to browser's default voices for speech synthesis

5. **No Persistence**: Conversation history and persona configurations are not saved between sessions

6. **Response Intelligence**: Uses simple rule-based response generation instead of actual AI/LLM integration

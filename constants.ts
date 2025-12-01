import { DesignConcept } from './types';

export const INITIAL_SKETCHES_CONCEPTS: DesignConcept[] = [
  {
    title: 'The "Scrolling Monolith"',
    description: 'A massive, floor-to-ceiling touchscreen inside the elevator car with a kinetic scrollable list of numbers. Users flick hard to scroll past thousands of floors.',
    status: 'Current floor displayed large at the top; destination floors highlighted in the list.',
  },
  {
    title: 'Numeric Keypad Kiosk',
    description: 'Traditional banks of 10-key pads (0-9, Enter). Users must type a four or five-digit number and hit enter.',
    status: 'A digital readout above the keypad shows the number being typed.',
  },
  {
    title: 'Voice Command Array',
    description: 'Ceiling microphones capture speech. Users state their destination: "Elevator, floor nine thousand two hundred."',
    status: 'Audio confirmation ("Going to 9200") and a screen listing accepted spoken commands.',
  },
  {
    title: 'Mobile Boarding Pass',
    description: 'Users select destination on a phone app. The app assigns a specific elevator bank and time slot.',
    status: 'The phone app becomes the status screen, showing a countdown timer.',
  },
  {
    title: 'The "Sky-Lobby" System',
    description: 'Building is divided into 10 zones. Express elevators take everyone to a "Sky Lobby" transfer floor.',
    status: 'Large screens show "Express to Zone 6k (Floors 6000-6999)."',
  },
  {
    title: 'Biometric Preset Scanning',
    description: 'Iris scanners or facial recognition. Automatically inputs "home" or "work" floor based on time of day.',
    status: 'A small personalized screen flashes: "Welcome Sarah. Destination: Floor 4502."',
  },
  {
    title: 'Smartwatch "Crown" Dial',
    description: 'Users use the rotating crown on their smartwatch to cycle through thousands and hundreds quickly.',
    status: 'Haptic feedback on the wrist. Watch face shows selected number and ETA.',
  },
  {
    title: 'Zoomable Map Interface',
    description: 'A large touchscreen displays a cross-section of the building. Users pinch-to-zoom to tap their destination.',
    status: 'The map highlights the route and upcoming stops.',
  },
  {
    title: 'Smart Glasses AR Overlay',
    description: 'AR glasses display a holographic interface. Users use gesture controls (air-tapping) on a virtual keypad.',
    status: 'A floating holographic progress bar in the user\'s peripheral vision.',
  },
  {
    title: 'Destination Zone Tickets',
    description: 'Users buy a ticket for a specific range of floors (e.g., "8000s") and enter a specific waiting area.',
    status: 'The ticket has the zone printed on it; lobby signs direct ticket holders.',
  },
];


export const REFINED_CONCEPTS: DesignConcept[] = [
    {
        title: 'The Personal Dial App',
        description: 'Smartphone interface with two concentric dial wheels. Outer wheel selects thousands, inner wheel selects hundreds.',
        status: 'Phone screen transforms into a progress ring.'
    },
    {
        title: 'The "Airport Gate" Lobby',
        description: 'Lobby screens list destinations by zones (e.g., "Floors 7000-8000: Boarding at Shaft D"). No buttons needed.',
        status: 'In-car screen shows "Express Service to Zone 7000".'
    },
    {
        title: 'NFC "Tap-and-Confirm"',
        description: 'Users pre-set destination on phone. To board, they tap phone against an NFC reader on the elevator door frame.',
        status: 'Ceiling screens show a timeline of passenger destinations.'
    },
    {
        title: 'Vertical Subway Map',
        description: 'No controls. Walls are OLED screens displaying a stylized vertical transit map. Current position is a glowing puck.',
        status: 'Visualizes the 30-minute journey like a subway route.'
    },
    {
        title: 'Contextual Search Kiosk',
        description: 'Lobby kiosks with a search bar. Type "Marketing Dept" or "Dr. Vance", system assigns the floor and elevator bank.',
        status: 'Prints a QR code pass with the assigned shaft.'
    },
    {
        title: 'Haptic Wearable Guidance',
        description: 'Smartwatch learns routine. As you enter lobby, it vibrates: "Work (Floor 9500)?" Tap yes to confirm.',
        status: 'Watch uses distinct vibrations for "halfway there" or "arriving".'
    },
    {
        title: 'Two-Stage "Keypad & Swipe"',
        description: 'Physical lobby slider bar to select the "Thousand" range (Macro), then a Numpad appears for the specific digits (Micro).',
        status: 'Monitors show which floor ranges are served by next car.'
    },
    {
        title: 'In-Car Personal Screens',
        description: 'Seat-back tablets for every passenger (like airplanes). Sync phone to view personalized ETA and altitude data.',
        status: 'Highly personalized trip data at your seat.'
    },
    {
        title: 'The "Gesture Wall"',
        description: 'Large lobby wall detects gestures. Big sweep for floor height, small gestures for fine-tuning. Step into "commit zone" to lock.',
        status: 'Floor projection confirms destination.'
    },
    {
        title: 'Audio-Centric Status',
        description: 'No visual clutter. Ambient audio hum rises in pitch as elevator ascends. Soft chimes indicate major milestones.',
        status: 'Calm voice announces only major express stops.'
    }
];

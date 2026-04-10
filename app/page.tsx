'use client'

import { useState } from 'react';
import FloatingPetals from '../components/invitation/FloatingPetals';
import HeroSection from '../components/invitation/HeroSection';
import BirthDetails from '../components/invitation/BirthDetails';
import Gallery from '../components/invitation/Gallery';
import EventDetails from '../components/invitation/EventDetails';
import RSVPDrawer from '../components/invitation/RSVPDrawer';
import WishWall from '../components/invitation/WishWall';
import SunnahNabiSection from '../components/invitation/SunnahNabiSection'
import QuranVerse from '../components/invitation/QuranVerse';
import InvitationFooter from '../components/invitation/InvitationFooter';
import InvitationGate from '../components/invitation/InvitationGate';
import BirthCountDown from '../components/invitation/BirthCountdown';

const HERO_IMAGE = 'https://cdn.phototourl.com/free/2026-04-10-68887c78-94cd-45c9-a7b7-b2a52674d869.png';
const GALLERY_IMAGES = [
  'https://cdn.phototourl.com/free/2026-04-10-eca8454b-67fb-424e-906c-fc90077d8efb.jpg',
  'https://cdn.phototourl.com/free/2026-04-10-28f96df7-6f06-4abb-9485-7bc41294c8c4.jpg',
  'https://cdn.phototourl.com/free/2026-04-10-910a5140-9a44-4e78-8369-ce95e8154989.jpg',
  'https://cdn.phototourl.com/free/2026-04-10-62f4f35d-c82a-4ed2-bfa5-b51a2da9caa4.jpg',
  'https://cdn.phototourl.com/free/2026-04-10-96779998-8317-4d0e-8d66-be17e64c42c9.jpg',
];

export default function Invitation() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);

  return (
    <div className="min-h-screen relative font-inter" style={{ background: '#FFF5F7' }}>
      {!gateOpen && <InvitationGate onOpen={() => setGateOpen(true)} />}
      <FloatingPetals />
      <div className="relative z-10">
        <HeroSection heroImage={HERO_IMAGE} />
        <BirthDetails />
        <QuranVerse />
        <BirthCountDown birthDate="2026-03-13" />
        <Gallery images={GALLERY_IMAGES} />
        <SunnahNabiSection />
        <EventDetails onOpenRsvp={() => setRsvpOpen(true)} />
        <InvitationFooter />
      </div>
      <RSVPDrawer open={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { VoiceConfig, VoiceCategory } from '../types';
import { VOICE_PRESETS } from '../constants';

// Standard Components
import RealGirl from './RealGirl';
import RealMan from './RealMan';
import ChildGirl from './ChildGirl';
import YoungBoy from './YoungBoy';
import Baby from './Baby';
import Cat from './Cat';
import Dog from './Dog';
import Robot from './Robot';
import Cave from './Cave';
import FastRunner from './FastRunner';
import SlowMotion from './SlowMotion';
import Lion from './Lion';
import Angry from './Angry';
import Sad from './Sad';
import Happy from './Happy';
import Ghost from './Ghost';
import Witch from './Witch';
import Pirate from './Pirate';
import Alien from './Alien';
import Astronaut from './Astronaut';
import Dragon from './Dragon';
import Ninja from './Ninja';

// Premium Components
import VelvetAura from './VelvetAura';
import GoldenEcho from './GoldenEcho';
import SilentCrown from './SilentCrown';
import MidnightSoul from './MidnightSoul';
import RoyalWhisper from './RoyalWhisper';
import CrystalVoice from './CrystalVoice';
import ShadowGrace from './ShadowGrace';
import DivineTone from './DivineTone';
import InfiniteCalm from './InfiniteCalm';
import NobleSound from './NobleSound';
import PureResonance from './PureResonance';
import DeepEssence from './DeepEssence';
import SereneFlow from './SereneFlow';
import TrueHarmony from './TrueHarmony';
import EchoLight from './EchoLight';
import DarkVelvet from './DarkVelvet';
import SacredWave from './SacredWave';
import SoftAuthority from './SoftAuthority';
import TimelessVoice from './TimelessVoice';
import CalmDominion from './CalmDominion';
import HiddenPower from './HiddenPower';
import SilverFrequency from './SilverFrequency';
import InnerFlame from './InnerFlame';
import PeacefulDepth from './PeacefulDepth';
import QuietThunder from './QuietThunder';
import GoldenSilence from './GoldenSilence';
import SoulResonance from './SoulResonance';
import EternalWhisper from './EternalWhisper';
import MajesticCalm from './MajesticCalm';
import BalancedEcho from './BalancedEcho';
import DeepTruth from './DeepTruth';
import LucidTone from './LucidTone';
import ShadowHarmony from './ShadowHarmony';
import PureDepth from './PureDepth';
import SoftCommand from './SoftCommand';
import RadiantEcho from './RadiantEcho';
import SilentStrength from './SilentStrength';
import ClearSpirit from './ClearSpirit';
import MysticFlow from './MysticFlow';
import NobleSilence from './NobleSilence';
import CalmInfinity from './CalmInfinity';
import TrueFrequency from './TrueFrequency';
import InnerEcho from './InnerEcho';
import SerenePower from './SerenePower';
import GoldenDepth from './GoldenDepth';
import SoulWhisper from './SoulWhisper';
import QuietMajesty from './QuietMajesty';
import EtherealTone from './EtherealTone';
import DeepSerenity from './DeepSerenity';
import VoiceOfBalance from './VoiceOfBalance';

interface VoiceMatrixProps {
  selectedVoice: VoiceConfig;
  onSelect: (voice: VoiceConfig) => void;
  isPro: boolean;
}

const CATEGORIES: (VoiceCategory | 'All')[] = ['All', 'Human', 'Fantasy', 'Animal', 'Mood', 'Effects', 'Ultra'];

const VoiceMatrix: React.FC<VoiceMatrixProps> = ({ selectedVoice, onSelect, isPro }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<VoiceCategory | 'All'>('All');

  const filteredVoices = useMemo(() => {
    return VOICE_PRESETS.filter(voice => {
      const matchesSearch = voice.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || voice.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const renderIcon = (iconType: string) => {
    const props = { className: "w-24 h-24 group-hover:scale-110 transition-transform duration-500" };
    
    switch(iconType) {
      case 'REAL_GIRL': return <RealGirl {...props} />;
      case 'REAL_MAN': return <RealMan {...props} />;
      case 'CHILD': return <ChildGirl {...props} />;
      case 'BOY': return <YoungBoy {...props} />;
      case 'BABY': return <Baby {...props} />;
      case 'CAT': return <Cat {...props} />;
      case 'DOG': return <Dog {...props} />;
      case 'ROBOT': return <Robot {...props} />;
      case 'CAVE': return <Cave {...props} />;
      case 'FAST': return <FastRunner {...props} />;
      case 'SLOW': return <SlowMotion {...props} />;
      case 'LION': return <Lion {...props} />;
      case 'ANGRY': return <Angry {...props} />;
      case 'SAD': return <Sad {...props} />;
      case 'HAPPY': return <Happy {...props} />;
      case 'GHOST': return <Ghost {...props} />;
      case 'WITCH': return <Witch {...props} />;
      case 'PIRATE': return <Pirate {...props} />;
      case 'ALIEN': return <Alien {...props} />;
      case 'ASTRONAUT': return <Astronaut {...props} />;
      case 'DRAGON': return <Dragon {...props} />;
      case 'NINJA': return <Ninja {...props} />;
      case 'VELVET_AURA': return <VelvetAura {...props} />;
      case 'GOLDEN_ECHO': return <GoldenEcho {...props} />;
      case 'SILENT_CROWN': return <SilentCrown {...props} />;
      case 'MIDNIGHT_SOUL': return <MidnightSoul {...props} />;
      case 'ROYAL_WHISPER': return <RoyalWhisper {...props} />;
      case 'CRYSTAL_VOICE': return <CrystalVoice {...props} />;
      case 'SHADOW_GRACE': return <ShadowGrace {...props} />;
      case 'DIVINE_TONE': return <DivineTone {...props} />;
      case 'INFINITE_CALM': return <InfiniteCalm {...props} />;
      case 'NOBLE_SOUND': return <NobleSound {...props} />;
      case 'PURE_RESONANCE': return <PureResonance {...props} />;
      case 'DEEP_ESSENCE': return <DeepEssence {...props} />;
      case 'SERENE_FLOW': return <SereneFlow {...props} />;
      case 'TRUE_HARMONY': return <TrueHarmony {...props} />;
      case 'ECHO_LIGHT': return <EchoLight {...props} />;
      case 'DARK_VELVET': return <DarkVelvet {...props} />;
      case 'SACRED_WAVE': return <SacredWave {...props} />;
      case 'SOFT_AUTHORITY': return <SoftAuthority {...props} />;
      case 'TIMELESS_VOICE': return <TimelessVoice {...props} />;
      case 'CALM_DOMINION': return <CalmDominion {...props} />;
      case 'HIDDEN_POWER': return <HiddenPower {...props} />;
      case 'SILVER_FREQ': return <SilverFrequency {...props} />;
      case 'INNER_FLAME': return <InnerFlame {...props} />;
      case 'PEACEFUL_DEPTH': return <PeacefulDepth {...props} />;
      case 'QUIET_THUNDER': return <QuietThunder {...props} />;
      case 'GOLDEN_SILENCE': return <GoldenSilence {...props} />;
      case 'SOUL_RESONANCE': return <SoulResonance {...props} />;
      case 'ETERNAL_WHISPER': return <EternalWhisper {...props} />;
      case 'MAJESTIC_CALM': return <MajesticCalm {...props} />;
      case 'BALANCED_ECHO': return <BalancedEcho {...props} />;
      case 'DEEP_TRUTH': return <DeepTruth {...props} />;
      case 'LUCID_TONE': return <LucidTone {...props} />;
      case 'SHADOW_HARMONY': return <ShadowHarmony {...props} />;
      case 'PURE_DEPTH': return <PureDepth {...props} />;
      case 'SOFT_COMMAND': return <SoftCommand {...props} />;
      case 'RADIANT_ECHO': return <RadiantEcho {...props} />;
      case 'SILENT_STRENGTH': return <SilentStrength {...props} />;
      case 'CLEAR_SPIRIT': return <ClearSpirit {...props} />;
      case 'MYSTIC_FLOW': return <MysticFlow {...props} />;
      case 'NOBLE_SILENCE': return <NobleSilence {...props} />;
      case 'CALM_INFINITY': return <CalmInfinity {...props} />;
      case 'TRUE_FREQ': return <TrueFrequency {...props} />;
      case 'INNER_ECHO': return <InnerEcho {...props} />;
      case 'SERENE_POWER': return <SerenePower {...props} />;
      case 'GOLDEN_DEPTH': return <GoldenDepth {...props} />;
      case 'SOUL_WHISPER': return <SoulWhisper {...props} />;
      case 'QUIET_MAJESTY': return <QuietMajesty {...props} />;
      case 'ETHEREAL_TONE': return <EtherealTone {...props} />;
      case 'DEEP_SERENITY': return <DeepSerenity {...props} />;
      case 'VOICE_BALANCE': return <VoiceOfBalance {...props} />;
      default: return <Robot {...props} />;
    }
  };

  const VoiceCard: React.FC<{ voice: VoiceConfig }> = ({ voice }) => (
    <button
      onClick={() => onSelect(voice)}
      className={`group h-48 rounded-[2.5rem] flex flex-col items-center justify-center transition-all relative overflow-hidden ${
        selectedVoice.id === voice.id
          ? 'bg-white shadow-2xl shadow-indigo-100 scale-105 border-2 border-indigo-500'
          : 'bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50'
      }`}
    >
      {voice.isPremium && !isPro && (
        <div className="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      <div className="mb-2">
        {renderIcon(voice.icon)}
      </div>
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-tighter text-slate-900">{voice.name}</p>
        <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">{voice.category}</p>
      </div>
      {selectedVoice.id === voice.id && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500"></div>
      )}
    </button>
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'bg-white text-slate-500 border border-slate-100 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <input 
            type="text"
            placeholder="Search neural masks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-3.5 text-xs font-bold outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-5 top-1/2 -translate-y-1/2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredVoices.map(voice => (
          <VoiceCard key={voice.id} voice={voice} />
        ))}
      </div>

      {filteredVoices.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">No matching neural masks found in the matrix.</p>
        </div>
      )}
    </div>
  );
};

export default VoiceMatrix;

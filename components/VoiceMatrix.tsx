
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

  const standardVoices = useMemo(() => {
    return VOICE_PRESETS.filter(voice => {
      const isFree = !voice.isPremium;
      const matchesSearch = voice.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || voice.category === activeCategory;
      return isFree && matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const premiumVoices = useMemo(() => {
    return VOICE_PRESETS.filter(voice => {
      const isPremium = voice.isPremium;
      const matchesSearch = voice.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || voice.category === activeCategory;
      return isPremium && matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const renderIcon = (iconType: string) => {
    const props = { className: "w-24 h-24 group-hover:scale-110 transition-transform duration-500" };
    
    switch(iconType) {
      // Standard
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

      // Premium
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

  const VoiceCard = ({ voice }: { voice: VoiceConfig }) => (
    <button
      onClick={() => onSelect(voice)}
      className={`group h-48 rounded-[2.5rem] flex flex-col items-center justify-center transition-all relative overflow-hidden ${
        selectedVoice.id === voice.id
          ? 'bg-white shadow-2xl shadow-indigo-100 scale-105 border-2 border-indigo-500'
          : 'bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50'
      }`}
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 w-full overflow-hidden relative flex items-center justify-center bg-slate-50/50">
          {renderIcon(voice.icon)}
          {voice.isPremium && (
            <div className="absolute top-4 left-4 z-30">
              <div className="bg-amber-400 text-amber-950 p-1.5 rounded-lg shadow-lg animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V18H19V19Z" />
                </svg>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
        <div className="p-3 text-center bg-white border-t border-slate-50">
          <span className={`text-[10px] font-black uppercase tracking-tight ${selectedVoice.id === voice.id ? 'text-indigo-600' : 'text-slate-900'}`}>
            {voice.name}
          </span>
          <p className={`text-[8px] font-bold uppercase tracking-widest truncate mt-1 text-slate-400`}>
            {voice.category}
          </p>
        </div>
      </div>
      {selectedVoice.id === voice.id && (
        <div className="absolute top-3 right-3 w-2 h-2 bg-indigo-500 rounded-full animate-pulse z-20"></div>
      )}
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto mt-24 px-6 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-2">Neural Identity Hub</h3>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Select your transformation core</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 flex-1 max-w-2xl">
          <input 
            type="text" 
            placeholder="Search all identities..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-white border border-slate-200 rounded-2xl px-6 py-3 text-xs font-bold focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all shadow-sm"
          />
          <div className="flex bg-slate-100 p-1.5 rounded-2xl overflow-x-auto whitespace-nowrap scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Standard Identity Section */}
      <div className="mb-20">
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-0.5 flex-1 bg-slate-100"></div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Standard Identities</h4>
          <div className="h-0.5 flex-1 bg-slate-100"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {standardVoices.map((voice) => (
            <VoiceCard key={voice.id} voice={voice} />
          ))}
        </div>
      </div>

      {/* Premium Identity Section */}
      <div className="mb-20">
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-0.5 flex-1 bg-amber-100"></div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Premium Neural Masks</h4>
          <div className="h-0.5 flex-1 bg-amber-100"></div>
        </div>
        {premiumVoices.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {premiumVoices.map((voice) => (
              <VoiceCard key={voice.id} voice={voice} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-slate-100 rounded-[3rem] bg-slate-50/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">Identity Expansion coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceMatrix;

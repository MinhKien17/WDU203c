import React from 'react';

interface UISketchProps {
  title: string;
}

export const UISketch: React.FC<UISketchProps> = ({ title }) => {
  const renderSketch = () => {
    switch (title) {
      // Initial Sketches
      case 'The "Scrolling Monolith"':
        return (
          <div className="w-full h-full border-2 border-black p-2 overflow-hidden">
            <p className="text-center font-bold text-xl">Floor 9821</p>
            <div className="text-center leading-tight mt-1 text-gray-400">
              <p>Floor 9820</p>
              <p>Floor 9819</p>
              <p>Floor 9818</p>
              <p>Floor 9817</p>
              <p>Floor 9816</p>
            </div>
          </div>
        );
      case 'Numeric Keypad Kiosk':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-1">
             <div className="border-2 border-black w-2/3 text-center p-1 mb-1 text-xl">
                <span>8542</span>
             </div>
            <div className="grid grid-cols-3 gap-1 w-2/3">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border-2 border-black aspect-square flex items-center justify-center text-lg">{i + 1}</div>
              ))}
               <div className="border-2 border-black aspect-square flex items-center justify-center text-lg col-start-2">0</div>
            </div>
          </div>
        );
      case 'Voice Command Array':
          return (
             <div className="w-full h-full flex flex-col items-center justify-center text-center">
                 <i className="fa-solid fa-microphone-lines text-6xl"></i>
                 <p className="mt-2 text-xl">"Floor 9200"</p>
                 <p className="text-lg text-gray-600">(Confirmed)</p>
             </div>
          )
      case 'Mobile Boarding Pass':
          return (
             <div className="w-3/5 h-full border-[3px] border-black rounded-2xl flex flex-col items-center justify-around p-2">
                 <p className="text-lg font-bold">Elevator C</p>
                 <i className="fa-solid fa-qrcode text-6xl"></i>
                 <p className="text-xl">Floor: 4502</p>
             </div>
          )
      case 'The "Sky-Lobby" System':
          return (
            <div className="w-full h-full p-1">
                <p className="text-center font-bold text-lg mb-1">Select Zone</p>
                <div className="grid grid-cols-5 gap-1">
                    {['1k', '2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', '10k'].map(zone => (
                        <div key={zone} className={`border-2 border-black text-center text-sm p-1 ${zone === '6k' ? 'bg-black text-white' : ''}`}>{zone}</div>
                    ))}
                </div>
            </div>
          )
      case 'Biometric Preset Scanning':
          return (
             <div className="w-full h-full flex flex-col items-center justify-center text-center">
                 <i className="fa-solid fa-eye text-6xl mb-2"></i>
                 <div className="border-2 border-black p-2 text-lg">
                     <p>Welcome, Sarah</p>
                     <p>Floor: 4502</p>
                 </div>
             </div>
          )
      case 'Smartwatch "Crown" Dial':
          return (
             <div className="w-2/3 h-full rounded-full border-[3px] border-black flex items-center justify-center relative">
                 <i className="fa-solid fa-gear text-3xl absolute -right-2 top-1/3 -translate-y-1/2"></i>
                 <p className="text-4xl font-bold">7500</p>
             </div>
          )
      case 'Zoomable Map Interface':
          return (
            <div className="w-full h-full border-2 border-black p-1 relative">
                <div className="border border-black h-1/3 w-full p-1">
                    <div className="border border-black h-full w-1/4 bg-gray-200 flex items-center justify-center text-xs">
                        Lobby
                    </div>
                </div>
                 <div className="border border-black h-1/3 w-full mt-1 p-1">
                    <div className="border border-black h-full w-1/4 ml-auto bg-black text-white flex items-center justify-center text-xs">
                        Floor 4k
                    </div>
                 </div>
                 <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white -translate-x-1/2 -translate-y-1/2" title="Destination"></div>
            </div>
          )
      case 'Smart Glasses AR Overlay':
          return (
            <div className="w-full h-full flex items-center justify-center relative">
                 <i className="fa-solid fa-glasses text-8xl text-gray-300"></i>
                 <div className="absolute grid grid-cols-3 gap-2 w-1/2 bg-white/70 p-2 border border-black">
                     {[...Array(9)].map((_, i) => (
                        <div key={i} className="border border-black aspect-square"></div>
                     ))}
                 </div>
            </div>
          )
      case 'Destination Zone Tickets':
          return (
             <div className="w-4/5 h-4/5 border-2 border-black flex flex-col justify-between p-2 relative">
                <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#fdfbf7] border-r-2 border-b-2 border-black -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#fdfbf7] border-l-2 border-t-2 border-black translate-x-1/2 translate-y-1/2"></div>
                <p className="text-center font-bold">Admit One</p>
                <p className="text-5xl text-center font-bold">8000s</p>
                <p className="text-center text-sm">-- Please proceed to Area C --</p>
             </div>
          );
      
      // Refined Concepts
      case 'The Personal Dial App':
        return (
            <div className="w-3/5 h-full border-[3px] border-black rounded-2xl flex items-center justify-center p-2">
                <div className="w-full aspect-square rounded-full border-2 border-black flex items-center justify-center relative">
                    <p className="text-2xl font-bold">7500</p>
                    <div className="absolute w-full h-full rounded-full border-2 border-black scale-75"></div>
                </div>
            </div>
        );
      case 'The "Airport Gate" Lobby':
        return (
            <div className="w-full h-full text-xs text-center border-2 border-black p-1">
                <div className="grid grid-cols-3 font-bold border-b-2 border-black">
                    <p>ZONE</p><p>FLOORS</p><p>SHAFT</p>
                </div>
                <div className="grid grid-cols-3 mt-1 bg-black text-white">
                    <p>7</p><p>7000-7999</p><p>D</p>
                </div>
                <div className="grid grid-cols-3 mt-1">
                    <p>8</p><p>8000-8999</p><p>A</p>
                </div>
            </div>
        );
      case 'NFC "Tap-and-Confirm"':
        return (
            <div className="w-full h-full flex items-center justify-center gap-4">
                <div className="w-1/3 h-2/3 border-[3px] border-black rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-mobile-screen-button text-4xl"></i>
                </div>
                <i className="fa-solid fa-arrow-right-long text-2xl"></i>
                <div className="w-1/3 h-1/2 border-2 border-black flex items-center justify-center">
                    <i className="fa-brands fa-nfc-symbol text-4xl"></i>
                </div>
            </div>
        );
      case 'Vertical Subway Map':
        return (
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-2 h-full bg-black relative">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="absolute left-1/2 w-4 h-4 bg-white border-2 border-black rounded-full -translate-x-1/2" style={{top: `${i * 25}%`}}></div>
                    ))}
                    <div className="absolute left-1/2 w-6 h-6 bg-blue-500 border-2 border-black rounded-full -translate-x-1/2" style={{top: '60%'}}></div>
                </div>
            </div>
        );
      case 'Contextual Search Kiosk':
        return (
            <div className="w-full h-full border-2 border-black p-2 flex flex-col">
                <div className="border-2 border-black p-1 flex items-center">
                    <i className="fa-solid fa-magnifying-glass mr-2"></i>
                    <span>Marketing Dept</span>
                </div>
                <div className="border-2 border-black p-2 mt-2 flex-grow text-center">
                    <p className="font-bold text-lg">Floor: 9540</p>
                    <p>Shaft: B</p>
                </div>
            </div>
        );
      case 'Haptic Wearable Guidance':
        return (
             <div className="w-2/3 h-2/3 rounded-xl border-[3px] border-black flex flex-col items-center justify-center text-center p-2">
                 <p className="text-lg">Work?</p>
                 <p className="font-bold text-2xl">(F9500)</p>
                 <div className="flex gap-2 mt-2">
                     <div className="border-2 border-black px-4 py-1 bg-black text-white">YES</div>
                     <div className="border-2 border-black px-4 py-1">NO</div>
                 </div>
             </div>
        );
      case 'Two-Stage "Keypad & Swipe"':
        return (
            <div className="w-full h-full flex flex-col items-center justify-center p-1">
                <div className="w-full h-4 bg-gray-200 border-2 border-black relative mb-2">
                    <div className="w-4 h-6 bg-black absolute top-1/2 -translate-y-1/2" style={{left: '80%'}}></div>
                </div>
                 <div className="grid grid-cols-3 gap-1 w-2/3 mt-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border-2 border-black aspect-square"></div>
                  ))}
                </div>
            </div>
        );
      case 'In-Car Personal Screens':
        return (
            <div className="w-4/5 h-full border-[3px] border-black rounded-lg p-2 text-sm">
                <p>ETA: 12 min</p>
                <p>ALT: 2.1 km</p>
                <div className="w-full h-3 bg-gray-200 border border-black mt-2">
                    <div className="w-2/3 h-full bg-black"></div>
                </div>
            </div>
        );
      case 'The "Gesture Wall"':
        return (
            <div className="w-full h-full flex flex-col items-center justify-between text-center">
                <i className="fa-solid fa-hand-paper text-6xl"></i>
                <div className="border-2 border-dashed border-black w-full p-2 text-sm">
                    Commit Zone
                </div>
            </div>
        );
      case 'Audio-Centric Status':
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <i className="fa-solid fa-volume-high text-6xl"></i>
                <p className="mt-2 text-lg">CHIME:</p>
                <p className="text-xl font-bold">Zone 5000</p>
            </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full h-full flex items-center justify-center">{renderSketch()}</div>;
};

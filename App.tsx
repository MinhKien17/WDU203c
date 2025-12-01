import React, { useState } from 'react';
import { INITIAL_SKETCHES_CONCEPTS, REFINED_CONCEPTS } from './constants';
import { ConceptCard } from './components/ConceptCard';

// Content for Tab 1
const InitialSketches: React.FC = () => (
  <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {INITIAL_SKETCHES_CONCEPTS.map((concept) => (
      <ConceptCard key={concept.title} concept={concept} />
    ))}
  </div>
);

// Content for Tab 2
const CriteriaConstraints: React.FC = () => (
    <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
        <div className="sketch-box bg-white border-[3px] border-black p-8 sm:p-12 shadow-hard">
            <ul className="space-y-8 text-xl">
                <li className="flex items-start">
                    <span className="font-bold text-3xl mr-4">1.</span>
                    <div>
                        <h3 className="font-bold text-2xl">Constraint: Zero In-Car Manual Entry.</h3>
                        <p className="mt-1 text-gray-800 text-lg">Reason: Too crowded for controls. Destination must be set before entering.</p>
                    </div>
                </li>
                 <li className="flex items-start">
                    <span className="font-bold text-3xl mr-4">2.</span>
                    <div>
                        <h3 className="font-bold text-2xl">Criterion: Macro-to-Micro Input.</h3>
                        <p className="mt-1 text-gray-800 text-lg">Reason: Scrolling 10,000 floors is too slow. Users need to select a "Zone" first, then a specific floor.</p>
                    </div>
                </li>
                 <li className="flex items-start">
                    <span className="font-bold text-3xl mr-4">3.</span>
                    <div>
                        <h3 className="font-bold text-2xl">Criterion: Anxiety-Reducing Status.</h3>
                        <p className="mt-1 text-gray-800 text-lg">Reason: 30-minute ride needs a progress bar/timeline, not just a number.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

// Content for Tab 3
const RefinedConcepts: React.FC = () => (
  <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {REFINED_CONCEPTS.map((concept) => (
      <ConceptCard key={concept.title} concept={concept} />
    ))}
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sketches');

  const tabs = [
    { id: 'sketches', label: 'Initial Sketches' },
    { id: 'criteria', label: 'Criteria & Constraints' },
    { id: 'refined', label: 'Refined Concepts (Ver 2)' },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] font-sans text-black overflow-x-hidden">
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black">
            10,000-Floor Elevator
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl text-black">
            A UX Case Study: Initial Design Sketches
          </p>
        </header>

        <nav className="mt-16 flex justify-center gap-2 sm:gap-4 flex-wrap">
            {tabs.map(tab => {
                const isActive = activeTab === tab.id;
                return (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`sketch-box text-lg sm:text-xl border-[3px] border-black px-4 py-2 sm:px-6 sm:py-3 font-bold transition-all duration-200 ease-in-out ${
                            isActive 
                            ? 'bg-white shadow-none translate-x-[5px] translate-y-[5px]' 
                            : 'bg-white shadow-hard hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]'
                        }`}
                    >
                        {tab.label}
                    </button>
                )
            })}
        </nav>

        <div>
            {activeTab === 'sketches' && <InitialSketches />}
            {activeTab === 'criteria' && <CriteriaConstraints />}
            {activeTab === 'refined' && <RefinedConcepts />}
        </div>
        
        <footer className="text-center mt-20 text-black text-lg">
            <p>A "Pencil Sketch" exploration of UX concepts.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
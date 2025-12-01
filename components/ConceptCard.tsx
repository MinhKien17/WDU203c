import React from 'react';
import { DesignConcept } from '../types';
import { UISketch } from './UISketch';

interface ConceptCardProps {
  concept: DesignConcept;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ concept }) => {
  return (
    <div className="sketch-box bg-white border-[3px] border-black p-6 flex flex-col h-full shadow-hard transition-all duration-200 ease-in-out hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]">
      <div className="sketch-box w-full h-48 mb-6 border-2 border-black flex items-center justify-center p-2">
        <UISketch title={concept.title} />
      </div>

      <div className="flex-grow">
        <h3 className="text-3xl font-bold text-black mb-3">{concept.title}</h3>
        <p className="text-black text-lg mb-6">
          {concept.description}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t-2 border-dashed border-black">
        <p className="text-black text-lg">
          <span className="font-bold">Status:</span> {concept.status}
        </p>
      </div>
    </div>
  );
};

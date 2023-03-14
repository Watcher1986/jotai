import { atom, useAtom } from 'jotai';

import { Point, ShapeAtom } from '../../types/points';
import { createShapeAtom, SvgShape } from './SvgShape';
import { selecteAtom } from './selection';

const shapeAtomsAtom = atom<ShapeAtom[]>([]);

export const addShapeAtom = atom(
  null,
  (_get, set, update: readonly Point[]) => {
    const shapeAtom = createShapeAtom(update);
    set(shapeAtomsAtom, (prev) => [...prev, shapeAtom]);
    set(selecteAtom, shapeAtom);
  }
);

export const SvgShapes = () => {
  const [shapeAtoms] = useAtom(shapeAtomsAtom);
  return (
    <g>
      {shapeAtoms.map((shape) => (
        <SvgShape key={`${shape}`} shapeAtom={shape} />
      ))}
    </g>
  );
};

import { atom } from 'jotai';

import { ShapeAtom } from '../../types/points';
import { saveHistoryAtom } from './history';

const selectedShapeAtomAtom = atom<ShapeAtom | null>(null);

export const selecteAtom = atom(null, (_get, set, shapeAtom: ShapeAtom) => {
  set(selectedShapeAtomAtom, shapeAtom);
});

export const selectedAtomCreator = (shapeAtom: ShapeAtom) => {
  const selectedAtom = atom((get) => shapeAtom === get(selectedShapeAtomAtom));
  return selectedAtom;
};

export const setColorAtom = atom(
  (get) => {
    const selectedShapeAtom = get(selectedShapeAtomAtom);
    if (selectedShapeAtom) {
      return get(selectedShapeAtom).color || '';
    }
    return null;
  },
  (get, set, color: string) => {
    const selectedShapeAtom = get(selectedShapeAtomAtom);
    if (selectedShapeAtom) {
      set(saveHistoryAtom, null);
      set(selectedShapeAtom, (prev) => ({ ...prev, color }));
    }
  }
);

export const selectedAtom = atom((get) => get(selectedShapeAtomAtom));

export const unselectAtom = atom(null, (_get, set, _update) => {
  set(selectedShapeAtomAtom, null);
});

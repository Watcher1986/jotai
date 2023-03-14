import { atom, SetStateAction } from 'jotai';

import { ShapeAtomValue, ShapeAtom } from '../../types/points';

const internalShapeAtomsAtom = atom<ShapeAtom[]>([]);

const historyAtom = atom<ShapeAtomValue[][]>([]);

export const saveHistoryAtom = atom(null, (get, set, _update) => {
  const shapes = get(internalShapeAtomsAtom).map((shapeAtom) => get(shapeAtom));
  set(historyAtom, (prev) => [shapes, ...prev]);
});

export const shapeAtomsAtom = atom(
  (get) => get(internalShapeAtomsAtom),
  (_get, set, update: SetStateAction<ShapeAtom[]>) => {
    set(saveHistoryAtom, null);
    set(internalShapeAtomsAtom, update);
  }
);

export const undoAtom = atom(
  (get) => {
    const hasHistory = get(historyAtom).length > 0;
    return hasHistory;
  },
  (get, set, _update) => {
    const history = get(historyAtom);
    if (history.length > 0) {
      const [shapes, ...rest] = history;
      set(internalShapeAtomsAtom, (prev) =>
        shapes.map((shape, idx) =>
          get(prev[idx]) === shape ? prev[idx] : atom(shape)
        )
      );
      set(historyAtom, rest);
    }
  }
);

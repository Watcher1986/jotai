import { atom, useAtom } from 'jotai';

import { Point } from '../../types/points';
import { SvgShapes } from './SvgShapes';
import { addDotAtom, commitDotsAtom, SvgDots } from './SvgDots';

const drawingAtom = atom(false);

const handleMouseDownAtom = atom(null, (get, set) => set(drawingAtom, true));

const handleMouseUpAtom = atom(null, (get, set) => {
  set(drawingAtom, false);
  set(commitDotsAtom);
});

const handleMouseMoveAtom = atom(null, (get, set, update: Point) => {
  if (get(drawingAtom)) {
    set(addDotAtom, update);
  }
});

const SvgRoot = () => {
  const [, handleMouseMove] = useAtom(handleMouseMoveAtom);
  const [, handleMouseDown] = useAtom(handleMouseDownAtom);
  const [, handleMouseUp] = useAtom(handleMouseUpAtom);

  return (
    <svg
      width='200'
      height='200'
      viewBox='0 0 200 200'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => {
        handleMouseMove([e.clientX, e.clientY]);
      }}
    >
      <rect width='200' height='200' fill='#eee' />
      <SvgShapes />
      <SvgDots />
    </svg>
  );
};

export default SvgRoot;
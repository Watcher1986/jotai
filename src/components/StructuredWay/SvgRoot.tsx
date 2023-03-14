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
      width='300'
      height='150'
      viewBox='0 0 300 150'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => {
        const { x, y } = e.currentTarget.getBoundingClientRect();
        handleMouseMove([e.clientX - x, e.clientY - y]);
      }}
    >
      <rect width='300' height='300' fill='#eee' />
      <SvgShapes />
      <SvgDots />
    </svg>
  );
};

export default SvgRoot;

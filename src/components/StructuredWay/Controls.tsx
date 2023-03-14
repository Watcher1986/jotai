import { useAtom } from 'jotai';

import { setColorAtom } from './selection';
import { deleteSelectedShapeAtom } from './SvgShapes';
import { undoAtom } from './history';

import './styles.css';

const colors = [
  { value: '', label: 'Default' },
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
  { value: 'yellow', label: 'Yellow' },
];

export const Controls = () => {
  const [currentColor, setColor] = useAtom(setColorAtom);
  const [isSelected, deleteShape] = useAtom(deleteSelectedShapeAtom);
  const [hasHistory, undo] = useAtom(undoAtom);

  return (
    <>
      <div className='btns-box'>
        <span>Color:</span>
        {colors.map(({ value, label }) => (
          <button
            key={label}
            onClick={() => setColor(value)}
            disabled={currentColor === null || currentColor === value}
          >
            {label}
          </button>
        ))}
      </div>
      <hr />
      <div className='btns-box'>
        <button
          className='del-btn'
          disabled={!isSelected}
          onClick={deleteShape}
        >
          <span style={{ display: 'table' }}>Delete</span>
        </button>
        <button className='undo-btn' disabled={!hasHistory} onClick={undo}>
          <span style={{ display: 'table' }}>Undo</span>
        </button>
      </div>
    </>
  );
};

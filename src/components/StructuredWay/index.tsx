import { Provider } from 'jotai';

import SvgRoot from './SvgRoot';
import { Controls } from './Controls';

const SvgDrawingPanel = () => (
  <>
    {/* To isolate the state of each SVG canvas we wrapped them in Provider API provided by Jotai)  */}
    <Provider>
      <SvgRoot />
      <Controls />
    </Provider>
    <hr />
    <Provider>
      <SvgRoot />
      <Controls />
    </Provider>
  </>
);

export default SvgDrawingPanel;

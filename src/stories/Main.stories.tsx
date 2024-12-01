import { useRef, useState } from 'react';
import { SizerDiv } from '../app';


export default {
  title: 'SizerDiv',
  parameters: {
    layout: 'fullscreen',
  },
};


export function DefaultBlockLayout () {
  const ref = useRef<HTMLDivElement>(null);
  const [fullWidth, setFullWidth] = useState(true);

  return (
    <div style={{
      position: 'absolute',
      inset: '0',
      padding: '1em',
      background: 'tomato',
    }}>
      <SizerDiv
        style={{
          padding: '1em',
          maxWidth: fullWidth ? '100%' : '50%',
          transition: 'all 200ms',
          background: 'white',
        }}
        ref={ref}
        render={({width, height}) => (
          <div>
              My size is: {width}, {height}
          </div>
        )}
      />

      <br />

      <button onClick={() => {
        setFullWidth(!fullWidth);
      }}>
        Change size
      </button>
    </div>
  );
}

export function AbsolutePositioned () {
  const ref = useRef<HTMLDivElement>(null);
  const [fullWidth, setFullWidth] = useState(true);

  return (
    <div style={{
      position: 'absolute',
      inset: '0',
      padding: '1em',
      background: 'dodgerblue',
    }}>
      <SizerDiv
        style={{
          position: 'absolute',
          inset: '1em',
          padding: '1em',
          background: 'white',
        }}
        ref={ref}
        render={({width, height}) => (
          <div>
              My size is: {width}, {height}
          </div>
        )}
      />

      <br />

      <button onClick={() => {
        setFullWidth(!fullWidth);
      }}>
        Change size
      </button>
    </div>
  );
}

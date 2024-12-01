import { forwardRef, useEffect, useImperativeHandle, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';

export interface ISizerDivProps extends HTMLAttributes<HTMLDivElement> {
  render: (renderProps: ISizerDivRenderProps) => ReactNode;
}
export interface ISizerDivRenderProps {
  width: number;
  height: number;
}

/**
 *
 * @example
 * ```tsx
 * <SizerDiv render={({width, height}) => (
 *     <div>
 *         My container size is: {width}, {height}
 *     </div>
 * ) />
 * ```
 */
export const SizerDiv = forwardRef<HTMLDivElement, ISizerDivProps>(({
  render,
  ...divProps
}, outerRef) => {
  const innerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(outerRef, () => innerRef.current, []);

  const [size, setSize] = useState<{width: number; height: number}>();
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      // entries is an array for each observed element. We only have one.
      const {borderBoxSize} = entries[0];
      // borderBoxSize is an array of sizes for elements with fragments like columns. We don't support that; just use the first size.
      const size = borderBoxSize[0];
      setSize({
        width: size.inlineSize,
        height: size.blockSize,
      });
    });
    resizeObserver.observe(innerRef.current!);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      {...divProps}
      ref={innerRef}
    >
      {size ? (
        render(size)
      ) : undefined}
    </div>
  );
});

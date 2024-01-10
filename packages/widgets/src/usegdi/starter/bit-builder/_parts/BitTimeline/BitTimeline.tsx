import { IBits } from '@gdi/store-iso';
import { Icon, useMeasureOnce } from '@gdi/ui';
import BitTimelineItem from '../BitTimelineItem/BitTimelineItem';
import { Icons, Slide, Wrapper } from './BitTimeline.style';

export type BitTimelineProps = {
  bits: IBits[];
  bitId: string;
  callbacks: {
    onBit: (verb: string, bitId: string, data?: Json) => void;
    onToolbox: (commandId: string) => void;
  };
};

export function BitTimeline(props: BitTimelineProps) {
  const { bits, bitId, callbacks } = props;
  const [ref, { width }] = useMeasureOnce();

  function onStop(bitId: string, data: Json) {
    callbacks.onBit('resize', bitId, { ...data, width });
  }

  function renderBit(bit: Json) {
    return (
      <BitTimelineItem
        key={bit.id}
        bit={bit}
        onStop={onStop}
        onClick={() => callbacks.onBit('focus', bit.id, {})}
        onDelete={() => callbacks.onBit('delete', bit.id, {})}
        isSelected={bitId === bit.id}
        totalWidth={width - 32}
      />
    );
  }

  function renderBits() {
    return bits.map((bit: Json) => renderBit(bit));
  }

  const style: React.CSSProperties = {
    maxWidth: width - 32,
  };

  return (
    <Wrapper ref={ref} className='BitTimeline-wrapper' data-testid='BitTimeline-wrapper'>
      <Icons onClick={() => callbacks.onToolbox('bits')}>
        <Icon className='icon' name='transition_slide' />
      </Icons>
      <Slide style={style}>{renderBits()}</Slide>
    </Wrapper>
  );
}

export default BitTimeline;

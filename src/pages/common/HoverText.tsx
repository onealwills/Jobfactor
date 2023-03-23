import { useRef } from 'react';
import useHover from '../../utils/hooks/useHover';

export default function HoverText() {
    const hoverRef = useRef(null);
    const isHover = useHover(hoverRef);

    return (
        <div ref={hoverRef}>
            {`The current div is ${isHover ? `hovered` : `unhovered`}`}
        </div>
    );
}

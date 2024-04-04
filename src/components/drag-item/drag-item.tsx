import './drag-item.css';
import { useDrag } from '../../context/drag-context';

type Props = {
    children: React.ReactNode;
    index: number;
};

export const DragItem = ({ children, index }: Props) => {
    const { dragOverIndex, setDragIndex } = useDrag();
    return (
        <div
            className={`drag-item ${
                dragOverIndex === index ? 'drag-item-dragged-over' : ''
            }`}
            data-index={index}
            draggable={true}
            onDragStart={() => setDragIndex(index)}
        >
            {children}
        </div>
    );
};

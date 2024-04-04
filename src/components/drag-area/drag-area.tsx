import './drag-area.css';
import { useDrag } from '../../context/drag-context';
import { User } from '../../types/user';
import { useEffect, useState, useRef } from 'react';

type Props = {
    items: Array<User>;
    children: React.ReactNode;
    onChange: (items: Array<User>) => void;
};

export const DragArea = ({ children, items, onChange }: Props) => {
    const [dragItems, setDragItems] = useState(items);
    const { dragIndex, dragOverIndex, setDragOverIndex } = useDrag();

    const area = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDragItems(items);
    }, [items]);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const dragOverElement = e.target as HTMLElement;
        const index = dragOverElement.dataset.index;
        if (index) {
            setDragOverIndex(+index);
        }
    };

    const handleDrop = () => {
        // if (!dragIndex) return;
        const dragItemsCopy = [...dragItems];
        const draggedItem = dragItemsCopy[dragIndex!];
        dragItemsCopy.splice(dragIndex!, 1);
        // if (!dragOverIndex) return;
        dragItemsCopy.splice(dragOverIndex!, 0, draggedItem);
        onChange(dragItemsCopy);
        setDragOverIndex(undefined);
    };
    return (
        <div
            ref={area}
            className="drag-area"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {children}
        </div>
    );
};

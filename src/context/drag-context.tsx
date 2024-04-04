import { createContext, useState, useContext, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

type DragContextType = {
    dragIndex: number | undefined;
    dragOverIndex: number | undefined;
    setDragIndex: (id: number) => void;
    setDragOverIndex: (id: number | undefined) => void;
};

const DragContext = createContext<DragContextType>({
    dragIndex: undefined,
    dragOverIndex: undefined,
    setDragIndex: () => {},
    setDragOverIndex: () => {},
});

export const DragDropProvider = ({ children }: Props) => {
    const [dragIndex, setDragIndex] = useState<number>();
    const [dragOverIndex, setDragOverIndex] = useState<number>();

    return (
        <DragContext.Provider
            value={{ dragIndex, dragOverIndex, setDragIndex, setDragOverIndex }}
        >
            {children}
        </DragContext.Provider>
    );
};

export const useDrag = () => useContext(DragContext);

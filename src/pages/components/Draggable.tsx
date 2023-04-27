import React, {ReactNode} from 'react';
import {useDraggable} from '@dnd-kit/core';
import {useSortable} from "@dnd-kit/sortable";
import {Box} from "grommet";

export function Draggable({id, children}: {id: string, children: ReactNode}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: id});
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    return (
        <Box width="50px" height="50px" margin="z" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </Box>
    );
}
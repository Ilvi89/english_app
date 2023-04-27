import React, {ReactNode} from 'react';
import {useDroppable} from '@dnd-kit/core';
import {Box} from "grommet";

export  function Droppable({children, id}: {children?: ReactNode, id: string}) {
    const {isOver, setNodeRef} = useDroppable({
        id: id,
    });
    const style = {
        color: isOver ? 'green' : undefined,
        backgroundColor: "red",
    };


    return (
        <Box height={{min: "50px"}} margin="5px" ref={setNodeRef} style={style} direction="row">
            {children}
        </Box>
    );
}
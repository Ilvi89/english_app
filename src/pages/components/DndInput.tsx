import {useState} from "react";
import {DndContext, UniqueIdentifier} from "@dnd-kit/core";
import {Draggable} from "./Draggable";
import {SortableContext} from "@dnd-kit/sortable";
import {Box} from "grommet";
import {Droppable} from "./Droppable";

export const DndInput = ({onChange}: { onChange: (value: string) => void }) => {
    const [draggables, setDraggables] = useState([
        {id: "123", text: "Drag me 1"},
        {id: "234", text: "Drag me 2"},
        {id: "345", text: "Drag me 3"},
    ])

    const getIndex = (id: string) => draggables.indexOf(draggables.find(value => value.id === id) || {id: "123", text: "123"});
    const getPosition = (id: string) => getIndex(id) + 1;

    const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
    const draggable = (id: string) => {
        let d = draggables.find(value => value.id === id)
        if (d === undefined) return
        return (<Draggable id={id} key={id}>{d.text}</Draggable>)
    }


    return (
        <DndContext
            onDragStart={({active}) => {
                setActiveId(active.id);
            }}

            onDragEnd={({active, over}) => {
                const activeIndex = draggables
                    .indexOf(draggables.find(value => value.id === active.id) || {id: "1", text: ""});
                const overIndex = draggables
                    .indexOf(draggables.find(value => value.id === over?.id) || {id: "1", text: ""});
                console.log(activeIndex, overIndex)
                if (activeIndex !== overIndex) {
                    setDraggables((items) => ({
                        ...items,
                        // ...arrayMove(items, activeIndex, overIndex)
                    }));
                }
            }}
        >
            <SortableContext items={draggables}>
                <Box direction="column">
                    <Box direction="row" background="#72aed3">
                        <Droppable key={"from"} id={"from"}>
                            {draggables.map(d => draggable(d.id))}
                        </Droppable>
                    </Box>


                    <Box direction="row" background="#33aed3" margin={{top: "40px"}}>
                        <Droppable key={"to"} id={"to"}>
                            {/*{parent === id ? draggable(id) : "Drop here" + id}*/}
                        </Droppable>
                    </Box>
                </Box>
            </SortableContext>

        </DndContext>
    )
}
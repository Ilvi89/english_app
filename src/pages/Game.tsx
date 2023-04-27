import {Box, Button, Carousel, Text} from "grommet";
import {useLocation} from "react-router-dom";
import {getLesson} from "../services/getData";
import MakeUpWord from "./games/MakeUpWord";
import {useState} from "react";

export const Game = (props: {}) => {
    const {state} = useLocation();
    const [score, setScore] = useState(0)
    const [activeSlide, setActiveSlide] = useState(0);

    const data = getLesson(state.lessonId)

    const subAnswer =(res: boolean) => {
        setScore(prevState => res ? prevState + 1 : prevState - 1)
        setActiveSlide(activeSlide + 1)
    }
    return (<Box>
        <Text size={"large"}>GAME {data?.id}, {data?.type}</Text>
        <Carousel activeChild={activeSlide} onChild={setActiveSlide}>
            {data?.type === "MakeUpWord" ?
                data.tasks.map(value => <MakeUpWord
                    question={value.question}
                    rightAnswer={value.rightAnswer}
                    onSubmit={subAnswer}/>) :
                data?.tasks.map(value => <MakeUpWord
                    question={value.question}
                    rightAnswer={value.rightAnswer}
                    onSubmit={subAnswer}/>)
            }
            <Button
                label="Get total points"
                primary
                onClick={() => alert(score)}/>
        </Carousel>



    </Box>)
}
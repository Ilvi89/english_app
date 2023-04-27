import {
    Box,
    Text,
    Card,
    CardHeader,
    Image,
    CardBody,
    Stack,
    Avatar,
    Heading,
    List,
    Grid,
    ResponsiveContext
} from "grommet"

import {UserCard} from "./components/UserCard";
import {useContext} from "react";
import {redirect, useNavigate} from "react-router-dom";
import {getLessons} from "../services/getData";



export const User = () => {

    const data = getLessons()
    const size = useContext(ResponsiveContext);

    return (
        <Box direction="row-responsive" width="100%" gap="medium">
            <UserCard></UserCard>
            <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small" width={"100%"}>
                {data.map((value, index) => <PackCard
                    packName={value.packName}
                    packGameType={value.game}
                    id={index.toString()}/>)}
            </Grid>
        </Box>
    )
}

const PackCard = ({packName, packGameType, id} : {packName: string, packGameType: string, id: string}) => {
    const navigate = useNavigate();
    const handleOnClick = () => navigate(getPath(), {state: {lessonId: id}});


    const getPath = () =>{

        switch (packGameType) {
            case "ChooseWord": return '/choose-word'
            case "MakeUpWord": return '/make-up-word'
            default: return "/404"
        }
    }
    return (
        <Card
            onClick={handleOnClick}>
            <Heading>{packName || "..."}</Heading>
        </Card>
    )
}
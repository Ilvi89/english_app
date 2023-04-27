import {Avatar, Box, Card, CardBody, CardHeader, Image, List, ResponsiveContext, Stack, Text} from "grommet";
import ava from "../../ava.jpg";
import {useContext} from "react";


type userType = "STUDENT" | "TEACHER"


export const UserCard = ({userType: userType = "STUDENT"}) => {


    const size = useContext(ResponsiveContext);
    return (
        <Card width={size !== 'small' ? 'medium' : '100%'}  >
            <CardHeader height="100px">
                <Stack anchor="right" fill={true}>
                    <Image
                        fill={true}
                        src="https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg"
                        fit="cover"
                    />
                    <Avatar src={ava} size="large" margin={{horizontal: "15px"}}/>
                </Stack>
            </CardHeader>

            <CardBody pad="15px">
                <Box direction="row">
                    <Text size="medium" style={{fontWeight: "bold"}}>ILYA PIZIK</Text>
                    <Text>{"."}</Text>
                    <Text size="medium">{userType.toLowerCase()}</Text>
                </Box>
                <Text>Goups: </Text>
                <List data={[
                    {groupName: "B1/123"},
                    {groupName: "A1+/3"}
                ]}></List>
                <Text>NAME</Text>
            </CardBody>
        </Card>
    )
}
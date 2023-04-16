import {Box, Button, Card, CardBody, CardHeader, Heading, Image, TextInput} from "grommet";
type InputType = "dnd" | "text"
export default function (params: {inputType: InputType}) {

    const textInput = <TextInput size="small" maxLength={16}/>
    const dndInput = (
        <TextInput size="small" maxLength={16}/>
    )

    return (
        <Box align="center">
            <Card elevation="medium" align="center" width={"medium"}>

                <CardHeader>
                    <Box align="center">
                        <Heading level="3">Word</Heading>
                        <Image
                            alignSelf="stretch"
                            fit="contain"
                            src={"https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg"}
                        />
                    </Box>
                </CardHeader>
                <CardBody pad="small">
                    <Box  pad="medium" align="center" direction="row" gap="medium">
                        {params.inputType === "dnd" ? dndInput : textInput}
                        <Button size="medium" label="Submit"/>
                    </Box>
                </CardBody>
            </Card>

        </Box>
    )
}
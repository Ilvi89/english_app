import {Box, Button, Card, CardBody, CardHeader, Heading, Image, TextInput} from "grommet";
import {useState} from "react";

type InputType = "dnd" | "text"


export default function (params: {
    question: string,
    rightAnswer: string,
    inputType?: InputType,
    onSubmit: (res: boolean) => void
}) {
    const [answer, setAnswer] = useState("");

    const handleClick = () => {
        params.onSubmit((answer === params.rightAnswer))
    };
    const handleChange = (e: any) => {
        setAnswer(e.target.value);
    }

    return (
        <Box align="center">
            <Card elevation="medium" align="center" width={"medium"}>

                <CardHeader>
                    <Box align="center">
                        <Heading level="3">{params.question}</Heading>
                        <Image
                            alignSelf="stretch"
                            fit="contain"
                            src={"https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg"}
                        />
                    </Box>
                </CardHeader>
                <CardBody pad="small">
                    <Box pad="medium" align="center" direction="row" gap="medium">

                        <TextInput size="small" maxLength={16} onChange={handleChange} onKeyDown={event => {
                            if (event.key === "Enter") handleClick()
                        }
                        }/>
                        <Button size="medium" label="Submit" onClick={handleClick}/>
                    </Box>
                </CardBody>
            </Card>

        </Box>
    )
}
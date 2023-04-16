import React, { ReactNode, useState} from "react";
// import logo from './logo.svg';
// import './App.css';
import {Box, Button, grommet, Grommet, Header, Page, PageContent, PageHeader, Text} from "grommet";
import {Moon, Sun} from "grommet-icons";
import {deepMerge} from "grommet/utils";
import MakeUpWord from "./games/MakeUpWord";

const theme = deepMerge(grommet, {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px",
        },
    },
});

const AppBar = (props: { children: ReactNode }) => (
    <Header
        background="brand"
        pad={{left: "medium", right: "small", vertical: "small"}}
        elevation="medium"
        {...props}
    />
);

function App() {
    const [dark, setDark] = useState(false);

    return (
        <Grommet full theme={theme} themeMode={dark ? "dark" : "light"}>
            <Page>
                <AppBar>
                    <Text>ENGLISH APP</Text>
                    <Button
                        a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        icon={dark ? <Moon/> : <Sun/>}
                        onClick={() => setDark(!dark)}
                        tip={{
                            content: (
                                <Box
                                    pad="small"
                                    round="small"
                                    background={dark ? "dark-1" : "light-3"}
                                >
                                    {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                </Box>
                            ),
                            plain: true,
                        }}
                    />
                </AppBar>
                <PageContent>
                    {/*<PageHeader title="Hello world"/>*/}
                    <MakeUpWord inputType="dnd"/>
                </PageContent>
            </Page>
        </Grommet>
    );
}

export default App;

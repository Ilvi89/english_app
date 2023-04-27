import React, {ReactNode, useContext, useState} from "react";
// import logo from './logo.svg';
// import './App.css';
import {
    Anchor,
    Box,
    Button,
    grommet,
    Grommet,
    Header,
    Menu,
    Nav,
    Page,
    PageContent,
    ResponsiveContext,
    Text
} from "grommet";
import {Moon, Sun} from "grommet-icons";
import {deepMerge} from "grommet/utils";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Game, User} from "./pages"


const router = createBrowserRouter([
    {
        path: "/user",
        element: <User/>,
    },
    {
        path: "/choose-word",
        element: <Game/>,
    },
    {
        path: "/make-up-word",
        element: <Game/>,
    },
]);
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

    ></Header>
);

function App() {
    const [dark, setDark] = useState(false);
    const size = useContext(ResponsiveContext);
    return (
        <Grommet full theme={theme} themeMode={dark ? "dark" : "light"}>
            <Page gap="medium">
                <Header background="brand"
                        pad={"medium"}
                        elevation="medium"
                >
                    <Text>ENGLISH APP</Text>

                    <Nav direction="row">
                        <Anchor href="user" label="Home"/>
                    </Nav>
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



                </Header>
                <PageContent>

                    <RouterProvider router={router}/>
                </PageContent>
            </Page>
        </Grommet>
    );
}

export default App;

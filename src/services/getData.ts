export const getData = () => {
}


export const getLessons = () => {
    const data: { packName: string, game: string }[] = [
        {packName: "test 1", game: "ChooseWord"},
        {packName: "test 2", game: "MakeUpWord"},
        {packName: "test 3", game: "ChooseWord"},
    ]

    return data
}


export const getLesson = (id: string) => {
    const data: {
        id: string, type: string, tasks: {
            question: string,
            answers?: string[]
            rightAnswer: string
        }[]
    }[] = [
        {
            id: "0", type: "ChooseWord", tasks: [
                {question: "word", answers: ["aaa", "bbb", "ccc", "ddd"], rightAnswer: "aaa"},
                {question: "word2", answers: ["aaa", "bbb", "ccc", "ddd"], rightAnswer: "aaa"},
            ]
        },
        {
            id: "1", type: "MakeUpWord", tasks: [
                {question: "word", rightAnswer: "aaa"},
                {question: "word2", rightAnswer: "aaa"},
            ]
        },
        {
            id: "2", type: "ChooseWord", tasks: [
                {question: "word", answers: ["aaa", "bbb", "ccc", "ddd"], rightAnswer: "aaa"},
                {question: "word2", answers: ["aaa", "bbb", "ccc", "ddd"], rightAnswer: "aaa"},
            ]
        }
    ]

    return data.find(value => value.id === id)
}
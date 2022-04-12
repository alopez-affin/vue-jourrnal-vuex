export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Incididunt culpa labore consequat Lorem sit officia tempor cillum. Do veniam nostrud anim elit non. Qui minim incididunt velit mollit esse laboris commodo sit aute. Nisi exercitation irure cillum enim voluptate. Veniam nisi et ad magna nostrud velit nostrud.',
            pictures: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Incididunt culpa labore consequat Lorem sit officia tempor cillum. Do veniam nostrud anim elit non. Qui minim incididunt velit mollit esse laboris commodo sit aute. Nisi exercitation irure cillum enim voluptate. Veniam nisi et ad magna nostrud velit nostrud.',
            pictures: null,
        }
    ]
})
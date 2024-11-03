const procrastinationQuotes = [
    {
        id: 1,
        text: "Good things come to those who wait... or at least to those who wait until the last minute."
    },
    {
        id: 2,
        text: "Procrastination is a way of keeping something meaningful to look forward to."
    },
    {
        id: 3,
        text: "Sometimes the best ideas come when you’re busy avoiding other things."
    },
    {
        id: 4,
        text: "Why do it today when you can savor the thrill of a deadline tomorrow?"
    },
    {
        id: 5,
        text: "Putting things off can be the ultimate act of self-care. Future you can handle it!"
    },
    {
        id: 6,
        text: "Procrastination allows for the accumulation of ideas. Sometimes delaying a task means coming back with a better solution."
    },
    {
        id: 7,
        text: "One of the greatest perks of procrastination is having more time to make the perfect plan… right before you don’t follow it."
    },
    {
        id: 8,
        text: "Great things come to those who wait… and sometimes, waiting is what makes those things even better."
    },
    {
        id: 9,
        text: "Procrastination is just prioritizing your happiness in the present moment over productivity."
    },
    {
        id: 10,
        text: "Every time I procrastinate, I get to discover something new. Today’s discovery? Just how relaxing procrastination can be."
    }
];

export const getDistractions=()=>{
    let n=Math.floor(Math.random()*procrastinationQuotes.length);

    return procrastinationQuotes[n].text;
}
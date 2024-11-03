import { getDistractions } from "./disTractions";

export const startCounting = () => {
    let n = Math.floor(Math.random() * 50);

    const intervalId = setInterval(() => {
        if (n > 0) {
            console.log(n);
            n--;
        } else {
            console.log(getDistractions());
            clearInterval(intervalId);
        }
    }, 2000)
}

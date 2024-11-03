const url=[
    { url: "https://www.youtube.com/embed/6ZfuNTqbHE8" },
    { url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { url: "https://youtube.com/shorts/1FliqkySwa4?si=xXsd141BcIP5Xj5X" },
    { url: "https://www.youtube.com/embed/hsffPST-x1k" },
    { url: "https://www.youtube.com/embed/1FliqkySwa4" },
    { url: "https://www.youtube.com/embed/P5k2Db1SRrY" },
    { url: "https://www.youtube.com/embed/LYbuUmv0TC8" },
    { url: "https://www.youtube.com/embed/0_C_q-owfLU" },
]

export const getRandomVideo=()=>{
    let n=Math.floor(Math.random()*url.length);

    const urlLink=url[n].url;
    window.open(urlLink,"_blank");
}
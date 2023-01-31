let home = bodymovin.loadAnimation({
    container: document.getElementById('home'),
    path: "assets/home.json",
    render: "svg",
    loop: true,
    name: "home"
})

let bio = bodymovin.loadAnimation({
    container: document.getElementById('bio'),
    path: "assets/avatar.json",
    render: "svg",
    loop: true,
    name: "bio"
})
let cv = bodymovin.loadAnimation({
    container: document.getElementById('cv'),
    path: "assets/cv.json",
    render: "svg",
    loop: true,
    name: "cv"
})
let portfolio = bodymovin.loadAnimation({
    container: document.getElementById('portfolio'),
    path: "assets/responsive.json",
    render: "svg",
    loop: true,
    name: "portfolio"
})


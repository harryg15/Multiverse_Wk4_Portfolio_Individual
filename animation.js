// Bodymovin Initial Animation Settings //

let home = bodymovin.loadAnimation({
    container: document.getElementById('home'),
    path: "assets/home.json",
    render: "svg",
    loop: false,
    autoplay: false,
    name: "home"
})

let bio = bodymovin.loadAnimation({
    container: document.getElementById('bio'),
    path: "assets/avatar.json",
    render: "svg",
    loop: false,
    autoplay: false,
    name: "bio"
})
let cv = bodymovin.loadAnimation({
    container: document.getElementById('cv'),
    path: "assets/cv.json",
    render: "svg",
    loop: false,
    autoplay: false,
    name: "cv"
})
let portfolio = bodymovin.loadAnimation({
    container: document.getElementById('portfolio'),
    path: "assets/responsive.json",
    render: "svg",
    loop: false,
    autoplay: false,
    name: "portfolio"
})

// Mouse Hover Animation For Navbar //

const homeTag = document.getElementById('home')
homeTag.addEventListener('mouseenter', () => {
    home.play()
} )
homeTag.addEventListener('mouseleave', () => {
    setTimeout(() => {
        home.stop()
    }, 1500)
} )

const bioTag = document.getElementById('bio')
bioTag.addEventListener('mouseenter', () => {
    bio.play()
} )
bioTag.addEventListener('mouseleave', () => {
    setTimeout(() => {
        bio.stop()
    }, 1500)
} )

const cvTag = document.getElementById('cv')
cvTag.addEventListener('mouseenter', () => {
    cv.play()
} )
cvTag.addEventListener('mouseleave', () => {
    setTimeout(() => {
        cv.stop()
    }, 1500)
} )

const portfolioTag = document.getElementById('portfolio')
portfolioTag.addEventListener('mouseenter', () => {
    portfolio.play()
} )
portfolioTag.addEventListener('mouseleave', () => {
    setTimeout(() => {
        portfolio.stop()
    }, 2000)
} )

// Home, About Me, Experience, Portfolio Hero Images  //

let coding = bodymovin.loadAnimation({
    container: document.getElementById('coding'),
    path: "assets/coding.json",
    render: "svg",
    loop: true,
    autoplay: true,
    name: "coding"
})
let working = bodymovin.loadAnimation({
    container: document.getElementById('working'),
    path: "assets/working.json",
    render: "svg",
    loop: true,
    autoplay: true,
    name: "working"
})


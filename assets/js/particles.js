tsParticles.load("tsparticles", {
particles: {
number: {
    value: 80,
    density: {
    enable: true,
    area: 800
    }
},
color: {
    value: "#ffffff"
},
shape: {
    type: "circle"
},
opacity: {
    value: 0.5
},
size: {
    value: 3,
    random: true
},
links: {
    enable: true,
    distance: 150,
    color: "#ffffff",
    opacity: 0.4,
    width: 1
},
move: {
    enable: true,
    speed: 2,
    direction: "none",
    random: false,
    straight: false,
    outModes: {
    default: "bounce"
    }
}
},
interactivity: {
events: {
    onHover: {
    enable: false
    },
    onClick: {
    enable: false
    }
}
},
detectRetina: true
});
export const particleConfig = {
    background: {
        color: {
            value: "#2C3E50",
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: false
            },
            onHover: {
                enable: false
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            enable: false
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 20,
        },
        opacity: {
            value: 0.3,
            random: true

        },
        shape: {
            type: "edge",
        },
        size: {
            random: true,
            value: 20,
        },
    },
    detectRetina: true,
}
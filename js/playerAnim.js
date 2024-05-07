//Array of all player animations and interactions
//Frame rate simply divides the sprite into even pieces and slide between them creating a animation loop
const player = new Player({
    imageSrc: "img/Idle.png",
    frameRate: 6,
    animations: {
        idleRight: {
            frameRate: 6,
            frameBuffer: 2,
            loop: true,
            imageSrc: "img/Idle.png",
        },
        
        idleLeft: {
            frameRate: 6,
            frameBuffer: 2,
            loop: true,
            imageSrc: "img/IdleLeft.png",
        },

        walkRight: {
            frameRate: 6,
            frameBuffer: 2,
            loop: true,
            imageSrc: "img/Walk.png",
        },

        walkLeft: {
            frameRate: 6,
            frameBuffer: 2,
            loop: true,
            imageSrc: "img/WalkLeft.png",
        },

        Enabling: {
            frameRate: 6,
            frameBuffer: 2,
            loop: false,
            imageSrc: "img/Enabling.png",
        },

        EnablingLeft: {
            frameRate: 6,
            frameBuffer: 2,
            loop: false,
            imageSrc: "img/EnablingLeft.png",
        },

        doorExit: {
            frameRate: 6,
            frameBuffer: 2,
            loop: false,
            imageSrc: "img/doorfade.png",
        },

        folderExit: {
            frameRate: 6,
            frameBuffer: 2,
            loop: false,
            imageSrc: "img/doorfade.png",
        },

        folderExitTwo: {
            frameRate: 6,
            frameBuffer: 2,
            loop: false,
            imageSrc: "img/doorfade.png",
        },

        folderExitThree: {
            frameRate: 6,
            frameBuffer: 2,
            loop: false,
            imageSrc: "img/doorfade.png",
        },

        goBackOut: {
            frameRate: 6,
            frameBuffer: 2,
            loop: false,
            imageSrc: "img/doorfade.png",
    },
    
},
})
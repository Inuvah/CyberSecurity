const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64*29;
canvas.height = 64*13;

let parsedCollisions;
let collisionBlocks;

//let bottom = y + 100
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    e: {
        pressed: false
    },
}

const overlay = {
    opacity: 0,
}

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'grey';
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    
    background.draw()
    
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.draw()
    })

    c.save();
    c.globalAlpha = overlay.opacity;
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width, canvas.height);
    c.restore();

    if(level == 1 || level == 2) {
        doors.forEach((door) => {
        door.draw()
        })
    }

    if(level == 1){
        exclamations.forEach((exclamation) => {
            exclamation.draw()
        })
    }

    if(level == 2) {
       mails.forEach((mail) => {
        mail.draw()
        })

        mailsPhish.forEach((mailPhish) => {
            mailPhish.draw()
        }) 

        c.font = "35px Arial";
        c.textBaseline = "top";
        c.fillStyle = "black";
        c.fillText("Mistakes:" + mistakes,20,0);
        c.fillText("Correct:" + correct,220,0);
    }

    if(level == 3) {
        folders.forEach((folder) => {
            folder.draw()
        }) 
        foldersTwo.forEach((folderTwo) => {
            folderTwo.draw()
        }) 
        foldersThree.forEach((folderThree) => {
            folderThree.draw()
        }) 
    }

    if(level == 3.1 || level == 3.2 || level == 3.3) {
        goBacks.forEach((goback) => {
            goback.draw()
        }) 
        files.forEach((file) => {
            file.draw()
        }) 

        fileTexts.forEach((fileText) => {
            fileText.draw()
        }) 

        fileCockwheels.forEach((fileCockwheel) => {
            fileCockwheel.draw()
        }) 
    }

    player.handleInput(keys);
    player.draw();
    player.update();
    console.log(level);
    
}    

levels[level].init();
animate();
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

    if(level == 1 || level == 1.1 || level == 2){
        c.font = "35px Arial";
        c.textBaseline = "top";
        c.fillStyle = "black";
        c.fillText("Mistakes:" + mistakes,20,0);
        c.fillText("Correct:" + correct,220,0);
    }

    if(level == 1.1) {
        fakeLogin.forEach((fakeLogins) => {
            fakeLogins.draw()
        })
    }
    if(level == 2) {
       mails.forEach((mail) => {
        mail.draw()
        })

        mailsPhish.forEach((mailPhish) => {
            mailPhish.draw()
        }) 

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
        
        if(level == 3.1 && flagDetected == true) {
            c.font = "35px Arial"
            c.textBaseline = "top"
            c.fillStyle = "red"
            c.fillText("Trojan DETECTED",200,200)
            c.fillStyle = "white"
            c.font = "22px Arial"
            //to lazy to set up a loop and I apologize
            c.fillText("You found a Trojan very well done, they disguise themselves as real",200,250)
            c.fillText("legitimate programs so they can be hard to notice. Luckily it cant have done",200,275)
            c.fillText("any damage yet, unlike a Virus the trojan cant do anything by it self.",200,300)
            c.fillText("Since the user hasn't run the program yet its just a file still...",200,325)
            c.fillText("If it had been run it could steal information of the system.",200,350)
            
        } else if (level == 3.2 && flagDetected == true) {
            let textplacement = 500;
            c.font = "35px Arial"
            c.textBaseline = "top"
            c.fillStyle = "red"
            c.fillText("Keylogger DETECTED",300,textplacement)
            c.fillStyle = "white"
            c.font = "22px Arial"
            //to lazy to set up a loop and I apologize
            c.fillText("You found a Keylogger that can be very dangerous to our company,",300,textplacement+50)
            c.fillText("like the name implies it is a malware that logs and saves any keys pressed.",300,textplacement+75)
            c.fillText("That information is then sent to the hacker and if the user typed in any passwords,",300,textplacement+100)
            c.fillText("the hacker can now use them too.",300,textplacement+125)
        } else if (level == 3.3 && flagDetected == true) {
            let textplacement = 550;
            c.font = "35px Arial"
            c.textBaseline = "top"
            c.fillStyle = "red"
            c.fillText("Keylogger DETECTED",645,textplacement)
            c.fillStyle = "white"
            c.font = "22px Arial"
            c.fillText("You found a Keylogger that can be very dangerous to our company,",645,textplacement + 50)
            c.fillText("like the name implies it is a malware that logs and saves any keys pressed.",645,textplacement + 75)
            c.fillText("That information is then sent to the hacker and if the user typed in any passwords,",645,textplacement + 100)
            c.fillText("the hacker can now use them too.",645,textplacement + 125)
        } 
        
    }

    if (level == 1){
        let textplacement = 400;
        c.font = "35px Arial"
        c.textBaseline = "top"
        c.fillStyle = "white"
        c.fillText("Welcome Cyber Security Unit: " + iteration,100,textplacement)
        c.font = "22px Arial"
        c.fillText("You are a prototype and will asked to simulate a couple of test, the first test",100,textplacement + 50)
        c.fillText("is detecting phishing attempts the company has had quite a problem with them.",100,textplacement + 75)
        c.fillText("As a quick reminder phishing is someone pretending to be someone or something,",100,textplacement + 100)
        c.fillText("they do this to make you trust them and will then ask for information they shouldn't have.",100,textplacement + 125)
        c.fillText("This is called social engeneering and is the most common way to get hacked or scammed,",100,textplacement + 150)
        c.fillText("always stay vigilant concerning telefone calls, sms, mail, websites and any other form of communication.",100,textplacement + 175)
        c.fillText("P.S make to many mistakes and you will be scrapped and the next iteration will do it for you.",100,textplacement + 225)
    }

    if (level == 2) {
        let textplacement = 400;
        c.textBaseline = "top"
        c.fillStyle = "white"
        c.font = "16px Arial"
        c.fillText("This is a workers mail from this week and we know some of them are Phishing attempts.",66,textplacement + 50)
        c.fillText("It is not the first time the one doing it already has multiple mail addresses from our employees,",66,textplacement + 75)
        c.fillText("so it's not hard to make mails that look like they were sent from other employees.",66,textplacement + 100)
        c.fillText("To the right you will see all the contacts this employee should correspond with,",66,textplacement + 125)
        c.fillText("check the sender of the mail and reference the contact list to make sure it really is",66,textplacement + 150)
        c.fillText("the right person.",66,textplacement + 175)
        c.fillText("And Mistakes will be counted cant have you flag every mail for phishing.",66,textplacement + 225)
    }

    if (level == 3) {
        let textplacement = 400;
        c.textBaseline = "top"
        c.fillStyle = "white"
        c.font = "22px Arial"
        c.fillText("A employee has used their work computer for personal use and has downloaded a few programs from iligitimate sources.",100,textplacement + 50)
        c.fillText("Your job will be to go through and scan the files to see if any unwanted files are on the system.",100,textplacement + 75)
    }

    if(level == 3.2) {
        fileCockwheelsFalse.forEach((fileCockwheelFalse) => {
            fileCockwheelFalse.draw()
        }) 
    }
    if(level == 3.3 || level == 3.2 || level == 3.1) {
        filesFalse.forEach((fileFalse) => {
            fileFalse.draw()
        }) 
    }

    player.handleInput(keys);
    player.draw();
    player.update();
    
}    

levels[level].init();
animate();
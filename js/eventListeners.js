let mistakes = 0;
let correct = 0;

function jump() {
    if(player.velocity.y === 0){
        player.velocity.y = -21;
    }
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
        jump()
        break

        case 'a':
            keys.a.pressed = true
        break
        
        case 'd':
            keys.d.pressed = true
        break

        case 'e': 
        if(level == 1) {
            for (let i = 0; i < exclamations.length; i++){
                //Exclamation NPC 
                const exclamation = exclamations[i];
                if
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= exclamation.position.x + exclamation.width &&
                    player.hitbox.position.x >= exclamation.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= exclamation.position.y &&
                    player.hitbox.position.y <= exclamation.position.y + exclamation.height
                )
                {
                    keys.e.pressed = true
                    exclamation.play()
                    return
                } 
            }
        }

        if(level == 1 || level == 2) {
            for (let i = 0; i < doors.length; i++) {

                const door = doors[i];
            
                //Doors
                if 
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= door.position.x + door.width &&
                    player.hitbox.position.x >= door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                    player.hitbox.position.y <= door.position.y + door.height
                )
                {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    keys.e.pressed = true;
                    door.play();
                    player.switchSprite('doorExit');
                    player.enteringDoor = true;
                    level = 2
                    levels[level].init()
                    return
            } 
        }
        }
        if(level == 2) {

            for (let i = 0; i < mails.length; i++){
                //Normal mail
                const mail = mails[i];
                if 
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= mail.position.x + mail.width &&
                    player.hitbox.position.x >= mail.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= mail.position.y &&
                    player.hitbox.position.y <= mail.position.y + mail.height
                )
                {
                    console.log("12312312");
                    mistakes++;
                    keys.e.pressed = true;
                    mail.play();
                    return
                } 
            }
         
        
            for (let i = 0; i < mailsPhish.length; i++){
                //Phishing mail
                const mailPhish = mailsPhish[i] 
                if
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= mailPhish.position.x + mailPhish.width &&
                    player.hitbox.position.x >= mailPhish.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= mailPhish.position.y &&
                    player.hitbox.position.y <= mailPhish.position.y + mailPhish.height
                )
                {
                    correct++;
                    keys.e.pressed = true;
                    mailPhish.play();
                    return
                } 
            }
            
        }

        if(level == 3) {
            for (let i = 0; i < folders.length; i++){
                //folders
                const folder = folders[i];
                if
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= folder.position.x + folder.width &&
                    player.hitbox.position.x >= folder.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= folder.position.y &&
                    player.hitbox.position.y <= folder.position.y + folder.height
                )
                {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    keys.e.pressed = true;
                    player.switchSprite('folderExit');
                    player.enteringDoor = true;
                    keys.e.pressed = true;
                    folder.play();
                    gsap.to(overlay, {
                        opacity: 1,
                        onComplete: () => {
                            level = 3.1
                            levels[level].init()
                            gsap.to(overlay, {
                                opacity: 0
                            })
                        }
                    })
                    return
                } 
            }

            for (let i = 0; i < foldersTwo.length; i++){
                //folderTwo
                const folderTwo = foldersTwo[i];
                if
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= folderTwo.position.x + folderTwo.width &&
                    player.hitbox.position.x >= folderTwo.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= folderTwo.position.y &&
                    player.hitbox.position.y <= folderTwo.position.y + folderTwo.height
                )
                {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    keys.e.pressed = true;
                    player.switchSprite('folderExitTwo');
                    player.enteringDoor = true;
                    keys.e.pressed = true;
                    folderTwo.play();
                    gsap.to(overlay, {
                        opacity: 1,
                        onComplete: () => {
                            level = 3.2
                            levels[level].init()
                            gsap.to(overlay, {
                                opacity: 0
                            })
                        }
                    })
                    return
                } 
            }


            for (let i = 0; i < foldersThree.length; i++){
                //folderThree
                const folderThree = foldersThree[i];
                if
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= folderThree.position.x + folderThree.width &&
                    player.hitbox.position.x >= folderThree.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= folderThree.position.y &&
                    player.hitbox.position.y <= folderThree.position.y + folderThree.height
                )
                {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    keys.e.pressed = true;
                    player.switchSprite('folderExitThree');
                    player.enteringDoor = true;
                    keys.e.pressed = true;
                    folderThree.play();
                    gsap.to(overlay, {
                        opacity: 1,
                        onComplete: () => {
                            level = 3.3
                            levels[level].init()
                            gsap.to(overlay, {
                                opacity: 0
                            })
                        }
                    })
                    return
                } 
            }
        }
        if(level == 3.1 || level == 3.2 || level == 3.3) {
            for (let i = 0; i < fileCockwheels.length; i++){
                //fileCockwheels
                const fileCockwheel = fileCockwheels[i];
                if
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= fileCockwheel.position.x + fileCockwheel.width &&
                    player.hitbox.position.x >= fileCockwheel.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= fileCockwheel.position.y &&
                    player.hitbox.position.y <= fileCockwheel.position.y + fileCockwheel.height
                )
                {
                    keys.e.pressed = true;
                    fileCockwheel.play();
                    return
                } 
            }

            for (let i = 0; i < files.length; i++){
                //files
                const file = files[i];
                if
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= file.position.x + file.width &&
                    player.hitbox.position.x >= file.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= file.position.y &&
                    player.hitbox.position.y <= file.position.y + file.height
                )
                {
                    keys.e.pressed = true;
                    file.play();
                    return
                } 
            }

            for (let i = 0; i < fileTexts.length; i++){
                //fileTexts
                const fileText = fileTexts[i];
                if
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= fileText.position.x + fileText.width &&
                    player.hitbox.position.x >= fileText.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= fileText.position.y &&
                    player.hitbox.position.y <= fileText.position.y + fileText.height
                )
                {
                    keys.e.pressed = true;
                    fileText.play();
                    return
                } 
            }

            for (let i = 0; i < goBacks.length; i++){
                //goBacks
                const goBack = goBacks[i];
                if
                (
                    player.hitbox.position.x //+ player.hitbox.width 
                    <= goBack.position.x + goBack.width &&
                    player.hitbox.position.x >= goBack.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= goBack.position.y &&
                    player.hitbox.position.y <= goBack.position.y + goBack.height
                )
                {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    keys.e.pressed = true;
                    player.switchSprite('goBackOut');
                    player.enteringDoor = true;
                    keys.e.pressed = true;
                    gsap.to(overlay, {
                        opacity: 0
                    })
                    gsap.to(overlay, {
                        opacity: 1,
                        onComplete: () => {
                            level = 3
                            levels[level].init()
                            gsap.to(overlay, {
                                opacity: 0
                            })
                        }
                    })
                    return
                } 
            }
            break
        }
     }
})


window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = false
        break

        case 'a':
            keys.a.pressed = false
        break
        
        case 'd':
            keys.d.pressed = false
        break

        case 'e': 
            keys.e.pressed = false
        break
    }
})
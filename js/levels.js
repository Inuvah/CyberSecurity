let background;
let doors;
let exclamations;
let mailsPhish;
let mails;

let level = 3.2;
let levels = {
    1: {
        init: () => {
            parsedCollisions = collisionsLevel1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: 'img/64x64map.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 140,
                        y: 280-151,
                    },
                    imageSrc: 'img/door.png',
                    frameRate: 6,
                    frameBuffer: 10,
                    loop: false,
                    autoplay: false,
                }),
            
                new Sprite({
                    position: {
                        x: 880,
                        y: 280.33-151,
                    },
                    imageSrc: 'img/door.png',
                    frameRate: 6,
                    frameBuffer: 10,
                    loop: false,
                    autoplay: false,
                }),
                new Sprite({
                    position: {
                        x: 1550,
                        y: 280.33-151,
                    },
                    imageSrc: 'img/door.png',
                    frameRate: 6,
                    frameBuffer: 10,
                    loop: false,
                    autoplay: false,
                }),
            ]
            
            exclamations = [
                new Sprite ({
                    position: {
                        x:254.45,
                        y:68,
                    },
                    imageSrc: 'img/exclamation.png',
                    frameRate: 3,
                    frameBuffer: 200,
                    autoplay: false,
                    loop: true,
                })
            ]

        }
    },
    
    /*
      222222   
    222    222   
            222    
             222   
             222
           222
         222
       222
     222
    222222222222
    */
    2: {
        init: () => {
            parsedCollisions = collisionsLevel2.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 64
            player.position.y = 590
            player.enteringDoor = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: 'img/64x64mapTwo.png',
            })


            doors = [
                new Sprite({
                    position: {
                        x: 1600,
                        y: 280-216,
                    },
                    imageSrc: 'img/door.png',
                    frameRate: 6,
                    frameBuffer: 10,
                    loop: false,
                    autoplay: false,
                }),
            ]

            mailsPhish = [
                new Sprite ({
                    position: {
                        x:726,
                        y:574-72,
                    },
                    imageSrc: 'img/mailPhish.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:726,
                        y:574 + 122,
                    },
                    imageSrc: 'img/mailPhish.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:1326,
                        y:574-72,
                    },
                    imageSrc: 'img/mailPhish.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:1326,
                        y:574-260,
                    },
                    imageSrc: 'img/mailPhish.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:426,
                        y:574-260,
                    },
                    imageSrc: 'img/mailPhish.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:426,
                        y:574-454,
                    },
                    imageSrc: 'img/mailPhish.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:726,
                        y:574-454,
                    },
                    imageSrc: 'img/mailPhish.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

            ]

            mails = [
                new Sprite ({
                    position: {
                        x:1026,
                        y:574-78,
                    },
                    imageSrc: 'img/mail.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:1026,
                        y:574+116,
                    },
                    imageSrc: 'img/mail.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:1326,
                        y:574+116,
                    },
                    imageSrc: 'img/mail.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:1026,
                        y:574-266,
                    },
                    imageSrc: 'img/mail.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:726,
                        y:574-266,
                    },
                    imageSrc: 'img/mail.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

                new Sprite ({
                    position: {
                        x:126,
                        y:574-266,
                    },
                    imageSrc: 'img/mail.png',
                    frameRate: 2,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
            ]
            
        
        }
    },
  /*
3333333       
33333333       
    3333       
    3333       
33333333       
33333333      
    3333       
    3333       
33333333  
3333333   
    */
    3: {
        init: () => {
            parsedCollisions = collisionsLevel3.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 164
            player.position.y = 500
            player.enteringDoor = false
            

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: 'img/64x64mapThree.png',
            })

            folders = [
                new Sprite ({
                    position: {
                        x:768,
                        y:704-10,
                    },
                    imageSrc: 'img/folder.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
            ]

            foldersTwo = [
                new Sprite ({
                    position: {
                        x:1090,
                        y:704-10,
                    },
                    imageSrc: 'img/folder.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
            ]

            foldersThree = [
                new Sprite ({
                    position: {
                        x:1410,
                        y:704-10,
                    },
                    imageSrc: 'img/folder.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),   
            ]

            

        }        
        
    },


    /*
3333333        22222   
33333333        2222   
    3333        2222    
    3333        2222   
33333333        2222
33333333        2222
    3333        2222
    3333        2222
33333333  lll   2222
3333333   lll  222222
    */

    3.1: {
        init: () => {
            parsedCollisions = collisionsLevel3_1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 164
            player.position.y = 500
            player.enteringDoor = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: 'img/64x64map3-1.png',
            })

            goBacks = [
                new Sprite ({
                    position: {
                        x:100,
                        y:680,
                    },
                    imageSrc: 'img/goBack.png',
                    frameRate: 1,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),


            ]

            fileCockwheels = [
                new Sprite ({
                    position: {
                        x:1026,
                        y:574-78,
                    },
                    imageSrc: 'img/fileCockwheel.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:1426,
                        y:690,
                    },
                    imageSrc: 'img/fileCockwheel.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:826,
                        y:690,
                    },
                    imageSrc: 'img/fileCockwheel.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),

            ]

            files = [
                new Sprite ({
                    position: {
                        x:1426,
                        y:574-78,
                    },
                    imageSrc: 'img/file.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:1026,
                        y:690,
                    },
                    imageSrc: 'img/file.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:1226,
                        y:690,
                    },
                    imageSrc: 'img/file.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:626,
                        y:690,
                    },
                    imageSrc: 'img/file.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
            ]

            fileTexts = [
                new Sprite ({
                    position: {
                        x:1226,
                        y:574-78,
                    },
                    imageSrc: 'img/textFile.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:826,
                        y:574-78,
                    },
                    imageSrc: 'img/textFile.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:626,
                        y:574-78,
                    },
                    imageSrc: 'img/textFile.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
            ]

        }
    },
/*
3333333       222222222   
33333333     22     2222   
    3333             2222    
    3333              2222   
33333333              2222
33333333             2222
    3333           2222
    3333         2222
33333333  lll  2222
3333333   lll  222222222222
*/
    3.2: {
        init: () => {
            parsedCollisions = collisionsLevel3_2.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 164
            player.position.y = 500
            player.enteringDoor = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: 'img/64x64map3-2.png',
            })
            goBacks = [
                new Sprite ({
                    position: {
                        x:100,
                        y:680,
                    },
                    imageSrc: 'img/goBack.png',
                    frameRate: 1,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),


            ]
            fileCockwheels = [
                new Sprite ({
                    position: {
                        x:1735,
                        y:310,
                    },
                    imageSrc: 'img/fileCockwheel.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:135,
                        y:245,
                    },
                    imageSrc: 'img/fileCockwheel.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:902,
                        y:245,
                    },
                    imageSrc: 'img/fileCockwheel.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),


            ]

            files = [
                new Sprite ({
                    position: {
                        x:1450,
                        y: 310,
                    },
                    imageSrc: 'img/file.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x: 264,
                        y: 245,
                    },
                    imageSrc: 'img/file.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x: 518,
                        y: 245,
                    },
                    imageSrc: 'img/file.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x: 1092,
                        y: 245,
                    },
                    imageSrc: 'img/file.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),



            ]

            fileTexts = [
                new Sprite ({
                    position: {
                        x:393,
                        y:245,
                    },
                    imageSrc: 'img/textFile.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),
                new Sprite ({
                    position: {
                        x:710,
                        y:245,
                    },
                    imageSrc: 'img/textFile.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),


            ]

        }
    },
      /*
3333333        3333333   
33333333       33333333   
    3333           3333    
    3333           3333   
33333333       33333333
33333333       33333333
    3333           3333
    3333           3333
33333333  lll  33333333
3333333   lll  3333333
    */
    3.3: {
        init: () => {
            parsedCollisions = collisionsLevel3_3.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 164
            player.position.y = 500
            player.enteringDoor = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: 'img/64x64map3-3.png',
            })
            goBacks = [
                new Sprite ({
                    position: {
                        x:100,
                        y:680,
                    },
                    imageSrc: 'img/goBack.png',
                    frameRate: 1,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),


            ]
            fileCockwheels = [
                new Sprite ({
                    position: {
                        x:1026,
                        y:574-78,
                    },
                    imageSrc: 'img/fileCockwheel.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),


            ]

            files = [
                new Sprite ({
                    position: {
                        x:1426,
                        y:574-78,
                    },
                    imageSrc: 'img/file.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),


            ]

            fileTexts = [
                new Sprite ({
                    position: {
                        x:1226,
                        y:574-78,
                    },
                    imageSrc: 'img/textFile.png',
                    frameRate: 6,
                    frameBuffer: 1,
                    autoplay: false,
                    loop: false,
                }),


            ]

        }
    },
}
class Player extends Sprite {
    constructor({
        collisionBlocks = [], imageSrc, frameRate, animations, loop }) {
        super( {imageSrc, frameRate, animations, loop } )
        this.position = {
            x: 64,
            y: 590,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }

        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = 1;

        this.collisionBlocks = collisionBlocks;
    }
  
    update() {
        //c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        this.position.x += this.velocity.x;
        this.updateHitbox();
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.updateHitbox();

        //c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
        this.checkForVerticalCollisions();
    }

    handleInput(keys) {
        if(player.enteringDoor) return
        this.velocity.x = 0;
        if(keys.d.pressed) {
            this.switchSprite('walkRight');
            this.velocity.x = 4;
            this.lastDirection = 'right';
        } else if(keys.a.pressed){
            this.switchSprite('walkLeft');
            this.velocity.x = -4;
            this.lastDirection = 'Left';
        } else {
            if(this.lastDirection === 'left') this.switchSprite('idleLeft')
            else this.switchSprite('idleRight');
        } if(keys.e.pressed) {
            if(this.lastDirection === 'left') this.switchSprite('EnablingLeft')
            this.switchSprite('Enabling');
        }
    }

    switchSprite(name) {
        if(this.image === this.animations[name].image) return;
        this.currentFrame = 0;
        this.image = this.animations[name].image;
        this.frameRate = this.animations[name].frameRate;
        this.frameBuffer = this.animations[name].frameBuffer;
        this.currentAnimation = this.animations[name];
        this.loop = this.animations[name].loop;
    }

    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x + 42,
                y: this.position.y + 55,
            },
            width: 40,
            height: 75,
        }
    }

    checkForHorizontalCollisions() {
            for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];
            //horizontal collision
            if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
                ){
                    if(this.velocity.x < -0){
                        const offset = this.hitbox.position.x - this.position.x;
                        this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
                        break
                    }

                    if(this.velocity.x > 0){
                        const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
                        this.position.x = collisionBlock.position.x - offset - 0.01;
                        break
                    }
            }
        }
    }

    checkForVerticalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
                ){

                    if(this.velocity.y < 0){
                        this.velocity.y = 0
                        const offset = this.hitbox.position.y - this.position.y;
                        this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01;
                        player.collision = true
                        break
                    }

                    if(this.velocity.y > 0){
                        this.velocity.y = 0
                        const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
                        this.position.y = collisionBlock.position.y - offset - 0.01;
                        player.collision = true
                        break
                    }
            }
        }
    }
    applyGravity() {
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;
    }
}

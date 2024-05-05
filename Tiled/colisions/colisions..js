(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("colisions",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "data":[6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8,
            9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 12, 12, 12, 12, 12, 12, 12, 12, 5,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22,
            14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15,
            16, 18, 2, 2, 2, 2, 2, 2, 2, 2, 18, 18, 2, 2, 2, 18, 2, 2, 2, 2, 18, 18, 18, 2, 2, 2, 18, 2, 18, 19,
            1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 3, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 3, 2, 3, 4],
         "height":20,
         "id":1,
         "name":"collisions",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":2,
         "name":"Object Layer 1",
         "objects":[],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":4,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/Asset 17.tsx"
        }, 
        {
         "firstgid":2,
         "source":"..\/Asset 18.tsx"
        }, 
        {
         "firstgid":3,
         "source":"..\/Asset 19.tsx"
        }, 
        {
         "firstgid":4,
         "source":"..\/Asset 20.tsx"
        }, 
        {
         "firstgid":5,
         "source":"..\/walltofloor.tsx"
        }, 
        {
         "firstgid":6,
         "source":"..\/Asset 2.tsx"
        }, 
        {
         "firstgid":7,
         "source":"..\/Asset 3.tsx"
        }, 
        {
         "firstgid":8,
         "source":"..\/Asset 4.tsx"
        }, 
        {
         "firstgid":9,
         "source":"..\/Asset 5.tsx"
        }, 
        {
         "firstgid":10,
         "source":"..\/Asset 6.tsx"
        }, 
        {
         "firstgid":11,
         "source":"..\/Asset 7.tsx"
        }, 
        {
         "firstgid":12,
         "source":"..\/Asset 8.tsx"
        }, 
        {
         "firstgid":13,
         "source":"..\/Asset 9.tsx"
        }, 
        {
         "firstgid":14,
         "source":"..\/Asset 11.tsx"
        }, 
        {
         "firstgid":15,
         "source":"..\/Asset 12.tsx"
        }, 
        {
         "firstgid":16,
         "source":"..\/Asset 13.tsx"
        }, 
        {
         "firstgid":17,
         "source":"..\/Asset 14.tsx"
        }, 
        {
         "firstgid":18,
         "source":"..\/Asset 15.tsx"
        }, 
        {
         "firstgid":19,
         "source":"..\/Asset 16.tsx"
        }, 
        {
         "firstgid":20,
         "source":"..\/tiles\/floor.tsx"
        }, 
        {
         "firstgid":21,
         "source":"..\/Asset 21.tsx"
        }, 
        {
         "firstgid":22,
         "source":"..\/Asset 22.tsx"
        }, 
        {
         "firstgid":23,
         "source":"..\/Asset 23.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":30
});
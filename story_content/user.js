function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZXJ3zsxqrz":
        Script1();
        break;
      case "606C0YQa82m":
        Script2();
        break;
  }
}

function Script1()
{
  var randomnumber = Math.floor((Math.random()*127)+1);
var player = GetPlayer();
player.SetVar("randnum",randomnumber);

function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
       x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
return bin;
}

convertToBinary(randomnumber);

t = convertToBinary(randomnumber);
p= convertToBinary(randomnumber);
var player = GetPlayer();
player.SetVar("result",t);

if (p>=1000000){
   p = p - 1000000;
   k = 1;
} else{
   k = 0;
}
var player = GetPlayer();
player.SetVar("bit1kunci",k);

if (p>=100000){
   p = p - 100000;
   k = 1;
} else{
   k = 0;
}
var player = GetPlayer();
player.SetVar("bit2kunci",k);

if (p>=10000){
   p = p - 10000;
   k = 1;
} else{
   k = 0;
}
var player = GetPlayer();
player.SetVar("bit3kunci",k);

if (p>=1000){
   p = p - 1000;
   k = 1;
} else{
   k = 0;
}
var player = GetPlayer();
player.SetVar("bit4kunci",k);

if (p>=100){
   p = p - 100;
   k = 1;
} else{
   k = 0;
}
var player = GetPlayer();
player.SetVar("bit5kunci",k);

if (p>=10){
   p = p - 10;
   k = 1;
} else{
   k = 0;
}
var player = GetPlayer();
player.SetVar("bit6kunci",k);

if (p>=1){
   k = 1;
} else{
   k = 0;
}
var player = GetPlayer();
player.SetVar("bit7kunci",k);
}

function Script2()
{
  function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
       x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
return bin;
}

var randomnumber1 = Math.floor((Math.random()*127)+1);
var randomnumber2 = Math.floor((Math.random()*127)+1);
var randomnumber3 = Math.floor((Math.random()*127)+1);
var randomnumber4 = Math.floor((Math.random()*127)+1);
var randomnumber5 = Math.floor((Math.random()*127)+1);

var player = GetPlayer();
player.SetVar("soal1a",randomnumber1);
t = convertToBinary(randomnumber1);
var player = GetPlayer();
player.SetVar("kunci1a",t);

var player = GetPlayer();
player.SetVar("soal1b",randomnumber2);
t = convertToBinary(randomnumber2);
var player = GetPlayer();
player.SetVar("kunci1b",t);

var player = GetPlayer();
player.SetVar("soal1c",randomnumber3);
t = convertToBinary(randomnumber3);
var player = GetPlayer();
player.SetVar("kunci1c",t);

var player = GetPlayer();
player.SetVar("soal2a",randomnumber4);
t = convertToBinary(randomnumber4);
var player = GetPlayer();
player.SetVar("kunci2a",t);

var player = GetPlayer();
player.SetVar("soal2b",randomnumber5);
t = convertToBinary(randomnumber5);
var player = GetPlayer();
player.SetVar("kunci2b",t);
}


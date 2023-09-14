function shout(string) 
{
    return string.toUpperCase();
}

function whisper(string) 
{
    return string.toLowerCase();
}

// describe('shout(string)', function() {
//   it('receives one argument and returns it in all caps', function() {
//     expect(shout('hello')).toEqual('HELLO')
//   })
// })
function shout(string) {
    return string.toUpperCase( );
  }
  
  // describe('whisper(string)', function() {
  //   it('receives one argument and returns it in all lowercase', function() {
  //
 // describe('logWhisper(string)', function() {
  //   it('calls console.log() its one argument in all lowercase', function() {
  //     const spy = expect.spyOn(console, 'log').andCallThrough()

  //     logWhisper('HELLO')

  //     expect(spy).toHaveBeenCalledWith('hello')

  //     console.log.restore()
  //   })
  // })
  function logShout (string) {
    console.log(string.toUpperCase( ));
  }
  function logWhisper(string) {
    console.log(string.toLowerCase( ));
  }

  // describe('sayHiToGrandma(string)', function() {
  //   it('returns "I can\'t hear you!" if string is lowercase', function() {
  //     expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  //   })

  //   it('returns "YES INDEED!" if string is uppercase', function() {
  //     expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  //   })

  //   it('returns "I love you, too." if string is "I love you, Grandma."', function() {
  //     expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  //   })
  // })
  function sayHiToGrandma (string) {
    let cantUnswer = "I can't hear you!";
    let yesUnswer = "YES INDEED!";
    let lovUnswer = "I love you, too.";
    if (string.toLowerCase(string) === string) {
      return cantUnswer;
    }
    else if (string.toUpperCase(string) === string) {
      return yesUnswer;
    }
    else if ("I love you, Grandma." === string) {
      return lovUnswer
    }
  }
 //describe('sayHiToHeadphonedRoommate(string)', function() {
 //it('returns "I can\'t hear you!" ifstringis lowercase', function() {
 //  expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
 //})
  
 //it('returns "YES INDEED!" ifstringis uppercase', function() {
 //expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
 // })
  
 //it('returns "I would love to!" ifstringis "Let\'s have dinner together!"', function () {
 //expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
 //"I would love to!"
  //);
   // });
  //})
  function  sayHiToHeadphonedRoommate (string) {
    let cantUnswer = "I can't hear you!";
    let yesUnswer = "YES INDEED!";
    let lovUnswer = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return cantUnswer;
    }
    else if (string.toUpperCase(string) === string) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === string) {
      return lovUnswer
    } }


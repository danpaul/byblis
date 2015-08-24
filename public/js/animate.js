// var byblis = window.byblis;

// $(document).on('byblisInitComplete', function(){
//     var elem = document.getElementById('byblisCanvas').children[0];
//     var params = { width: byblis.settings.canvasWidth,
//                    height: byblis.settings.canvasHeight };
//     var two = new Two(params).appendTo(elem);

// // two has convenience methods to create shapes.
// var circle = two.makeCircle(72, 100, 50);
// var rect = two.makeRectangle(213, 100, 100, 100);

// // The object returned has many stylable properties:
// circle.fill = '#FF8000';
// circle.stroke = 'orangered'; // Accepts all valid css color
// circle.linewidth = 5;

// console.log('asdf');
// console.log(circle)


// rect.fill = 'rgb(0, 200, 255)';
// rect.opacity = 0.75;
// rect.noStroke();

// // Don't forget to tell two to render everything
// // to the screen
// // two.update();
// console.log(1)
// two.bind('update', function(frameCount){
//     circle.translation.x += 0.1;
// // console.log(circle.translation.x)
// // console.log(two.timeDelta)
//     // console.log(1)
//     // console.log(frameCount)

// })
// // .play();

// });
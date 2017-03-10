// // A $( document ).ready() block.
// $( document ).ready(function() {
//
//
// console.log("ready!");
//
//
//  google.charts.load('current', {'packages':['bar']});
//  google.charts.setOnLoadCallback(drawStuff);
//
//  function drawStuff() {
//    var data = new google.visualization.arrayToDataTable([
//      ['Food', 'NY, NY', 'Bronx, NY'],
//      ['Milk (1 G)', '$4.02', '$3.18'],
//      ['Bread (1 Loaf)', '$3.30', '$2.00'],
//      ['White Rice (1LB)', '$2.72', '$2.00'],
//      ['Eggs', '$3.46', '$2.12'],
//      ['Chicken Breast (1LB)', '$5.14', '$3.00'],
//      ['Beef Round (1LB)', '$6.16', '$5.17'],
//      ['Apples (1LB)', '$2.65', '$1.50'],
//      ['Potatos (1LB)', '$1.53', '$.63'],
//      ['Lettuce', '$2.08', '$2.00'],
//    ]);
//
//    var options = {
//      width: 900,
//      chart: {
//        title: 'Average Grocery Prices in NYC',
//        subtitle: 'Market Food Prices in NY, NY vs. Bronx, NY'
//      },
//      series: {
//        0: { axis: 'NY, NY' }, // Bind series 0 to an axis named 'distance'.
//        1: { axis: 'Bronx, NY' } // Bind series 1 to an axis named 'brightness'.
//      },
//      axes: {
//        y: {
//          distance: {label: 'Price ($)'}, // Left y-axis.
//          brightness: {side: 'right', label: 'Price ($)'} // Right y-axis.
//        }
//      }
//    };
//
//     var chart = new google.charts.Bar(document.getElementById('dual_y_div'));
//  chart.draw(data, options);
// };
//
// $("#slideshow > div:gt(0)").hide();
//
// setInterval(function() {
// $('#slideshow > div:first')
// .fadeOut(1050)
// .next()
// .fadeIn(1050)
// .end()
// .appendTo('#slideshow');
// }, 10000);
// });
//
//
// if (!window['YT']) {
// var YT = {
//    loading: 0,
//    loaded: 0
// };
// }
// if (!window['YTConfig']) {
// var YTConfig = {
//    'host': 'http://www.youtube.com'
// };
// }
// if (!YT.loading) {
// YT.loading = 1;
// (function() {
//    var l = [];
//    YT.ready = function(f) {
//        if (YT.loaded) {
//            f();
//        } else {
//            l.push(f);
//        }
//    };
//    window.onYTReady = function() {
//        YT.loaded = 1;
//        for (var i = 0; i < l.length; i++) {
//            try {
//                l[i]();
//            } catch (e) {}
//        }
//    };
//    YT.setConfig = function(c) {
//        for (var k in c) {
//            if (c.hasOwnProperty(k)) {
//                YTConfig[k] = c[k];
//            }
//        }
//    };
//    var a = document.createElement('script');
//    a.type = 'text/javascript';
//    a.id = 'www-widgetapi-script';
//    a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflt7SI_I/www-widgetapi.js';
//    a.async = true;
//    var b = document.getElementsByTagName('script')[0];
//    b.parentNode.insertBefore(a, b);
// })();
// }

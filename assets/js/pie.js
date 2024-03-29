let ctx = document.getElementById('myChart').getContext('2d');

let imageA = new Image();
imageA.src = 'oni.jpg';  // Replace with your image path
let imageB = new Image();
imageB.src = 'technology.jpg';  // Replace with your image path
let imageC = new Image();
imageC.src = 'physics.jpg';  // Replace with your image path
let images = [imageA, imageB, imageC];  // Array of images
var drawPlugin = {
    id: 'draw',
    beforeDraw: function (chart, args, options) {
        if (chart.data.datasets.length > 0) {
            let { offset_x, offset_y, size_x, size_y } = options;
            let ctx = chart.ctx;
            let dataset = chart.data.datasets[0];
            for (let i = 0; i < dataset.data.length; i++) {
                let meta = chart.getDatasetMeta(0); // Get the metadata for the dataset
                let element = meta.data[i];   // Get the element for the data point

                let start_angle = element.startAngle;
                let end_angle = element.endAngle;
                let mid_angle = start_angle + (end_angle - start_angle) / 2;

                // Calculate the mid-radius based on the innerRadius and outerRadius of the element
                let mid_radius = (element.outerRadius + element.innerRadius) / 2;
                let x = mid_radius * Math.cos(mid_angle);
                let y = mid_radius * Math.sin(mid_angle);

                ctx.save();  // Save the current state of the context

                // Create a clipping region
                ctx.beginPath();
                ctx.moveTo(element.x, element.y);
                ctx.arc(element.x, element.y, element.outerRadius, start_angle, end_angle);
                ctx.closePath();
                ctx.clip();
                
                let image_x = element.x + x - size_x[i] / 2 + offset_x[i];
                let image_y = element.y + y - size_y[i] / 2 + offset_y[i];
                ctx.drawImage(images[i], image_x, image_y, size_x[i], size_y[i]);  // Adjust image size as needed

                ctx.restore();  // Restore the state of the context
            }
        }
    },
};
Chart.register(drawPlugin);
// Make sure your images are loaded before creating the chart
imageA.onload = function () {
imageB.onload = function () {
imageC.onload = function () {
    // Create patterns for your images
    let data = {
        labels: ['A', 'B', 'C'],
        datasets: [{
            data: [1, 1, 1],
            // Use the patterns as background colors
            // backgroundColor: [patternA, patternB, patternC],
            borderColor: [
                'rgba(255, 99, 132, 1)',  // Red
                'rgba(54, 162, 235, 1)',  // Blue
                'rgba(255, 206, 86, 1)'   // Yellow
            ],
            borderWidth: 5
        }],
        text: ['sda', 'eas', 'das'],
    };

    let options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {

            draw: {
                offset_x: [ 14, 10,  0],
                offset_y: [  0,  8, 8],
                size_x:   [220, 255,200],
                size_y:   [220, 155,230]
            },
                
            
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: function (context) {
                        // Display the label of the hovered segment in the title of the too
                        return "";
                    },
                    label: function (context) {
                        // Display the value of the hovered segment in the body of the tool
                        return data.text[context.dataIndex];
                    }
                }
            },
            datalabels: {
                display: function (context) {
                    return true;  // display labels
                },
                color: '#000000',
                anchor: 'center',
                align: 'center',
                formatter: function (value, context) {
                    return data.labels[context.dataIndex];
                }
            }
        }
    }
    

    let myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
};
};
};


// let data = {
//     labels: ['A', 'B', 'C'],
//     text:['sda','eas','das'],
//     datasets: [{
//         data: [1, 1, 1], // Equal parts
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',  // Red
//             'rgba(54, 162, 235, 0.2)',  // Blue
//             'rgba(255, 206, 86, 0.2)'   // Yellow
//         ],
//         borderColor: [
//             'rgba(255, 99, 132, 1)',  // Red
//             'rgba(54, 162, 235, 1)',  // Blue
//             'rgba(255, 206, 86, 1)'   // Yellow
//         ],
//         borderWidth: 1
//     }]
// }

// let options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//         legend: {
//             display: false,
//         },
//         tooltip: {
//             callbacks: {
//                 title: function (context) {
//                     // Display the label of the hovered segment in the title of the tooltip
//                     return "";
//                 },
//                 label: function (context) {
//                     // Display the value of the hovered segment in the body of the tooltip
//                     return data.text[context.dataIndex];
//                 }
//             }
//         },
//         datalabels: {
//             display: function (context) {
//                 return true;  // display labels
//             },
//             color: '#000000',
//             anchor: 'center',
//             align: 'center',
//             formatter: function (value, context) {
//                 return data.labels[context.dataIndex];
//             }
//         }
//     }
// }

// let myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: data,
//     options: options
// });
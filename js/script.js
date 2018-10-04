// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("finger-btn").style.display = "block";
    } else {
        document.getElementById("finger-btn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 12;

var timeChart = document.getElementById("timeChart");

var waitTime = {
    labels: [
        "Within the Day", 
        "Within the Week", 
        "Within the Month", 
        "Within the Year", 
        "Never Went"
    ],
    datasets: [{
        label: 'Number of Submissions',
        data: [3, 4, 6, 6, 4],
        backgroundColor: [
            "#002145",
            "#0055b7",
            "#6089FF",
            "#B8D3FE",
            "#77b4f7"
        ],
    }]
}

var myPieChart = new Chart(timeChart,{
    type: 'pie',
    data: waitTime,
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        }
    }
});


var preventionChart = document.getElementById("preventionChart");

var waitTime = {
    labels: [
        "Convenience", 
        "Stigma", 
        "Motivation", 
        "Preparation", 
        "Schedule"
    ],
    datasets: [{
        label: 'Number of Submissions',
        data: [4, 5, 4, 1, 4],
        backgroundColor: [
            "#ffefe7",
            "#ff9c8d",
            "#FFC4C4",
            "#FF9C8B",
            "#FFC0B5"
        ],
    }]
}

var myPieChart = new Chart(preventionChart,{
    type: 'pie',
    data: waitTime,
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        },
    }
});


var assessmentChart = document.getElementById("assessmentChart");

var waitTime = {
    labels: [
        "Yes", 
        "No", 

    ],
    datasets: [{
        label: 'Number of Submissions',
        data: [20, 4],
        backgroundColor: [
            "#0055b7",
            "#B8D3FE",
        ],
    }]
}

var myPieChart = new Chart(assessmentChart,{
    type: 'pie',
    data: waitTime,
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        },
    }
});

var payChart = document.getElementById("payChart");

var waitTime = {
    labels: [
        "Yes", 
        "No", 

    ],
    datasets: [{
        label: 'Number of Submissions',
        data: [1, 22],
        backgroundColor: [
            "#FFC4C4",
            "#FF9C8B"
        ],
    }]
}

var myPieChart = new Chart(payChart,{
    type: 'pie',
    data: waitTime,
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        },
    }
});

var helpThatDay = document.getElementById("helpThatDay");

var waitTime = {
    labels: [
        "Yes", 
        "No", 

    ],
    datasets: [{
        label: 'Number of Submissions',
        data: [1, 22],
        backgroundColor: [
            "#0055b7",
            "#B8D3FE",
        ],
    }]
}

var myPieChart = new Chart(helpThatDay,{
    type: 'pie',
    data: waitTime,
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        },
    }
});

var timeTakenChart = document.getElementById("timeTakenChart");

var waitTime = {
    labels: [
        "Within the Day", 
        "Within the Week",
        "Within the Month", 
        "Never Went"
    ],
    datasets: [{
        label: 'Number of Submissions',
        data: [7, 2, 8, 6],
        backgroundColor: [
            "#002145",
            "#0055b7",
            "#6089FF",
            "#B8D3FE",
        ],
    }]
}

var myPieChart = new Chart(timeTakenChart,{
    type: 'pie',
    data: waitTime,
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        }
    }
});


var resources = document.getElementById("resources");

var waitTime = {
    labels: [
        "Yes",
        "No"
    ],
    datasets: [{
        label: 'Number of Submissions',
        data: [10,14],
        backgroundColor: [
            "#FFC4C4",
            "#FF9C8B"
        ],
    }]
}

var myPieChart = new Chart(resources,{
    type: 'pie',
    data: waitTime,
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        }
    }
});

var followUp = document.getElementById("followUp");

var waitTime = {
    labels: [
        "Needed more help",
        "Device compatibility",
        "Never heard of them"
    ],
    datasets: [{
        label: 'Number of Submissions',
        data: [2,2,6],
        backgroundColor: [
            "#6089FF",
            "#B8D3FE",
            "#77b4f7"
        ],
    }]
}

var myPieChart = new Chart(followUp,{
    type: 'pie',
    data: waitTime,
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        }
    }
});


var ctx = document.getElementById("location");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
            label: 'Rating',
            data: [0, 1, 7, 9, 7],
            backgroundColor: [
                "#ffefe7",
                "#ff9c8d",
                "#FFC4C4",
                "#FF9C8B",
                "#FFC0B5"
            ],
        }]
    },
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        },
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Submissions'
              }
            }]
        }   
    }
});

var wellnessPlan = document.getElementById("wellnessPlan");
var myChart = new Chart(wellnessPlan, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7","8","9","10"],
        datasets: [{
            label: 'Rating',
            data: [4, 1, 2, 0, 6, 2, 3, 1, 1,0],
            backgroundColor: [
                "#ffefe7",
                "#ff9c8d",
                "#FFC4C4",
                "#FF9C8B",
                "#FFC0B5",
                "#ffefe7",
                "#ff9c8d",
                "#FFC4C4",
                "#FF9C8B",
                "#FFC0B5",
            ],
        }],
        xAxisID: "test"
    },
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        },
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Submissions'
              }
            }]
        }   
    }
});

var satisfaction = document.getElementById("satisfaction");
var myChart = new Chart(satisfaction, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7","8","9","10"],
        datasets: [{
            label: 'Rating',
            data: [3, 0, 4, 0, 4, 2, 4, 4, 1,0],
            backgroundColor: [
                "#002145",
                "#0055b7",
                "#6089FF",
                "#B8D3FE",
                "#77b4f7",
                "#002145",
                "#0055b7",
                "#6089FF",
                "#B8D3FE",
                "#77b4f7"
            ]
        }]
    },
    options: {
        animationEasing : "easeOutBounce",
        legend: {
            position: "bottom",
            labels: {
                boxWidth: 10
            }
        },
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Submissions'
              }
            }]
        }   
    }
});
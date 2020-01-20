
var html_first = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Summary</title>
    <link rel="stylesheet" href="style.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/a43233f9f9.js" crossorigin="anonymous"></script>

    <script type="text/javascript" src="./lib/jquery-3.3.1.min.js"></script>
    <style type="text/css">
        .nav {
            background: rgb(228, 83, 83);
            height: 150px;
            color: seashell;
        }

        .card1 {
            margin: 50px 10px 0px 10px;
        }

        .card-header {
            background: rgb(59, 139, 230);
            color: white;
        }
    </style>

</head>

<body>

    <div class="nav justify-content-center align-items-center">
        <h2>My Team</h2>
    </div>

    <div class="container">
        <div class="row">
    `


var html_last = ` </div>

</div>

</div>

</body>

</html>`



function allcards_html(data) {

    var html_card_manager = ` <div class="card1 col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card-header">
        <h4 id="name">${data.name}</h4>

        <h4>

            <i class="fas fa-mug-hot"></i>
            ${data.getRole()}
        </h4>
    </div>
    <div class="card-body jumbotron">
        <ul class="list-group">
            <li class="list-group-item mt-4">
                <h6 id="id">${data.id}</h6>
                <hr>
                <h6 id="email">${data.email}</h6>
                <hr>
                <h6 id="office_number">${data.officeNumber}</h6>
            </li>
        </ul>
    </div>
</div>
`

    var html_card_engineer = ` <div class="card1 col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card-header">
        <h4 id="name">${data.name}</h4>
        <h4>
            <i class="fas fa-glasses"></i>
            ${data.getRole()}
        </h4>
    </div>
    <div class="card-body jumbotron">
        <ul class="list-group">
            <li class="list-group-item mt-4">
                <h6 id="id">${data.id}</h6>
                <hr>
                <h6 id="email">${data.email}</h6>
                <hr>
                <h6 id="github">${data.github}</h6>
            </li>
        </ul>
    </div>
</div>
`

    var html_card_intern = ` <div class="card1 col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card-header">
        <h4 id="name">${data.name}</h4>
        
        <h4>
            <i class="fas fa-user-graduate"></i>
            ${data.getRole()}
        </h4>
    </div>
    <div class="card-body jumbotron">
        <ul class="list-group">
            <li class="list-group-item mt-4">
                <h6 id="id">${data.name}</h6>
                <hr>
                <h6 id="email">${data.email}</h6>
                <hr>
                <h6 id="school">${data.school}</h6>
            </li>
        </ul>
    </div>
</div>
`
    var card_html = "";

    if (data.getRole() === "Manager") {
        card_html += html_card_manager;
    } else if (data.getRole() === "Engineer") {
        card_html += html_card_engineer;
    } else if (data.getRole() === "Intern") {
        card_html += html_card_intern;
    }
    return card_html;


}

function generateHTML(array) {
    var string = "";
    for (var i = 0; i < array.length; i++) {
        string += allcards_html(array[i]);
    }
    // console.log(html_first + string + html_last);
    return html_first + string + html_last;
}
exports.generateHTML = generateHTML;
exports.allcards_html = allcards_html;

//javeScript for Train Scheduler


//wait for the page to load before 
$(document).ready(function () {



    //firebase database code


    <script src="https://www.gstatic.com/firebasejs/5.4.0/firebase.js"></script>

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC17KUAcDqnz0HmaiqTAN_u11-YxBwMvmk",
        authDomain: "train-time-77780.firebaseapp.com",
        databaseURL: "https://train-time-77780.firebaseio.com",
        projectId: "train-time-77780",
        storageBucket: "train-time-77780.appspot.com",
        messagingSenderId: "213440069442"
    };
    firebase.initializeApp(config);



    var database = firebase.database();

    //the variables from the form that we created and to add to the database


    //on click we need to capture all the values in the form and add it to the firebase
    //we also need to make sure the form does not refresh after we click submit

    $("#submitButton").on('click', function (event) {
        event.preventDefault();

        var trainName = $("#trainName").val().trim();
        var destination = $("#destinationValue").val().trim();
        var firstTrainTime = $("#firstTrainValue").val().trim();
        var frequency = $("#frequencyValue").val().trim();

        //now we need to take all the informationa and add it to the firebase dataabase

        var newTrain = {
            trainName,
            destination,
            firstTrainTime,
            frequency
        }

        //add this to the database somehow...

        //use momoent.js to add time functionality to the page
        //need to create equations that will do the math
        //need to add those results to a form that we populate below the submit form




    })



});
//two ways of doing it
//get the input in each behaviour



/* const gcs = {
    eyes: [
        {
        // response: '4. Spontaneous',
        //spontaneous: 4,
        //speech:3,
        //pain:2,
        //noresponse:1

        },

       {
        spontaneous: 4,
        speech: 3,
        pain: 2,
        noResponse: 1
        },
        
        {
            reponse:'3. To speech',
        },
        {
            reponse: '2. To Pain',
        },
        {
            reponse: '1. no response',
        } 
    ],

    verbal: [
        {
            response: '5. oriented to time space',
        },
        {
            response: '4. confused',
        },
        {
            response: '3. inappropriate words',
        },
        {
            response: '2. incomprehensible sounds',
        },
        {
            response: '1. no response',
        }
    ],

    motor: [
        {
            response:'6. obeys command',
        },
        {
            response: '5. localises pain',
        },
        {
            response: '4. flex to withdraw from pain',
        },
        {
            response: '3. abnormal flexion',
        },
        {
            response: '2. abnormal extension',
        },
        {
            response: '1. no response',
        }
    ]
}
 */


const userData = {
    eye:'', 
    verb:'',
    motor:'',
    total: ''
}

const total = (userData => {

    userData.eye = parseInt(userData.eye);
    userData.verb = parseInt(userData.verb);
    userData.motor = parseInt(userData.motor);

    sum = userData.eye + userData.verb + userData.motor;
    return sum;
});


//hidden info is hidden
//toggle the hidden info when a number is reached


$('form').on('submit', function(event){
    event.preventDefault();
    //console.log('hello');
    userData.eye = $('input[name=eye-response]:checked').val(); //names but changing value into checked items
    userData.verb = $('input[name=verb-response]:checked').val();
    userData.motor = $('input[name=motor-response]:checked').val();
    
    userData.total = total(userData); 
    
    console.log(total(userData));
    console.log(userData)

    $('.results').text(userData.total)

});

/* 
$('.results').on('click', function(){
   /*  let totalGCS = $(this).attr('') */
  /*  $(this).text(userData.results)
}); */





/* let num = '';
console.log(typeof num);
var a = parseInt(num);
 */

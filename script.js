//two ways of doing it
//get the input in each behaviour



const gcs = {
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
        no-response: 1
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

$(function () {
    $('form').on('submit', function(event){
        event.preventDefault();
       console.log('hello');
    }

    const user-eye-response = $('input[name=eye-response]:checked').val();
    const user-verb-response = $('input[name=verb-response]:checked').val();
    const user-motor-response = $('input[name=motor-response]:checked').val();
    

    


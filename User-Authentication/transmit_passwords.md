### transmitting password : [[Transmitting passwords]]

plain password send . 

encryption isn't a trademark for security  . 

There should be some way to verify the server .

just adding encryption doesn't give you security . you have to verify to reciever ( server )  . hased password has the same semantic powers as of password .


##### here comes  challenge response protocol 
	hash ( challenge || password )

##### anti hammering defences 

`guessing passwords in a loop is disastrous . `


    rate limiting number of guesses  ... number of guesses / time
     timeouts  o incorrect passwords . 


all of this is because password have really low entropy .. and attackers might cycle through that low entropy space and perform a guess
#2024-09-17 


##### Password is saved on SERVER against user . 
  - We perform a look-up in the table and perform a check . 
###### The problems associated with this . 
  - If server is compromised , every user gets compromised . 
  - Even if we store hashes instead of actual passwords there is a problem .
  
      - Empirical  data shows that 20% of user's have passwords from top 5000 passwords .
      - Attacker can easily check hashes of these password's with the table and find the matches. 
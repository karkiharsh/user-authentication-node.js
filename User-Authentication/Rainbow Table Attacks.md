#2024-09-19 


It is really embarrassing to be storing raw passwords.
- There is always a chance of server getting compromised.

---

So we store there hashed-values.
- Even if server get's compromised , only hashed-value would expose.

---

But !
there is  , 
an efficient way to figure out *password* from *hash-value*s . And it is called a Rainbow table.

---

#### Use of  a rainbow table
Efficient look-up of hashed values to password mapping . (saves lots of time)

No need to store all hashed-value  to  password mapping.
 
#### Components of a rainbow table
Hashing Function  -> one to one (deterministic)

Reducing Function -> many to one 

##### Simple Idea


***password***->hash value-->(*reducing function*)->**new password like string** ->hash value
-->(*reducing function*)->**new password like string**->hash value-->(*reducing function*)->...........................-->(*reducing function*)->**new password like string**->***hash value***


This ***password*** and ***hash value*** is used for checkup . 

If not found on first try  . The message that is to be checked is reduced till the length of a particular chain ( number of reducing attempts on it ) . and if it matches with a hash .. we recompute that chain again . 

reducing functions  are many to one ... but if your hash matches you can regenerate the chain and see for the corresponding password . 


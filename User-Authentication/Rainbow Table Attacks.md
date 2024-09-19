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
Hashing Function

Reducing Function

#### Simple Idea


# 3 - Largest prime factor

## 01/05/2021

[Web page](https://projecteuler.net/problem=3)

### Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

---

#### My thoughts

I haven't the faintest idea what a prime factor is or how you work them out.

Let's think about this for a second.

I think I've got it. This is just a guess, but are the prime numbers the only (prime) numbers that will equally divide?

    13195 / 5 = 2,639
    13195 / 7 = 1,885
    13195 / 13 = 1,015
    13195 / 29 = 455

Well, they're all dividing equally.

#### Simple test

Let's try this theory out by writing a function to calculate the first 50 sequencial numbers out and see how many divide evenly.

Here's an idea - try it both in JS and Python.

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

#### Stuff I looked at along the way

[A page on prime numbers](<https://www.factmonster.com/math-science/mathematics/prime-numbers-facts-examples-table-of-all-up-to-1000#:~:text=To%20prove%20whether%20a%20number,number%20(see%20table%20below).>)

Found this as well. Don't know if it's any use or even relevant now, but hey...

Probably is, it's about checking whether a calculated number is an iteger or a float - or rather, does it contain fractionals (I think I just made that last word up).

[A web page](https://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number)

Ok, got it sorted. Numbers well over a million, and I've been drinking whisky so I don't know what the results mean.

Time to call it a day. It's now 2:56AM and I've been on this computer since 8AM (apart from going food shopping after lunch).

Night...

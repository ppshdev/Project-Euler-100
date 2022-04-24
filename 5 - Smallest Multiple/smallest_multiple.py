# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

limit = 10

for i in range(1, limit):
    j = 1
    run = True
    while run:
        if i % j == 0:
            j += 1
            print(f"{i} % {j}")
        else:
            # print("Nope")
            # print(f"{i} % {j}")
            # print()
            run = False

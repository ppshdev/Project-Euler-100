# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

iter_number = 5
start_num = iter_number * 2
keep_going = True


# calc should start at twice the initial number?


def test_number(test_number, i):
    count = 1
    all_good = False
    for i in range(1, iter_number):
        if iter_number % count == 0:
            all_good = False
            print("false")
            print(f"{iter_number} % {count} = {iter_number % count}")
        else:
            all_good = True
            print("true")
            print(f"{iter_number} % {count} = {iter_number % count}")
        count += 1
    return all_good


for i in range(2, start_num + 1):
    number = start_num

    while keep_going:
        if number % i == 0 and i != number:
            print(f"Yes - {number} % {i} = {number % i}")
            # got a match, now test the other numbers against this one

            keep_going = test_number(number, i)
        elif number % i != 0 and i != number:
            print(f"No - {number} % {i} = {number % i}")

# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

limit = 5
active = True
test_num = 1

# create the main loop to create the number to check
for i in range(1, limit + 1):
    j = True
    # loop to find the smallest number with even division
    while j:
        # make the calculation
        running_result = test_num / i
        # print it out
        # print(f"{test_num} / {i} = {running_result}")
        # check if the number cleanly divides
        if running_result % test_num == 0:
            print(f"{test_num} % {running_result} = 0")
            j = False
            break
            # result += 1
        else:
            test_num += 1
            #     print("True")
            break

# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

# easy bit first - check for palindrome - https://www.w3resource.com/python-exercises/challenges/1/python-challenges-1-exercise-18.php
def check_palindrome(num, j, i, result):
    # print(type(result))
    str_num = str(result)
    lst = list(str_num)
    lst.reverse()
    rev_str_num = "".join(lst)
    rev_num = int(rev_str_num)
    # print(num)
    # print(rev_num)

    if result == rev_num:
        print("palindrome")
        print(f"{j} * {i} = {result}")
    # else:
    #     print("not palindrome")


# check_palindrome(12355321)
results = []


def calculate(num):

    for i in range(10, num):
        for j in range(10, num):
            result = j * i
            # print(f"{j} * {i} = {result}")
            check_palindrome(num, j, i, result)


calculate(20)

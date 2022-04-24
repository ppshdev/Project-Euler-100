# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

# easy bit first - check for palindrome - https://www.w3resource.com/python-exercises/challenges/1/python-challenges-1-exercise-18.php

import json

results = {}
results_list = []


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
        results_list.append(result)
        res_dict = {"j": j, "i": i, "result": result, "string": f"{j} * {i} = {result}"}
        results[result] = res_dict
        # print("palindrome")
        # print(f"{j} * {i} = {result}")
    # else:
    #     print("not palindrome")


# check_palindrome(12355321)


def calculate(num):

    for i in range(100, num):
        for j in range(100, num):
            result = j * i
            # print(f"{j} * {i} = {result}")
            check_palindrome(num, j, i, result)

    sorted_results = results_list
    sorted_results.sort()
    print(sorted_results)
    with open(
        "./4 - Largest palindrome product/results.json", "w", encoding="utf-8"
    ) as f:
        json.dump(sorted_results, f, indent=4, ensure_ascii=False)


def save_file():
    with open(
        "./4 - Largest palindrome product/palindromes.json", "w", encoding="utf-8"
    ) as f:
        json.dump(results, f, indent=4, ensure_ascii=False)


calculate(1000)
save_file()

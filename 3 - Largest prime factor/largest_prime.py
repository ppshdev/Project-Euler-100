input_num = 100
my_list = []

# if input_num > 1:
#     for i in range(2, input_num):
#         if (input_num % i) == 0:
#             break
#         else:
#             my_list.append(i)

# print(my_list)
print(len(my_list))

# Might be getting somewhere - Math Adventures with Python (pdf book) page 40 factors.py
def factors(num):
    """
    returns a list of the factors of input_num
    """
    factor_list = []
    prime_factors = []
    for i in range(2, num + 1):
        flag = 0
        for j in range(2, i):
            if i % j == 0:
                flag = 1
                continue
        # for is_prime in range(2, factor_list):
        #     if is_prime %
        if flag == 0:
            if num % i == 0:
                factor_list.append(i)
    return factor_list


#  600851475143
# out = factors(60085)
# print(out)

p = 600851475143  # our prime number

n = 2  # our potential factor

while n * n < p:

    while p % n == 0:

        p = p / n

    n = n + 1

print(p)

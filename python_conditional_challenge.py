def stringChecker(x):
    if type(x) == str:
        return True
    else:
        return False

print(stringChecker("hello there"))
print(stringChecker(124))

# **********************************

def cap_first_letter(string):
    new_string = string.capitalize()
    return new_string

print(cap_first_letter('hello there'))

# ***********************************

def number_compare(x, y):
    num_one = x
    num_two = y
    big_number = max(num_one, num_two)
    return big_number

print(number_compare(14, 3))

# **********************************

def string_joiner(x, y):
    str_one = x
    str_two = y
    z = str_one + ' ' + str_two
    return z

print(string_joiner('Hello', 'there'))
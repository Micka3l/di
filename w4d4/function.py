# def calculation(a,b):
#     return a-b , a+b
  
# res = calculation(22, 62)
# print(res[0])
# print(res[1])

# import string
# alphabet_lower = list(string.ascii_lowercase)
# alphabet_upper = list(string.ascii_uppercase)
# def user_cypher(message, shift, encrypt_or_decrypt):
#     cyphered_message = ''
#     extra_chars = [' ', ',', '.', '!', "'"]
#     for letter in message:
#         if letter in extra_chars:
#             cyphered_message += letter
#         else :
#             upper_or_lower = alphabet_upper if letter.isupper() else alphabet_lower
#             index_of_letter = upper_or_lower.index(letter) 
#             if encrypt_or_decrypt == 'encrypt' :
#                 cyphered_message += upper_or_lower[index_of_letter - shift]
#             else :
#                 if index_of_letter >= 26 - shift: 
#                     new_index = index_of_letter + shift - 26
#                     cyphered_message += upper_or_lower[new_index]
#                 else :
#                     cyphered_message += upper_or_lower[index_of_letter + shift]
#     return cyphered_message
# def get_cypher_info():
#     message = input("What is your message?")
#     shift = 0
#     while True:
#         encrypt_or_decrypt = input('Would you like to encrypt or decrypt?')
#         if encrypt_or_decrypt in ['encrypt', 'decrypt']:
#             break
#     while shift == 0:
#         shift = int(input('Choose amount to shift the letters'))
#     cypher_message = user_cypher(message, shift, encrypt_or_decrypt)
#     print(f"Here's your {encrypt_or_decrypt}ed message: {cypher_message}")
# get_cypher_info()

# FUNCTION
def say_hello(username, age):
    """A function that says hello"""
    print(f"Hello {username} you are {age} years old!") 
# valid calls
# say_hello(username='rick', age=37)
# say_hello(age=37, username='rick')
# say_hello('rick', 37)
# say_hello('rick', age=37)
# invalid calls
# say_hello(age=37, 'rick')
# say_hello()
# say_hello(37, username='rick')
def get_user_info():
    name = input('give me your name: ')
    age = input('give me your age: ')
    say_hello(name, age)
# get_user_info()
def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + last_name
    return full_name.title()
# for letter in get_formatted_name('jimi', 'hendrix'): 
#     print(letter)
def divide_by_three(number):
  return number / 3
# print( divide_by_three(12))
def calculation(a, b):
    return a-b, a+b
# res = calculation(40, 10)
# print(res[0])
# print(res[1])
def greet_users(users):
    x = users.copy()                              # users should be a list
    for user in users:              # Because it's a list, we can loop through it
        print(f"Hello {user.title()}!")       # For each user, print "hello" and then his name
        users.pop()
# usernames = ["steve", "stan", "debbie"]
# greet_users(usernames)
# print(usernames)
# sorted(usernames)
# usernames.sort()
unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron'] 
completed_models = []
# Simulate printing each design until none are left. 
# Move each design to completed_models after printing. 
while len(unprinted_designs) != 0:    
    current_design = unprinted_designs.pop() 
    # Simulate creating a 3D print from the design.    
    print("Printing model: " + current_design)    
    completed_models.append(current_design)    
# Display all completed models. 
print("\nThe following models have been printed:") 
for completed_model in completed_models:    
    print(completed_model)
def print_models(unprinted_designs, completed_models):
    """    
    Simulate printing each design until none are left.    
    Move each design to completed_models after printing.    
    """
    while unprinted_designs:        
        current_design = unprinted_designs.pop()            
        # Simulate creating a 3D print from the design.        
        print("Printing model: " + current_design)        
        completed_models.append(current_design)
def show_completed_models(completed_models):    
    """
    Show all the models that were printed.
    """    
    print("\nThe following models have been printed:")   
    for completed_model in completed_models:        
        print(completed_model)        
unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron'] 
completed_models = []
# print_models(unprinted_designs, completed_models)
# show_completed_models(completed_models)
# affecting change on the list itself
usernames = ["steve", "stan", "debbie"]
def add_family_names1(users):
    for index, user in enumerate(users):
        users[index] += 'Robinson'
# add_family_names(usernames)
# print(usernames)
# making a copy to not affect the original list
def add_family_names2(users):
    new_users = users.copy()
    for index, user in enumerate(new_users):
        new_users[index] += 'Robinson'
    new_users = [u + 'Robinson' for u in users]
    return new_users
# print(add_family_names2(usernames))
# print(usernames)
def check_arguments(*args):
    for arg in args:
        print(f" argument: {arg}")
# check_arguments(*'hello world')
# print('hello', 'world', 34)
def addition(*numbers):
    total = 0
    for num in numbers:
        total+= num
    return total
# print(addition(*range(3,100)))
# print(addition(1,45,765,92,34))
# a,b, *nums = range(1,100)
# print(a,b)
# print(nums)
def  check_keywordedarguments(**kwargs):
    '''recieve key and values from the call to the function and packs 
    them into a dictionary named kwargs'''
    # for key, value in kwargs.items():
    #     print(f'{key} : {value}')
    print(kwargs)
# check_keywordedarguments(name='toby', age=45, profession='hoola hoop dancer')
def upper_string(s):
    return s.upper()
def add_family_name(s):
    return s + 'Robinson'
fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
map_object = map(lambda s:s.upper(), fruit)
print(list(map_object))
map_object = map(upper_string, fruit)
print(list(map_object))
print(list(filter(lambda s:s[0] == 'A' and 'i' in s, fruit )))
map_object2 = map(add_family_name, usernames)
print(usernames)
print(list(map_object2))
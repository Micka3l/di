# exercise 1

# def display_message():
#     print("I learned function")

# display_message()

# exercise 2

# def favorite_book():
#     title = input("choose a book")
#     print(f"One of my favorite books is {title}")
    
# favorite_book()

# exercise 3

# def describe_city(city, country = "France"):
#     print(f"my {city} in this {country}")

# describe_city("Nice")

# exercise 4

# import random

# def numbers(num):
#     ran = random.randint(0,100)
#     if num > 1 and num < 100 :
#         print(num)
#         print(ran)
#     if num == ran :
#         print("Success")
#     else :
#         print("Fail {num} not egal {ran} ")

# numbers(22)

# exercise 5

# def make_shirt(size="large", text="I love Python"):
#     text1 = "GOOD MAN!!"
#     size1 = "large and medium"
#     print(f"the shirt have the size of {size} and he have {text} print on it")
#     if size == "large" and size == "medium" :
#         print(f"those shirt have the size of {size} and he have {text} print on it")
#     else : 
#         print(f"the shirt have the size of {size1} and he have {text1} print on it")

# make_shirt()

# exercise 6

list_of_magician = ["Gérard Majax", "David Copperfield"]

def show_magicians():
    for mage in list_of_magician :
        print(mage)

def make_great():
    for mage in list_of_magician :
        print(f"The great {mage}")

show_magicians()
make_great()
# name = 'Mickael Sellam'

# age = 32 

# num1 = 3 
# num2 = 4

# print (name)
# print(num1 * num2)
# print(num1 + num2)

# # exercice 1
# my_age = 32
# yeartoday = 2021
# yearfuture = 123879
# print(yearfuture - yeartoday)

# # exercise 2
# first_name = 'Mickael'
# last_name = 'Sellam'
# print(last_name+' '+first_name)

# exercise variable
#For example,  
# my_name = "Frank"  this line creates a name variable type: string 
#print("My name is {}".format(my_name))
    
# # variable create integer
# cars = 100
# # variable create float
# space_in_a_car = 4.0
# # variable create integer
# drivers = 30
# # variable create integer
# passengers = 90
# # variable soustraction string
# cars_not_driven = cars - drivers
#     # variable create integer
# cars_driven = drivers
#     # variable create integer
# carpool_capacity = cars_driven * space_in_a_car
#     # variable create float
# average_passengers_per_car = passengers / cars_driven


# print("There are", cars, "cars available.")
# print("There are only", drivers, "drivers available.")
# print("There will be", cars_not_driven, "empty cars today.")
# print("We can transport", carpool_capacity, "people today.")
# print("We have", passengers, "to carpool today.")
# print("We need to put about", average_passengers_per_car,"in each car.")

number = int(input("choose a number between 1 and 100: "))

if number % 3 == 0 and number % 5 == 0:
    print("Fizz")
elif number % 3 == 0:
    print("Buzz")
elif number % 5 == 0:
    print("FizzBuzz")

# # names = ["Aparna", "Thuthu", "Rahul", "Meera"]
# # grades = [85, 92, 78, 90]
# # student_grades = dict(zip(names, grades))
# # print(student_grades)


# # list1 = [10, 20, 30, 40]
# # list2 = [1, 2, 3, 4]
# # sum = [a + b for a, b in zip(list1, list2)]
# # print(sum)


# # list1 = [10, 20, 30]
# # list2 = [1, 2, 3]
# # zipped = zip(list1, list2)
# # zipped = list(zipped)
# # print(zipped)



# # 2. Create a set of unique student names from a list. Then perform union, 
# # intersection, and difference operations on two sets of numbers. Finally, check if one set is a subset of another

# student_list = ["Aparna", "ammu", "thuthu", "Aparna", "ridhi"]
# unique_students = set(student_list)
# print("Unique student names:", unique_students)


# set1 = {1, 2, 3, 4, 5}
# set2 = {4, 5, 6, 7, 8}


# union= set1.union(set2)
# print("Union of set1 and set2:", union)


# intersection = set1.intersection(set2)
# print("Intersection of set1 and set2:", intersection)


# difference= set1.difference(set2)
# print("Difference (set1 - set2):", difference)


# Create a nested list and make a shallow copy.
# Modify the inner list and observe the changes

list1 = [1, 2, [3, 4]]


copy = list1.copy()

copy[2][0] = 99

print("Original:", list1)
print("Shallow: ", copy)

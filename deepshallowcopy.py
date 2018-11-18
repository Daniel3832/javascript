import copy


old_list = [[1, 2, 3], [4, 5, 6], [7, 8, 'a']]
# new_list = old_list
new_list = copy.copy(old_list)

old_list.append([4, 4, 4])
# old_list[1][1] = 'AA'

# new_list[2][2] = 9
print("Old list:", old_list)
print("New list:", new_list)

# print('Old List:', old_list)
# print('ID of Old List:', id(old_list))

# print('New List:', new_list)
# print('ID of New List:', id(new_list))

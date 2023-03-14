# JS로는 풀지 못하는 문제 
#-*- coding:utf-8 -*-

import sys

n = int(input())
counting_sort_arr = [0] * 10001

for i in range(n):
  number = int(sys.stdin.readline())

  counting_sort_arr[number] += 1

for i in range(10001):
  if counting_sort_arr[i] != 0:
    for j in range(counting_sort_arr[i]):
      print(i)
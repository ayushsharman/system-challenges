Problem: Design a HashMap
Implement a simple hash map from scratch using arrays and chaining in C++.

Class: MyHashMap

Methods:

put(key, value)

get(key)

remove(key)

Handle collisions using array of linked lists or buckets

Don’t use JS Map or Object — implement from scratch

⏳ Estimated Time: 45–60 mins
📁 File: system-challenges/dsa/hashmap.js


Solutioning:
I need an array where I will store the value, index will be my key:
    vector<> buckets;
hash function to store the value
    key%SIZE;
collision
    vector<list<pair<int, int>>> buckets;

now functions needed:
get, put, remove

get:
    if present in hashmap return
    else return -1

    int get(int key){
        find index of the key using hashing function
        for(aut p: bucket[index]){
            if(key found)
                return key.value
        }
        else return -1;
    }

put
    check if in the hashmap, if there already exists a key, if yes we need to hash it put against a list
    if not make a key and store on that index

remove
    we need to remove the value right from the hashmap? so I guess we would need p.second
    we will again start by Hash function I assume, once we've the index

    now for bucket, go and see if p.first == key given
        pop the value
    otherwise if loop is over that means no value was found

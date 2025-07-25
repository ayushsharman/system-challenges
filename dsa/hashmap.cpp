#include <bits/stdc++.h>
using namespace std;


class MyHashMap
{
private:
    int SIZE;
    vector<list<pair<int, int>>> buckets;

    int hashFunction(int key)
    {
        return key % SIZE;
    }

public:
    MyHashMap(int size = 1000)
    {
        SIZE = size;
        buckets.resize(SIZE);
    }

    int get(int key)
    {
        int index = hashFunction(key);

        for (auto &p : buckets[index])
        {
            if (p.first == key)
                return p.second;
        }
        return -1;
    }

    void put(int key, int val)
    {
        int index = hashFunction(key);

        for (auto &p : buckets[index])
        {
            if (p.first == key)
            {
                p.second = val;
                return;
            }
        }

        buckets[index].push_back({key, val});
    }

    void remove(int key)
    {
        int index = hashFunction(key);
        auto &bucket = buckets[index];
        for (auto it = bucket.begin(); it != bucket.end(); ++it)
        {
            if (it->first == key)
            {
                bucket.erase(it);
                return;
            }
        }
    }

    bool contains(int key)
    {
        int index = hashFunction(key);
        for (auto &p : buckets[index])
        {
            if (p.first == key)
                return true;
        }
        return false;
    }

    void clear()
    {
        for (auto &bucket : buckets)
        {
            bucket.clear();
        }
    }
};
int main()
{
    MyHashMap map(100);

    // Basic Insertions
    map.put(1, 100);
    map.put(2, 200);

    // Overwrite Value
    map.put(1, 999); // Overwrite test
    cout << "After overwrite (expected 999): " << map.get(1) << endl;

    // Remove Non-Existent Key
    map.remove(3); // Should not crash or throw

    // Get After Remove
    map.remove(2);
    cout << "After remove key 2 (expected -1): " << map.get(2) << endl;

    // Contains
    cout << "Contains key 1? (expected 1): " << map.contains(1) << endl;
    cout << "Contains key 2? (expected 0): " << map.contains(2) << endl;

    // Clear Test
    map.clear();
    cout << "After clear, get key 1 (expected -1): " << map.get(1) << endl;
    cout << "After clear, contains key 1? (expected 0): " << map.contains(1) << endl;

    return 0;
}

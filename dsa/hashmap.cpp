#include <bits/stdc++.h>
using namespace std;

int SIZE = 1000;

int hashFunction(int key)
{
    return key % SIZE;
}

int get(int key, vector<list<pair<int, int>>> &buckets)
{
    int index = hashFunction(key);

    for (auto &p : buckets[index])
    {
        if (p.first == key)
            return p.second;
    }
    return -1;
}

void put(int key, int val, vector<list<pair<int, int>>> &buckets)
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

void remove(int key, vector<list<pair<int, int>>> &buckets)
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

int main()
{
    vector<list<pair<int, int>>> buckets(SIZE);

    put(5, 100, buckets);
    put(25, 120, buckets);
    put(2, 12, buckets);
    put(3, 10, buckets);

    cout << get(3, buckets) << endl;
    cout << get(5, buckets) << endl;
    cout << get(25, buckets) << endl;
    cout << get(2, buckets) << endl;
    remove(2, buckets);
    cout << get(2, buckets) << endl;

    return 0;
}
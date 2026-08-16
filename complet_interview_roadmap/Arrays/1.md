# Bubble Sort, Selection Sort, and Insertion Sort (Without Predefined Functions)

Sorting algorithms are one of the most frequently asked interview topics. The three basic sorting algorithms are:

1. Bubble Sort
2. Selection Sort
3. Insertion Sort

---

# 1. Bubble Sort

## Idea

Compare **adjacent elements** and swap them if they are in the wrong order.

After every pass, the **largest element moves to the end** (like a bubble rising to the top).

---

## Example

```text
Input

5 2 9 1 5 6
```

After Pass 1

```text
2 5 1 5 6 9
```

Largest element (9) reaches the end.

---

## Code

```javascript
function bubbleSort(arr){

    let n = arr.length;

    for(let i = 0; i < n - 1; i++){

        let swapped = false;

        for(let j = 0; j < n - i - 1; j++){

            if(arr[j] > arr[j + 1]){

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }

        }

        if(!swapped){
            break;
        }

    }

    return arr;
}

console.log(bubbleSort([5,2,9,1,5,6]));
```

Output

```text
[1,2,5,5,6,9]
```

---

## Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(n)       |
| Average | O(n²)      |
| Worst   | O(n²)      |

Space

```text
O(1)
```

---

## Advantages

* Easy to understand.
* Stable sorting algorithm.
* Good for learning.

## Disadvantages

* Slow for large datasets.

---

# 2. Selection Sort

## Idea

Find the **smallest element** from the unsorted part and place it in the correct position.

Instead of many swaps, it performs **one swap per pass**.

---

## Example

```text
Input

5 2 9 1 5 6
```

Pass 1

Smallest element = 1

Swap with first element

```text
1 2 9 5 5 6
```

---

## Code

```javascript
function selectionSort(arr){

    let n = arr.length;

    for(let i = 0; i < n - 1; i++){

        let minIndex = i;

        for(let j = i + 1; j < n; j++){

            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }

        }

        if(minIndex !== i){

            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;

        }

    }

    return arr;
}

console.log(selectionSort([5,2,9,1,5,6]));
```

Output

```text
[1,2,5,5,6,9]
```

---

## Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(n²)      |
| Average | O(n²)      |
| Worst   | O(n²)      |

Space

```text
O(1)
```

---

## Advantages

* Performs fewer swaps than Bubble Sort.
* Easy to implement.

## Disadvantages

* Always checks every remaining element.
* Not stable in its basic implementation.

---

# 3. Insertion Sort

## Idea

Assume the left side is already sorted.

Take the next element and insert it into the correct position.

Works just like sorting playing cards in your hand.

---

## Example

```text
Input

5 2 9 1 5 6
```

Insert 2

```text
2 5 9 1 5 6
```

Insert 9

```text
2 5 9 1 5 6
```

Insert 1

```text
1 2 5 9 5 6
```

Continue until sorted.

---

## Code

```javascript
function insertionSort(arr){

    let n = arr.length;

    for(let i = 1; i < n; i++){

        let current = arr[i];

        let j = i - 1;

        while(j >= 0 && arr[j] > current){

            arr[j + 1] = arr[j];

            j--;

        }

        arr[j + 1] = current;

    }

    return arr;
}

console.log(insertionSort([5,2,9,1,5,6]));
```

Output

```text
[1,2,5,5,6,9]
```

---

## Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(n)       |
| Average | O(n²)      |
| Worst   | O(n²)      |

Space

```text
O(1)
```

---

## Advantages

* Very fast for nearly sorted arrays.
* Stable sorting algorithm.
* Used internally in some hybrid sorting algorithms.

## Disadvantages

* Slow for large datasets.

---

# Comparison Table

| Feature      | Bubble Sort | Selection Sort | Insertion Sort               |
| ------------ | ----------- | -------------- | ---------------------------- |
| Best Time    | O(n)        | O(n²)          | O(n)                         |
| Average Time | O(n²)       | O(n²)          | O(n²)                        |
| Worst Time   | O(n²)       | O(n²)          | O(n²)                        |
| Space        | O(1)        | O(1)           | O(1)                         |
| Stable       | ✅ Yes       | ❌ No           | ✅ Yes                        |
| Swaps        | Many        | Few            | Shifting instead of swapping |
| Best For     | Learning    | Fewer swaps    | Nearly sorted arrays         |

---

# When to Use

### Bubble Sort

* Learning algorithms.
* Very small datasets.

### Selection Sort

* When minimizing swaps is important.
* Small datasets.

### Insertion Sort

* Nearly sorted arrays.
* Small datasets.
* Frequently used as part of advanced hybrid sorting algorithms.

---

# Interview Explanation

> **Bubble Sort:** Compare adjacent elements and swap them if they are out of order. After each pass, the largest element moves to the end. Best case is `O(n)` with an early-exit optimization; average and worst cases are `O(n²)`.

> **Selection Sort:** Repeatedly find the smallest element in the unsorted portion and swap it with the first unsorted element. It performs fewer swaps than Bubble Sort but always takes `O(n²)` time.

> **Insertion Sort:** Build the sorted array one element at a time by inserting each new element into its correct position among the already sorted elements. It is efficient for nearly sorted arrays, with a best-case time complexity of `O(n)`.

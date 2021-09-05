title: Different Perspectives of Count Stair Ways
subtitle: We explore various approaches to tackle the problem of distinct ways of climbing stairs
date: 2021-09-04

To begin let's reiterate the problem statement. You are going up a stair case with \\( n \\) steps and can take either \\( 1 \\) or \\( 2 \\) steps at a time; how many distinct ways are there to climb this stair case?

### Tree Recursive Solution

```python
def count_stairways(n):
  if n == 0:
    return 1
  elif n < 0:
    return 0
  else:
    return count_stairways(n-1) + count_stairways(n-2)
```

To solve this problem recursively we need to recognize the pattern between smaller problems and original problem. Here we observe that if we have \\(n\\) steps remaining to climb we have two options: take \\(1\\) step or take \\(2\\) steps. There is simply nothing else that can be done.

From this we ask how many ways are there to go up the remaining \\(n-1\\) or \\(n-2\\) steps? While an exact number is not clear we have just restated our original problem with a smaller number of steps! So counting these stairs can simply be done by passing \\(n-1\\) and \\(n-2\\) to our function.

To verify this is correct we note that taking \\(1\\) or \\(2\\) steps were our only options per the problem description. Furthermore the ways to count steps described by calling the function with \\(n-1\\) or \\(n-2\\) as the argument have no overlap because the first step is guaranteed to be different. Thus we have enumerated all possible options, while avoiding double counting proving the validity of our method.

### Fibonacci Solution

Looking at the recursive relationship in the tree recursive solution we might notice a familiar form. We recall that if \\(f_i\\) denotes the \\(i\\)-th Fibonacci number, then \\(f_n = f_{n-1} + f_{n-2}\\). This recursive relationship is exactly the same! So is the number of distinct ways to climb \\(n\\) steps taking steps of size \\(1\\) or \\(2\\) simply the \\(n\\)-th Fibonacci number? It's not quite that simple.

The difference comes from the base case. Our function defines the base case such that when \\(n\\) is \\(0\\) we return \\(1\\). However the \\(0\\)-th Fibonacci number is \\(0\\). So the difference in base case consequently causes difference for subsequence values. However it turns out that \\(1\\) is the \\(1\\)-st Fibonacci number so we see that counting ways to go up \\(n\\) steps corresponds to the \\((n+1)\\)-st Fibonacci number. Assuming we have a function, \\(fib(n)\\) that returns the \\(n\\)-th Fibonacci number we can rewrite our function as follows.

```python
def count_stairways(n):
  return fib(n+1)
```

### Linear Algebra Solution

The Fibonacci sequence is a sequence based on the recursive relationship, where if \\(f_i\\) denotes the \\(i\\)-th Fibonacci number, then \\(f_n = f_{n-1} + f_{n-2}\\). In an attempt to exploit geometry to further understand this sequence we define a real-valued column vector with two entries as follows,

\\[\mathbf{x}\_n = \begin{bmatrix} f_{n} \\\\ f_{n-1}  \end{bmatrix} \\]

Embedding this sequence in two dimensions allows us to describe the recursive relationship via the following matrix evolution,

\\[
  \begin{align} \mathbf{x} &= \begin{bmatrix} 1 & 1 \\\\ 1 & 0 \end{bmatrix} \mathbf{x}\_{n-1} \\\\
              &= \mathbf{A}x_{n-1}
\end{align} \\]

To completely describe the above system we assign

\\[\mathbf{x}_1 = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix} \\]

and then use aforementioned matrix evolution to unambiguously define \\(\mathbf{x_n}\\) for all integers \\(n > 1\\)

Using the machinery of Linear Algebra that EECS16A, EECS16B, Math54, etc. have built we can gain new insights into our problem. We duly observe the following fact: \\(\mathbf{A}\\) is a symmetric matrix (i.e \\(a_{ij} = a_{ji}\\) for all suitable \\(i, j\\)). A matrix being symmetric implies that geometrically it corresponds to nothing more than "stretches" along the appropriate directions. This idea is formally given rigor by the spectral theorem for linear operators over a complex field[^1]. This tells us that we can rewrite \\(\mathbf{A} = \mathbf{P}\mathbf{\Lambda}\mathbf{P}^{-1}\\) where \\(\mathbf{\Lambda}\\) is diagonal and \\(\mathbf{P}\\) has columns which are unit-norm and pairwise orthogonal. From this we see the repeated "stretches" algebraically correspond to,

\\[
\begin{align}
 \mathbf{x}\_{n} &= \mathbf{A} \mathbf{x}_{n-1} \\\\
              &= \mathbf{A}^{n-1}\mathbf{x}_1 \\\\
              &= \left(\mathbf{P}\mathbf{\Lambda}\mathbf{P}^{-1}
                 \right)^{n-1}\mathbf{x}_1 \\\\
              &= \mathbf{P}\mathbf{\Lambda}^{n-1}\mathbf{P}^{-1}\mathbf{x}_1
\end{align}
\\]

Calculating the eigenvalues we have that \\(\lambda_{1} = \frac{1}{2}(1+\sqrt{5}) \\) and \\(\lambda_{2} = \frac{1}{2}(1-\sqrt{5}) \\). Numerically quite interesting because \\(\lambda_1\\), or the first eigenvalue, is famously known as the golden ratio[^2]. Calculating the corresponding eigenvectors and algebraically churning numbers out we get,


\\[
\begin{align}
 \mathbf{x}\_{n} &= \mathbf{P}\mathbf{\Lambda}^{n-1}\mathbf{P}^{-1}\mathbf{x}_1 \\\\
                  &= \begin{bmatrix} \frac{1}{\sqrt{5}}(\lambda_1^{n} - \lambda_2^{n}) \\\\ \frac{1}{\sqrt{5}}(\lambda_1^{n-1} - \lambda_2^{n-1})  \end{bmatrix}
\end{align}
\\]

From our construction it then follows that, \\(f_n = \frac{1}{\sqrt{5}}(\lambda_1^{n} - \lambda_2^{n}) \\); this formula is also known as Binet's Formula[^3]. Now since we ascertained that counting the number of ways to go up \\(n\\) steps corresponds to \\(f_{n+1}\\) it follows that \\(\frac{1}{\sqrt{5}}(\lambda_1^{n} - \lambda_2^{n})\\) corresponds to the number of ways to go up \\(n\\) steps using steps of size \\(1\\) or \\(2\\).


### Iterative Solution

It turns out that this problem can actually be done using only iterative methods, so no recursion. We include this version for completeness, however it is not particularly interesting because all we have done is restate the same recursive relationship as above. There are no fundamentally new ideas here, just as Fibonacci numbers can be computed either recursively or iteratively. A warning will be that not all recursive solutions can be converted to nice iterative loops as below, there is some optimal relationship between a problem and its smaller problems that allows this to happen. Although the exact details of this are out of scope of 61A and are further discussed in 61B and 170.

```python
def count_stairways(n):
  curr, prev_1, prev_2 = 1, 1, 0
  for i in range(n - 1):
    curr, prev_1, prev_2 = curr + prev_1, curr, prev_1
  return curr
```


[^1]: The name spectral being attached is largely credited to David Hilbert and relates to the use of similar methods to study atomic spectra in physics.


[^2]: This ratio has an odd claim to fame because many of its purported appearances in nature, art, and architecture are contested. However, certain parts of natures relating to spirals on sunflowers, or proportion of drones to female bees are related to the golden ratio for acknowledged as true.


[^3]: Though this formula was named after French Mathematician Jacques Phillipe Marie Binet, it was known to famous French Mathematician Abraham de Moivre, one century earlier.

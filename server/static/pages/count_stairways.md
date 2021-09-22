title: Different Perspectives of Count Stair Ways
subtitle: We explore various approaches to tackle the problem of distinct ways of climbing stairs
date: 2021-09-22

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
  \begin{align} \mathbf{x}\_{n} &= \begin{bmatrix} 1 & 1 \\\\ 1 & 0 \end{bmatrix} \mathbf{x}\_{n-1} \\\\
              &= \mathbf{A}x_{n-1}
\end{align} \\]

To completely describe the above system we assign

\\[\mathbf{x}_1 = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix} \\]

and then use aforementioned matrix evolution to unambiguously define \\(\mathbf{x}_n\\) for all integers \\(n > 1\\). Looking at the matrix equation we now have that the first component of \\(\mathbf{x}_n\\) corresponds to the \\(n\\)-th Fibonacci number.

Using the machinery of Linear Algebra that EECS16A, EECS16B, Math54, etc. have built we attempt to gain insight by changing coordinates. By writing our matrix \\(\mathbf{A}\\) we implicitly chose the standard basis for our computations. However this choice of basis is arbitrary as any system of coordinates could suffice, so we look towards finding a system of coordinates that helps us understand the problem. In particular we are going to look for a system of coordinates, or a basis, such that \\(\mathbf{A}\\) is a diagonal matrix with respect to this basis. We choose a basis so that \\(\mathbf{A}\\) is diagonal with respect to this basis because this is the simplest kind of matrix to understand. At this point we can proceed by calculating eigenvalues, and eigenvectors and hoping we have enough to diagonalize \\(\mathbf{A}\\)(remember not all matrices are diagonalizable!). Cranking out our eigenvectors we find that we can diagonalize \\(\mathbf{A}\\) as \\(\mathbf{A} = \mathbf{P}\mathbf{\Lambda}\mathbf{P}^{-1}\\) and exploit this in the following manner,

\\[
\begin{align}
 \mathbf{x}\_{n} &= \mathbf{A} \mathbf{x}_{n-1} \\\\
              &= \mathbf{A}^{n-1}\mathbf{x}_1 \\\\
              &= \left(\mathbf{P}\mathbf{\Lambda}\mathbf{P}^{-1}
                 \right)^{n-1}\mathbf{x}_1 \\\\
              &= \mathbf{P}\mathbf{\Lambda}^{n-1}\mathbf{P}^{-1}\mathbf{x}_1
\end{align}
\\]

Calculating the eigenvalues we have that \\(\lambda_{1} = \frac{1}{2}(1+\sqrt{5}) \\) and \\(\lambda_{2} = \frac{1}{2}(1-\sqrt{5}) \\). These eigenvalues are quite interesting because \\(\lambda_1\\), or the first eigenvalue, is famously known as the golden ratio[^2]. We can compute or easily verify that the corresponding eigenvectors \\(\mathbf{v}_1\\) and \\(\mathbf{v}_2\\) for \\(\lambda_1\\) and \\(\lambda_2\\) are,
\\[
\begin{align}
\mathbf{v}_1 &= \begin{bmatrix} \lambda_1 \\\\ 1 \end{bmatrix} \\\\
\mathbf{v}_2 &= \begin{bmatrix} \lambda_2 \\\\ 1 \end{bmatrix}
\end{align}
\\]

Given that our eigenvectors span a 2D space, or they are linearly independent, we can write our initial vector as \\(\mathbf{x}_1\\) as,
\\[
\begin{equation}
  \mathbf{x}_1 = \frac{1}{\sqrt{5}}\mathbf{v}_1- \frac{1}{\sqrt{5}}\mathbf{v}_2
\end{equation}
\\]

From this we can now proceed easily and get an explicit expression for Fibonacci numbers as follows,

\\[
\begin{align}
 \mathbf{x}\_{n+1} &= \mathbf{A}^n\mathbf{x}_1 \\\\
  &= \mathbf{A}^n \left(\frac{1}{\sqrt{5}}\mathbf{v}_1- \frac{1}{\sqrt{5}}\mathbf{v}_2 \right)\\\\
  &= \mathbf{A}^n\frac{1}{\sqrt{5}}\mathbf{v}_1- \mathbf{A}^n\frac{1}{\sqrt{5}}\mathbf{v}_2
 \\\\
&= \frac{\lambda\_{1}^{n}}{\sqrt{5}}\mathbf{v}_1- \frac{\lambda\_{2}^{n}}{\sqrt{5}}\mathbf{v}_2
\end{align}
\\]

From our construction it then follows that, \\(f_n = \frac{1}{\sqrt{5}}(\lambda_1^{n} - \lambda_2^{n}) \\); this formula is also known as Binet's Formula[^3]. Now since we ascertained that counting the number of ways to go up \\(n\\) steps corresponds to \\(f_{n+1}\\) it follows that \\(\frac{1}{\sqrt{5}}(\lambda_1^{n+1} - \lambda_2^{n+1})\\) corresponds to the number of ways to go up \\(n\\) steps using steps of size \\(1\\) or \\(2\\). The strategy here was to embed our Fibonacci updates into a higher dimension and then use Linear Algebra to reason a formula from our analysis; the result here is quite remarkable in that irrational values as eigenvalues lead to components of \\(\mathbf{x}_n\\) that are natural numbers. This idea of embedding problems in higher dimensions is also incredibly powerful in mathematics and pops up everywhere in ordinary differential equations, partial differential equations, convex optimization, and many more.

 One comment about the above approach was that we simply attempted to diagonalize \\(\mathbf{A}\\) without knowing if this was actually possible. It turns out there is a way to tell without computing anything that this was true and it follows from a really simple idea often introduced at the end of Math 54 or midway through EECS16B. We duly observe the following fact about our matrix: \\(\mathbf{A}\\) is a symmetric matrix (i.e \\(a_{ij} = a_{ji}\\) for all suitable \\(i, j\\)). A matrix being symmetric implies that geometrically it corresponds to nothing more than "stretches" along the appropriate directions. This idea is formally given rigor by the spectral theorem for linear operators over a complex field[^1]. This tells us that we can rewrite \\(\mathbf{A} = \mathbf{P}\mathbf{\Lambda}\mathbf{P}^{-1}\\) where \\(\mathbf{\Lambda}\\) is diagonal; thus we can say symmetric matrices are automatically diagonalizable which corresponds with the geometric intuition of what it means for a matrix and its transpose to be equivalent. Remember the transpose is a matrix that does the same stretches as \\(\mathbf{A}\\), but runs the isometries backwards.

### Iterative Solution

It turns out that this problem can actually be done using only iterative methods, so no recursion. We include this version for completeness, however it is not particularly interesting because all we have done is restate the same recursive relationship as above. There are no fundamentally new ideas here, just as Fibonacci numbers can be computed either recursively or iteratively. A warning will be that not all recursive solutions can be converted to nice iterative loops as below, there is some optimal relationship between a problem and its smaller problems that allows this to happen. Although the exact details of this are out of scope of 61A and are further discussed in 61B and 170.

```python
def count_stairways(n):
  curr, prev_1, prev_2 = 1, 1, 0
  for i in range(n - 1):
    curr, prev_1, prev_2 = curr + prev_1, curr, prev_1
  return curr
```


[^1]: The name spectral being attached is largely credited to David Hilbert and his students. A surprising coincidence was that physicists later connected tools from spectral theory to quantum mechanics and the study of atomic spectra, making Hilbert's naming scheme remarkably apt.


[^2]: This ratio has an odd claim to fame because many of its purported appearances in nature, art, and architecture are contested. However, it seems certain parts of nature such as spirals on sunflowers, or the proportion of drones to female bees have a legitimate connection to the golden ratio.


[^3]: Though this formula was named after French Mathematician Jacques Phillipe Marie Binet, it was known to famous French Mathematician Abraham de Moivre, one century earlier.

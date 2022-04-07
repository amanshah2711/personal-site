title: Transposes
subtitle: We explore how to geometrically understand the transpose of a matrix
date: 2022-04-05

### Outline
<ol>
    <li>Define a problem</li>
    <li>Speculate a criterion that the solution must have</li>
    <li>Use this criterion to determine the solution</li>
    <li>Discuss implications</li>
</ol>

As prerequisite reading please skim through [projections](/pages/projections) and [geometry of linear transformations](/pages/geometry).

### 1)Define the problem
Let's say we are given a matrix \\(\mathbf{A} \in \mathbf{R}^{n \times n}\\). A general matrix \\(\mathbf{A}\\)[^1] is quite difficult to understand beyond a block of numbers. One way to approach an understanding of \\(\mathbf{A}\\) is to realize that geometrically \\(\mathbf{A}\\) is a just a few geometric actions(which are all conveniently described here). We can divide these actions into two types: isometric[^2] and others. Since \\(\mathbf{A}\\) is hard to understand perhaps it would be easier if we could break \\(\mathbf{A}\\) into two pieces, where one describes the isometric behavior of \\(\mathbf{A}\\) and the other describes the scaling behavior of \\(\mathbf{A}\\). To do this we need to isolate either behavior of \\(\mathbf{A}\\) and our goal for today will be isolating the scaling behavior of \\(\mathbf{A}\\).

So let's attempt to formulate this problem somewhat mathematically. We are looking for a matrix, \\(\mathbf{B} \in \mathbf{R}^{n \times n}\\), such that \\(\mathbf{B}\\) undoes the isometric behavior of \\(\mathbf{A}\\). That is \\(\mathbf{BA}\\) has no isometric component, which visually means \\(\mathbf{BA}\\) should do no rotating or reflecting, but simply scale along some set of axes. This notion is a little imprecise, however hopefully these examples demonstrate what \\(\mathbf{B}\\) should be doing. In all the following examples we illustrate what happens by considering the image of the unit square in \\(\mathbf{R}^2\\).

**Note:** An astute reader may observe that \\(\mathbf{A}^{-1}\\) will undo the isometric behavior of \\(\mathbf{A}\\). However the problem is many, many practical matrices are not invertible! In addition this doesn't let us isolate different "geometric" components of \\(\mathbf{A}\\) because the inverse reverses everything. Thus we seek something else.

#### Example 1)

In this example we consider the matrix which rotates vectors by \\( \theta = \frac{\pi}{4}\\). Explicity we know that we can write this matrix as,

\\[
    \mathbf{A} = \begin{bmatrix}
                     \cos(\theta) & -\sin(\theta) \\\\
                     \sin(\theta) & \cos(\theta) 
                \end{bmatrix} = \begin{bmatrix}
                     \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}}  \\\\
                     \frac{1}{\sqrt{2}}  & \frac{1}{\sqrt{2}} 
                \end{bmatrix}
\\]

As an exercise can you determine \\(\mathbf{B}\\) based on the picture?[*Hint: No complicated work is needed. Try and do this by inspection*]
<figure align="center">
  <img src="/server/static/img/transpose_rotate.png" alt=":(" width="600" height="200"/>
  <figcaption> <b>Figure 1:</b> Notice that the square has the same area and shape in each image</figcaption>
</figure>

#### Example 2)
In this example we consider the matrix which rotates vectors by \\( \theta = \frac{\pi}{4}\\)and scales uniformly by a factor of \\(2\\). Explicity we know that we can write this matrix as,

\\[
    \mathbf{A} = \begin{bmatrix}
                     2 & 0\\\\
                     0 & 2 
                \end{bmatrix} \begin{bmatrix}
                     \cos(\theta) & -\sin(\theta) \\\\
                     \sin(\theta) & \cos(\theta) 
                \end{bmatrix} = \begin{bmatrix}
                     2 & 0\\\\
                     0 & 2 
                \end{bmatrix} \begin{bmatrix}
                     \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}}  \\\\
                     \frac{1}{\sqrt{2}}  & \frac{1}{\sqrt{2}} 
                \end{bmatrix}
\\]
As an exercise can you determine \\(\mathbf{B}\\) based on the picture? [*Hint: No complicated work is needed. Try and do this by inspection*]

<figure align="center">
  <img src="/server/static/img/transpose_complex.png" alt=":(" width="600" height="200"/>
  <figcaption> <b>Figure 2:</b> The square is doubling in area after each matrix is applied.</figcaption>
</figure>

#### Example 3)
In this example we consider the matrix which scales the \\(x\\)-axis by \\(2\\) and \\(y\\)-axis by \\(0\\) and  rotates vectors by \\( \theta = \frac{\pi}{4}\\). Explicity we know that we can write this matrix as,

\\[
    \mathbf{A} =  \begin{bmatrix}
                     \cos(\theta) & -\sin(\theta) \\\\
                     \sin(\theta) & \cos(\theta) 
                \end{bmatrix}\begin{bmatrix}
                     2 & 0\\\\
                     0 & 0 
                \end{bmatrix} =  \begin{bmatrix}
                     \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}}  \\\\
                     \frac{1}{\sqrt{2}}  & \frac{1}{\sqrt{2}} 
                \end{bmatrix}\begin{bmatrix}
                     2 & 0\\\\
                     0 & 0 
                \end{bmatrix}
\\]
As an exercise can you determine \\(\mathbf{B}\\) based on the picture? [*Hint: No complicated work is needed. Try and do this by inspection*]

<figure align="center">
  <img src="/server/static/img/transpose_three.png" alt=":(" width="600" height="200"/>
  <figcaption> <b>Figure 3:</b> The square is squashed onto the \\(x\\)-axis, then rotated and stretched by a factor of 2, and finally stretched and rotated back.</figcaption>
</figure>

### 2)Speculating a criterion 

Before going forward we shall state a criterion that characterizes \\(\mathbf{B}\\) then discuss why one would speculate or choose such criterion. Given \\(\mathbf{A} \in \mathbf{R}^{n \times n}\\) and \\(x,y \in \mathbf{R}^n\\) we are looking for a matrix \\(\mathbf{B}\\ \in \mathbf{R}^{n \times n}\\) such that

\\[
    \langle \mathbf{A}x , y \rangle = \langle x , \mathbf{B}y \rangle 
\\]

Please take a moment to parse this criterion because it is *non-trivial*. 

Now we will proceed with an informal discussion of why this may be the right choice. Consider adding the constraint that \\( \lVert x \rVert = \lVert y \rVert = 1 \\) which says these vectors lie on the unit circle[^3]. Then from our knowledge of [projections](/pages/projections) we know that,

\\[
    \langle \mathbf{A}x , y \rangle  = \lVert \mathbf{A}x \rVert cos(\theta) \\\\
    \langle x, \mathbf{B}y \rangle  = \lVert \mathbf{B}y \rVert cos(\phi)
\\]
where we recall that in this case, 
\\[\begin{align}
    \theta =& \text{the angle between \\(\mathbf{A}x\\) and \\(y\\)}\\\\
    \phi=& \text{the angle between \\(\mathbf{B}y\\) and \\(x\\)}
    \end{align}
\\]

Now what choice of \\(\mathbf{B}\\) would may these two quantities equal? We could consider that one such possibility is that \\(\mathbf{B}\\) scales \\(y\\) by the same factor \\(\mathbf{A}\\) scales \\(x\\), and \\(\phi = \theta\\). In other words, let \\(\mathbf{B}\\) have the same stretch factor as \\(\mathbf{A}\\), but rotate \\(y\\) backwards so the angle formed between \\(\mathbf{B}y\\) and \\(x\\) is the same as that between \\(\mathbf{A}x\\) and \\(y\\). This is a good time to double check that that the \\(\mathbf{B}\\) found in the above examples satisfies this criterion.

### 3)Determining \\(\mathbf{B}\\) 

Using our aforementioned criterion we can precisely deduce what \\(\mathbf{B}\\) turns out to be. In fact \\(\mathbf{B}\\) is a matrix we are already familiar with! Particularly we find that, 

\\[
    \mathbf{B} = \mathbf{A}^T
\\]


<details style="background-color:aliceblue;padding:10px;">
<summary>Proof</summary>
One can verify that,

\[
    \mathbf{A}_{ij} = \langle \mathbf{A}e_i, e_j \rangle \\\\
    \mathbf{B}_{ij} = \langle \mathbf{B}e_i, e_j \rangle \\\\
\]

But we know some important information
\[
    \begin{align}
\mathbf{A}_{ij} =& \langle \mathbf{A}e_i, e_j \rangle \\\\
           =& \langle e_i, \mathbf{B}e_j \rangle \\\\
           =& \langle \mathbf{B}e_j, e_i \rangle \\\\
           =& \mathbf{B}_{ji}
           \end{align}
\]

Thus since we know \( \mathbf{B}_{ji} = \mathbf{A}_{ij}\) we can restate this fact as \(\mathbf{B} = \mathbf{A}^T\). \(\square\)
</details>

**Exercise:** Choose \\(x = \begin{bmatrix} 0 \\\\ 1 \end{bmatrix}\\), \\(y = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\), and \\( \mathbf{A} = \begin{bmatrix}1 & 1 \\\\ 0 & 1 \end{bmatrix} \\). Calculate for yourself the angle between \\(\mathbf{A}x\\) and \\(y\\) and \\(\mathbf{B}y\\) and \\(x\\) to see if they are the same. Is the norm of \\(\mathbf{A}x\\) the same as that of \\(\mathbf{B}y\\\)?

### Implications

There are many intuitive consequences of this result and this idea might help explain why several results you have already seen are true. Here is a non-exhaustive list of results you should have seen before that you should re-examine with your new geometric lense.

<ol>
    <li>Why do \(\ \mathbf{A} \) and \(\mathbf{A}^T\) have the same eigenvalues?</li>
    <li>Why is \(\dim(Col(\mathbf{A})) = \dim(Col(\mathbf{A}^T))\)? 
    <li>Why does \(\mathbf{A}^T\mathbf{A}\) have the same eigenvalues as \(\mathbf{A}\mathbf{A}^T\)? </li>
    <li>Why are  the eigenvalues of \(\mathbf{A}\mathbf{A}^T\) and \(\mathbf{A}^T\mathbf{A}\) non-negative? </li>
    <li>Why does \(\mathbf{A} = \mathbf{A}^T\) imply that the eigenvalues of \(\mathbf{A}\) are real?</li>
    <li>Why does \(\mathbf{A} = \mathbf{A}^T\) imply that \(\mathbf{A}\) is diagonalizable<sup><a class="footnote-ref" href="#fn:4">4</a></sup>?</li>

</ol>

This discussion doesn't lead to immediate proofs of the above facts, although it should aid in understanding *why* someone would conjecture the above facts to be true. Particularly useful is that the spectral theorem which should hopefully be "obvious" although its proof may be a little harder.


[^1]: For the purposes of this discussion and in almost all engineering contexts we assume that the matrix \\(\mathbf{A}\\) is written with respect to the standard basis on \\(\mathbf{R}^n\\).
[^2]: Recall that **isometry** simply means an operation that preserves norms. If you hear this term think orthonormal matrix, rotations, and reflections. A good way to remember this comes from Greek where **iso** means same and **metron** means measure. Therefore **isometry** means equal measure.*[Credit: Sheldon Axler, Linear Algebra Done Right Third Edition Page 228]*
[^3]: Or unit sphere in \\(\mathbf{R}^n\\)
[^4]: This fact is simply the spectral theorem for real matrices.


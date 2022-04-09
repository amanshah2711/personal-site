title: Geometry of Linear Transformations
subtitle: This note is simply meant to give examples about important operations that can be done via linear transformations
date: 2022-04-06

### Types of Transformations[^1] 
<ol>
    <li>Projections</li>
    <li>Reflections</li>
    <li>Dilations</li>
    <li>Shears</li>
    <li>Important aside: Gaussian Elimination</li>
    <li>Rotations</li>
</ol>

For the following discussion let \\(\mathbf{I} \in \mathbf{R}^{n \times n}\\) denote the identity matrix.
### 1)Projections

<figure align="center">
  <img src="/server/static/img/projection_geo.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 1:</b> The matrix is projecting the square onto the \(x\)-axis</figcaption>
</figure>

The important thing to understand for this discussion is projections onto a 1D subspace(a line through the origin). This is discussed in sufficient depth [here](/pages/projections). This is the building block of other transformations so please do read it closely. The essential takeaway from this should be given \\(x,y \in \mathbf{R}^n\\) then we can say the projection of \\(x\\) onto the span of \\(y\\) is some vector \\(\beta \in \mathbf{R}^n \\) of the form,

\\[
    \beta = P_y(x)\frac{y}{\lVert y \rVert} = \frac{yy^T}{\lVert y \rVert^2} x
\\]

For convenience we will define the following matrix \\(\mathbf{P}_{y} \in \mathbf{R}^{n \times n}\\),

\\[
    \mathbf{P}_{y} = \frac{yy^T}{\lVert y \rVert^2}
\\]

It turns out a defining characteristic of a projection is that applying the projection operator twice is the same as applying it once[^2]. That is a projection should intuitively satisfy,

\\[
    \mathbf{P}\_{y}^2 = \mathbf{P}_{y}
\\]
It turns out this is not that difficult to prove. Try it as an exercise, but the proof is below.
<details style="background-color:aliceblue;padding:10px;">
<summary>Proof</summary>
We see the following,
\[
    \begin{align}
    \mathbf{P}_{y} \mathbf{P}_{y} =& \frac{yy^T}{\lVert y \rVert^2} \frac{yy^T}{\lVert y \rVert^2} \\\\
                                =&  \frac{y^Ty}{\lVert y \rVert^2} \frac{yy^T}{\lVert y \rVert^2}  \\\\
                                =& \frac{\lVert y \rVert^2}{\lVert y \rVert^2} \frac{yy^T}{\lVert y \rVert^2} \\\\
                                =& \frac{yy^T}{\lVert y \rVert^2} \\\\
                                =& \mathbf{P}_{y}
    \end{align}
\]
    Thus we see that applying a projection operator twice does is the same as applying it once. \(\square\)
</details>
**Exercise:**You should verify that if you choose \\(y = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\), that you get the expected matrix that corresponds to projecting onto the \\(x\\)-axis.


### 2)Reflections

<figure align="center">
  <img src="/server/static/img/reflection.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 2:</b> The matrix is reflecting the square around the \(x\)-axis</figcaption>
</figure>

Let's consider a matrix, \\(\mathbf{W}_{y} \in \mathbf{R}^{n \times n}\\),[^3] that reflects vectors over a particular direction \\(y \in \mathbf{R}^n\\)[^4]. If we define \\(z \in \mathbf{R}^n \\) as a vector orthogonal to \\(y\\), we can explicity write \\(\mathbf{W}\_{y}\\) as follows,

\\[
   \mathbf{W}\_{y} = \mathbf{I} - 2 \mathbf{P}_{z} 
\\]

A geometric thought one can verify is that if one runs the same reflection operation twice, they should end up with the identity operation. That is a reflection is its own inverse. Again try this as an exercise, but the proof is below.

<details style="background-color:aliceblue;padding:10px;">
<summary>Proof</summary>
We see the following,
\[
    \begin{align}
    \mathbf{W}_{y} \mathbf{W}_{y} =&(\mathbf{I} - 2 \mathbf{P}_{z})(\mathbf{I} - 2 \mathbf{P}_{z}) \\\\
     =& \mathbf{I} - 4\mathbf{P}_{z}  + 4 \mathbf{P}_z^2 \\\\
     =& \mathbf{I} - 4\mathbf{P}_{z}  + 4 \mathbf{P}_z \\\\
     =& \mathbf{I} 
    \end{align}
\]
    Thus we see that a reflection is its own inverse which coincides with our intuition. \(\square\)
</details>
**Exercise:** You should verify that if you choose \\(y = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\), that you get the expected matrix that corresponds to reflecting across the \\(x\\)-axis. *Note that in this example calculating \\(z\\) should be trivial.*

### 3)Dilations

<figure align="center">
  <img src="/server/static/img/scaling.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 3:</b> The matrix stretches the \(x\)-axis and consequently turns the square into a rectangle with twice the area.</figcaption>
</figure>
Intuitively a dilation operation is just an operation that scales vectors along one or more directions. Let's consider a matrix, \\( \mathbf{M}\_{y}^{\mu} \in \mathbf{R}^{n \times n} \\), referred to as the dilator, that scales vectors along a particular direction \\(y \in \mathbf{R}^n\\) by a factor \\(\mu \in \mathbf{R} \\). Then we can explicitly write \\( \mathbf{M}\_{y}^{\mu} \\) as,

\\[
    \mathbf{M}\_{y}^{\mu} = \mathbf{I} + (\mu - 1) \mathbf{P}_{y}
\\]
We can say based on this form of \\( \mathbf{M}\_{y}^{\mu} \\), that the dilator expands when \\(\lvert \mu \rvert > 1\\) or compresses when \\(\lvert \mu \rvert< 1\\).

**Exercise:** You should verify that if you choose \\(y = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\) and \\(\mu = 2\\), that you get the expected matrix that corresponds to scaling along the \\(x\\)-axis by \\(2\\).


### 4)Shears

<figure align="center">
  <img src="/server/static/img/shear.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 4:</b> The matrix is performing the classic example of shearing the square</figcaption>
</figure>

Shearing is a little more difficult so first we shall define the matrix \\( \mathbf{S}_{s, t}^{\mu} \in \mathbf{R}^{n \times n}\\), as follows

\\[
    \mathbf{S}_{s, t}^{\mu} = \mathbf{I} + \mu st^T
\\]

Let \\(x, t \in \mathbf{R}^n\\) be given vectors where \\(x\\) is the input vector we want to shear. Consider the line( or plane) consisting of vectors perpendicular to \\(t\\) and choose \\(s \in \mathbf{R}^n\\) to be a vector in this line(or plane) perpendicular to \\(t\\). Shift this line(or plane) perpendicular to \\(t\\) until it intersects \\(x\\). Now add a multiple of \\(s\\) to \\(x\\) that is proportional to both \\(\mu \in \mathbf{R}\\) and the distance between the shifted line(or plane) and the one through the origin. This is more complicated in nature although does capture the notion of shearing. *Highly Recommended: Draw pictures and examples*

A helpful quote from Kahan's notes[^1], 
> A good way to visualize the effect of an elementary shear is to imagine a deck of playing cards stacked straight so that the stack’s sides look like rectangles. Shearing the deck slides the cards, keeping their respective edges parallel, in such a way that the stack’s sides remain
parallelograms. The bottom card stays fixed in the plane ...

In our notation the bottom card that remains fixed corresponds to \\(s\\).

**Exercise:** You should verify that if you choose, \\(\mu = 1, s = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\), and \\(t = \begin{bmatrix} 0 \\\\ 1 \end{bmatrix}\\) that you get the shearing matrix \\(\mathbf{S}_{s, t}^{\mu} = \begin{bmatrix}1 & 1 \\\\ 0 & 1 \end{bmatrix}\\).


### 5)Important Aside: Gaussian elimination

Gaussian elimination, in my experience, was something purely algebraic without much geometric intuition. However with the above transformations we can fully rephrase the steps of Gaussian elimination geometrically. Note in Gaussian elimination we are allowed three operations.
#### Gaussian elimination operations
<ol>
    <li>Swap two rows</li>
    <li>Multiply a row by a non-zero constant</li>
    <li>Add a multiple of one row to another</li>
</ol>

Now with our operations above we can state these operations in geometric terms,

#### Gaussian elimination operations(geometric equivalent) 
<ol>
    <li>Reflecting over appropriate choice of hyperplane</li>
    <li>Scaling(or dilations) over appropriate choice of scaling factor and direction</li>
    <li>Shearing operation with appropriate choice of shear direction and multiple</li>
</ol>

What this means is that you can write any one of the row reduction operations that you are familiar with as one of the three types of matrices listed above. Try a couple examples in the \\( 2 \times 2 \\) case for clarity. 

The punchline of this is that we can now say any invertible matrix is equivalent to a product of reflections, non-zero scaling, and shearing!

### 6)Rotations

<figure align="center">
  <img src="/server/static/img/rotation.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 5:</b> The matrix is rotating the square by \(\frac{\pi}{4}\)</figcaption>
</figure>

Rotations are another important matrix operation, although are not as easily to write down as the above operations. In higher dimensions, people generally call a matrix \\(\mathbf{A} \in \mathbf{R}^{n \times n} \\) satisfying,
\\[
    \langle x, x \rangle = \langle \mathbf{A}x , \mathbf{A}x \rangle
\\]
an isometry. The matrix \\(\mathbf{A}\\) will have orthonormal columns if and only if it is an isometry. As far as terminology if \\(\mathbf{A}\\) is an isometry then it must have \\(\text{det}\mathbf{A} = \pm 1 \\). If the determinant is \\(+1\\) then in higher dimensions this is referred to as a proper rotation, and if the determinant is \\(-1\\) then it is called a reflection. This generalizes what occurs in 2D and 3D.

[^1]: This note is largely inspired by a [note](https://people.eecs.berkeley.edu/~wkahan/MathH110/geo.pdf) written by UC Berkeley professor William Kahan who actually won the Turing Award! Also, we have some notation and terminology differences from Kahan's note so be careful if cross-referencing.
[^2]: This property is sometimes referred to as **idempotent**
[^3]: In other contexts you will see this matrix referred to as an **elementary orthogonal reflection**, or **Householder reflection**.
[^4]: In one dimension we can reflect over a dimension, in two dimensions we reflect over a plane, and in \\(n\\) dimensions we reflect over a surface of dimension \\(n-1\\) that is often referred to as a **hyperplane**. Critically a hyperplane is characterized by the vector normal to it. Essentially what is referred to as \\(z\\) is usually given.

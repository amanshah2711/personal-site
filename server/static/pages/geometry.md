title: Geometry of Linear Transformations
subtitle: This note is simply meant to give examples about important operations that can be done via linear transformations
date: 2022-04-06

### Types of Transformations 
<ol>
    <li>Projections</li>
    <li>Reflections</li>
    <li>Scaling(or Dilations)</li>
    <li>Shearing</li>
    <li>Important aside: Gaussian Elimination</li>
    <li>Rotations</li>
</ol>

### 1)Projections

<figure align="center">
  <img src="/server/static/img/projection_geo.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 1:</b> The matrix is projecting the square onto the \\(x\\)-axis.</figcaption>
</figure>

The important thing to understand for this discussion is projections onto a 1D subspace(a line through the origin). This is discussed in sufficient depth [here](/pages/projections). This is the building block of other transformations so please do read it closely. The essential takeaway from this should be given \\(x,y \in \mathbf{R}^n\\) then we can say the projection of \\(x\\) onto the span of \\(y\\) is some vector \\(\beta \in \mathbf{R}^n \\) of the form,

\\[
    \beta = P_y(x)\frac{y}{\lVert y \rVert} = \frac{yy^T}{\lVert y \rVert^2} x
\\]

For convenience we will define the following matrix,

\\[
    \mathbf{P}_{y} = \frac{yy^T}{\lVert y \rVert^2}
\\]

**Exercise:**You should verify that if you choose \\(y = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\), that you get the expected matrix that corresponds to projecting onto the \\(x\\)-axis.


### 2)Reflections

<figure align="center">
  <img src="/server/static/img/reflection.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 2:</b> The matrix is reflecting the square around the \\(x\\)-axis</figcaption>
</figure>

Let's consider a matrix, \\(\mathbf{W}_{y}\\),[^2] that reflects vectors over a particular direction \\(y\\). If we define \\(z\\) as a vector orthogonal to \\(y\\), we can explicity write \\(\mathbf{W}\_{y}\\) as follows,

\\[
   \mathbf{W}\_{y} = I - 2 \mathbf{P}_{z} 
\\]

**Exercise:** You should verify that if you choose \\(y = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\), that you get the expected matrix that corresponds to reflecting across the \\(x\\)-axis. *Note that in this example calculating \\(z\\) should be trivial.*

### 3)Scaling(or Dilations)

<figure align="center">
  <img src="/server/static/img/scaling.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 3:</b> The matrix is having its area doubled because it is stretched to a rectangle on the \\(x\\)-axis.</figcaption>
</figure>
Let's consider a matrix, \\( \mathbf{M}\_{y}^{\mu} \\), that scales vectors along a particular direction \\(y\\)[^3] by a factor \\(\mu\\). Then we can explicitly write \\( \mathbf{M}\_{y}^{\mu} \\) as,

\\[
    \mathbf{M}\_{y}^{\mu} = \mathbf{I} + (\mu - 1) \mathbf{P}_{y}
\\]

**Exercise:** You should verify that if you choose \\(y = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\) and \\(\mu = 2\\), that you get the expected matrix that corresponds to scaling along the \\(x\\)-axis by \\(2\\).


### 4)Shearing

<figure align="center">
  <img src="/server/static/img/shear.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 4:</b> The matrix is performing the classic example of shearing the square.</figcaption>
</figure>

Shearing is a little more difficult so first we shall define the matrix \\( \mathbf{S}_{s, t}^{\mu} \\), as follows

\\[
    \mathbf{S}_{s, t}^{\mu} = \mathbf{I} + \mu st^T
\\]

Let \\(x, t \in mathbf{R}^n\\) be a given vector where \\(x\\) is the input vector we want to shear. Consider the line( or plane) consisting of vectors perpendicular to \\(t\\) and choose \\(s \in \mathbf{R}^n\\) to be a vector in this line(or plane) perpendicular to \\(t\\). Shift this line(or plane) perpendicular to \\(t\\) until it intersects \\(x\\). Now add a multiple of \\(s\\) to \\(x\\) that is proportional to both \\(\mu\\) and the distance between the shifted line(or plane) and the one through the origin. This is more complicated in nature although does capture the notion of shearing. *Highly Recommended: Draw pictures and examples*

**Exercise:** You should verify that if you choose, \\(\mu = 1, s = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix},\\), and \\(t = \begin{bmatrix} 0 \\\\ 1 \end{bmatrix}\\) that you get the shearing matrix \\(\mathbf{S}_{s, t}^{\mu} = \begin{bmatrix}1 & 1 \\\\ 0 & 1 \end{bmatrix}\\).


### 5)Important Aside: Gaussian Elimination
### 6)Rotations

<figure align="center">
  <img src="/server/static/img/rotation.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 4:</b> The square is doubling in area after each matrix is applied.</figcaption>
</figure>

[^1]: This note is largely inspired by a [note](https://people.eecs.berkeley.edu/~wkahan/MathH110/geo.pdf) written by UC Berkeley professor William Kahan who actually won the Turing Award! Also, we have some notation and terminology differences from Kahan's note so be careful if cross-referencing.
[^2]: In other contexts you will see this matrix referred to as an **elementary orthogonal reflection**, or **Householder reflection**.
[^3]: In one dimension we can reflect over a dimension, in two dimensions we reflect over a plane, and in \\(n\\) dimensions we reflect over a surface of dimension \\(n-1\\) that is often referred to as a **hyperplane**. Critically a hyperplane is characterized by the vector normal to it. Essentially what is referred to as \\(z\\) is usually given.

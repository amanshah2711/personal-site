title: Geometry of Linear Transformations
subtitle: This note is simply meant to give examples about important operations that can be done via linear transformations
date: 2022-04-06

### Types of Transformations 
<ol>
    <li>Scaling(or Dilations)</li>
    <li>Shearing</li>
    <li>Projections</li>
    <li>Important aside: Gaussian Elimination</li>
    <li>Rotations</li>
    <li>Reflections</li>
</ol>

### 1)Projections

<figure align="center">
  <img src="/server/static/img/projection_geo.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 1:</b> The square is doubling in area after each matrix is applied.</figcaption>
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
  <figcaption> <b>Figure 2:</b> The square is doubling in area after each matrix is applied.</figcaption>
</figure>

Let's consider a matrix, \\(\mathbf{W}_{y}\\) that reflects vectors over a particular direction \\(y\\). If we define \\(z\\) as a vector orthogonal to \\(y\\), we can explicity write \\(\mathbf{W}\_{y}\\) as follows,

\\[
   \mathbf{W}\_{y} = I - 2 \mathbf{P}_{z} 
\\]

**Exercise:** You should verify that if you choose \\(y = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\), that you get the expected matrix that corresponds to reflecting across the \\(x\\)-axis. *Note that in this example calculating \\(z\\) should be trivial.*

### 3)Scaling(or Dilations)

<figure align="center">
  <img src="/server/static/img/scaling.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 1:</b> The square is doubling in area after each matrix is applied.</figcaption>
</figure>
Let's consider a matrix, \\( \mathbf{M}\_{y}^{\mu} \\), that scales vectors along a particular direction \\(y\\) by a factor \\(\mu\\). Then we can explicitly write \\( \mathbf{M}\_{y}^{\mu} \\) as,

\\[
    \mathbf{M}\_{y}^{\mu} = \mathbf{I} + (\mu - 1) \mathbf{P}_{y}
\\]

**Exercise:** You should verify that if you choose \\(y = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix}\\) and \\(\mu = 2\\), that you get the expected matrix that corresponds to scaling along the \\(x\\)-axis by \\(2\\).


### 4)Shearing

<figure align="center">
  <img src="/server/static/img/shear.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 2:</b> The square is doubling in area after each matrix is applied.</figcaption>
</figure>


### 5)Rotations

<figure align="center">
  <img src="/server/static/img/rotation.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 4:</b> The square is doubling in area after each matrix is applied.</figcaption>
</figure>


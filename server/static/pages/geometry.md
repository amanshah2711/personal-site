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


### 2)Reflections

<figure align="center">
  <img src="/server/static/img/reflection.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 2:</b> The square is doubling in area after each matrix is applied.</figcaption>
</figure>

Let's reflect a vector \\(x\\) across a particular direction \\(y\\) and call the resultant vector \\(\beta\\). Then if we define \\(z\\) as the vector orthogonal to \\(y\\), we can state the following,

\\[
   \beta = x - 2P_{z}(x)\frac{z}{\lVert z \rVert} = \left(I - 2 \frac{z z^T}{\lVert z \rVert^2} \right) x
\\]


### 3)Scaling(or Dilations)

<figure align="center">
  <img src="/server/static/img/scaling.png" alt=":(" width="600" height="300"/>
  <figcaption> <b>Figure 1:</b> The square is doubling in area after each matrix is applied.</figcaption>
</figure>
Consider wanting to scale along a particular direction \\(y\\). Then for any non-zero scalar \\(\mu\\) we define,

\\[
    M(\mu)x = x + (\mu - 1)P_{y}(x)\frac{y}{\lVert y \rVert}
\\]

In other words we are defining the matrix \\(S(\mu)\\) that is dependent on both the scale factor \\(\mu\\) and the direction \\(y\\). We can explicitly write this matrix as,

\\[
    M(\mu) = I - (\mu - 1)\frac{yy^T}{\lVert y \rVert^2}
\\]

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


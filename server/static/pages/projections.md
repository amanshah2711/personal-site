title: Projections
subtitle: We explore understand projections onto vector spaces of dimension one.
date: 2022-04-05
author: Aman Shah

### Outline
<ol>
    <li>Convert the geometric projection problem to a mathematical problem</li>
    <li>Show that the geometry of the problem implies it is linear</li>
    <li>Use linearity to determine the projection precisely</li>
    <li>Bonus Content</li>
    <li>Connection to Gram-Schmidt</li>
    <li>Connection to Least-Squares</li>
</ol>

### 1) Problem Formulation

Given \\( r, c, z \in \mathbf{R}^n \\) such that \\(r^Tc \neq 0\\), we are interested in the problem of projecting \\(z\\) onto \\(c\\) along hyperplanes perpendicular to \\(r\\).  
<figure align="center">
  <img src="/server/static/img/setup.png" alt=":(" width="600" height="600"/>
  <figcaption> <b>Figure 1:</b> Illustration of projecting \( x \) onto \( span \{y\} \)</figcaption>
</figure>

\\(r^Tx = 0\\) defines a hyperplane through the origin and \\(r^Tx = constant\\) define hyperplanes parallel to the one through the origin. \\(z\\) lies in one of these hyperplanes and this hyperplane intersects \\(span\\{c\\} \\). Imagine sliding \\(z\\) between the line segment starting at \\(z \\) and the point on the hyperplane that intersects \\(span\\{c\\} \\). The point at which we stop sliding is \\(\lambda c \\) for appropriate choice of \\(\lambda\\). To determine this \\(\lambda\\) we exploit the crucial fact that both endpoints of the segment lie on the hyperplane. The mathematical implication is,
\\[
    r^Tz = r^T(\lambda c) \\\\
    \lambda = \frac{r^Tz}{r^Tc}
\\]

Thus we define the projection of \\(z\\) onto \\(span\\{c\\} \\), along hyperplanes perpendicular to \\(r\\) as,

\\[
    \mathbf{P}z = \frac{cr^T}{r^Tc}z
\\]

Note these projections are not the typical "projections" where the line segment connecting \\(z\\) to \\(\mathbf{P}z\\) forms a right angle with \\(span\\{c\\} \\). Although if \\(r\\) is a multiple of \\(c\\) then our projection is an orthogonal projection.

### 4) Bonus Content

Looking at [Figure 1](#1-problem-formulation), we may solve this problem in the way we would in high school. That is we could say that from basic trigonometry that,
\\[
    \beta^{*} = \lVert x \rVert \cos(\theta) \frac{y}{\lVert y \rVert} \\\\
\\]
where \\(\theta\\) is the angle between the vectors \\(x\\) and \\(y\\). Using the result from [Section 3](#3-determine--pycdot-precisely) we have,

\\[
    \begin{align}
    \beta^* =& \lVert x \rVert \cos(\theta) \frac{y}{\lVert y \rVert}  \\\\
            =&  \frac{y^Tx}{\Vert y \rVert^2} y \\\\
    \implies& \langle x , y \rangle = y^T x = \lVert x \rVert \lVert y \rVert \cos(\theta)
    \end{align}
\\]
This formula is not directly useful in the context of EECS16B, although it may provide some further intuition in what the Euclidean inner product is.

### 5) Connection to Gram-Schmidt

Consider a set of linearly independent vectors, \\( V = \\{ v_{i} \\}\_{i=1}^{m} \\) where \\(v_i \in \mathbf{R}^n\\). Let's say we want to find a set of orthonormal vectors, \\( U = \\{ u_i \\}\_{i=1}^{m} \\) where \\(u_i \in \mathbf{R}^n\\) that has the property that \\(span U = span V\\). *Gram-Schmidt* is a process that creates such a \\(U\\) by utilizing projections. Specifically in our notation we can write,

\\[
    \begin{align}
        \tilde{u_1} =& v_1 \\\\
        \tilde{u_2} =& v_2 - P_{ \tilde{u_1} }(v_2)\frac{\tilde{u_1}}{\lVert \tilde{u_1} \rVert} \\\\
        \tilde{u_3} =& v_3 - P_{ \tilde{u_1} }(v_3) \frac{\tilde{u_1}}{\lVert \tilde{u_1} \rVert} - P_{ \tilde{u_2} }(v_3) \frac{\tilde{u_2}}{\lVert \tilde{u_2} \rVert}  \\\\
        \vdots&
    \end{align}
\\]

Then from here we simply say that \\(u_i = \frac{\tilde{u_i}}{\lVert \tilde{u_i} \rVert}  \\) and we are done. The simplification to get to the usual presentation of Gram-Schmidt is to realize that \\( P_{ \tilde{u_i} } (\cdot ) = \langle u_i , \cdot \rangle \\).

### 6) Connection to Overdetermined Least-Squares

We are currently starting with the following optimization problem determined in Section 1),

\\[
    \min_{\beta \in span \\{ y\\} } \lVert \beta - x \rVert 
\\]

We can restate this problem equivalently as,

\\[
    \min_{c \in \mathbf{R} } \left\lVert \frac{y}{\lVert y \rVert}c - x \right\rVert 
\\]

This is exactly an overdetermined least-squares problem! Our matrix is the column vector \\(\mathbf{A} = \frac{y}{\lVert y \rVert}\\) which trivially has linearly independent columns(because there is only one column). In least squares notation then \\(c\\) is, 
\\[
    c = (\mathbf{A}^T\mathbf{A})^{-1}\mathbf{A}^Tx = \left(\frac{y^T}{\lVert y \rVert}\frac{y}{\lVert y \rVert}\right)^{-1} \frac{y^T}{\lVert y \rVert} x = \frac{y^T x}{\lVert y \rVert }
\\]
Thus we see the coefficient \\(c\\) given by least-squares is exactly what we had earlier. Specifically, we found \\(P_{y}(x) = c\\) which should be expected because least-squares is motivated by projection onto the column space of a matrix.
[^1]: In many engineering and physics contexts the term *superposition* is used instead of additivity. 
[^2]: This proof is fine to omit on first reading.
[^3]: This fact that a linear transformation can be identified by a vector is called *duality*. Though innocuous this is a big deal and something you should become familiar with if you are interested in optimization, linear algebra, or further calculus.
title: Projections
subtitle: We explore how to systematically understand projections onto vector spaces of dimension one.
date: 2022-04-05

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

Let's say we are given \\( x,y \in \mathbf{R}^n \\). We may be interested in the problem of projecting the vector \\(x\\) onto the vector space \\( span \\{ y \\}\\). 
<figure align="center">
  <img src="/server/static/img/projection.png" alt=":(" width="400" height="400"/>
  <figcaption> <b>Figure 1:</b> Illustration of projecting \( x \) onto \( span \{y\} \)</figcaption>
</figure>

From the picture above it is clear we are looking for the solution, \\(\beta^*\\), of the following optimization problem,

\\[
    \min_{\beta \in span \\{ y\\} } \lVert \beta - x \rVert 
\\]

To determine \\(\beta^*\\) we will first precisely define some notation. First we define the function \\( P_y : \mathbf{R}^n \to \mathbf{R} \\) as follows,

\\[
    P_y(x) := \text{the magnitude of the projection of \\(x\\) onto the line given by \\( span \\{ y \\}\\)}
\\]

This definition is meant to reflect that \\( P_y(\cdot) \\) tells us how much in the \\( y \\)-direction do we need to go to get to the projection of \\(x\\) onto \\( span \\{ y \\}\\). By this definition we then have a way to express our projection as,


\\[
    \beta^* = P_y(x)\frac{y}{\lVert y \rVert }
\\]

### 2) Show \\( P_y(\cdot) \\) is linear
While we now have a "solution" this is useless without knowing exactly what \\(P_y(\cdot)\\) is. So we use the geometry of our problem to determine several properties \\(P_y(\cdot)\\) must hold and then use those properties to explicity determine \\(P_y(\cdot)\\).

#### Property 1: Additivity[^1]

Recall that additivity means given \\(x,z \in \mathbf{R}^n \\), that \\(P_y(x+z) = P_y(x)+P_y(z)\\). The following picture is highly suggestive of the fact that \\(P_y(\cdot)\\) must be additive, and for those interested one can convert this intuition to proof[^2] as well.
<figure align="center">
  <img src="/server/static/img/additivity.png" alt=":(" width="400" height="400"/>
  <figcaption> <b>Figure 2:</b> Example of additivity of \(P_y(\cdot)\)</figcaption>
</figure>
<details style="background-color:aliceblue;padding:10px;">
<summary>Proof</summary>
\[
    \min_{\beta \in span \{ y\} } \lVert \beta - (x+z) \rVert 
\]
We can rewrite this problem as,
\[
    \min_{\beta_1, \beta_2 \in span \{ y\} } \lVert \beta_1 + \beta_2 - (x+z) \rVert 
\]
Now we know for \( \beta_1 + \beta_2 - (x+z) \) must be perpendicular to \(span\{y\}\). One way to achieve this is choose \(\beta_1\) and \(\beta_2\) to be the projections of \(x\) and \(z\) onto \(span\{y\}\), respectively. If they satisfy the property then we can rewrite the objective as \((\beta_1-x) + (\beta_2 - z)\) which must lie perpendicular to \(span\{y\}\) since both terms are perpendicular to \(span\{y\}\). Since there is only one solution to projecting on the line we then have \(P_y(x+z) = P_y(x)+P_y(z)\). \(\square\) 
</details>

#### Property 2: Homogeneity

Recall that homogeneity means given \\(x \in \mathbf{R}^n \\) and \\(\lambda \in \mathbf{R}\\), that \\(P_y(\lambda x) = \lambda P_y(x)\\). The following picture is highly suggestive of the fact that \\(P_y(\cdot)\\) must satisfy homogeneity, and for those interested one can convert this intuition to proof[^2] as well.

<figure align="center">
  <img src="/server/static/img/homogeneity.png" alt=":(" width="400" height="400"/>
  <figcaption> <b>Figure 3:</b> Example of homogeneity of \(P_y(\cdot)\) using \( \lambda = 3\) </figcaption>
</figure>

<details style="background-color:aliceblue;padding:10px;">
<summary>Proof</summary>
We aim to show that the argument that solves the following optimization problem is \(\lambda\) times the solution to original problem.
\[
    \min_{\beta \in span \{ y\} } \lVert \beta - \lambda x \rVert 
\]
We realize that we can rewrite the problem as
\[
    \min_{\beta \in span \{ y\} } \frac{1}{\lambda} \left\lVert \frac{1}{\lambda}\beta - x \right\rVert 
\]
We choose \(\rho = \frac{1}{\lambda}\beta\) and then the problem becomes
\[
    \min_{\rho \in span \{ y\} } \frac{1}{\lambda} \left\lVert \rho - x \right\rVert 
\]
Since the \(\frac{1}{\lambda}\) outside the norm is a constant it doesn't affect the minimizer so the following problem must have the same minimizer,
\[
    \min_{\rho \in span \{ y\} }  \left\lVert \rho - x \right\rVert 
\]
Now we know that \(\rho = P_y(x)\) which implies that \(\beta = \lambda P_y(x)\). \(\square\)
</details>

Now that we have determine these two properties hold, we know that \\( P_y \\) is linear, and that tells us we can represent \\(P_y(\cdot)\\) with a matrix. In particular recall, \\(P_y:\mathbf{R}^n \to \mathbf{R}\\) so our matrix representation of \\(P_y(\cdot)\\) will have shape \\(1 \times n\\). That is we can say for appropriate choices of \\( \mathbf{A} \in \mathbf{R}^{1 \times n} \\),

\\[
    P_y(x) = \mathbf{A}x
\\]

We note that since, \\(\mathbf{A} \\) only has \\(1\\) row that we can choose \\(\alpha \in \mathbf{R}^n\\) where \\(\alpha = \mathbf{A}^T\\)[^3], and write the relationship as,

\\[
    P_y(x) = \mathbf{A}x = \alpha^T x = \langle x, \alpha \rangle
\\]

### 3) Determine \\( P_y(\cdot)\\) precisely
To complete our problem we need to exactly determine \\(\alpha\\) and we do so using the fact that \\(P_y(y) = \lVert y \rVert \\). Simply writing out our definitions we get,

\\[
    \begin{align}
    P_y(y) =& \lVert y \rVert  \\\\
           =&  \left( \sum_{i=1}^{n} y_i^2 \right)^{\frac{1}{2}}\\\\
           =& \sum_{i=1}^{n} \alpha_i y_i \\\\
           \implies& \alpha_i = \frac{y_i}{\lVert y \rVert}
    \end{align}
\\]

Thus we conclude
\\[
    P_y(x) = \frac{y^T x}{\lVert y \rVert } \\\\
    \beta^* = \frac{y^Tx}{\Vert y \rVert^2} y = \frac{yy^T}{\Vert y \rVert^2} x
\\]
 
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

### 6) Connection 

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